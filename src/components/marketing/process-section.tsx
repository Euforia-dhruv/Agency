"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    description:
      "We start by understanding your business, users, and goals. Through stakeholder interviews, competitive analysis, and technical audits, we build a shared vision of success.",
    duration: "1-2 weeks",
  },
  {
    num: "02",
    title: "Design",
    description:
      "We design the experience through iterative prototyping. Each cycle includes design reviews, usability feedback, and refinements until every pixel earns its place.",
    duration: "2-4 weeks",
  },
  {
    num: "03",
    title: "Develop",
    description:
      "We develop using modern tooling with continuous integration and preview deployments. You see progress in real time, with automated quality checks at every step.",
    duration: "4-12 weeks",
  },
  {
    num: "04",
    title: "Launch",
    description:
      "We handle deployment, performance optimization, and SEO setup. Security audit, accessibility check, and load test. Launch day is uneventful — that's the goal.",
    duration: "1 week +",
  },
];

export function ProcessSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-[140px] md:py-[96px] sm:py-[72px]">
      <div className="mb-16 max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
          How We Work
        </p>
        <h2 className="mt-4 font-sans text-4xl font-medium tracking-tight text-almost-white sm:text-5xl lg:text-6xl">
          From idea to launch
        </h2>
        <p className="mt-4 font-sans text-lg text-muted-text">
          A structured but flexible approach that adapts to your project&rsquo;s specific needs.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-[70px] hidden h-px bg-border/20 md:block" />

        <div className="grid gap-12 md:grid-cols-4 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="relative mb-8 flex h-[40px] items-center">
                <span className="z-10 flex size-[40px] items-center justify-center rounded-full border border-border/20 bg-surface-card font-mono text-xs text-signal-violet">
                  {step.num}
                </span>
              </div>
              <h3 className="font-sans text-2xl font-medium text-almost-white">{step.title}</h3>
              <p className="mt-2 font-sans text-sm font-medium text-signal-violet">
                {step.duration}
              </p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-muted-text">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
