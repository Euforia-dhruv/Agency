import type { Metadata } from "next";
import { StampedSectionHeading } from "@/components/marketing/stamped-section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about our team and approach.",
};

export default function AboutPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-[1200px] px-6">
        <StampedSectionHeading>About</StampedSectionHeading>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-light italic leading-tight text-almost-white">
              We design and build digital products that earn trust through clarity, evidence, and
              restraint.
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-foreground">
              We are a small, senior team of designers and engineers who believe that the best
              digital products are built by focused teams with deep expertise, not by large agencies
              with layered management.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-steel">
              Every engagement is led by a partner, not a junior account manager. We keep our team
              small intentionally — it means every project gets the attention it deserves, and every
              client has direct access to the people doing the work.
            </p>
          </div>

          <div className="rounded-[19.2px] border border-border/20 p-10">
            <h3 className="font-sans text-sm font-medium uppercase tracking-[0.07em] text-ash">
              Principles
            </h3>
            <ul className="mt-6 space-y-6">
              {[
                {
                  title: "Evidence over opinion",
                  desc: "We make decisions based on data, research, and testing — not gut feelings or industry trends.",
                },
                {
                  title: "Simplicity is the goal",
                  desc: "Every feature, line of code, and design element should earn its place. If it doesn't add value, it adds complexity.",
                },
                {
                  title: "Transparency builds trust",
                  desc: "We share our process, our progress, and our thinking openly. No black boxes, no surprises.",
                },
              ].map((principle) => (
                <li key={principle.title}>
                  <h4 className="font-sans text-base font-medium text-almost-white">
                    {principle.title}
                  </h4>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-steel">
                    {principle.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
