import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Tag from "@/components/Tag";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading id="skills-title" kicker="Skills" title="Tools I use" />
      <RevealGroup className="grid gap-8 sm:grid-cols-2" stagger={0.08}>
        {skills.map((g) => (
          <RevealItem key={g.group}>
            <h3 className="mb-3 text-base font-semibold text-text">{g.group}</h3>
            <RevealGroup as="ul" label={`${g.group} skills`} className="flex flex-wrap gap-2" stagger={0.035} delay={0.1}>
              {g.items.map((s) => (
                <RevealItem as="li" key={s}>
                  <Tag>{s}</Tag>
                </RevealItem>
              ))}
            </RevealGroup>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
