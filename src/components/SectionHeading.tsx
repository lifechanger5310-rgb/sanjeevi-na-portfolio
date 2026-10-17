import Reveal from "./Reveal";

export default function SectionHeading({ id, title, kicker }: { id?: string; title: string; kicker?: string }) {
  return (
    <Reveal>
      <div className="mb-8 sm:mb-10">
        {kicker && <p className="mb-2 text-sm font-medium tracking-wide text-accent-soft">{kicker}</p>}
        <h2 id={id} className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
          {title}
        </h2>
      </div>
    </Reveal>
  );
}
