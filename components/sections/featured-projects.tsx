import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="group block animate-[fade-up_0.6s_ease-out_both]"
          style={{ animationDelay: `${index * 0.08}s` }}
        >
          <Card hover className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-medium text-text transition-colors duration-150 group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-1 max-w-xl text-sm text-text-muted">{project.tagline}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-accent">
              View case study
              <ArrowRight size={14} aria-hidden="true" />
            </span>
          </Card>
        </Link>
      ))}
    </div>
  );
}
