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
    <section className="bg-near-black py-[64px] md:py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="mb-10 text-center md:mb-16">
          <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
            Our Tools
          </p>
          <h2 className="mt-3 font-sans text-[clamp(1.75rem,3vw+0.5rem,3.75rem)] font-medium tracking-tight text-almost-white md:mt-4">
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
              className="rounded-full border border-white/[0.06] bg-near-black px-4 py-2 font-sans text-xs font-medium text-almost-white transition-all md:px-6 md:py-3 md:text-sm hover:-translate-y-0.5 hover:border-signal-violet/30 hover:text-signal-violet"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
