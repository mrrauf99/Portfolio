import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "accent";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "border-border text-text-muted",
  accent: "border-accent/40 text-accent",
};

/** Minimal tag badge */
export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 text-xs font-medium tracking-wide",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
