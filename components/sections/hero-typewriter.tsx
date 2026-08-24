"use client";

import { useEffect, useRef, useState } from "react";

// Longest string listed first: it's the one rendered on the server, so no later
// (shorter) role in the rotation can ever repaint at a larger width and register
// as a new Largest Contentful Paint candidate after hydration.
const ROLES = [
  "Full Stack Web Developer",
  "MERN Stack Developer",
  "React Developer",
  "Node.js Developer",
  "Problem Solver",
] as const;

// Reserves a box exactly as wide as the longest role (+1ch for the cursor) so
// every later type/delete frame repaints inside the same rect the SSR'd first
// paint already claimed. Without this, each shorter-then-regrowing role was
// still a legal *new* LCP candidate — real PageSpeed runs caught the LCP
// timestamp pinned to a mid-animation frame ("MERN Stac|") minutes into the
// loop instead of the actual first paint, because the box kept resizing.
const MAX_ROLE_LENGTH = Math.max(...ROLES.map((role) => role.length));

export function HeroTypewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState<string>(ROLES[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const word = ROLES[roleIndex % ROLES.length] ?? ROLES[0];

    const tick = () => {
      if (!isDeleting) {
        if (displayText.length < word.length) {
          setDisplayText(word.slice(0, displayText.length + 1));
          timeoutRef.current = setTimeout(tick, 75);
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), 2200);
        }
      } else if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
        timeoutRef.current = setTimeout(tick, 45);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? 45 : 75);
    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <span
      className="inline-block whitespace-nowrap"
      style={{ minWidth: `${MAX_ROLE_LENGTH + 1}ch` }}
      aria-live="polite"
      aria-atomic="true"
    >
      <span>{displayText}</span>
      <span
        className="ml-0.5 inline-block text-accent animate-[blink_1.1s_step-end_infinite]"
        aria-hidden="true"
      >
        |
      </span>
    </span>
  );
}
