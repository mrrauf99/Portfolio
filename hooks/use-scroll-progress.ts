"use client";

import { useEffect, useState } from "react";

type ScrollProgress = {
  progress: number;
  scrolled: boolean;
};

/** Tracks scroll progress and background state via rAF */
export function useScrollProgress(scrolledOffset = 50): ScrollProgress {
  const [state, setState] = useState<ScrollProgress>({ progress: 0, scrolled: false });

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setState({
        progress: Math.min(1, Math.max(0, progress)),
        scrolled: window.scrollY > scrolledOffset,
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [scrolledOffset]);

  return state;
}
