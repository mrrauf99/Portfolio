"use client";

import dynamic from "next/dynamic";

/** Lazy-load Navbar for client-side code splitting */
export const Navbar = dynamic(() => import("@/components/layout/navbar").then((mod) => mod.Navbar));

