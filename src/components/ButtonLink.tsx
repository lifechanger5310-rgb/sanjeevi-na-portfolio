"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  ariaLabel?: string;
};

export default function ButtonLink({ href, children, variant = "primary", external, ariaLabel }: Props) {
  const reduce = useReducedMotion();
  const base =
    "inline-flex min-h-[44px] items-center justify-center rounded-xl px-6 text-base font-semibold transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent-soft hover:text-bg"
      : "border border-line text-text hover:border-accent-soft hover:text-accent-soft";
  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      whileHover={reduce ? undefined : { scale: 1.03 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className={`${base} ${styles}`}
    >
      {children}
    </motion.a>
  );
}
