import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies and client work.",
};

const CASE_STUDIES = [
  {
    title: "Ramagya Sports Academy",
    slug: "ramagya-sports-academy",
    description:
      "A comprehensive sports academy management platform with athlete tracking, coach scheduling, and performance analytics.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Gym 56",
    slug: "gym-56",
    description:
      "Modern gym management system with member check-ins, class booking, billing, and progress tracking.",
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
  },
  {
    title: "Policy Adda",
    slug: "policy-adda",
    description:
      "Insurance policy comparison and purchase platform with real-time quote generation and document management.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "Dhruv Portfolio",
    slug: "dhruv-portfolio",
    description:
      "A premium portfolio website showcasing creative work with smooth animations and a distinctive design system.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "TechSc0ut",
    slug: "techsc0ut",
    description:
      "Technology scouting platform that helps businesses discover and evaluate emerging tech solutions.",
    tags: ["Next.js", "TypeScript", "AI"],
  },
];

export default function WorkPage() {
  return (
    <div className="pt-[140px]">
      <section className="mx-auto max-w-[1200px] px-6 pb-32">
        <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
          Our Work
        </p>
        <h1 className="mt-4 font-sans text-4xl font-medium tracking-tight text-almost-white sm:text-5xl lg:text-6xl">
          Case Studies
        </h1>
        <p className="mt-4 max-w-xl font-sans text-lg text-muted-text">
          Selected projects that demonstrate our approach and outcomes.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group rounded-[28px] border border-white/[0.06] bg-[#17171F] p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal-violet/30 hover:shadow-[0_0_30px_rgba(175,80,255,0.12)]"
            >
              <h2 className="font-sans text-xl font-medium text-almost-white transition-colors group-hover:text-signal-violet">
                {study.title}
              </h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted-text">
                {study.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[99px] border border-white/[0.06] px-3 py-1 font-sans text-xs text-muted-text"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
