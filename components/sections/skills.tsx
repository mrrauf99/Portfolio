import dynamic from "next/dynamic";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const SkillsTabs = dynamic(() =>
  import("@/components/sections/skills-tabs").then((mod) => mod.SkillsTabs)
);

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border py-24">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technical skills"
          subtitle="Technologies and tools I use to bring ideas from concept to production."
        />
        <div className="mt-12">
          <SkillsTabs />
        </div>
      </Container>
    </section>
  );
}
