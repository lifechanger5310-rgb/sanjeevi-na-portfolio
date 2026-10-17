"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Surface card with soft hover lift (-4px) and accent border glow. */
export default function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`rounded-2xl border border-line bg-surface p-6 transition-colors duration-200 hover:border-accent/60 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.35)] sm:p-7 ${className}`}
    >
      {children}
    </motion.article>
  );
}
