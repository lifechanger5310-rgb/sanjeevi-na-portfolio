"use client";

import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import { nav, profile } from "@/data/content";

/** Page order, and the nav link each section belongs to (Experience sits under About; AI and Skills under Work). */
const SECTIONS = ["home", "about", "experience", "work", "ai", "skills", "contact"] as const;
type SectionId = (typeof SECTIONS)[number];
const OWNER: Record<SectionId, string> = {
  home: "#home",
  about: "#about",
  experience: "#about",
  work: "#work",
  ai: "#work",
  skills: "#work",
  contact: "#contact",
};

/** Which nav link matches the section under the 35% line of the viewport. Reads layout once per frame while scrolling. */
function useActiveLink() {
  const [active, setActive] = useState("#home");
  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current: SectionId = SECTIONS[0];
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = "contact";
      setActive(OWNER[current]);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return active;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveLink();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <m.a href="#home" whileTap={{ scale: 0.96 }} className="text-base font-bold tracking-tight text-text">
          {profile.name}
        </m.a>

        <ul className="hidden items-center gap-1 sm:flex">
          {nav.map((n) => {
            const isActive = active === n.href;
            return (
              <li key={n.href}>
                <m.a
                  href={n.href}
                  aria-current={isActive ? "location" : undefined}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative inline-flex min-h-[44px] items-center rounded-lg px-4 text-[0.95rem] transition-colors duration-200 ${
                    isActive ? "text-text" : "text-muted hover:text-text"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-lg bg-accent/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  />
                  <span className="relative">{n.label}</span>
                  <m.span
                    aria-hidden="true"
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    style={{ originX: 0 }}
                    className="absolute inset-x-4 bottom-2 h-0.5 rounded-full bg-accent"
                  />
                </m.a>
              </li>
            );
          })}
        </ul>

        <m.button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.9 }}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-text transition-colors active:bg-accent/10 sm:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </m.button>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <m.ul
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="overflow-hidden border-t border-line bg-bg px-5 sm:hidden"
          >
            {nav.map((n) => {
              const isActive = active === n.href;
              return (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "location" : undefined}
                    className={`flex min-h-[48px] items-center border-l-2 pl-3 text-base transition-colors active:bg-accent/10 ${
                      isActive ? "border-accent text-text" : "border-transparent text-muted"
                    }`}
                  >
                    {n.label}
                  </a>
                </li>
              );
            })}
          </m.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
