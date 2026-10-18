import ButtonLink from "@/components/ButtonLink";
import { DownloadIcon } from "@/components/icons";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="home-title">
      <RevealGroup
        stagger={0.1}
        className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-4xl flex-col justify-center px-5 pb-20 pt-16 sm:px-8"
      >
        <RevealItem>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            {profile.location}
          </p>
        </RevealItem>
        <RevealItem>
          <h1
            id="home-title"
            className="mt-6 font-semibold tracking-tight text-text"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.08 }}
          >
            {profile.name}
          </h1>
        </RevealItem>
        <RevealItem>
          <p className="mt-3 text-xl text-text sm:text-2xl">{profile.title}</p>
        </RevealItem>
        <RevealItem>
          <p className="mt-5 max-w-xl text-lg text-muted">{profile.oneLiner}</p>
        </RevealItem>
        <RevealItem>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#projects">View Work</ButtonLink>
            <ButtonLink
              href={profile.resumeUrl}
              variant="ghost"
              download={profile.resumeFileName}
              ariaLabel="Download resume (PDF)"
            >
              <DownloadIcon />
              Download Resume
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              Contact
            </ButtonLink>
          </div>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
