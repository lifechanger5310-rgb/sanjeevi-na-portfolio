import Section from "@/components/Section";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import BulletList from "@/components/BulletList";
import { acrossRoles, experience } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I have worked">
      <RevealGroup as="ul" stagger={0.12} className="ml-1.5 border-l border-line">
        {experience.map((job) => (
          <RevealItem as="li" key={job.company} className="group relative pb-12 pl-8 last:pb-0 sm:pl-10">
            <span
              aria-hidden="true"
              className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg transition-colors duration-200 group-hover:bg-accent"
            />
            <h3 className="text-lg font-semibold text-text">{job.company}</h3>
            <p className="text-sm text-muted">{job.place}</p>
            <div className="mt-5 space-y-6">
              {job.roles.map((role) => (
                <div key={role.title}>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h4 className="font-medium text-text">{role.title}</h4>
                    <p className="text-sm text-muted">{role.period}</p>
                  </div>
                  <BulletList items={role.points} className="mt-2" />
                </div>
              ))}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-14 sm:mt-16">
        <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <h3 className="text-base font-semibold text-text">Across these roles</h3>
          <BulletList items={acrossRoles} className="mt-3" />
        </div>
      </Reveal>
    </Section>
  );
}
