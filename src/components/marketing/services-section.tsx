"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Code2, Layers, Smartphone, Sparkles, Palette, Zap, Globe, Wrench } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Full-stack applications built with Next.js, React, and TypeScript. Fast, scalable, production-ready.",
    tech: ["Next.js", "TypeScript", "React", "Node.js"],
  },
  {
    icon: Layers,
    title: "SaaS Platforms",
    description:
      "Multi-tenant SaaS products with authentication, billing, and real-time data. Built to scale.",
    tech: ["Convex", "Stripe", "PostgreSQL", "Redis"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile experiences with React Native and Expo. One codebase, every device.",
    tech: ["React Native", "Expo", "Swift", "Kotlin"],
  },
  {
    icon: Sparkles,
    title: "AI Integrations",
    description:
      "LLM-powered features, embeddings, and intelligent automation. From chatbots to copilots.",
    tech: ["OpenAI", "LangChain", "Pinecone", "Vercel AI"],
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Research-driven interfaces with design systems that scale. Pixel-perfect, accessible, intentional.",
    tech: ["Figma", "Framer", "Tailwind", "Design Tokens"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Sub-second load times, Core Web Vitals in the green. Lighthouse 90+ on every page.",
    tech: ["Lighthouse", "CDN", "Edge", "Bundle Analysis"],
  },
  {
    icon: Globe,
    title: "SEO & Analytics",
    description:
      "Technical SEO, structured data, and conversion tracking that drives organic growth.",
    tech: ["Schema.org", "GA4", "Search Console", "Ahrefs"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing monitoring, security patches, and updates. Your software stays healthy and secure.",
    tech: ["Monitoring", "CI/CD", "Backups", "24/7 Support"],
  },
];

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-[140px] md:py-[96px] sm:py-[72px]">
      <div className="mb-16 max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
          Capabilities
        </p>
        <h2 className="mt-4 font-sans text-4xl font-medium tracking-tight text-almost-white sm:text-5xl lg:text-6xl">
          What we build
        </h2>
        <p className="mt-4 font-sans text-lg text-steel">
          Full-stack development, design, and growth services for ambitious teams.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
            >
              <Link
                href="/services"
                className="group flex h-full flex-col rounded-[19.2px] border border-[rgba(247,249,250,0.2)] p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-[12px] bg-signal-violet/10 transition-colors group-hover:bg-signal-violet/20">
                  <Icon className="size-5 text-signal-violet" />
                </div>

                <h3 className="font-sans text-xl font-medium text-almost-white">{service.title}</h3>
                <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-steel">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/[0.06] px-2.5 py-1 font-mono text-[11px] text-steel"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-1.5 font-sans text-sm text-signal-violet transition-colors">
                  Learn More
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
