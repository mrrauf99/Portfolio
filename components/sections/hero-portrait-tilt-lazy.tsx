"use client";

import dynamic from "next/dynamic";

/**
 * `hero-portrait.tsx` is a Server Component, and a dynamic import called
 * there doesn't actually code-split (Next.js still bundles it eagerly) — the
 * `dynamic()` call has to originate from a Client Component for its chunk to
 * be pulled out of the initial hydration bundle. This file exists purely to
 * be that boundary, moving the tilt effect's framer-motion usage off the
 * critical path that gates the hero image's LCP paint.
 */
export const HeroPortraitTilt = dynamic(() =>
  import("@/components/sections/hero-portrait-tilt").then((mod) => mod.HeroPortraitTilt)
);
