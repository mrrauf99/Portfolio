"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/** Animates number counting from 0 to end when scrolled into view */
export function useAnimatedCounter(end: number, duration = 1800) {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || reduceMotion) return;

    if (end <= 1) {
      const frame = requestAnimationFrame(() => setCount(end));
      return () => cancelAnimationFrame(frame);
    }

    let frame = 0;
    const startTime = performance.now();

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, end, duration, reduceMotion]);

  const displayCount = reduceMotion && isInView ? end : count;

  return { count: displayCount, ref };
}

