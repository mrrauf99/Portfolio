"use client";

import { useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import { useMounted } from "@/hooks/use-mounted";

type MotionPresetOptions = {
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  delay?: number;
};

type MotionPreset = {
  initial: Record<string, number>;
  visible: Record<string, number>;
  transition: Transition;
};

/**
 * Framer Motion's animations are JS-driven, so the site-wide CSS
 * prefers-reduced-motion override doesn't reach them — this hook checks
 * useReducedMotion() directly and collapses to an instant, transform-free
 * state when the user has that preference set.
 *
 * useReducedMotion() reads matchMedia, which resolves on the client before
 * the server ever could — using its value on the very first render would
 * make the client's hydration pass disagree with the server-rendered HTML.
 * Gating on useMounted() keeps that first pass identical on both sides;
 * the correction (if any) lands a moment later as an ordinary re-render.
 *
 * Both branches share the same keys (e.g. `y` is always present when
 * requested, just 0 vs. the offset) so a post-mount correction always has
 * a real target to animate toward — `initial` is fixed at mount by Framer
 * Motion, so a value-only branch mismatch would otherwise strand a leftover
 * transform that `visible` never re-targets.
 *
 * Returns `initial`/`visible` pairs rather than baking in a trigger, so
 * callers can wire `visible` to either `animate` (mount) or `whileInView`
 * (scroll-triggered) as the section requires.
 */
export function useMotionPreset({
  y,
  x,
  scale,
  duration = 0.6,
  delay = 0,
}: MotionPresetOptions = {}): MotionPreset {
  const prefersReducedMotion = useReducedMotion();
  const mounted = useMounted();
  const reduceMotion = mounted && prefersReducedMotion;

  const initial: Record<string, number> = { opacity: reduceMotion ? 1 : 0 };
  const visible: Record<string, number> = { opacity: 1 };

  if (y !== undefined) {
    initial.y = reduceMotion ? 0 : y;
    visible.y = 0;
  }
  if (x !== undefined) {
    initial.x = reduceMotion ? 0 : x;
    visible.x = 0;
  }
  if (scale !== undefined) {
    initial.scale = reduceMotion ? 1 : scale;
    visible.scale = 1;
  }

  return {
    initial,
    visible,
    transition: reduceMotion ? { duration: 0 } : { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  };
}

/** Adds a per-index stagger offset on top of a preset's base delay, for lists of `motion` items sharing one `useMotionPreset` call. */
export function withStagger(transition: Transition, index: number, step: number): Transition {
  const baseDelay = "delay" in transition ? (transition.delay ?? 0) : 0;
  return { ...transition, delay: baseDelay + index * step };
}
