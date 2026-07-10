import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process",
  description: "How we approach design and development engagements.",
};

const STEPS = [
  {
    phase: "01",
    title: "Discover",
    description:
      "We start by understanding your business, users, and goals. Through stakeholder interviews, competitive analysis, and technical audits, we build a shared understanding of what success looks like.",
    duration: "1-2 weeks",
  },
  {
    phase: "02",
    title: "Design",
    description:
      "Based on our findings, we design the experience through iterative prototyping. Each cycle includes design reviews, usability feedback, and refinements. By the end, you have a pixel-perfect blueprint ready for development.",
    duration: "2-4 weeks",
  },
  {
    phase: "03",
    title: "Develop",
    description:
      "We develop using modern tooling with continuous integration and preview deployments. You see progress in real time, with automated quality checks at every step.",
    duration: "4-12 weeks",
  },
  {
    phase: "04",
    title: "Launch",
    description:
      "We handle deployment, performance optimization, and SEO setup. Before going live, we run a full security audit, accessibility check, and load test.",
    duration: "1 week+",
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-[140px]">
      <section className="mx-auto max-w-[1200px] px-6 pb-32">
        <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
          How We Work
        </p>
        <h1 className="mt-4 font-sans text-4xl font-medium tracking-tight text-almost-white sm:text-5xl lg:text-6xl">
          Our Process
        </h1>
        <p className="mt-4 max-w-xl font-sans text-lg text-steel">
          A structured but flexible approach that adapts to your project&rsquo;s specific needs.
        </p>

        <div className="mt-16 space-y-0">
          {STEPS.map((step, i) => (
            <div key={step.phase} className="relative flex gap-8 pb-16 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-signal-violet/30 bg-near-black font-mono text-sm text-signal-violet">
                  {step.phase}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-gradient-to-b from-signal-violet/30 to-transparent" />
                )}
              </div>
              <div className="flex-1 pt-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-sans text-2xl font-medium text-almost-white">
                      {step.title}
                    </h2>
                    <p className="mt-2 max-w-lg font-sans text-sm leading-relaxed text-steel">
                      {step.description}
                    </p>
                  </div>
                  <span className="shrink-0 whitespace-nowrap rounded-[99px] border border-white/[0.06] px-3 py-1 font-mono text-xs text-steel">
                    {step.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
