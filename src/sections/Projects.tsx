import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import Tag from "@/components/Tag";
import BulletList from "@/components/BulletList";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <Section id="work">
      <SectionHeading id="work-title" kicker="Projects" title="Work I built" />
      <RevealGroup className="grid gap-5 md:grid-cols-2" stagger={0.12}>
        {projects.map((p) => (
          <RevealItem key={p.name} className="h-full">
            <Card className="h-full">
              <p className="text-sm font-medium text-accent-soft">{p.kind}</p>
              <h3 className="mt-1 text-xl font-semibold text-text">{p.name}</h3>
              <p className="mt-1 text-sm text-muted">
                {p.company}, {p.period}
              </p>
              <p className="mt-4 text-muted">{p.description}</p>
              <BulletList items={p.points} className="mt-4" />
              <RevealGroup as="ul" label={`${p.name} stack`} className="mt-5 flex flex-wrap gap-2" stagger={0.04} delay={0.1}>
                {p.stack.map((s) => (
                  <RevealItem as="li" key={s}>
                    <Tag>{s}</Tag>
                  </RevealItem>
                ))}
              </RevealGroup>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
