"use client";

import { m, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * The only scroll animation on the site: a soft fade and a small rise, once.
 * Every element that starts hidden carries data-reveal, so the <noscript> rule in layout.tsx shows it without JavaScript.
 */
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay },
  }),
};

const viewport = { once: true, margin: "-48px" };

/** A single element that reveals itself when it scrolls into view. */
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
  as?: "div" | "ul";
};

/** Parent that reveals its RevealItem children one after another when it scrolls into view. */
export function RevealGroup({ children, className, stagger = 0.08, as = "div" }: GroupProps) {
  const shared = {
    className,
    initial: "hidden",
    whileInView: "show",
    viewport,
    variants: { hidden: {}, show: { transition: { staggerChildren: stagger } } } satisfies Variants,
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
