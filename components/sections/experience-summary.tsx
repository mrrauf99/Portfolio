"use client";

import { useSyncExternalStore } from "react";

const EXPERIENCE_START_YEAR = 2025;

function subscribe(onChange: () => void) {
  window.addEventListener("focus", onChange);
  document.addEventListener("visibilitychange", onChange);
  return () => {
    window.removeEventListener("focus", onChange);
    document.removeEventListener("visibilitychange", onChange);
  };
}

function getCurrentYear() {
  return new Date().getFullYear();
}

export function ExperienceSummary({ initialYear }: { initialYear: number }) {
  const year = useSyncExternalStore(subscribe, getCurrentYear, () => initialYear);
  const years = Math.max(0, year - EXPERIENCE_START_YEAR);

  return years === 0
    ? `Building software since ${EXPERIENCE_START_YEAR}.`
    : `${years}+ ${years === 1 ? "year" : "years"} building software end to end.`;
}
