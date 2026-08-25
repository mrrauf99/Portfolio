import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  hover?: boolean;
  className?: string;
  style?: CSSProperties;
};

/** Bordered elevated surface component */
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
