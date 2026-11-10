import { appendFile, mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { getPage } from "./monitor-http.mjs";

// Checks deployed output, so the same check works locally and after a release.
const baseUrl = new URL(process.argv[2] ?? "https://abdulrauf.dev");
const canonicalOrigin = "https://abdulrauf.dev";
const report = { checkedAt: new Date().toISOString(), baseUrl: baseUrl.origin, pages: [], failures: [] };
const groups = ["availability", "sitemap", "metadata", "schema"];
const selectedGroup = process.argv[4] ?? "all";
if (selectedGroup !== "all" && !groups.includes(selectedGroup)) throw new Error(`Unknown check: ${selectedGroup}`);
let currentGroup = "sitemap";
report.groups = Object.fromEntries(groups.filter((group) => selectedGroup === "all" || group === selectedGroup).map((group) => [group, { checks: 0, failures: [] }]));
const languages = new Set(["JavaScript", "TypeScript", "Python", "Dart", "HTML", "CSS", "SQL", "C", "C++", "C#", "Java", "Kotlin", "Swift", "Ruby", "Objective-C"]);
const decode = (text) => text.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'");
const attribute = (tag, name) => decode(tag.match(new RegExp(`\\b${name}="([^"]*)"`, "i"))?.[1] ?? "");
const check = (condition, message) => {
  const group = report.groups[currentGroup];
  if (!group) return;
  group.checks++;
  if (!condition) { group.failures.push(message); report.failures.push(message); }
};
const get = async (pathname) => getPage(new URL(pathname, baseUrl));

try {
const sitemapResponse = await get("/sitemap.xml");
check(sitemapResponse.ok, `Sitemap HTTP ${sitemapResponse.status}`);
const sitemap = await sitemapResponse.text();
check(/<urlset\b[^>]*xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9"/.test(sitemap) && /<\/urlset>/.test(sitemap), "Sitemap is not a sitemap URL set");
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(decode(match[1])).pathname);
for (const match of sitemap.matchAll(/<loc>(.*?)<\/loc>/g)) {
  check(new URL(decode(match[1])).origin === canonicalOrigin, `Sitemap contains a foreign or insecure URL: ${match[1]}`);
}
check(paths.length > 0, "Sitemap contains no page URLs");
if (!paths.length || !sitemapResponse.ok) throw new Error("Cannot discover pages from the sitemap");
if (paths.length > 100) throw new Error("Sitemap exceeds this portfolio monitor's 100-page safety limit");
check(paths.includes("/"), "Sitemap omits the homepage");
check(new Set(paths).size === paths.length, "Sitemap contains duplicate paths");

for (const path of paths) {
  let response;
  try { response = await get(path); } catch (error) {
    report.failures.push(error.message);
    for (const group of Object.values(report.groups)) group.failures.push(error.message);
    report.pages.push({ path, error: error.message });
    continue;
  }
  const html = await response.text();
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? "");
  const canonicalTag = [...html.matchAll(/<link\b[^>]*>/gi)].map((match) => match[0]).find((tag) => attribute(tag, "rel") === "canonical") ?? "";
  const canonical = attribute(canonicalTag, "href");
  const h1Count = [...html.matchAll(/<h1\b/gi)].length;
  const entities = [];
  currentGroup = "schema";
  for (const match of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const json = JSON.parse(match[1]);
      const nodes = json["@graph"] ?? [json];
      check(Boolean(json["@context"]), `${path}: JSON-LD is missing @context`);
      entities.push(...nodes);
    } catch (error) {
      check(false, `${path}: invalid JSON-LD: ${error.message}`);
    }
  }

  currentGroup = "availability";
  check(response.status === 200, `${path}: HTTP ${response.status}`);
  currentGroup = "sitemap";
  check(response.status === 200, `${path}: sitemap URL returned HTTP ${response.status}`);
  if (path === "/") {
    for (const match of html.matchAll(/href="(\/projects\/[^"?#]+)"/g)) check(paths.includes(decode(match[1])), `Linked project missing from sitemap: ${match[1]}`);
  }
  currentGroup = "metadata";
  check(title.length > 0, `${path}: missing title`);
  check(canonical.replace(/\/$/, "") === `${canonicalOrigin}${path}`.replace(/\/$/, ""), `${path}: unexpected canonical ${canonical}`);
  check(h1Count === 1, `${path}: expected one H1, found ${h1Count}`);
  const robotsTags = [...html.matchAll(/<meta\b[^>]*>/gi)].map((match) => match[0]).filter((tag) => /^(robots|googlebot)$/i.test(attribute(tag, "name")));
  check(!robotsTags.some((tag) => /noindex/i.test(attribute(tag, "content"))) && !/noindex/i.test(response.headers.get("x-robots-tag") ?? ""), `${path}: noindex found`);
  check(!/92%\+/.test(html), `${path}: unqualified accuracy claim remains`);
  currentGroup = "schema";
  check(entities.some((entity) => entity?.["@type"] === "Person" && entity["@id"] === `${canonicalOrigin}/#person`), `${path}: missing stable Person identity`);
  check(entities.some((entity) => entity["@type"] === "WebSite"), `${path}: missing WebSite entity`);

  const software = entities.filter((entity) => entity["@type"] === "SoftwareSourceCode");
  if (path.startsWith("/projects/")) {
    check(software.length === 1, `${path}: expected one software entity`);
    for (const entity of software) {
      check(Array.isArray(entity.programmingLanguage) && entity.programmingLanguage.length > 0 && entity.programmingLanguage.every((language) => languages.has(language)), `${path}: programmingLanguage contains a nonlanguage or is missing`);
      check(entity.author?.["@id"] === `${canonicalOrigin}/#person`, `${path}: software author is disconnected`);
      check(entity.mainEntityOfPage === canonical, `${path}: software is not linked to its case study`);
    }
    currentGroup = "metadata";
    for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
      check(Boolean(attribute(match[0], "srcSet")) && Boolean(attribute(match[0], "sizes")), `${path}: screenshot lacks responsive delivery`);
      check(Boolean(attribute(match[0], "width")) && Boolean(attribute(match[0], "height")), `${path}: screenshot lacks dimensions`);
    }
  } else if (path === "/") {
    currentGroup = "metadata";
    check(/Full Stack Web Developer/.test(title) && /React.*Next\.js/.test(title), "Homepage title omits the role or specialization");
    const portrait = html.match(/<img\b[^>]*>/i)?.[0] ?? "";
    check(attribute(portrait, "loading") === "eager" && attribute(portrait, "fetchPriority") === "high", "Hero image is not eager/high priority");
  }

  report.pages.push({ path, status: response.status, title, canonical, h1Count, schemaTypes: entities.map((entity) => entity["@type"]), programmingLanguages: software.flatMap((entity) => entity.programmingLanguage ?? []), cacheControl: response.headers.get("cache-control") });
}

const notFound = await get("/__seo_check_nonexistent_page__");
currentGroup = "availability";
check(notFound.status === 404, `Unknown path returned ${notFound.status}, expected 404`);
const robots = await get("/robots.txt");
check(robots.status === 200, `robots.txt returned HTTP ${robots.status}`);
currentGroup = "sitemap";
check((await robots.text()).includes(`${canonicalOrigin}/sitemap.xml`), "robots.txt does not declare the production sitemap");
} catch (error) {
  report.failures.push(error.message);
  for (const group of Object.values(report.groups)) group.failures.push(error.message);
}
for (const group of Object.values(report.groups)) group.passed = group.checks > 0 && group.failures.length === 0;
if (Object.values(report.groups).some((group) => !group.passed) && report.failures.length === 0) report.failures.push("No assertions executed for a selected check");
report.passed = report.failures.length === 0;
if (process.argv[3]) {
  await mkdir(dirname(process.argv[3]), { recursive: true });
  await writeFile(process.argv[3], JSON.stringify(report, null, 2) + "\n");
}
console.log(JSON.stringify(report, null, 2));
const summary = ["## Weekly production monitoring", "", `Target: ${baseUrl.origin}`, "", "| Check | Result | Assertions |", "|---|---|---:|", ...Object.entries(report.groups).map(([name, group]) => `| ${name} | ${group.passed ? "PASS" : "FAIL"} | ${group.checks} |`), "", ...report.failures.map((failure) => `- ${failure.replace(/[\r\n]/g, " ")}`), ""].join("\n");
if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY, summary);
process.exitCode = report.passed ? 0 : 1;
