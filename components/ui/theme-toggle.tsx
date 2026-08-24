"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/use-mounted";
import { ICON_BUTTON_CLASSES, ICON_CROSSFADE_CLASSES } from "@/lib/constants";

const classes = `relative cursor-pointer ${ICON_BUTTON_CLASSES}`;

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return <span className={`${classes} border-transparent`} aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={classes}
    >
      <Sun
        size={16}
        aria-hidden="true"
        className={`${ICON_CROSSFADE_CLASSES} ${isDark ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
      />
      <Moon
        size={16}
        aria-hidden="true"
        className={`${ICON_CROSSFADE_CLASSES} ${isDark ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
      />
    </button>
  );
}
