import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { additionalProjects } from "@/data/projects";

export function AdditionalProjects() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {additionalProjects.map((project, index) => (
          <Card
            key={project.slug}
            hover
            className="flex h-full flex-col gap-3 p-5 animate-[fade-up_0.6s_ease-out_both]"
            style={{ animationDelay: `${(index % 6) * 0.06}s` }}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-sm font-medium text-text">{project.title}</h3>
              <div className="flex shrink-0 items-center gap-3">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${project.title}`}
                    className="text-text-muted transition-colors duration-150 hover:text-accent"
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                  </Link>
                )}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="text-text-muted transition-colors duration-150 hover:text-accent"
                >
                  <FaGithub size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <p className="flex-1 text-xs leading-relaxed text-text-muted">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button variant="outline" href="https://github.com/mrrauf99" target="_blank" rel="noopener noreferrer">
          <FaGithub size={16} aria-hidden="true" />
          See all repositories on GitHub
        </Button>
      </div>
    </div>
  );
}
