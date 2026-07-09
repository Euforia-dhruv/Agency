import type { Metadata } from "next";
import Link from "next/link";
import { StampedSectionHeading } from "@/components/marketing/stamped-section-heading";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies and client work.",
};

const CASE_STUDIES = [
  {
    title: "Fintech Dashboard Redesign",
    slug: "fintech-dashboard",
    description:
      "Redesigned a complex financial analytics platform, reducing time-to-insight by 40% through information architecture improvements and a new component library.",
    tags: ["Next.js", "D3.js", "PostgreSQL"],
  },
  {
    title: "SaaS Platform Migration",
    slug: "saas-migration",
    description:
      "Migrated a legacy Rails monolith to a modern Next.js architecture, improving Lighthouse scores from 45 to 95 and reducing infrastructure costs by 60%.",
    tags: ["Next.js", "TypeScript", "AWS"],
  },
  {
    title: "E-commerce Experience",
    slug: "ecommerce-experience",
    description:
      "Built a headless commerce platform with real-time inventory, achieving a 28% increase in conversion rate and 35% improvement in page load speed.",
    tags: ["Next.js", "Shopify", "Stripe"],
  },
];

export default function WorkPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-[1200px] px-6">
        <StampedSectionHeading>Case Studies</StampedSectionHeading>
        <p className="mt-6 max-w-xl font-sans text-lg font-light leading-relaxed text-steel">
          Selected projects that demonstrate our approach and outcomes.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group rounded-[19.2px] border border-border/20 p-8 transition-colors hover:border-almost-white/40"
            >
              <h3 className="font-sans text-xl font-normal leading-tight tracking-tight text-almost-white transition-colors">
                {study.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-steel">
                {study.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[6px] bg-iron/50 px-2 py-1 font-sans text-xs text-graphite"
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
