import type { Metadata } from "next";
import { StampedSectionHeading } from "@/components/marketing/stamped-section-heading";
import { FeatureRowCard } from "@/components/marketing/feature-row-card";

export const metadata: Metadata = {
  title: "Services",
  description: "Digital product design, development, and consulting services.",
};

const SERVICES = [
  {
    title: "Web Development",
    description:
      "End-to-end development using Next.js, TypeScript, and modern CSS. We ship production applications that are fast, accessible, and maintainable — from landing pages to full SaaS platforms.",
    href: "/contact",
  },
  {
    title: "Product Design",
    description:
      "Research-driven UI/UX design rooted in systems thinking. We create design tokens, component libraries, and interaction patterns that scale across your entire product surface.",
    href: "/contact",
  },
  {
    title: "Technical Architecture",
    description:
      "Architecture reviews, stack evaluation, and migration strategy. We help teams make sound technical decisions that avoid lock-in and reduce long-term maintenance burden.",
    href: "/contact",
  },
  {
    title: "Code Audits & Optimization",
    description:
      "Performance profiling, bundle analysis, and accessibility audits. We identify the issues that matter and provide a clear remediation roadmap with measurable outcomes.",
    href: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-[1200px] px-6">
        <StampedSectionHeading>Services</StampedSectionHeading>
        <p className="mt-6 max-w-xl font-sans text-lg font-light leading-relaxed text-steel">
          We partner with startups and established teams to design, build, and optimize digital
          products. Every engagement is scoped to your specific context — no cookie-cutter
          deliverables.
        </p>

        <div className="mt-16 space-y-2">
          {SERVICES.map((service) => (
            <FeatureRowCard
              key={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
