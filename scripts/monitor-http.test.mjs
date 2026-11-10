import test from "node:test";
import assert from "node:assert/strict";
import { getPage } from "./monitor-http.mjs";
import { createServer } from "node:http";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

test("retries a transient server failure and reads the successful body", async () => {
  let attempts = 0;
  const page = await getPage("https://example.test", { retryDelayMs: 0, fetchImpl: async () => new Response(++attempts === 1 ? "unavailable" : "healthy", { status: attempts === 1 ? 503 : 200 }) });
  assert.equal(attempts, 2);
  assert.equal(await page.text(), "healthy");
});

test("does not retry an intentional 404", async () => {
  let attempts = 0;
  const page = await getPage("https://example.test/missing", { fetchImpl: async () => { attempts++; return new Response("missing", { status: 404 }); } });
  assert.equal(attempts, 1);
  assert.equal(page.status, 404);
});

test("bounded timeouts produce a useful failure after two attempts", async () => {
  const fetchImpl = async (_url, { signal }) => new Promise((_, reject) => {
    const timer = setTimeout(() => reject(new Error("test guard")), 100);
    signal.addEventListener("abort", () => { clearTimeout(timer); reject(signal.reason); }, { once: true });
  });
  await assert.rejects(getPage("https://example.test/slow", { timeoutMs: 5, retryDelayMs: 0, fetchImpl }), /failed after 2 attempts/);
});

test("a truncated response body is retried and cannot report a pass", async () => {
  const fetchImpl = async () => ({ text: async () => { throw new Error("truncated body"); } });
  await assert.rejects(getPage("https://example.test", { retryDelayMs: 0, fetchImpl }), /truncated body/);
});

test("an empty sitemap fails every selected group and still emits a report", async () => {
  const server = createServer((_request, response) => response.end('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>'));
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  try {
    const script = fileURLToPath(new URL("./check-seo.mjs", import.meta.url));
    await assert.rejects(promisify(execFile)(process.execPath, [script, `http://127.0.0.1:${server.address().port}`]), (error) => {
      assert.equal(error.code, 1);
      const report = JSON.parse(error.stdout);
      assert.equal(report.passed, false);
      assert.equal(Object.keys(report.groups).length, 4);
      assert.ok(Object.values(report.groups).every((group) => !group.passed));
      assert.match(report.failures.join(" "), /Cannot discover pages/);
      return true;
    });
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});
