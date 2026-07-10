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
    <section className="bg-near-black py-[140px] md:py-[96px] sm:py-[72px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
            Selected Work
          </p>
          <h2 className="mt-4 font-sans text-4xl font-medium tracking-tight text-almost-white sm:text-5xl lg:text-6xl">
            Real Projects. Real Results.
          </h2>
          <p className="mt-4 font-sans text-lg text-steel">
            Premium digital products we&rsquo;ve crafted for clients across industries.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <WorkCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
