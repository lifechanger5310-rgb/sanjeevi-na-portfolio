"use client";

import { m, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type PointerEvent, type ReactNode } from "react";

const TILT_SPRING = { stiffness: 220, damping: 20, mass: 0.6 };
const MAX_TILT = 6; // degrees

/**
 * Surface card with a 3D tilt and a soft glow that follows a real mouse; touch gets a glow where you press.
 * Everything runs on motion values, so React never re-renders while the pointer moves.
 * The outer element never transforms (stable pointer maths); the inner article does the tilt.
 */
export default function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rotateX = useSpring(0, TILT_SPRING);
  const rotateY = useSpring(0, TILT_SPRING);
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowOpacity = useSpring(0, { stiffness: 200, damping: 26 });
  const glow = useMotionTemplate`radial-gradient(280px circle at ${glowX}px ${glowY}px, rgba(59,130,246,0.16), transparent 70%)`;

  const locate = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return null;
    const r = el.getBoundingClientRect();
    const px = e.clientX - r.left;
    const py = e.clientY - r.top;
    glowX.set(px);
    glowY.set(py);
    return { px, py, w: r.width, h: r.height };
  };

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const p = locate(e);
    if (!p) return;
    glowOpacity.set(1);
    if (reduce) return;
    rotateY.set((p.px / p.w - 0.5) * 2 * MAX_TILT);
    rotateX.set(-(p.py / p.h - 0.5) * 2 * MAX_TILT);
  };
  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") return;
    locate(e);
    glowOpacity.set(1);
  };
  const release = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowOpacity.set(0);
  };
  const onUp = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") release();
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerDown={onDown}
      onPointerUp={onUp}
      onPointerCancel={release}
      onPointerLeave={release}
      className={className}
    >
      <m.article
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.985 }}
        className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors duration-200 will-change-transform hover:border-accent/60 active:border-accent/60 sm:p-7"
      >
        <m.div aria-hidden="true" style={{ background: glow, opacity: glowOpacity }} className="pointer-events-none absolute inset-0" />
        <div className="relative">{children}</div>
      </m.article>
    </div>
  );
}
