"use client";

import dynamic from "next/dynamic";

/** Lazy-load portrait tilt for client-side code splitting */
export const HeroPortraitTilt = dynamic(() =>
  import("@/components/sections/hero-portrait-tilt").then((mod) => mod.HeroPortraitTilt)
);

