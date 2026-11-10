import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import type { Project } from "@/types/project";

export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "@id": `${SITE_URL}/projects/${project.slug}#software`,
    name: project.title,
    description: project.tagline,
    programmingLanguage: project.programmingLanguages,
    author: { "@id": `${SITE_URL}/#person` },
    mainEntityOfPage: `${SITE_URL}/projects/${project.slug}`,
    url: `${SITE_URL}/projects/${project.slug}`,
    ...(project.links.github ? { codeRepository: project.links.github } : {}),
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: SITE_NAME,
    url: SITE_URL,
    jobTitle: "Full Stack Web Developer",
    sameAs: ["https://github.com/mrrauf99", "https://www.linkedin.com/in/abdulrauf-dev/"],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#person` },
  };
}
