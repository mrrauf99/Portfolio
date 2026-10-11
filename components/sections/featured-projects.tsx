import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <div className="space-y-8">
      {projects.filter((project) => project.featured).map((project) => {
        const evidence = project.featured!;
        return (
          <article key={project.slug} aria-labelledby={`featured-${project.slug}`} className="rounded-md border border-border bg-bg-raised">
            <div className="p-5 sm:p-8">
              <h3 id={`featured-${project.slug}`} className="text-2xl font-medium text-text sm:text-3xl">
                <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-accent">{project.title}</Link>
              </h3>
              <p className="mt-2 text-sm text-text-muted">{project.role} <span aria-hidden="true">·</span> {project.year}</p>
              <dl className="mt-6 grid gap-6 text-sm leading-relaxed md:grid-cols-2">
                {[["Problem", evidence.problem], ["My contribution", evidence.contribution], ["Technical decision", evidence.decision], ["Result", evidence.result]].map(([label, detail]) => (
                  <div key={label}>
                    <dt className="font-medium text-text">{label}</dt>
                    <dd className="mt-1 text-text-muted">{detail}</dd>
                  </div>
                ))}
              </dl>
              <ul aria-label={`${project.title} technologies`} className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => <li key={tech}><Badge>{tech}</Badge></li>)}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={`/projects/${project.slug}`} aria-label={`Read ${project.title} case study`}>Case study <ArrowRight size={16} aria-hidden="true" /></Button>
                {project.links.live && <Button variant="outline" href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} live site (opens in a new tab)`}>Live site <ExternalLink size={14} aria-hidden="true" /></Button>}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
