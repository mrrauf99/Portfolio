import dynamic from "next/dynamic";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { stats } from "@/data/experience";

const AboutHighlights = dynamic(() =>
  import("@/components/sections/about-highlights").then((mod) => mod.AboutHighlights)
);
const AboutStats = dynamic(() =>
  import("@/components/sections/about-stats").then((mod) => mod.AboutStats)
);

const TAGS = ["Clean Code", "Scalable Systems", "User-Centric Design", "System Design", "Problem Solving"];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Full stack, in practice"
          subtitle="1+ year building production software across the full stack."
        />

        <div className="mt-12 grid items-start gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-text">
              Building with <span className="text-accent">depth</span> and precision
            </h3>

            <p className="leading-relaxed text-text-muted">
              Over the past{" "}
              <span className="font-medium text-text">1+ year</span>, I&apos;ve built
              production-ready software end-to-end, from multi-role publishing platforms
              to real-time detection systems. My stack centres on{" "}
              <span className="font-medium text-text">React</span>,{" "}
              <span className="font-medium text-text">Node.js &amp; Express</span>, and{" "}
              <span className="font-medium text-text">PostgreSQL &amp; MongoDB</span>, with
              some Python and scikit-learn on the side for ML experiments.
            </p>

            <p className="leading-relaxed text-text-muted">
              I like owning a feature completely rather than handing it off halfway, and
              I care about code that actually works in production, not just on localhost.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-border px-3 py-1.5 text-sm font-medium text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <AboutHighlights />
        </div>

        <div className="mt-20 border-t border-border pt-12">
          <AboutStats stats={stats} />
        </div>
      </Container>
    </section>
  );
}
