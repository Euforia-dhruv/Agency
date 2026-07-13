"use client";

import { motion } from "framer-motion";
import { WorkCard } from "./work-card";
import type { ProjectCard } from "@/lib/projects-data";

interface WorkSectionProps {
  projects: (ProjectCard & { previewUrl: string | null })[];
}

export function WorkSection({ projects }: WorkSectionProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="bg-near-black py-[64px] md:py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <motion.div
          className="mb-10 max-w-2xl md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
            Selected Work
          </p>
          <h2 className="mt-3 font-sans text-[clamp(1.75rem,3vw+0.5rem,3.75rem)] font-medium tracking-tight text-almost-white">
            Real Projects. Real Results.
          </h2>
          <p className="mt-2 font-sans text-[clamp(0.9375rem,1vw+0.25rem,1.125rem)] text-steel">
            Premium digital products we&rsquo;ve crafted for clients across industries.
          </p>
        </motion.div>

        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <WorkCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
