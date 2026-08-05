import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import type { Project } from "@/types/project";

export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.tagline,
    programmingLanguage: project.techStack,
    ...(project.links.github ? { codeRepository: project.links.github } : {}),
    ...(project.links.live ? { url: project.links.live } : {}),
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
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
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  };
}
