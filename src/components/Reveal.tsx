"use client";

import { m, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * One shared entrance for the whole site: soft fade plus a small rise on a spring.
 * Every element that starts hidden carries data-reveal, so the <noscript> rule in layout.tsx can show it without JavaScript.
 */
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 130, damping: 20, mass: 0.8, delay },
  }),
};

const viewport = { once: true, margin: "-60px" };

/** A single element that reveals itself when it scrolls into view (once). */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <m.div
      className={className}
      variants={item}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      data-reveal=""
    >
      {children}
    </m.div>
  );
}

type GroupProps = {
  children: ReactNode;
  className?: string;
  /** Seconds between one child and the next. */
  stagger?: number;
  /** Seconds before the first child. */
  delay?: number;
  as?: "div" | "ul";
  label?: string;
};

/** Parent that reveals its RevealItem children one after another when it scrolls into view (once). */
export function RevealGroup({ children, className, stagger = 0.09, delay = 0.05, as = "div", label }: GroupProps) {
  const shared = {
    className,
    "aria-label": label,
    initial: "hidden",
    whileInView: "show",
    viewport,
    variants: { hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } } satisfies Variants,
  };
  return as === "ul" ? <m.ul {...shared}>{children}</m.ul> : <m.div {...shared}>{children}</m.div>;
}

/** Child of a RevealGroup. It has no trigger of its own, so only use it inside a group. */
export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  return as === "li" ? (
    <m.li className={className} variants={item} data-reveal="">
      {children}
    </m.li>
  ) : (
    <m.div className={className} variants={item} data-reveal="">
      {children}
    </m.div>
  );
}
