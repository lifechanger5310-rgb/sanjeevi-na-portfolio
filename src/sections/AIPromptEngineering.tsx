import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Card from "@/components/Card";
import BulletList from "@/components/BulletList";
import Tag from "@/components/Tag";
import { aiSection } from "@/data/content";

export default function AIPromptEngineering() {
  return (
    <Section id="ai" label="AI Prompt Engineering" title={aiSection.heading}>
      <Reveal delay={0.05}>
        <Card>
          <p className="max-w-2xl text-lg text-text">{aiSection.intro}</p>
          <BulletList items={aiSection.points} className="mt-5 max-w-2xl" />
          <ul className="mt-7 flex flex-wrap gap-2" aria-label="AI tools">
            {aiSection.tools.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>
    </Section>
  );
}
