"use client";

import { motion } from "framer-motion";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
  "Prisma",
  "Docker",
  "AWS",
  "OpenAI",
  "Convex",
];

export function TechStackSection() {
  return (
    <section className="bg-surface py-[140px] md:py-[96px] sm:py-[72px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
            Our Tools
          </p>
          <h2 className="mt-4 font-sans text-4xl font-medium tracking-tight text-almost-white sm:text-5xl">
            Built with the best
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-full border border-white/[0.06] bg-surface-card px-6 py-3 font-sans text-sm font-medium text-almost-white transition-all hover:-translate-y-0.5 hover:border-signal-violet/30 hover:text-signal-violet"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
