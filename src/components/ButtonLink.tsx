"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import Magnetic from "./Magnetic";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  /** File name for a download link (same-origin files only). */
  download?: string;
  ariaLabel?: string;
};

/** Button-styled link: magnetic pull (mouse), spring hover and press, and a clear pressed state on touch. */
export default function ButtonLink({ href, children, variant = "primary", external, download, ariaLabel }: Props) {
  const base =
    "flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-6 text-base font-semibold transition-colors duration-200";
  // Dark navy text on the blue accent gives 5.2:1 contrast; white on #3B82F6 is only 3.7:1.
  const styles =
    variant === "primary"
      ? "bg-accent text-bg hover:bg-accent-soft active:bg-accent-soft"
      : "border border-line text-text hover:border-accent-soft hover:text-accent-soft active:border-accent-soft active:text-accent-soft";
  return (
    <Magnetic>
      <m.a
        href={href}
        aria-label={ariaLabel}
        download={download}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
        className={`${base} ${styles}`}
      >
        {children}
      </m.a>
    </Magnetic>
  );
}
