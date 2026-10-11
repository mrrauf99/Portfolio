import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const CAPABILITIES = [
  {title: "Interfaces", tools: "React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS", evidence: "Frontend design and implementation in Next.js, with a vehicle catalogue and a client-side WhatsApp handoff.", slug: "mehar-motors", project: "Mehar Motors"},
  {title: "APIs & data", tools: "Node.js, Express.js, PostgreSQL, MongoDB, REST APIs, JWT", evidence: "Relational data modeling and permissions enforced at the API boundary.", slug: "article-hub", project: "Article Hub"},
  {title: "Mobile & machine learning", tools: "Flutter, Dart, TensorFlow Lite, Python, scikit-learn, Flask", evidence: "On-device camera inference and classification models exposed through APIs.", slug: "object-detection-app", project: "Object Detection App"},
  {title: "Development tools", tools: "Git, GitHub, Docker · Also: C#, .NET, C++, SQL Server, Oracle", evidence: "Version control and development tooling, alongside earlier desktop and database projects."},
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border py-16 md:py-24">
      <Container>
        <SectionHeading title="Technical overview" subtitle="The tools I use, with the work behind them." />
        <dl className="mt-10 divide-y divide-border">
          {CAPABILITIES.map((item) => (
            <div key={item.title} className="grid gap-2 py-6 first:pt-0 last:pb-0 md:grid-cols-[1fr_2fr_2fr] md:gap-8">
              <dt className="font-medium text-text">{item.title}</dt>
              <dd className="text-sm leading-relaxed text-text-muted">{item.tools}</dd>
              <dd className="text-sm leading-relaxed text-text-muted">{item.evidence} {item.slug && <Link href={`/projects/${item.slug}`} className="inline-flex min-h-11 items-center font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">See {item.project}<span className="sr-only"> case study</span></Link>}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
