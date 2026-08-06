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
    <span className="inline-block" aria-live="polite" aria-atomic="true">
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
