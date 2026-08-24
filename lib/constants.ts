export const SITE_URL = "https://abdulrauf.dev";
export const SITE_NAME = "Abdul Rauf";
export const SITE_TITLE = "Abdul Rauf — Full Stack Web Developer";
export const SITE_DESCRIPTION =
  "Portfolio of Abdul Rauf, a full stack web developer building production-grade web applications.";

export const GITHUB_URL = "https://github.com/mrrauf99";
export const LINKEDIN_URL = "https://www.linkedin.com/in/abdulrauf-dev/";
export const CONTACT_EMAIL = "itxrauf99@gmail.com";

// Shared with the tab/nav underline `layoutId` indicators in navbar.tsx and skills-tabs.tsx.
export const ACTIVE_INDICATOR_SPRING = { type: "spring", stiffness: 420, damping: 34 } as const;

// Shared icon-button chrome between IconLink and ThemeToggle.
export const ICON_BUTTON_CLASSES =
  "inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-text-muted transition-[color,border-color,transform] duration-150 hover:border-accent hover:text-accent active:scale-[0.94] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

// Shared crossfade transition for swapped icon pairs (theme toggle, navbar menu button).
export const ICON_CROSSFADE_CLASSES =
  "absolute transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]";
