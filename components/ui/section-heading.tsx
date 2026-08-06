import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/**
 * Always renders an <h2> — the page H1 lives in the Hero headline or a
 * project's case-study title, never here.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 animate-[fade-up_0.6s_ease-out_both] ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-sm font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-medium text-text sm:text-4xl">{title}</h2>
      {subtitle && <p className="max-w-2xl text-base text-text-muted">{subtitle}</p>}
    </div>
  );
}
