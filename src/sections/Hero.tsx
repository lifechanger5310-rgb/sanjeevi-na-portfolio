"use client";

import { motion, useReducedMotion } from "framer-motion";
import ButtonLink from "@/components/ButtonLink";
import { profile } from "@/data/content";

export default function Hero() {
  const reduce = useReducedMotion();
  const item = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  });

  return (
    <section id="home" aria-labelledby="home-title" className="relative overflow-hidden">
      {/* Subtle geometric grid, no glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(59,130,246,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.10) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 70% at 30% 40%, #000 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 30% 40%, #000 30%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-5xl flex-col justify-center px-5 py-20 sm:px-8">
        <motion.p {...item(0)} className="mb-4 flex items-center gap-2 text-sm font-medium text-accent-soft">
          <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
          {profile.location}
        </motion.p>
        <motion.h1
          {...item(0.08)}
          id="home-title"
          className="font-bold tracking-tight text-text"
          style={{ fontSize: "clamp(2.5rem, 7vw, 4rem)", lineHeight: 1.08 }}
        >
          {profile.name}
        </motion.h1>
        <motion.p {...item(0.16)} className="mt-3 text-xl font-medium text-accent-soft sm:text-2xl">
          {profile.title}
        </motion.p>
        <motion.p {...item(0.24)} className="mt-5 max-w-2xl text-lg text-muted">
          {profile.oneLiner}
        </motion.p>
        <motion.div {...item(0.34)} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#work">View Work</ButtonLink>
          <ButtonLink href="#contact" variant="ghost">
            Contact
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
