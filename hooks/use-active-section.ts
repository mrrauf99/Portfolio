"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

function subscribeToHashChange(callback: () => void) {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}

function getHashSnapshot() {
  return window.location.hash.slice(1);
}

function getServerHashSnapshot() {
  return "";
}

/**
 * Tracks the most visible section in viewport via IntersectionObserver with hash fallback.
 */
export function useActiveSection(ids: readonly string[]): string {
  const pathname = usePathname();
  const [scrolledId, setScrolledId] = useState<string | null>(null);
  const [trackedPathname, setTrackedPathname] = useState(pathname);
  const hash = useSyncExternalStore(subscribeToHashChange, getHashSnapshot, getServerHashSnapshot);

  if (pathname !== trackedPathname) {
    setTrackedPathname(pathname);
    setScrolledId(null);
  }

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const topMatch = visible[0];
        if (topMatch) {
          setScrolledId(topMatch.target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, pathname]);

  if (scrolledId) return scrolledId;
  if (hash && ids.includes(hash)) return hash;
  return ids[0] ?? "";
}
