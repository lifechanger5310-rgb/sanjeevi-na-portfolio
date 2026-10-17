"use client";

import { m } from "framer-motion";
import Reveal from "./Reveal";

export default function SectionHeading({ id, title, kicker }: { id?: string; title: string; kicker?: string }) {
  return (
    <Reveal>
      <div className="mb-8 sm:mb-10">
        {kicker && <p className="mb-2 text-sm font-medium tracking-wide text-accent-soft">{kicker}</p>}
        <h2 id={id} className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
          {title}
        </h2>
        {/* Accent bar draws in with the heading (inherits the Reveal's hidden/show states). */}
        <m.span
          aria-hidden="true"
          variants={{
            hidden: { scaleX: 0 },
            show: { scaleX: 1, transition: { type: "spring", stiffness: 120, damping: 20, delay: 0.2 } },
          }}
          style={{ originX: 0 }}
          data-reveal=""
          className="mt-4 block h-0.5 w-12 rounded-full bg-accent"
        />
      </div>
    </Reveal>
  );
}
