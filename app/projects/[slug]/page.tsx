import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { JsonLd } from "@/components/json-ld";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/projects";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { projectJsonLd } from "@/lib/json-ld";
import type { ProjectStatus } from "@/types/project";

const STATUS_LABEL: Record<ProjectStatus, string> = {
  live: "Live",
  "in-progress": "In Progress",
  archived: "Archived",
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.tagline,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/projects/${slug}`,
      siteName: SITE_NAME,
      title: project.title,
      description: project.tagline,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-32">
      <JsonLd data={projectJsonLd(project)} />
      <Container className="max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors duration-150 hover:text-accent"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Home
        </Link>

        <div className="mt-6">
          <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
            <span>{project.year}</span>
            <span aria-hidden="true">•</span>
            <span>{project.role}</span>
            <span aria-hidden="true">•</span>
            <span>{STATUS_LABEL[project.status]}</span>
          </div>
          <h1 className="mt-3 text-4xl font-medium text-text sm:text-5xl">{project.title}</h1>
          <p className="mt-4 max-w-xl text-lg text-text-muted">{project.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.live && (
              <Button href={project.links.live} target="_blank" rel="noopener noreferrer">
                <ArrowUpRight size={16} aria-hidden="true" />
                Live demo
              </Button>
            )}
            {project.links.github && (
              <Button
                variant="outline"
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={16} aria-hidden="true" />
                Source code
              </Button>
            )}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {project.stats.map((stat) => (
            <Card key={stat.label} className="p-4 text-center">
              <div className="text-xl font-medium tabular-nums text-accent">{stat.value}</div>
              <div className="mt-1 text-xs text-text-muted">{stat.label}</div>
            </Card>
          ))}
        </div>

        <Divider className="my-12" />

        <section>
          <h2 className="text-2xl font-medium text-text">Problem</h2>
          <p className="mt-4 leading-relaxed text-text-muted">{project.problem}</p>
        </section>

        <Reveal y={16} duration={0.5} className="mt-12" as="section">
          <h2 className="text-2xl font-medium text-text">Approach</h2>
          <ul className="mt-4 space-y-3">
            {project.approach.map((step) => (
              <li key={step} className="flex items-start gap-3 leading-relaxed text-text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {step}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal y={16} duration={0.5} className="mt-12" as="section">
          <h2 className="text-2xl font-medium text-text">Key decisions</h2>
          <div className="mt-4 space-y-4">
            {project.keyDecisions.map((decision) => (
              <Card key={decision.title} className="p-5">
                <h3 className="text-sm font-medium text-text">{decision.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{decision.detail}</p>
              </Card>
            ))}
          </div>
        </Reveal>

        <Reveal y={16} duration={0.5} className="mt-12" as="section">
          <h2 className="text-2xl font-medium text-text">Tech stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="accent">
                {tech}
              </Badge>
            ))}
          </div>
        </Reveal>

        {project.outcomes && project.outcomes.length > 0 && (
          <Reveal y={16} duration={0.5} className="mt-12" as="section">
            <h2 className="text-2xl font-medium text-text">Outcomes</h2>
            <ul className="mt-4 space-y-3">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 leading-relaxed text-text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {outcome}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <Divider className="my-12" />

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-150 hover:text-accent-hover"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Back to home
        </Link>
      </Container>
    </article>
  );
}
