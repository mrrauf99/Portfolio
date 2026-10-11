import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-16 md:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading title="About me" subtitle="2+ years building software end to end." />
          <div className="max-w-prose space-y-5 leading-relaxed text-text-muted">
            <p>I&apos;m a full stack developer and Computer Science student at UET Lahore. My work spans publishing platforms, university websites, client projects, and experiments in mobile development and machine learning.</p>
            <p>I like owning a feature completely, from the database and API to the interface. I care about code that works in production and makes sense to the next person who has to maintain it.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
