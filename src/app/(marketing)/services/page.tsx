import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Digital product design, development, and consulting services.",
};

const SERVICES = [
  {
    title: "Web Development",
    description:
      "End-to-end development using Next.js, TypeScript, and modern CSS. We ship production applications that are fast, accessible, and maintainable — from landing pages to full SaaS platforms.",
  },
  {
    title: "Product Design",
    description:
      "Research-driven UI/UX design rooted in systems thinking. We create design tokens, component libraries, and interaction patterns that scale across your entire product surface.",
  },
  {
    title: "Technical Architecture",
    description:
      "Architecture reviews, stack evaluation, and migration strategy. We help teams make sound technical decisions that avoid lock-in and reduce long-term maintenance burden.",
  },
  {
    title: "Code Audits & Optimization",
    description:
      "Performance profiling, bundle analysis, and accessibility audits. We identify the issues that matter and provide a clear remediation roadmap with measurable outcomes.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-[140px]">
      <section className="mx-auto max-w-[1200px] px-6 pb-32">
        <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
          Services
        </p>
        <h1 className="mt-4 font-sans text-4xl font-medium tracking-tight text-almost-white sm:text-5xl lg:text-6xl">
          What We Do
        </h1>
        <p className="mt-4 max-w-xl font-sans text-lg text-steel">
          We partner with startups and established teams to design, build, and optimize digital
          products.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href="/contact"
              className="group rounded-[19.2px] border border-[rgba(247,249,250,0.2)] p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal-violet/30"
            >
              <div className="flex items-start justify-between">
                <h2 className="font-sans text-xl font-medium text-almost-white">{service.title}</h2>
                <ArrowUpRight className="size-5 shrink-0 text-steel transition-all duration-300 group-hover:text-signal-violet group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <p className="mt-3 font-sans text-sm leading-relaxed text-steel">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
