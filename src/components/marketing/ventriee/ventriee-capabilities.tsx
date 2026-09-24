"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";

interface Capability {
  title: string;
  description: string;
  technologies: string[];
  ctaLabel: string;
  ctaHref: string;
  caseStudyLabel?: string;
  caseStudyHref?: string;
}

const capabilities: Capability[] = [
  {
    title: "Web Design",
    description:
      "User-centered interfaces that balance aesthetics with conversion. Every pixel serves a purpose, from layout grids to micro-interactions.",
    technologies: ["Figma", "Framer", "Prototyping", "Design Systems"],
    ctaLabel: "View Web Design Work",
    ctaHref: "/work",
    caseStudyLabel: "Case Study: Ramagya Sports Academy",
    caseStudyHref: "/work/ramagya-sports-academy",
  },
  {
    title: "Web Development",
    description:
      "Full-stack applications built with modern frameworks. Fast, scalable, and maintainable code that ships with confidence.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    ctaLabel: "View Web Development Work",
    ctaHref: "/work",
    caseStudyLabel: "Case Study: Gym 56",
    caseStudyHref: "/work/gym-56",
  },
  {
    title: "UI / UX Design",
    description:
      "End-to-end product design from research to high-fidelity prototypes. We map user journeys and build interfaces people love to use.",
    technologies: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    ctaLabel: "View UI/UX Work",
    ctaHref: "/work",
  },
  {
    title: "Brand Identity",
    description:
      "Distinct brand systems that communicate your values. Logos, typography, color systems, and guidelines that scale across every touchpoint.",
    technologies: ["Logo Design", "Brand Strategy", "Guidelines", "Visual Identity"],
    ctaLabel: "See Brand Identity",
    ctaHref: "/work",
  },
  {
    title: "SEO Optimization",
    description:
      "Technical and on-page SEO that drives organic growth. Structured data, performance optimization, and content strategy in one package.",
    technologies: ["Technical SEO", "Content Strategy", "Analytics", "Performance"],
    ctaLabel: "Learn About SEO",
    ctaHref: "/services",
  },
  {
    title: "Performance Optimization",
    description:
      "Lighthouse scores that actually matter. We optimise Core Web Vitals, reduce bundle sizes, and deliver sub-second load times.",
    technologies: ["Core Web Vitals", "Lazy Loading", "CDN", "Image Optimization"],
    ctaLabel: "View Performance Case Studies",
    ctaHref: "/work",
  },
  {
    title: "CMS Development",
    description:
      "Headless CMS architectures that give your team control. Content modelling, preview workflows, and editorial experiences that don't get in the way.",
    technologies: ["Sanity", "Contentful", "Convex", "Strapi", "WordPress"],
    ctaLabel: "Explore CMS Solutions",
    ctaHref: "/services",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing monitoring, updates, and security patches. We keep your site healthy so you can focus on growing your business.",
    technologies: ["Monitoring", "Security Patches", "Backups", "24/7 Support"],
    ctaLabel: "Get in Touch",
    ctaHref: "/contact",
  },
];

export function VentrieeCapabilities() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="capabilities" className="mx-auto max-w-[1200px] px-6 py-32">
      <h2 className="font-mono text-5xl font-normal uppercase leading-[0.9] tracking-[0.2em] text-soft-white md:text-7xl">
        Capabilities
      </h2>

      <div className="mt-16">
        {capabilities.map((item, index) => {
          const isOpen = expandedIndex === index;

          return (
            <div key={item.title}>
              <button
                type="button"
                onClick={() => toggle(index)}
                className="group flex w-full items-center justify-between border-t border-border/20 py-6 text-left transition-colors hover:border-signal-violet/30 md:py-8"
                aria-expanded={isOpen}
                aria-controls={`capability-${index}`}
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="font-mono text-[10px] uppercase tracking-[1.8px] text-soft-white md:text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-xl font-light leading-none tracking-[-0.02em] text-almost-white transition-colors group-hover:text-signal-violet md:text-3xl lg:text-4xl">
                    {item.title}
                  </span>
                </div>

                <div className="flex items-center gap-3 md:gap-6">
                  <span className="hidden items-center gap-1.5 rounded-full border border-border/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.07em] text-steel transition-colors group-hover:border-signal-violet/30 group-hover:text-signal-violet md:flex">
                    Read More
                    <Plus
                      className={`size-3 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </span>
                  <ArrowUpRight
                    className={`size-4 text-steel transition-all duration-300 group-hover:text-signal-violet ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`capability-${index}`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-signal-violet/10 pb-8 pt-6 md:pb-10 md:pt-8">
                      <p className="max-w-2xl font-sans text-sm leading-relaxed text-steel md:text-base">
                        {item.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-border/10 bg-iron/20 px-3 py-1 font-mono text-[11px] text-ash"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap items-center gap-4">
                        <Link
                          href={item.ctaHref}
                          className="rounded-lg border border-almost-white bg-near-black px-5 py-2.5 font-sans text-sm text-almost-white transition-all hover:bg-almost-white hover:text-near-black"
                        >
                          {item.ctaLabel}
                        </Link>
                        {item.caseStudyLabel && item.caseStudyHref && (
                          <Link
                            href={item.caseStudyHref}
                            className="font-sans text-sm text-signal-violet transition-colors hover:text-lavender-mist"
                          >
                            {item.caseStudyLabel} &rarr;
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
