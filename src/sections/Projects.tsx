import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Card from "@/components/Card";
import Tag from "@/components/Tag";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <Section id="work">
      <SectionHeading id="work-title" kicker="Projects" title="Work I built" />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08} className="h-full">
            <Card className="h-full">
              <p className="text-sm font-medium text-accent-soft">{p.kind}</p>
              <h3 className="mt-1 text-xl font-semibold text-text">{p.name}</h3>
              <p className="mt-3 text-muted">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${p.name} stack`}>
                {p.stack.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
