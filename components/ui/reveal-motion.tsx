"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMotionPreset } from "@/hooks/use-motion-props";

type RevealMotionProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: "div" | "section";
};

/**
 * The actual framer-motion implementation, split out of reveal.tsx so that
 * file can stay a thin `next/dynamic` boundary — see the comment there for
 * why the split exists.
 */
export function RevealMotion({
  children,
  className,
  y = 20,
  delay = 0,
  duration,
  once = true,
  as = "div",
}: RevealMotionProps) {
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
