import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Tag from "@/components/Tag";
import { aiSection } from "@/data/content";

export default function AIPromptEngineering() {
  return (
    <Section id="ai" alt>
      <SectionHeading id="ai-title" kicker="AI Prompt Engineering" title="How I work with AI" />
      <Reveal delay={0.05}>
        <div className="max-w-2xl">
          <p className="text-muted">{aiSection.intro}</p>
          <ul className="mt-5 space-y-3">
            {aiSection.points.map((p) => (
              <li key={p} className="flex gap-3 text-muted">
                <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="AI tools used">
            {aiSection.tools.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
