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
    <section id="about" className="scroll-mt-20 border-t border-border py-24">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="Comfortable across the whole stack, from database to UI."
          subtitle="Dedicated developer with 1+ year building production software across the full stack."
        />

        <div className="mt-12 grid items-start gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-text">
              Building with <span className="text-accent">depth</span> and precision
            </h3>

            <p className="leading-relaxed text-text-muted">
              I&apos;m a dedicated Full Stack Developer with{" "}
              <span className="font-medium text-text">1+ year</span> of building
              production-ready software, spanning from multi-role publishing platforms to
              real-time detection systems. I work across the entire stack so I can own
              features end-to-end.
            </p>

            <p className="leading-relaxed text-text-muted">
              My stack centres on <span className="font-medium text-text">React</span>,{" "}
              <span className="font-medium text-text">Node.js &amp; Express</span>, and
              databases like <span className="font-medium text-text">PostgreSQL &amp; MongoDB</span>.
              I&apos;ve also shipped a Flutter mobile app with on-device ML and a scikit-learn
              disease prediction model.
            </p>

            <p className="leading-relaxed text-text-muted">
              I care about clean architecture, readable code, and shipping things that
              actually work in production, not just on localhost.
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
