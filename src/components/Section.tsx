import type { ReactNode } from "react";

export default function Section({ id, children, alt = false }: { id: string; children: ReactNode; alt?: boolean }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`relative ${alt ? "bg-surface/50" : ""}`}>
      <div aria-hidden="true" className="section-divider" />
      <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-24">{children}</div>
    </section>
  );
}
