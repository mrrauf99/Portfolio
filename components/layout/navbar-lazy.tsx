"use client";

import dynamic from "next/dynamic";

/**
 * `app/layout.tsx` is a Server Component, and a dynamic import called there
 * doesn't actually code-split (Next.js still bundles it eagerly) — the
 * `dynamic()` call has to originate from a Client Component for its chunk to
 * be pulled out of the initial hydration bundle. This file exists purely to
 * be that boundary, moving Navbar's framer-motion usage off the critical
 * path that gates the hero image's LCP paint.
 */
export const Navbar = dynamic(() => import("@/components/layout/navbar").then((mod) => mod.Navbar));
