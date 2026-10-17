import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { about } from "@/data/content";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading id="about-title" kicker="About" title="A short intro" />
      <Reveal delay={0.05}>
        <div className="max-w-2xl space-y-4 text-muted">
          {about.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
