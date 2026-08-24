import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  hover?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * Hairline-bordered surface — the replacement for the old glass-card blur
 * effect. Elevation comes from a soft directional shadow in light mode and
 * a lighter raised-surface color + border in dark mode (shadows barely
 * register on a near-black background).
 */
export function Card({ children, hover = false, className, style }: CardProps) {
  return (
    <div
      style={style}
      className={cn(
        "rounded-md border border-border bg-bg-raised shadow-elevated",
        hover &&
          "transition-[box-shadow,border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-border-strong hover:shadow-raised",
        className
      )}
    >
      {children}
    </div>
  );
}
