import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const CASE_STUDIES = {
  "fintech-dashboard": {
    title: "Fintech Dashboard Redesign",
    challenge:
      "The client's analytics platform required users to navigate through 15 screens to find basic insights. User research showed that 70% of power users relied on memory to navigate, and time-to-insight averaged 12 minutes.",
    solution:
      "We restructured the information architecture around user goals rather than data sources, built a reusable component library, and implemented progressive disclosure patterns. The new design reduced cognitive load by surfacing the most relevant metrics on a single customizable dashboard.",
    results:
      "Time-to-insight decreased by 40%. User satisfaction scores improved from 3.2 to 4.7 out of 5. Support tickets related to navigation dropped by 60%.",
    techStack: ["Next.js", "TypeScript", "D3.js", "PostgreSQL", "Tailwind CSS"],
  },
  "saas-migration": {
    title: "SaaS Platform Migration",
    challenge:
      "A legacy Rails application was struggling with performance, scalability, and developer velocity. Lighthouse scores were below 50, deployment cycles took 45 minutes, and the team spent 60% of their time on maintenance rather than feature development.",
    solution:
      "We architected a gradual migration strategy, extracting the frontend into a Next.js application while keeping the Rails API during transition. We implemented ISR for marketing pages, optimized database queries, and introduced automated performance budgets in CI/CD.",
    results:
      "Lighthouse scores improved from 45 to 95. Infrastructure costs reduced by 60%. Deployment time dropped from 45 minutes to under 3 minutes. Developer velocity increased 3x.",
    techStack: ["Next.js", "TypeScript", "AWS", "PostgreSQL", "Redis"],
  },
  "ecommerce-experience": {
    title: "E-commerce Experience",
    challenge:
      "The existing e-commerce platform had poor mobile performance (LCP of 8 seconds), low conversion rates on mobile (1.2%), and an inflexible monolithic architecture that made A/B testing difficult.",
    solution:
      "We rebuilt the frontend as a headless Next.js application with ISR for product pages, implemented responsive images with AVIF support, and introduced a design system with accessibility baked in from the start.",
    results:
      "Conversion rate increased by 28%. Page load speed improved by 35%. Mobile LCP dropped from 8s to 1.8s. Accessibility score reached 98.",
    techStack: ["Next.js", "Shopify Storefront API", "Stripe", "Algolia"],
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES[slug as keyof typeof CASE_STUDIES];
  if (!study) return { title: "Not Found" };
  return {
    title: study.title,
    description: study.challenge.slice(0, 160),
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = CASE_STUDIES[slug as keyof typeof CASE_STUDIES];

  if (!study) {
    notFound();
  }

  return (
    <div className="pt-32">
      <article className="mx-auto max-w-[800px] px-6 pb-32">
        <Link
          href="/work"
          className="font-sans text-sm text-steel transition-colors hover:text-almost-white"
        >
          &larr; Back to Work
        </Link>

        <h1 className="mt-8 font-sans text-4xl font-normal leading-tight tracking-tight text-almost-white sm:text-5xl">
          {study.title}
        </h1>

        <section className="mt-16">
          <h2 className="font-mono text-sm font-normal uppercase tracking-[0.2em] text-soft-white">
            Challenge
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-foreground">
            {study.challenge}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-sm font-normal uppercase tracking-[0.2em] text-soft-white">
            Solution
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-foreground">
            {study.solution}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-sm font-normal uppercase tracking-[0.2em] text-soft-white">
            Results
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-foreground">
            {study.results}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-sm font-normal uppercase tracking-[0.2em] text-soft-white">
            Tech Stack
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {study.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-[6px] bg-iron/50 px-3 py-1.5 font-sans text-sm text-graphite"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-16 flex gap-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdw4IlcSamgm0OX-hQ-oG8ZdROOXnBV7JsohBDIcNex98Zsfw/viewform?usp=sharing&ouid=104155249190921591426"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-almost-white bg-near-black px-6 py-3 font-sans text-sm font-normal text-almost-white transition-opacity hover:opacity-90"
          >
            Start Similar Project
          </a>
          <Link
            href="/work"
            className="font-sans text-sm text-steel underline-offset-2 hover:text-almost-white hover:underline"
          >
            Next Project &rarr;
          </Link>
        </div>
      </article>
    </div>
  );
}
