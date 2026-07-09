import type { Metadata } from "next";
import { StampedSectionHeading } from "@/components/marketing/stamped-section-heading";

export const metadata: Metadata = {
  title: "Process",
  description: "How we approach design and development engagements.",
};

const STEPS = [
  {
    phase: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, users, and goals. Through stakeholder interviews, competitive analysis, and technical audits, we build a shared understanding of what success looks like.",
    duration: "1-2 weeks",
  },
  {
    phase: "02",
    title: "Strategy",
    description:
      "Based on our findings, we define the scope, architecture, and roadmap. You get a detailed proposal with clear deliverables, timelines, and investment — no ambiguity, no surprises.",
    duration: "1 week",
  },
  {
    phase: "03",
    title: "Design",
    description:
      "We design the experience through iterative prototyping. Each cycle includes design reviews, usability feedback, and refinements. By the end, you have a pixel-perfect blueprint ready for development.",
    duration: "2-4 weeks",
  },
  {
    phase: "04",
    title: "Build",
    description:
      "We develop using modern tooling with continuous integration and preview deployments. You see progress in real time, with automated quality checks at every step.",
    duration: "4-12 weeks",
  },
  {
    phase: "05",
    title: "Launch",
    description:
      "We handle deployment, performance optimization, and SEO setup. Before going live, we run a full security audit, accessibility check, and load test. Launch day is uneventful — that's the goal.",
    duration: "1 week",
  },
  {
    phase: "06",
    title: "Support",
    description:
      "Post-launch, we provide ongoing support, monitoring, and iterative improvements. We stay with you to ensure the product continues to perform and evolve as your needs change.",
    duration: "Ongoing",
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-[1200px] px-6">
        <StampedSectionHeading>Process</StampedSectionHeading>
        <p className="mt-6 max-w-xl font-sans text-lg font-light leading-relaxed text-steel">
          A structured but flexible approach that adapts to your project&apos;s specific needs.
          Every engagement follows these phases.
        </p>

        <div className="mt-16 space-y-12">
          {STEPS.map((step) => (
            <div
              key={step.phase}
              className="relative border-l border-border/20 pl-8 pb-8 last:pb-0"
            >
              <span className="absolute -left-3 top-0 flex size-6 items-center justify-center rounded-full bg-near-black font-mono text-xs text-steel">
                {step.phase}
              </span>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-sans text-xl font-normal text-almost-white">{step.title}</h3>
                  <p className="mt-2 max-w-lg font-sans text-sm leading-relaxed text-foreground">
                    {step.description}
                  </p>
                </div>
                <span className="shrink-0 font-sans text-sm text-steel">{step.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
