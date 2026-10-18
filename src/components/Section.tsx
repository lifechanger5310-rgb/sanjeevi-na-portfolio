import type { ReactNode } from "react";
import SectionHeading from "./SectionHeading";

/** Standard section: generous vertical space, one heading, content below. */
export default function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <div className="mx-auto w-full max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading id={`${id}-title`} label={label} title={title} />
        {children}
      </div>
    </section>
  );
}
