import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExperienceSummary } from "@/components/sections/experience-summary";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-16 md:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading title="About me" subtitle={<ExperienceSummary initialYear={new Date().getFullYear()} />} />
          <div className="max-w-prose space-y-5 leading-relaxed text-text-muted">
            <p>I&apos;m Abdul Rauf, a full stack engineer and Computer Science student at UET Lahore. I build web applications for publishers, universities, and clients, while exploring mobile development and machine learning.</p>
            <p>I enjoy taking features from an idea to production, working across the database, API, and interface. I care about building reliable software and writing clear, maintainable code that the next developer can understand and build on.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
