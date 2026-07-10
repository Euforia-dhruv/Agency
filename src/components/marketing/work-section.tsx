"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Ramagya Sports Academy",
    url: "https://ramagyasportsacademy.com/",
    category: "Sports Academy",
    description:
      "Enterprise website for one of India's leading sports academies with modern UI and CMS.",
    status: "Live",
  },
  {
    name: "Gym 56",
    url: "https://gym-56.vercel.app/",
    category: "Fitness Website",
    description: "Modern fitness and gym website with premium UI and smooth animations.",
    status: "Live",
  },
  {
    name: "Policy Adda",
    url: "https://policyadda.co.in/",
    category: "Insurance Platform",
    description: "Insurance platform for comparing and purchasing insurance policies online.",
    status: "Live",
  },
  {
    name: "Dhruv Portfolio",
    url: "https://dhruvnyx.vercel.app/",
    category: "Portfolio Website",
    description: "Personal portfolio with modern animations and fully responsive design.",
    status: "Live",
  },
  {
    name: "TechSc0ut",
    url: "https://techsc0ut.vercel.app/",
    category: "Tech Community",
    description: "Community platform for technology enthusiasts. (Work in Progress)",
    status: "WIP",
  },
];

export function WorkSection() {
  return (
    <section className="bg-surface py-[140px] md:py-[96px] sm:py-[72px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
            Selected Work
          </p>
          <h2 className="mt-4 font-sans text-4xl font-medium tracking-tight text-almost-white sm:text-5xl lg:text-6xl">
            Real Projects. Real Results.
          </h2>
          <p className="mt-4 font-sans text-lg text-muted-text">
            Premium digital products we&rsquo;ve crafted for clients across industries.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-[19.2px] p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(23, 23, 31, 0.5)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <div className="mb-12 h-[160px] w-full rounded-[12px] bg-gradient-to-br from-signal-violet/10 via-surface-card to-near-black" />

                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[1.2px] text-signal-violet">
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-sans text-2xl font-medium text-almost-white transition-colors group-hover:text-signal-violet">
                      {project.name}
                    </h3>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                      project.status === "Live"
                        ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                        : "border-amber-500/20 bg-amber-500/10 text-amber-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="mt-4 font-sans text-sm leading-relaxed text-muted-text">
                  {project.description}
                </p>

                <div className="mt-6 flex items-center gap-1.5 font-sans text-sm text-almost-white transition-colors group-hover:text-signal-violet">
                  Visit Website
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
