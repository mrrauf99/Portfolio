"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

export function useAnimatedCounter(end: number, duration = 1800) {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || reduceMotion) return;

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
