import Link from "next/link";
import type { ReactNode } from "react";
import { ICON_BUTTON_CLASSES } from "@/lib/constants";

type IconLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
  external?: boolean;
};

export function IconLink({ href, label, children, external = true }: IconLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={ICON_BUTTON_CLASSES}
    >
      {children}
    </Link>
  );
}
