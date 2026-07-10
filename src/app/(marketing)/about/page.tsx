import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about our team and approach.",
};

const PRINCIPLES = [
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
];

export default function AboutPage() {
  return (
    <div className="pt-[140px]">
      <section className="mx-auto max-w-[1200px] px-6 pb-32">
        <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
          About Us
        </p>
        <h1 className="mt-4 font-sans text-4xl font-medium tracking-tight text-almost-white sm:text-5xl lg:text-6xl">
          We build software that businesses love to use.
        </h1>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div>
            <p className="font-sans text-base leading-relaxed text-muted-text">
              We are a small, senior team of designers and engineers who believe that the best
              digital products are built by focused teams with deep expertise, not by large agencies
              with layered management.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-muted-text">
              Every engagement is led by a partner, not a junior account manager. We keep our team
              small intentionally — it means every project gets the attention it deserves, and every
              client has direct access to the people doing the work.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/[0.06] bg-[#17171F] p-10">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.07em] text-muted-text">
              Principles
            </p>
            <ul className="mt-6 space-y-6">
              {PRINCIPLES.map((principle) => (
                <li key={principle.title}>
                  <h3 className="font-sans text-base font-medium text-almost-white">
                    {principle.title}
                  </h3>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-muted-text">
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
