import Reveal from "./Reveal";

export default function SectionHeading({ id, label, title }: { id: string; label: string; title: string }) {
  return (
    <Reveal className="mb-10 sm:mb-12">
      <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-muted">
        <span aria-hidden="true" className="h-px w-8 bg-accent" />
        {label}
      </p>
      <h2 id={id} className="mt-3 text-2xl font-semibold tracking-tight text-text sm:text-3xl">
        {title}
      </h2>
    </Reveal>
  );
}
