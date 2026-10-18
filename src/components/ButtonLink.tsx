"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  /** File name for a download link (same-origin files only). */
  download?: string;
  ariaLabel?: string;
};

/** Pill button link. Hover: gentle scale and a teal highlight. Press: slight shrink. */
export default function ButtonLink({ href, children, variant = "primary", external, download, ariaLabel }: Props) {
  const base =
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-medium transition-[background-color,border-color,box-shadow] duration-200";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:shadow-[0_8px_20px_-8px_rgb(13_148_136/0.7)]"
      : "border border-line bg-surface text-text hover:border-accent hover:bg-accent/5";
  return (
    <m.a
      href={href}
      aria-label={ariaLabel}
      download={download}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles}`}
    >
      {children}
    </m.a>
  );
}
