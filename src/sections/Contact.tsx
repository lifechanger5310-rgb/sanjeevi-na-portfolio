import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/ButtonLink";
import { DownloadIcon } from "@/components/icons";
import { profile } from "@/data/content";

export default function Contact() {
  return (
    <Section id="contact" alt>
      <SectionHeading id="contact-title" kicker="Contact" title="Let's talk" />
      <Reveal delay={0.05}>
        <p className="max-w-xl text-muted">Open to frontend web and mobile application developer roles.</p>
        <dl className="mt-8 grid gap-4 text-base sm:grid-cols-2">
          <div>
            <dt className="text-sm text-muted">Email</dt>
            <dd>
              <a className="font-medium text-text underline-offset-4 hover:text-accent-soft hover:underline active:text-accent-soft" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-muted">Phone</dt>
            <dd>
              <a className="font-medium text-text underline-offset-4 hover:text-accent-soft hover:underline active:text-accent-soft" href={profile.phoneHref}>
                {profile.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-muted">LinkedIn</dt>
            <dd>
              <a
                className="font-medium text-text underline-offset-4 hover:text-accent-soft hover:underline active:text-accent-soft"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/sanjeevi-n-a-0758ba235
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-muted">Location</dt>
            <dd className="font-medium text-text">{profile.location}</dd>
          </div>
        </dl>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href={`mailto:${profile.email}`}>Email me</ButtonLink>
          <ButtonLink href={profile.linkedin} variant="ghost" external>
            LinkedIn
          </ButtonLink>
          {profile.resumeUrl && (
            <ButtonLink
              href={profile.resumeUrl}
              variant="ghost"
              download={profile.resumeFileName}
              ariaLabel="Download resume (PDF)"
            >
              <DownloadIcon />
              Download Resume
            </ButtonLink>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
