"use client";

import dynamic from "next/dynamic";

export const Navbar = dynamic(() => import("@/components/layout/navbar").then((mod) => mod.Navbar));

