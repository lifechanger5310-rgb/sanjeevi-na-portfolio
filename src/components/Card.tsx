"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

/** White card with a hairline border. Hover (real pointer only): a gentle scale and a teal border. */
export default function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <m.div
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`rounded-2xl border border-line bg-surface p-6 transition-[border-color,box-shadow] duration-200 hover:border-accent hover:shadow-[0_8px_24px_-12px_rgb(13_148_136/0.35)] sm:p-8 ${className}`}
    >
      {children}
    </m.div>
  );
}
