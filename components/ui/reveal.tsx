"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: "div" | "section";
};

/**
 * Scroll-triggered fade/rise for below-the-fold content. The framer-motion
 * implementation (reveal-motion.tsx) is loaded through `dynamic()` from here
 * — a Client Component — rather than from each Server Component that renders
 * a section (about.tsx, experience.tsx, etc.), because a dynamic import only
 * actually code-splits when it originates in a Client Component. Every
 * `Reveal` usage sits below the fold, so deferring its chunk costs nothing
 * visible: it still SSRs (default `ssr: true`), so the wrapped content is in
 * the initial HTML either way, just painted invisible (opacity: 0) until
 * scrolled into view — same as before this split.
 */
export const Reveal = dynamic<RevealProps>(() =>
  import("@/components/ui/reveal-motion").then((mod) => mod.RevealMotion)
);
