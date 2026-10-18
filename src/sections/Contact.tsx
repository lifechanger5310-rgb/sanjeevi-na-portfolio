import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/ButtonLink";
import { DownloadIcon } from "@/components/icons";
import { profile } from "@/data/content";

const link =
  "font-medium text-text underline decoration-line decoration-2 underline-offset-4 transition-colors duration-200 hover:decoration-accent";

export default function Contact() {
  return (
    <Section id="contact" label="Contact" title="Let's talk">
      <Reveal delay={0.05}>
        <div className="rounded-2xl border border-line bg-surface p-6 sm:p-10">
          <p className="max-w-xl text-lg text-muted">Open to frontend web and mobile application developer roles.</p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-muted">Email</dt>
              <dd className="mt-1 break-all">
                <a className={link} href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Phone</dt>
              <dd className="mt-1">
                <a className={link} href={profile.phoneHref}>
                  {profile.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">LinkedIn</dt>
              <dd className="mt-1 break-all">
                <a className={link} href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  {profile.linkedinLabel}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Location</dt>
              <dd className="mt-1 font-medium text-text">{profile.location}</dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={`mailto:${profile.email}`}>Email me</ButtonLink>
            <ButtonLink
              href={profile.resumeUrl}
              variant="ghost"
              download={profile.resumeFileName}
              ariaLabel="Download resume (PDF)"
            >
              <DownloadIcon />
              Download Resume
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
