"use client";

import { m, type Variants } from "framer-motion";
import ButtonLink from "@/components/ButtonLink";
import { DownloadIcon } from "@/components/icons";
import { profile } from "@/data/content";

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 130, damping: 20, mass: 0.8 } },
};

export default function Hero() {
  return (
    <section id="home" aria-labelledby="home-title">
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-5xl flex-col justify-center px-5 py-20 sm:px-8"
      >
        <m.p variants={item} data-reveal="" className="mb-4 flex items-center gap-2 text-sm font-medium text-accent-soft">
          <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
          {profile.location}
        </m.p>
        <m.h1
          variants={item}
          data-reveal=""
          id="home-title"
          className="font-bold tracking-tight text-text"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.08 }}
        >
          {profile.name}
        </m.h1>
        <m.p variants={item} data-reveal="" className="mt-3 text-xl font-medium text-accent-soft sm:text-2xl">
          {profile.title}
        </m.p>
        <m.p variants={item} data-reveal="" className="mt-5 max-w-2xl text-lg text-muted">
          {profile.oneLiner}
        </m.p>
        <m.div variants={item} data-reveal="" className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="#work">View Work</ButtonLink>
          <ButtonLink href="#contact" variant="ghost">
            Contact
          </ButtonLink>
          {profile.resumeUrl && (
            <ButtonLink
              href={profile.resumeUrl}
              variant="ghost"
              download={profile.resumeFileName}
              ariaLabel="Download resume (PDF)"
            >
              <DownloadIcon />
              Download Resume
            </ButtonLink>
          )}
        </m.div>
      </m.div>
    </section>
  );
}
