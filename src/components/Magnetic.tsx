"use client";

import { m, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type PointerEvent, type ReactNode } from "react";

const SPRING = { stiffness: 220, damping: 18, mass: 0.5 };
const MAX_PULL = 10; // px

/**
 * Magnetic pull toward a real mouse pointer. Touch, pen and reduced-motion users get none of it.
 * The outer element never moves, so the pointer maths stays stable. Its small padding is cancelled
 * by a negative margin: the hit area grows by 6px without shifting layout or overlapping a neighbour.
 */
export default function Magnetic({
  children,
  strength = 0.25,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);

  const clamp = (v: number) => Math.max(-MAX_PULL, Math.min(MAX_PULL, v));

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set(clamp((e.clientX - (r.left + r.width / 2)) * strength));
    y.set(clamp((e.clientY - (r.top + r.height / 2)) * strength));
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      className={`-m-1.5 p-1.5 ${className}`}
    >
      <m.div style={{ x: springX, y: springY }}>{children}</m.div>
    </div>
  );
}
