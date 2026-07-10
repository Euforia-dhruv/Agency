"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

type PartStyle = "sans" | "serif";

interface StepPart {
  text: string;
  style: PartStyle;
}

interface ProcessStep {
  num: string;
  parts: StepPart[];
  description: string;
  tech: string[];
}

const STEPS: ProcessStep[] = [
  {
    num: "01",
    parts: [
      { text: "DISC", style: "sans" },
      { text: "OVER", style: "serif" },
    ],
    description:
      "We understand your business goals, users, competitors, and technical requirements before writing a single line of code.",
    tech: ["React", "TypeScript", "Node.js"],
  },
  {
    num: "02",
    parts: [
      { text: "DE", style: "sans" },
      { text: "SIGN", style: "serif" },
    ],
    description:
      "Wireframes, UI systems, user flows, prototypes, and visual design that bring your product to life.",
    tech: ["Figma", "Tailwind CSS", "Framer Motion"],
  },
  {
    num: "03",
    parts: [
      { text: "DEVE", style: "sans" },
      { text: "LOP", style: "serif" },
    ],
    description:
      "Production-ready frontend and backend using modern technologies, with continuous integration and preview deployments.",
    tech: ["Next.js", "Supabase", "PostgreSQL"],
  },
  {
    num: "04",
    parts: [
      { text: "TE", style: "sans" },
      { text: "ST", style: "serif" },
    ],
    description:
      "QA, optimization, accessibility, SEO, and performance. Every metric is measured before launch.",
    tech: ["Jest", "Playwright", "Lighthouse"],
  },
  {
    num: "05",
    parts: [
      { text: "LAUN", style: "sans" },
      { text: "CH", style: "serif" },
    ],
    description:
      "Deployment, monitoring, analytics, maintenance, and continuous improvements for long-term success.",
    tech: ["AWS", "Docker", "Vercel"],
  },
];

function StepRow({
  step,
  index,
  isExpanded,
  onHoverStart,
  onHoverEnd,
  prefersReducedMotion,
}: {
  step: ProcessStep;
  index: number;
  isExpanded: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  prefersReducedMotion: boolean;
}) {
  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 40, filter: "blur(12px)" }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.35,
        delay: prefersReducedMotion ? 0 : index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div
        role="button"
        tabIndex={0}
        className={cn(
          "group relative w-full overflow-hidden rounded-[20px] border transition-all duration-300 ease-out",
          isExpanded
            ? "border-signal-violet/40 bg-[#17171F]"
            : "border-[rgba(255,255,255,0.08)] bg-[#0F0F12]",
        )}
        style={{ height: "clamp(90px, 10vw, 140px)" }}
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
        onFocus={onHoverStart}
        onBlur={onHoverEnd}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            if (isExpanded) onHoverEnd();
            else onHoverStart();
          }
        }}
      >
        <div className="flex h-full items-center px-8 sm:px-12">
          <span
            className={cn(
              "mr-8 hidden font-mono text-sm font-medium transition-colors duration-300 sm:block",
              isExpanded ? "text-signal-violet" : "text-steel",
            )}
          >
            {step.num}
          </span>

          <h3
            className="flex select-none items-baseline leading-[0.9] tracking-[-0.04em] text-almost-white"
            style={{ fontSize: "clamp(40px, 8vw, 120px)" }}
          >
            {step.parts.map((part, i) => (
              <span
                key={i}
                className={
                  part.style === "sans"
                    ? "font-sans font-extrabold"
                    : "font-heading italic font-normal"
                }
              >
                {part.text}
              </span>
            ))}
          </h3>

          <motion.div
            className="ml-auto hidden shrink-0 items-center sm:flex"
            animate={
              isExpanded ? { x: 8, rotate: -15, scale: 1.15 } : { x: 0, rotate: 0, scale: 1 }
            }
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ArrowDown
              className={cn(
                "size-6 transition-colors duration-300",
                isExpanded ? "text-signal-violet" : "text-steel",
              )}
              style={
                isExpanded ? { filter: "drop-shadow(0 0 8px rgba(175,80,255,0.5))" } : undefined
              }
            />
          </motion.div>
        </div>
      </div>

      {isExpanded && (
        <motion.div
          initial={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10, filter: "blur(4px)" }
          }
          animate={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }
          }
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="overflow-hidden rounded-b-[20px] border-x border-b border-signal-violet/40 bg-[#17171F]"
        >
          <div className="px-8 py-8 sm:px-12 sm:py-10">
            <p className="max-w-2xl font-sans text-base leading-relaxed text-steel sm:text-lg">
              {step.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {step.tech.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: prefersReducedMotion ? 0 : i * 0.06,
                    ease: "easeOut",
                  }}
                  className="rounded-full border border-[rgba(247,249,250,0.12)] px-3 py-1 font-mono text-[11px] text-steel"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {!isExpanded && (
        <p
          className={cn(
            "mt-3 overflow-hidden font-sans text-base leading-relaxed text-steel transition-all duration-300 lg:hidden",
          )}
          style={{
            maxHeight: isExpanded ? "200px" : "0px",
            opacity: isExpanded ? 1 : 0,
          }}
        >
          {step.description}
        </p>
      )}
    </motion.div>
  );
}

export function ProcessSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="w-full bg-near-black py-[140px] md:py-[96px] sm:py-[72px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
            Our Process
          </p>
          <h2 className="mt-4 font-sans text-4xl font-medium tracking-tight text-almost-white sm:text-5xl lg:text-6xl">
            From idea to launch, every step is intentional.
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {STEPS.map((step, i) => (
            <StepRow
              key={step.num}
              step={step}
              index={i}
              isExpanded={expandedIndex === i}
              onHoverStart={() => setExpandedIndex(i)}
              onHoverEnd={() => setExpandedIndex(null)}
              prefersReducedMotion={!!prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
