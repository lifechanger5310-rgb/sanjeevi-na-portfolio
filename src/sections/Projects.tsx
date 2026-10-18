import Section from "@/components/Section";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import Card from "@/components/Card";
import Tag from "@/components/Tag";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <Section id="projects" label="Projects" title="Selected work">
      <RevealGroup stagger={0.12} className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <RevealItem key={p.name} className="h-full">
            <Card className="flex h-full flex-col">
              <p className="text-sm text-muted">{p.meta}</p>
              <h3 className="mt-2 text-xl font-semibold text-text">{p.name}</h3>
              <p className="mt-3 text-muted">{p.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${p.name} tech stack`}>
                {p.stack.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
