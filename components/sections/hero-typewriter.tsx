"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const ROLES = [
  "Websites & Web Applications",
  "AI Chatbots & Virtual Receptionists",
  "Business Automation",
] as const;

export function HeroTypewriter() {
  const reducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState<string>(ROLES[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (reducedMotion) return;
    const word = ROLES[roleIndex % ROLES.length] ?? ROLES[0];

    const tick = () => {
      if (!isDeleting) {
        if (displayText.length < word.length) {
          setDisplayText(word.slice(0, displayText.length + 1));
          timeoutRef.current = setTimeout(tick, 75);
        } else {
          // Pause on full word before deleting (longer pause on initial mount for stable LCP)
          const pause = roleIndex === 0 && displayText === ROLES[0] ? 3800 : 2200;
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pause);
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
  }, [displayText, isDeleting, roleIndex, reducedMotion]);

  return (
    <span className="inline-grid w-full grid-cols-1 align-top">
      <span className="sr-only">{ROLES[0]}</span>
      {ROLES.map((role) => (
        <span key={role} aria-hidden="true" className="invisible [grid-area:1/1]">
          {role}<span className="ml-0.5 inline-block">|</span>
        </span>
      ))}
      <span aria-hidden="true" className="[grid-area:1/1]">
        {reducedMotion ? ROLES[0] : displayText}
        <span className="ml-0.5 inline-block text-accent animate-[blink_1.1s_step-end_infinite] motion-reduce:hidden">
          |
        </span>
      </span>
    </span>
  );
}

