"use client";

import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import { nav, profile } from "@/data/content";

const SECTIONS = ["home", ...nav.map((n) => n.id)];

/** Which section sits under the 35% line of the viewport. Reads layout once per frame while scrolling. */
function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current = SECTIONS[0];
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = SECTIONS[SECTIONS.length - 1];
      }
      setActive(current);
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
  const active = useActiveSection();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="pointer-events-none sticky top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Main"
        className="pointer-events-auto relative mx-auto flex max-w-3xl items-center justify-between rounded-full border border-line bg-surface/85 py-1.5 pl-5 pr-1.5 shadow-[0_1px_2px_rgb(17_24_39/0.04)] backdrop-blur md:pr-2"
      >
        <a href="#home" className="text-[0.95rem] font-semibold tracking-tight text-text">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {nav.map((n) => {
            const isActive = active === n.id;
            return (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`inline-flex min-h-[40px] items-center rounded-full px-3.5 text-sm transition-colors duration-300 ${
                    isActive
                      ? "bg-accent/10 font-medium text-text"
                      : "text-muted hover:bg-accent/5 hover:text-text"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-text transition-colors hover:bg-accent/10 active:bg-accent/10 md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <AnimatePresence>
          {open && (
            <m.ul
              id="mobile-menu"
              key="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-x-0 top-full mt-2 rounded-3xl border border-line bg-surface p-2 shadow-[0_12px_32px_-16px_rgb(17_24_39/0.25)] md:hidden"
            >
              {nav.map((n) => {
                const isActive = active === n.id;
                return (
                  <li key={n.id}>
                    <a
                      href={`#${n.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "location" : undefined}
                      className={`flex min-h-[48px] items-center rounded-2xl px-4 text-base transition-colors duration-200 ${
                        isActive ? "bg-accent/10 font-medium text-text" : "text-muted active:bg-accent/5"
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
      </nav>
    </header>
  );
}
