import { AdditionalProjects } from "@/components/sections/additional-projects";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Featured work"
          subtitle="Three projects, from the problem to what I built and why."
        />

        <div className="mt-12">
          <FeaturedProjects />
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-medium text-text">More projects</h3>
          <p className="mt-2 max-w-2xl text-sm text-text-muted">
            Five more case studies across web development, mobile apps, machine learning, and security.
          </p>
          <div className="mt-8">
            <AdditionalProjects />
          </div>
        </div>
      </Container>
    </section>
  );
}
