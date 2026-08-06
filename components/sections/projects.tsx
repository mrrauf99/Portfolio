import { AdditionalProjects } from "@/components/sections/additional-projects";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border py-24">
      <Container>
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected work"
          subtitle="A closer look at a few projects, including the problems I ran into and how I solved them."
        />

        <div className="mt-12">
          <FeaturedProjects />
        </div>

        <div className="mt-20">
          <h3 className="text-xl font-medium text-text">More things I&apos;ve built</h3>
          <p className="mt-2 max-w-2xl text-sm text-text-muted">
            A curated collection of projects spanning desktop systems, tools, and web experiments.
          </p>
          <div className="mt-8">
            <AdditionalProjects />
          </div>
        </div>
      </Container>
    </section>
  );
}
