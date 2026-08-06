import { cn } from "@/lib/utils";

type DividerProps = {
  variant?: "hairline" | "accent";
  className?: string;
};

/**
 * Structural hairline rule — the replacement for glow/orb decoration.
 * `accent` renders a short, heavier accent-colored segment used to mark
 * section starts or pull quotes rather than a full-width divider.
 */
export function Divider({ variant = "hairline", className }: DividerProps) {
  if (variant === "accent") {
    return <div className={cn("h-0.5 w-12 bg-accent", className)} aria-hidden="true" />;
  }

  return <hr className={cn("border-t border-border", className)} />;
}
