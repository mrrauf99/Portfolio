"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

type RevealProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: "div" | "section";
};

/** Scroll-triggered fade and rise animation using IntersectionObserver and CSS transitions */
export function Reveal({
  children,
  className = "",
  y = 20,
  delay = 0,
  duration = 0.6,
  once = true,
  as = "div",
}: RevealProps) {
  const { ref, isInView } = useInView({ once, rootMargin: "-40px" });
  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: isInView ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}

