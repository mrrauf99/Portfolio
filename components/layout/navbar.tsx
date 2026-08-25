"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { ICON_CROSSFADE_CLASSES } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Home", id: "hero", href: "/#hero" },
  { label: "About", id: "about", href: "/#about" },
  { label: "Skills", id: "skills", href: "/#skills" },
  { label: "Projects", id: "projects", href: "/#projects" },
  { label: "Experience", id: "experience", href: "/#experience" },
  { label: "Contact", id: "contact", href: "/#contact" },
] as const;

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { progress, scrolled } = useScrollProgress();
  const activeId = useActiveSection(SECTION_IDS);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);
  const isLinkActive = (id: (typeof NAV_LINKS)[number]["id"]) => isHome && activeId === id;

  return (
    <>
      <div
        className="fixed top-0 left-0 z-50 h-0.5 w-full origin-left bg-accent"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled ? "border-b border-border bg-bg/90 backdrop-blur-sm" : "border-b border-transparent"
        }`}
      >
        <Container as="nav" aria-label="Primary" className="flex h-16 items-center justify-between">
          <Link href="/#hero" className="font-serif text-lg font-medium text-text" onClick={closeMobileMenu}>
            Abdul <span className="text-accent">Rauf</span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.id);
              return (
                <li key={link.id} className="relative">
                  <Link
                    href={link.href}
                    aria-current={active ? "true" : undefined}
                    className={`text-sm font-medium transition-colors duration-150 ${
                      active ? "text-accent" : "text-text-muted hover:text-text"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {active && (
                    <span
                      className="absolute inset-x-0 -bottom-1.5 h-0.5 bg-accent transition-all duration-200"
                      aria-hidden="true"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="relative inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-sm border border-border text-text-muted transition-colors duration-150 hover:border-accent hover:text-accent md:hidden"
            >
              <Menu
                size={18}
                aria-hidden="true"
                className={`${ICON_CROSSFADE_CLASSES} ${
                  mobileOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                size={18}
                aria-hidden="true"
                className={`${ICON_CROSSFADE_CLASSES} ${
                  mobileOpen ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
                }`}
              />
            </button>
          </div>
        </Container>

        <div
          id="mobile-menu"
          inert={!mobileOpen}
          className={`grid overflow-hidden border-border bg-bg transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] md:hidden ${
            mobileOpen ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr] border-t-0"
          }`}
        >
          <div
            className={`min-h-0 overflow-hidden transition-opacity ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
              mobileOpen ? "opacity-100 duration-400 delay-100" : "opacity-0 duration-150"
            }`}
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link.id);
                return (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      aria-current={active ? "true" : undefined}
                      className={`block rounded-sm px-3 py-2.5 text-sm font-medium transition-colors duration-150 ${
                        active ? "bg-accent/10 text-accent" : "text-text-muted hover:text-text"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

