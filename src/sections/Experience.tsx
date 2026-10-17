import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import BulletList from "@/components/BulletList";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { acrossRoles, experience } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" alt>
      <SectionHeading id="experience-title" kicker="Experience" title="Where I have worked" />
      <RevealGroup className="grid gap-5" stagger={0.12}>
        {experience.map((job) => (
          <RevealItem key={job.company}>
            <Card>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-text">{job.company}</h3>
                <p className="text-sm text-muted">{job.place}</p>
              </div>
              <ul className="mt-4 space-y-5">
                {job.roles.map((r) => (
                  <li key={r.title}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <span className="font-medium text-accent-soft">{r.title}</span>
                      <span className="text-sm text-muted">{r.period}</span>
                    </div>
                    <BulletList items={r.points} className="mt-2" />
                  </li>
                ))}
              </ul>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
      <Reveal delay={0.1} className="mt-10">
        <h3 className="text-base font-semibold text-text">Across these roles</h3>
        <BulletList items={acrossRoles} className="mt-3 max-w-2xl" />
      </Reveal>
    </Section>
  );
}
