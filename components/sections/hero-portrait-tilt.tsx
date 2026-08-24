"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

const SPRING = { stiffness: 220, damping: 20, mass: 0.4 };

/**
 * Cursor-driven tilt, like tipping a framed print to catch the light — the
 * hero's one ongoing interactive touch, layered on top of the on-load
 * entrance rather than replacing it. Pure progressive enhancement: it
 * starts at an identity transform, so it never affects what paints before
 * hydration (unlike the entrance itself, which stays plain CSS for exactly
 * that reason). Disabled for reduced-motion and on touch/coarse pointers,
 * where a hover-tracked tilt has no equivalent.
 */
export function HeroPortraitTilt({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [7, -7]), SPRING);
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-7, 7]), SPRING);
  const scale = useSpring(1, SPRING);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion || event.pointerType !== "mouse") return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set((event.clientX - rect.left) / rect.width);
    pointerY.set((event.clientY - rect.top) / rect.height);
    scale.set(1.02);
  }

  function handlePointerLeave() {
    pointerX.set(0.5);
    pointerY.set(0.5);
    scale.set(1);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX, rotateY, scale, transformPerspective: 800 }}
      className="[transform-style:preserve-3d]"
    >
      {children}
    </motion.div>
  );
}
