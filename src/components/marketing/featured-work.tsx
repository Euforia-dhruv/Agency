import Link from "next/link";
import { StampedSectionHeading } from "./stamped-section-heading";
import { AnimatedSection } from "./animated-section";

interface FeaturedProject {
  _id: string;
  title: string;
  slug: string;
  challenge?: string;
  solution?: string;
  results?: string;
  coverImage?: string;
}

interface FeaturedWorkProps {
  projects: FeaturedProject[];
}

export function FeaturedWork({ projects }: FeaturedWorkProps) {
  if (projects.length === 0) return null;

  return (
    <AnimatedSection className="mx-auto max-w-[1200px] px-6 py-32">
      <StampedSectionHeading>Featured Work</StampedSectionHeading>

      <div className="mt-16 space-y-8">
        {projects.map((project, i) => (
          <Link
            key={project._id}
            href={`/work/${project.slug}`}
            className="group block rounded-[19.2px] border border-border/20 p-8 transition-all hover:border-signal-violet/30 hover:bg-signal-violet/[0.02] sm:p-10"
          >
            <span className="font-sans text-xs text-steel">0{i + 1}</span>
            <h3 className="mt-3 font-sans text-2xl font-normal tracking-tight text-almost-white transition-colors group-hover:text-signal-violet sm:text-3xl">
              {project.title}
            </h3>
            {project.challenge && (
              <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-steel line-clamp-2">
                {project.challenge}
              </p>
            )}
            <div className="mt-6 flex items-center gap-2 font-sans text-sm text-signal-violet">
              View Case Study
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </AnimatedSection>
  );
}
