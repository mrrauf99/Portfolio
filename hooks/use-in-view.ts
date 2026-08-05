"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOptions = {
  once?: boolean;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
};

export function useInView({
  once = true,
  root = null,
  rootMargin = "0px",
  threshold = 0.1,
}: UseInViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, root, rootMargin, threshold]);

  return { ref, isInView };
}
