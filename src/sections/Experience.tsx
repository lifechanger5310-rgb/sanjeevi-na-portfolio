import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Card from "@/components/Card";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" alt>
      <SectionHeading id="experience-title" kicker="Experience" title="Where I have worked" />
      <div className="grid gap-5">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08}>
            <Card>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-text">{job.company}</h3>
                <p className="text-sm text-muted">{job.place}</p>
              </div>
              <ul className="mt-3 space-y-1">
                {job.roles.map((r) => (
                  <li key={r.title} className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium text-accent-soft">{r.title}</span>
                    <span className="text-sm text-muted">{r.period}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-muted">{job.summary}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
