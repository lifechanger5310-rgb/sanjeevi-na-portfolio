import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Tag from "@/components/Tag";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <Section id="skills" label="Skills" title="Tools and technologies">
      <Reveal delay={0.05}>
        <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
          {skills.map((g) => (
            <div key={g.group} className="grid gap-3 p-5 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:p-6">
              <h3 className="text-sm font-medium text-text">{g.group}</h3>
              <ul className="flex flex-wrap gap-2" aria-label={g.group}>
                {g.items.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
