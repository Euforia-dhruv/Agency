"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, ExternalLink, MonitorPlay } from "lucide-react";
import { LivePreview } from "./live-preview";
import type { ShowreelProject } from "@/lib/showreel-projects";
import { cn } from "@/lib/utils";

interface ShowreelSectionProps {
  projects: ShowreelProject[];
  eyebrow?: string;
  title?: string;
  description?: string;
  showIntro?: boolean;
}

function StatusBadge({ status }: { status: "Live" | "WIP" }) {
  return (
    <span
      className={cn(
        "shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider",
        status === "Live"
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
          : "border-amber-500/30 bg-amber-500/10 text-amber-400",
      )}
    >
      {status}
    </span>
  );
}

function subscribeDesktop(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(min-width: 1024px)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function useIsDesktop(): boolean {
  return useSyncExternalStore(
    subscribeDesktop,
    () => window.matchMedia("(min-width: 1024px)").matches,
    () => false,
  );
}

function ProjectFacts({ project }: { project: ShowreelProject }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {project.highlights.map((item) => (
        <li key={item} className="flex gap-3 font-sans text-sm leading-relaxed text-steel">
          <span
            className="mt-1.5 size-1.5 shrink-0 rounded-full"
            style={{ background: project.accent }}
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectMeta({ project }: { project: ShowreelProject }) {
  return (
    <div className="mt-6 flex flex-wrap gap-1.5">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-steel"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function ProjectActions({ project }: { project: ShowreelProject }) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <Link
        href={`/work/${project.slug}`}
        className="group inline-flex h-12 items-center gap-2 rounded-full bg-signal-violet px-6 font-sans text-sm font-medium text-almost-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(175,80,255,0.35)]"
      >
        Read case study
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 items-center gap-2 rounded-full border border-white/[0.12] px-5 font-sans text-sm text-steel transition-colors hover:border-almost-white/30 hover:text-almost-white"
      >
        <ExternalLink className="size-3.5" />
        {project.displayUrl}
      </a>
    </div>
  );
}

function StaticShowreelCard({
  project,
  index,
  previewPriority,
}: {
  project: ShowreelProject;
  index: number;
  previewPriority: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.2) }}
      className="border-t border-white/[0.06] py-14 first:border-t-0 first:pt-0 lg:py-20"
    >
      <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
              {String(index + 1).padStart(2, "0")} — {project.category}
            </span>
            <StatusBadge status={project.status} />
          </div>
          <h3 className="mt-3 font-sans text-[clamp(1.75rem,3vw+0.4rem,3rem)] font-medium leading-[1.08] tracking-tight text-almost-white">
            {project.name}
          </h3>
          <p className="mt-2 font-heading text-lg italic text-almost-white/80">{project.tagline}</p>
          <p className="mt-4 max-w-xl font-sans text-[15px] leading-relaxed text-steel">
            {project.summary}
          </p>
          <ProjectFacts project={project} />
          <ProjectMeta project={project} />
          <ProjectActions project={project} />
        </div>
        <LivePreview
          url={project.url}
          title={project.name}
          previewMode={project.previewMode}
          previewUrl={project.previewUrl}
          accent={project.accent}
          priority={previewPriority}
          className="lg:sticky lg:top-28"
        />
      </div>
    </motion.article>
  );
}

export function ShowreelSection({
  projects,
  eyebrow = "Selected Work",
  title = "Projects, frame by frame.",
  description = "A scroll-driven tour of live products — real interfaces, verified stacks, and the decisions behind each build.",
  showIntro = true,
}: ShowreelSectionProps) {
  const prefersReduced = useReducedMotion();
  const isDesktop = useIsDesktop();
  const cinematic = isDesktop && !prefersReduced;
  const stackRef = useRef<HTMLDivElement>(null);
  const [scrolledIndex, setScrolledIndex] = useState(0);
  const activeIndex = cinematic ? scrolledIndex : 0;

  const { scrollYProgress } = useScroll({
    target: cinematic ? stackRef : undefined,
    offset: ["start start", "end end"],
  });

  const raw = useTransform(scrollYProgress, [0, 1], [0, projects.length - 0.001]);
  const segment = 1 / projects.length;
  const segmentProgress = useTransform(
    scrollYProgress,
    [activeIndex * segment, (activeIndex + 1) * segment],
    [0, 1],
  );

  useMotionValueEvent(raw, "change", (latest) => {
    if (!cinematic) return;
    const next = Math.min(projects.length - 1, Math.max(0, Math.floor(latest)));
    setScrolledIndex((prev) => (prev === next ? prev : next));
  });

  const active = projects[activeIndex] ?? projects[0];

  return (
    <section
      id="showreel"
      className="relative bg-near-black py-[64px] md:py-[80px] lg:py-[120px]"
      aria-label="Project showreel"
    >
      {showIntro && (
        <div className="mx-auto mb-10 max-w-[1280px] px-4 sm:px-6 md:mb-16">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-sans text-[clamp(1.75rem,3vw+0.5rem,3.75rem)] font-medium tracking-tight text-almost-white">
              {title}
            </h2>
            <p className="mt-2 font-sans text-[clamp(0.9375rem,1vw+0.25rem,1.125rem)] text-steel">
              {description}
            </p>
          </motion.div>
        </div>
      )}

      {cinematic ? (
        <div ref={stackRef} className="relative" style={{ height: `${projects.length * 100}vh` }}>
          <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden pt-[72px]">
            <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-4 sm:px-6">
              <div className="grid min-h-0 flex-1 items-center gap-8 py-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12 lg:py-6">
                <div className="relative min-h-0">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.slug}
                      initial={false}
                      animate={{
                        opacity: activeIndex === index ? 1 : 0,
                        y: activeIndex === index ? 0 : 28,
                        pointerEvents: activeIndex === index ? "auto" : "none",
                      }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 overflow-y-auto pr-1"
                      aria-hidden={activeIndex !== index}
                    >
                      <div className="flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
                            {String(index + 1).padStart(2, "0")} — {project.category}
                          </span>
                          <StatusBadge status={project.status} />
                        </div>
                        <h3 className="mt-3 font-sans text-[clamp(2rem,4vw+0.25rem,3.75rem)] font-medium leading-[1.05] tracking-tight text-almost-white">
                          {project.name}
                        </h3>
                        <p className="mt-2 font-heading text-xl italic text-almost-white/85">
                          {project.tagline}
                        </p>
                        <p className="mt-4 max-w-xl font-sans text-[15px] leading-relaxed text-steel">
                          {project.summary}
                        </p>
                        <ProjectFacts project={project} />
                        <ProjectMeta project={project} />
                        <ProjectActions project={project} />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="relative min-h-0">
                  <div className="relative h-full max-h-[min(72vh,720px)] w-full">
                    {projects.map((project, index) => {
                      const distance = Math.abs(index - activeIndex);
                      if (distance > 1) return null;
                      return (
                        <motion.div
                          key={project.slug}
                          initial={false}
                          animate={{
                            opacity: activeIndex === index ? 1 : 0,
                            scale: activeIndex === index ? 1 : 0.985,
                          }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute inset-0"
                          aria-hidden={activeIndex !== index}
                        >
                          <LivePreview
                            url={project.url}
                            title={project.name}
                            previewMode={project.previewMode}
                            previewUrl={project.previewUrl}
                            accent={project.accent}
                            active={activeIndex === index}
                            priority={index === 0}
                            className="h-full [&>div:last-child]:aspect-auto [&>div:last-child]:h-[calc(100%-41px)]"
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <nav
                className="flex items-center gap-2 overflow-x-auto border-t border-white/[0.06] py-4"
                aria-label="Showreel projects"
              >
                <span className="mr-2 hidden shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[1.6px] text-graphite sm:flex">
                  <MonitorPlay className="size-3.5 text-signal-violet" />
                  Index
                </span>
                {projects.map((project, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={project.slug}
                      type="button"
                      onClick={() => {
                        const stack = stackRef.current;
                        if (!stack) return;
                        const top =
                          stack.getBoundingClientRect().top +
                          window.scrollY +
                          segment * index * stack.offsetHeight;
                        window.scrollTo({ top, behavior: prefersReduced ? "auto" : "smooth" });
                      }}
                      className={cn(
                        "group shrink-0 rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[1.2px] transition-colors",
                        isActive
                          ? "border-signal-violet/50 bg-signal-violet/15 text-almost-white"
                          : "border-white/[0.08] text-steel hover:border-white/20 hover:text-almost-white",
                      )}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span style={isActive ? { color: project.accent } : undefined}>
                        {String(index + 1).padStart(2, "0")}
                      </span>{" "}
                      {project.name}
                    </button>
                  );
                })}
                <div className="ml-auto hidden min-w-[120px] flex-1 items-center gap-2 pl-4 md:flex">
                  <div className="h-px flex-1 bg-white/[0.08]">
                    <motion.div
                      className="h-px bg-signal-violet"
                      style={{
                        scaleX: segmentProgress,
                        transformOrigin: "left",
                      }}
                    />
                  </div>
                  <span className="font-mono text-[10px] text-graphite">
                    {String(activeIndex + 1).padStart(2, "0")}/
                    {String(projects.length).padStart(2, "0")}
                  </span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          {projects.map((project, index) => (
            <StaticShowreelCard
              key={project.slug}
              project={project}
              index={index}
              previewPriority={index === 0}
            />
          ))}
        </div>
      )}

      {cinematic && active && (
        <p className="sr-only" aria-live="polite">
          Showing {active.name}
        </p>
      )}
    </section>
  );
}
