"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Code2, Layers, Smartphone, Sparkles, Palette, Zap, Globe, Wrench } from "lucide-react";
import CardSwap, { Card } from "@/components/card-swap";
import ExpandableProfileCard from "@/components/ui/expandable-profile-card";

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
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-[64px] sm:py-[80px] lg:py-[120px]">
      <div className="mb-12 flex items-start justify-between gap-12 lg:mb-16">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
            Capabilities
          </p>
          <h2 className="mt-3 font-sans text-[clamp(1.75rem,3vw+0.5rem,3.75rem)] font-medium tracking-tight text-almost-white sm:mt-4">
            What we build
          </h2>
          <p className="mt-3 font-sans text-[clamp(0.9375rem,1vw+0.25rem,1.125rem)] text-steel sm:mt-4">
            Full-stack development, design, and growth services for ambitious teams.
          </p>
        </div>

        <div className="relative hidden w-[300px] shrink-0 lg:block" style={{ height: 300 }}>
          <CardSwap
            width={260}
            height={200}
            cardDistance={40}
            verticalDistance={50}
            delay={4000}
            skewAmount={3}
            easing="elastic"
            containerStyle={{ transform: "translate(10%, 10%)" }}
          >
            <Card
              style={{
                background: "rgba(9,9,9,0.9)",
                border: "1px solid rgba(175,80,255,0.3)",
                padding: 24,
                borderRadius: "19.2px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  color: "#af50ff",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "1.8px",
                }}
              >
                Gym Websites
              </p>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 22,
                  color: "#f7f9fa",
                  margin: "6px 0 0",
                  fontStyle: "italic",
                  lineHeight: 1.1,
                }}
              >
                Member management
              </p>
            </Card>
            <Card
              style={{
                background: "rgba(9,9,9,0.9)",
                border: "1px solid rgba(247,249,250,0.2)",
                padding: 24,
                borderRadius: "19.2px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  color: "#af50ff",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "1.8px",
                }}
              >
                School Websites
              </p>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 22,
                  color: "#f7f9fa",
                  margin: "6px 0 0",
                  fontStyle: "italic",
                  lineHeight: 1.1,
                }}
              >
                LMS & parent portals
              </p>
            </Card>
            <Card
              style={{
                background: "rgba(9,9,9,0.9)",
                border: "1px solid rgba(247,249,250,0.2)",
                padding: 24,
                borderRadius: "19.2px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  color: "#af50ff",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "1.8px",
                }}
              >
                Restaurant Websites
              </p>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 22,
                  color: "#f7f9fa",
                  margin: "6px 0 0",
                  fontStyle: "italic",
                  lineHeight: 1.1,
                }}
              >
                Online ordering
              </p>
            </Card>
            <Card
              style={{
                background: "rgba(9,9,9,0.9)",
                border: "1px solid rgba(247,249,250,0.2)",
                padding: 24,
                borderRadius: "19.2px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  color: "#af50ff",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "1.8px",
                }}
              >
                E-Commerce
              </p>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 22,
                  color: "#f7f9fa",
                  margin: "6px 0 0",
                  fontStyle: "italic",
                  lineHeight: 1.1,
                }}
              >
                Online stores that sell
              </p>
            </Card>
          </CardSwap>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {services.map((service, i) => {
          const Icon = service.icon;
          const techTags = (
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {service.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/[0.06] px-2 py-0.5 font-mono text-[10px] text-steel sm:px-2.5 sm:py-1 sm:text-[11px]"
                >
                  {t}
                </span>
              ))}
            </div>
          );
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
            >
              <ExpandableProfileCard
                layoutKey={`service-${service.title}`}
                eyebrow="Capability"
                title={service.title}
                icon={<Icon />}
                preview={
                  <p className="line-clamp-2 font-sans text-sm leading-relaxed text-steel">
                    {service.description}
                  </p>
                }
                content={
                  <div className="flex flex-col gap-6">
                    <p className="text-almost-white/80">{service.description}</p>
                    <div>
                      <h4 className="mb-3 font-sans text-sm font-medium text-almost-white">
                        Tech Stack
                      </h4>
                      {techTags}
                    </div>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 font-sans text-sm text-signal-violet transition-transform hover:translate-x-0.5"
                    >
                      Learn More
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                }
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
