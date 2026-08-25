import { cn } from "@/lib/utils";

type DividerProps = {
  variant?: "hairline" | "accent";
  className?: string;
};

/** Structural divider line */
export function Divider({ variant = "hairline", className }: DividerProps) {
  if (variant === "accent") {
    return <div className={cn("h-0.5 w-12 bg-accent", className)} aria-hidden="true" />;
  }

  return <hr className={cn("border-t border-border", className)} />;
}
