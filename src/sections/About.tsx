import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { about } from "@/data/content";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading id="about-title" kicker="About" title="A short intro" />
      <RevealGroup className="max-w-2xl space-y-4 text-muted" stagger={0.1}>
        {about.map((line) => (
          <RevealItem key={line}>
            <p>{line}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
