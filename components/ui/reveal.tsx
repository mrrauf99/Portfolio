"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMotionPreset } from "@/hooks/use-motion-props";

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
 * Scroll-triggered fade/rise for below-the-fold content. Wraps
 * useMotionPreset's whileInView pattern so every section gets the same
 * reduced-motion handling instead of a CSS keyframe that already finished
 * playing (off-screen, on mount) before the visitor ever scrolls to it.
 */
export function Reveal({
  children,
  className,
  y = 20,
  delay = 0,
  duration,
  once = true,
  as = "div",
}: RevealProps) {
  const fade = useMotionPreset({ y, delay, ...(duration !== undefined ? { duration } : {}) });
  const MotionTag = as === "section" ? motion.section : motion.div;

  return (
    <MotionTag
      className={className}
      initial={fade.initial}
      whileInView={fade.visible}
      viewport={{ once, margin: "-80px" }}
      transition={fade.transition}
    >
      {children}
    </MotionTag>
  );
}
