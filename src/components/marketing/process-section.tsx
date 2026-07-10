"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SplitFlapText } from "@/components/splitflap-text";
import MagnetLines from "@/components/magnet-lines";

interface StepPart {
  text: string;
  style: "sans" | "serif";
}

interface ProcessStep {
  num: string;
  parts: StepPart[];
  description: string;
  deliverables: string[];
  timeline: string;
  technologies: string[];
}

const STEPS: ProcessStep[] = [
  {
    num: "01",
    parts: [
      { text: "DISC", style: "sans" },
      { text: "OVER", style: "serif" },
    ],
    description:
      "Understanding your business goals, users, competitors and technical requirements before writing a single line of code.",
    deliverables: ["Product Strategy", "Technical Planning", "Wireframes", "Architecture"],
    timeline: "2-5 Days",
    technologies: ["Next.js", "React", "TypeScript"],
  },
  {
    num: "02",
    parts: [
      { text: "DE", style: "sans" },
      { text: "SIGN", style: "serif" },
    ],
    description:
      "Creating modern interfaces and seamless user experiences through research, wireframes, and prototyping.",
    deliverables: ["UI Design", "UX Research", "Prototypes", "Design System"],
    timeline: "1-2 Weeks",
    technologies: ["Figma", "Tailwind CSS", "Framer Motion"],
  },
  {
    num: "03",
    parts: [
      { text: "DEVEL", style: "sans" },
      { text: "OP", style: "serif" },
    ],
    description:
      "Building scalable, production-ready applications using modern technologies and best practices.",
    deliverables: ["Frontend", "Backend", "API Design", "Database"],
    timeline: "2-6 Weeks",
    technologies: ["Next.js", "Supabase", "PostgreSQL"],
  },
  {
    num: "04",
    parts: [
      { text: "TE", style: "sans" },
      { text: "ST", style: "serif" },
    ],
    description:
      "Performance optimization, quality assurance, responsiveness testing, and security review.",
    deliverables: ["QA Report", "Performance Report", "Security Audit"],
    timeline: "1 Week",
    technologies: ["Jest", "Playwright", "Lighthouse"],
  },
  {
    num: "05",
    parts: [
      { text: "DEP", style: "sans" },
      { text: "LOY", style: "serif" },
    ],
    description:
      "CI/CD pipeline setup, cloud deployment, domain configuration, monitoring, and analytics.",
    deliverables: ["CI/CD Pipeline", "Cloud Infrastructure", "Monitoring", "Analytics"],
    timeline: "3-5 Days",
    technologies: ["AWS", "Docker", "Vercel"],
  },
  {
    num: "06",
    parts: [
      { text: "SCA", style: "sans" },
      { text: "LE", style: "serif" },
    ],
    description:
      "Continuous improvements, new features, performance tuning, and long-term support.",
    deliverables: ["Feature Updates", "Maintenance", "Support", "Optimization"],
    timeline: "Ongoing",
    technologies: ["AWS", "Datadog", "Sentry"],
  },
];

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

function StepCard({
  step,
  index,
  isExpanded,
  onToggle,
  prefersReducedMotion,
}: {
  step: ProcessStep;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  prefersReducedMotion: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parallaxX, setParallaxX] = useState(0);
  const [arrowPhase, setArrowPhase] = useState<"idle" | "slidLeft" | "slidRight">("idle");

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!cardRef.current || prefersReducedMotion) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      setParallaxX((x - 0.5) * 8);
    },
    [prefersReducedMotion],
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
    setArrowPhase("slidLeft");
    setTimeout(() => setArrowPhase("slidRight"), 150);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setParallaxX(0);
    setArrowPhase("idle");
  };

  const arrowX = arrowPhase === "idle" ? 0 : arrowPhase === "slidLeft" ? -6 : 6;

  return (
    <motion.div
      layout={!prefersReducedMotion}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 80 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.8,
        delay: prefersReducedMotion ? 0 : index * 0.12,
        ease: easing,
      }}
      className="w-full"
    >
      <motion.div
        ref={cardRef}
        layout={!prefersReducedMotion}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="rounded-[19.2px] border transition-colors duration-500"
        style={{
          background: isExpanded || isHovered ? "rgba(247, 249, 250, 0.03)" : "transparent",
          borderColor:
            isExpanded || isHovered ? "rgba(175, 80, 255, 0.3)" : "rgba(247, 249, 250, 0.2)",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          className="relative flex cursor-pointer select-none items-center px-8 sm:px-12"
          style={{
            height: "clamp(80px, 10vw, 130px)",
            transform: prefersReducedMotion ? "none" : `translateX(${isHovered ? 20 : 0}px)`,
            transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span
            className={cn(
              "mr-8 hidden font-mono text-lg font-medium transition-colors duration-500 sm:block",
              isHovered || isExpanded ? "text-signal-violet" : "text-steel",
            )}
            style={{
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {step.num}
          </span>

          <h3
            className="flex select-none items-baseline leading-[0.9] text-almost-white"
            style={{
              fontSize: "clamp(40px, 8vw, 130px)",
              letterSpacing: isHovered ? "-0.06em" : "-0.04em",
              transition: "letter-spacing 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {step.parts.map((part, i) => (
              <span
                key={i}
                className={
                  part.style === "sans" ? "font-sans font-extrabold" : "font-heading italic"
                }
                style={
                  part.style === "serif"
                    ? {
                        WebkitTextStroke: isHovered
                          ? "0px transparent"
                          : "1px rgba(247,249,250,0.55)",
                        color: isHovered ? "#f7f9fa" : "transparent",
                        transition:
                          "color 0.5s cubic-bezier(0.16, 1, 0.3, 1), -webkit-text-stroke 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      }
                    : undefined
                }
              >
                {part.text}
              </span>
            ))}
          </h3>

          <motion.div
            className="ml-auto flex shrink-0 items-center"
            animate={{
              x: arrowX + (isHovered ? parallaxX * 0.3 : 0),
              rotate: isHovered ? -45 : 0,
            }}
            transition={{ duration: 0.5, ease: easing }}
          >
            <ArrowRight
              className={cn(
                "size-5 transition-colors duration-500 sm:size-6",
                isHovered || isExpanded ? "text-signal-violet" : "text-steel",
              )}
              style={
                isHovered
                  ? {
                      filter: "drop-shadow(0 0 12px rgba(175,80,255,0.4))",
                    }
                  : undefined
              }
            />
          </motion.div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={
                prefersReducedMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
              }
              animate={
                prefersReducedMotion
                  ? { opacity: 1, height: "auto" }
                  : { opacity: 1, height: "auto" }
              }
              exit={
                prefersReducedMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
              }
              transition={{ duration: 0.4, ease: easing }}
              className="overflow-hidden"
            >
              <div className="mx-8 h-px bg-[rgba(247,249,250,0.08)] sm:mx-12" />
              <div className="grid gap-8 px-8 py-10 sm:px-12 sm:grid-cols-2 lg:grid-cols-4">
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  animate={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: prefersReducedMotion ? 0 : 0.05,
                    ease: easing,
                  }}
                  className="sm:col-span-2 lg:col-span-4"
                >
                  <p className="max-w-2xl font-sans text-base leading-relaxed text-steel sm:text-lg">
                    {step.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  animate={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: prefersReducedMotion ? 0 : 0.1,
                    ease: easing,
                  }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[1.8px] text-steel">
                    Deliverables
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {step.deliverables.map((item) => (
                      <li key={item} className="font-sans text-sm text-almost-white">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  animate={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: prefersReducedMotion ? 0 : 0.15,
                    ease: easing,
                  }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[1.8px] text-steel">
                    Timeline
                  </p>
                  <p className="mt-3 font-sans text-sm text-almost-white">{step.timeline}</p>
                </motion.div>

                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  animate={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: prefersReducedMotion ? 0 : 0.2,
                    ease: easing,
                  }}
                  className="sm:col-span-2 lg:col-span-1"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[1.8px] text-steel">
                    Technologies
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {step.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={
                          prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                        }
                        animate={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: prefersReducedMotion ? 0 : 0.25 + i * 0.05,
                          ease: easing,
                        }}
                        className="rounded-[6px] border border-[rgba(247,249,250,0.12)] px-2.5 py-1 font-mono text-[11px] text-steel"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export function ProcessSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-near-black py-[140px] md:py-[96px] sm:py-[72px]">
      <div className="pointer-events-none absolute left-0 top-1/2 z-0 -translate-y-1/2 opacity-[0.03]">
        <MagnetLines
          rows={7}
          columns={7}
          containerSize="50vmin"
          lineColor="#f7f9fa"
          lineWidth="0.4vmin"
          lineHeight="3vmin"
          baseAngle={0}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="mb-20">
          <SplitFlapText
            text="OUR PROCESS"
            as="p"
            staggerDelay={80}
            flipInterval={60}
            minFlips={6}
            maxFlips={10}
            className="font-mono text-[10px] uppercase tracking-[1.8px] text-steel"
            filledClassName="font-mono text-[10px] uppercase tracking-[1.8px] text-signal-violet"
          />
          <h2 className="mt-8 font-sans text-4xl font-medium tracking-tight text-almost-white sm:text-5xl lg:text-6xl">
            From idea to launch,
            <br />
            every step is intentional.
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {STEPS.map((step, i) => (
            <StepCard
              key={step.num}
              step={step}
              index={i}
              isExpanded={expandedIndex === i}
              onToggle={() => setExpandedIndex(expandedIndex === i ? null : i)}
              prefersReducedMotion={!!prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
