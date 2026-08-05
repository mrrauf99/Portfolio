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
 * Tracks which section id is currently most visible via IntersectionObserver
 * rather than a per-scroll-tick getBoundingClientRect loop over every section.
 *
 * A cross-page link (e.g. from /projects back to /#about) lands the browser
 * already scrolled to the target section before the observer's first
 * callback resolves the geometry. The URL hash bridges that gap; it's read
 * via useSyncExternalStore (not an effect) so the SSR/hydration pass never
 * disagrees with the client. Once the observer reports a real scroll
 * position, that takes over as the source of truth.
 *
 * The navbar lives in the root layout and never unmounts across route
 * changes, so `ids` alone isn't enough to rebind the observer: it's a
 * stable reference, and the section elements it points at get torn down
 * and recreated as the homepage's sections unmount/remount around a
 * /projects visit. Keying the effect on `pathname` too forces a rebind
 * against the currently-mounted elements instead of stale, detached ones.
 * `scrolledId` is reset the moment `pathname` changes (during render, not
 * in the effect) so a stale section from the previous page can't linger
 * as "active" while the new page's observer is still spinning up.
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
