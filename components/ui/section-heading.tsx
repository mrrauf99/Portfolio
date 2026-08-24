import type { ReactNode } from "react";
import { Divider } from "@/components/ui/divider";
import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/**
 * Always renders an <h2> — the page H1 lives in the Hero headline or a
 * project's case-study title, never here. The accent mark above the title
 * signals a new section without a text eyebrow competing with the heading.
 */
export function SectionHeading({ title, subtitle, align = "left", className = "" }: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <Reveal y={16} duration={0.5} className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      <Divider variant="accent" />
      <h2 className="text-3xl font-medium text-text sm:text-4xl">{title}</h2>
      {subtitle && <p className="max-w-2xl text-base text-text-muted">{subtitle}</p>}
    </Reveal>
  );
}
