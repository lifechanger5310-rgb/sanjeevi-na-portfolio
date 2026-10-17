"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * One place for motion defaults.
 * - LazyMotion + domAnimation keeps the Framer Motion bundle small. Components must use `m`, never `motion`.
 * - reducedMotion="user" makes transform animations instant for people who ask their OS for less motion.
 * - The default transition is a spring, so hover/tap/reveal feel physical without per-component tuning.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user" transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.7 }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
