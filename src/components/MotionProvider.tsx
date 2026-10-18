"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * One place for motion defaults.
 * - LazyMotion + domAnimation keeps the Framer Motion bundle small. Components must use `m`, never `motion`.
 * - reducedMotion="user" makes transform animations instant for people who ask their OS for less motion.
 * - Default transition is a short ease-out tween: calm, no bounce.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user" transition={{ duration: 0.2, ease: "easeOut" }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
