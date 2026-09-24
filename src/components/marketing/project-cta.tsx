"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, Shield, Sparkles } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdw4IlcSamgm0OX-hQ-oG8ZdROOXnBV7JsohBDIcNex98Zsfw/viewform?usp=sharing&ouid=104155249190921591426";

const cards = [
  {
    icon: Zap,
    title: "Fast Response",
    description: "We usually reply within one business day.",
  },
  {
    icon: Target,
    title: "Tailored Solutions",
    description: "Every proposal is customized to your business.",
  },
  {
    icon: Sparkles,
    title: "End-to-End Development",
    description: "Design, branding, development, deployment and support.",
  },
];

export function ProjectCTA() {
  return (
    <section className="relative mx-auto max-w-[900px] overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-violet/3 blur-[120px]" />
        <div className="absolute right-0 top-2/3 h-[300px] w-[300px] rounded-full bg-signal-violet/2 blur-[80px]" />
      </div>

      <div className="flex flex-col items-center text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet"
        >
          Get in Touch
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-sans text-[clamp(2rem,4vw+0.5rem,4rem)] font-medium leading-[1.08] tracking-tight text-almost-white"
        >
          Let&rsquo;s build something <span className="text-signal-violet">incredible</span>.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-xl font-sans text-[clamp(0.9375rem,1vw+0.25rem,1.125rem)] leading-relaxed text-steel"
        >
          Tell us about your project. It only takes 2–3 minutes to complete our project
          questionnaire.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-[60px] w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-signal-violet to-[#8b3fdb] px-10 font-sans text-[15px] font-medium text-almost-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(175,80,255,0.4)] sm:w-auto"
          >
            Start Your Project
            <ArrowRight className="size-4 transition-all duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="mailto:ventriee.contact@gmail.com"
            className="inline-flex h-[60px] w-full items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] px-8 font-sans text-[15px] text-steel transition-all duration-300 hover:-translate-y-0.5 hover:border-almost-white/30 hover:text-almost-white sm:w-auto"
          >
            Email Us
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          <div className="flex items-center gap-2">
            <Zap className="size-3.5 text-signal-violet" />
            <span className="font-sans text-sm text-steel">Response within 24 hours</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="size-3.5 text-signal-violet" />
            <span className="font-sans text-sm text-steel">Free project consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="size-3.5 text-signal-violet" />
            <span className="font-sans text-sm text-steel">Your information stays private</span>
          </div>
        </motion.div>
      </div>

      {/* Premium cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-16 grid gap-4 sm:grid-cols-3"
      >
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="group rounded-[19.2px] border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal-violet/20 hover:bg-signal-violet/[0.03]"
            >
              <div className="inline-flex size-10 items-center justify-center rounded-[10px] bg-signal-violet/10">
                <Icon className="size-4 text-signal-violet" />
              </div>
              <h3 className="mt-4 font-sans text-sm font-medium text-almost-white">{card.title}</h3>
              <p className="mt-1.5 font-sans text-sm leading-relaxed text-steel">
                {card.description}
              </p>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
