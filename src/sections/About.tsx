import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { about } from "@/data/content";

export default function About() {
  return (
    <Section id="about" label="About" title={about.heading}>
      <Reveal delay={0.05} className="max-w-2xl space-y-5">
        <p className="text-xl leading-relaxed text-text">{about.lead}</p>
        {about.body.map((line) => (
          <p key={line} className="text-lg text-muted">
            {line}
          </p>
        ))}
      </Reveal>
    </Section>
  );
}
