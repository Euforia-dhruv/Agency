import { ExternalLink } from "lucide-react";
import { AnimatedSection } from "./animated-section";

export interface FeaturedProject {
  name: string;
  url: string;
  category: string;
  description: string;
  status?: string;
}

interface FeaturedProjectsProps {
  projects?: FeaturedProject[];
}

const defaultProjects: FeaturedProject[] = [
  {
    name: "Ramagya Sports Academy",
    url: "https://ramagyasportsacademy.com/",
    category: "Sports Academy",
    description: "Enterprise website for one of India's leading sports academies.",
  },
  {
    name: "Gym 56",
    url: "https://gym-56.vercel.app/",
    category: "Fitness Website",
    description: "Modern fitness and gym website with premium UI.",
  },
  {
    name: "TechSc0ut",
    url: "https://techsc0ut.vercel.app/",
    category: "Tech Community",
    description: "Community platform for technology enthusiasts. (Work in Progress)",
  },
  {
    name: "Dhruv Portfolio",
    url: "https://dhruvnyx.vercel.app/",
    category: "Portfolio Website",
    description: "Personal portfolio with modern animations and responsive design.",
  },
  {
    name: "Policy Adda",
    url: "https://policyadda.co.in/",
    category: "Insurance Platform",
    description: "Insurance platform for comparing and purchasing insurance policies online.",
  },
];

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const items = projects ?? defaultProjects;
  if (items.length === 0) return null;

  return (
    <AnimatedSection className="mx-auto max-w-[1200px] px-6 py-32">
      <div className="text-center">
        <h2 className="font-mono text-5xl font-normal uppercase leading-[0.9] tracking-[0.2em] text-soft-white md:text-7xl">
          Real Projects. Real Results.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-sm leading-relaxed text-steel">
          We&apos;ve helped businesses, creators, and organizations build fast, modern, and scalable
          digital experiences.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => (
          <div
            key={project.name}
            className="group flex flex-col rounded-[19.2px] border border-border/20 bg-near-black p-8 transition-all hover:border-signal-violet/30 hover:bg-signal-violet/[0.02]"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-sans text-xl font-normal tracking-tight text-almost-white transition-colors group-hover:text-signal-violet">
                {project.name}
              </h3>
              <span className="shrink-0 rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-sans text-[11px] font-medium uppercase tracking-wider text-emerald-400">
                {project.status ?? "Live"}
              </span>
            </div>

            <p className="mt-2 font-sans text-xs uppercase tracking-[0.08em] text-signal-violet">
              {project.category}
            </p>

            <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-steel">
              {project.description}
            </p>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-sans text-sm text-almost-white transition-all hover:text-signal-violet"
            >
              Visit Website
              <ExternalLink className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
