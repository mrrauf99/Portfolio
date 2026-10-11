import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { additionalProjects, projects } from "@/data/projects";

const STATUS = {live: "Live", archived: "Archived", "in-progress": "In progress"};

export function AdditionalProjects() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.filter((project) => !project.featured).map((project) => (
          <Card key={project.slug} className="flex flex-col p-5 sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="text-xl font-medium text-text"><Link href={`/projects/${project.slug}`} className="hover:text-accent">{project.title}</Link></h4>
              <span className="text-xs text-text-muted">{STATUS[project.status]}</span>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">{project.tagline}</p>
            <ul aria-label={`${project.title} technologies`} className="mt-4 flex flex-wrap gap-1.5">{project.techStack.map((tech) => <li key={tech}><Badge>{tech}</Badge></li>)}</ul>
            <div className="mt-4 flex flex-wrap gap-x-5">
              <Link href={`/projects/${project.slug}`} aria-label={`Read ${project.title} case study`} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline">Case study <ArrowRight size={14} aria-hidden="true" /></Link>
              {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} live site (opens in a new tab)`} className="inline-flex min-h-11 items-center text-sm text-text-muted underline-offset-4 hover:text-accent hover:underline">Live site</a>}
              {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source on GitHub (opens in a new tab)`} className="inline-flex min-h-11 items-center text-sm text-text-muted underline-offset-4 hover:text-accent hover:underline">Source</a>}
            </div>
          </Card>
        ))}
      </div>
      <details className="mt-8 border-y border-border">
        <summary className="cursor-pointer py-5 font-medium text-text transition-colors hover:text-accent">Earlier experiments <span className="font-normal text-text-muted">({additionalProjects.length})</span></summary>
        <ul className="divide-y divide-border pb-4">
          {additionalProjects.map((project) => (
            <li key={project.slug} className="py-4">
              <div className="flex flex-wrap items-center justify-between gap-x-6">
                <h4 className="text-base font-medium text-text">{project.title}</h4>
                <div className="flex gap-5 text-sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source on GitHub (opens in a new tab)`} className="inline-flex min-h-11 items-center text-accent underline-offset-4 hover:underline">Source</a>
                  {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} demo (opens in a new tab)`} className="inline-flex min-h-11 items-center text-accent underline-offset-4 hover:underline">Live demo</a>}
                </div>
              </div>
              <p className="text-sm text-text-muted">{project.description}</p>
              <p className="mt-2 text-xs text-text-muted">{project.techStack.join(" · ")}</p>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
