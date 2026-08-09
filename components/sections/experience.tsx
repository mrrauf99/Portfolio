import { BookOpen, Briefcase, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border py-24">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Experience & education"
          subtitle="Real-world software development and the academic foundation behind it."
        />

        <div className="relative mt-12">
          <div className="absolute top-2 bottom-2 left-1.25 w-px bg-border" aria-hidden="true" />

          <ol className="space-y-10">
            {experiences.map((exp, index) => {
              const RoleIcon = exp.type === "Education" ? BookOpen : Briefcase;

              return (
                <li
                  key={exp.id}
                  className="relative animate-[fade-up_0.7s_ease-out_both] pl-6 sm:pl-8"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span
                    className="absolute top-2 left-0 h-2.5 w-2.5 rounded-full bg-accent"
                    aria-hidden="true"
                  />

                  <Card className="p-5 md:p-8">
                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <RoleIcon size={16} className="text-accent" aria-hidden="true" />
                          <h3 className="text-lg font-medium text-text md:text-xl">{exp.role}</h3>
                        </div>
                        <div className="mt-1 ml-6 flex flex-wrap items-center gap-2 text-sm">
                          <span className="font-medium text-accent">{exp.company}</span>
                          {exp.type !== "Education" && (
                            <>
                              <span className="text-text-muted">•</span>
                              <span className="text-text-muted">{exp.type}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 text-xs whitespace-nowrap text-text-muted">
                        <Calendar size={12} aria-hidden="true" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="mb-6 text-sm leading-relaxed text-text-muted">{exp.description}</p>

                    <ul className="mb-6 space-y-2.5" aria-label={`${exp.role} achievements`}>
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2 text-sm text-text">
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </Card>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
