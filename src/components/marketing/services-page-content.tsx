"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Camera,
  Dumbbell,
  GraduationCap,
  MousePointerClick,
  ShoppingBag,
  UtensilsCrossed,
} from "lucide-react";
import { ProjectCTA } from "./project-cta";
import { ServicesMoltenMetal } from "./services-molten-metal";
import { GOOGLE_FORM_URL } from "@/lib/constants";

const SERVICES = [
  {
    num: "01",
    icon: Dumbbell,
    title: "Gym Website Development",
    href: "/services/gym-website-development",
    description:
      "Member management, class scheduling, online booking, and payments — built for fitness businesses that want to grow.",
    tags: ["Booking", "Members", "Local SEO"],
    accent: "from-[#7c3aed]/20 to-transparent",
  },
  {
    num: "02",
    icon: GraduationCap,
    title: "School Website Development",
    href: "/services/school-website-development",
    description:
      "LMS integration, parent portals, event calendars, and enrollment flows for schools and educational institutions.",
    tags: ["LMS", "Parents", "Enrollment"],
    accent: "from-[#8b5cf6]/20 to-transparent",
  },
  {
    num: "03",
    icon: UtensilsCrossed,
    title: "Restaurant Website Development",
    href: "/services/restaurant-website-development",
    description:
      "Online ordering, reservations, and menu management for restaurants, cafés, and food brands that need more covers.",
    tags: ["Orders", "Menu", "Reservations"],
    accent: "from-[#a78bfa]/20 to-transparent",
  },
  {
    num: "04",
    icon: Building2,
    title: "Business Website Development",
    href: "/services/business-website-development",
    description:
      "Credibility-first sites for startups, clinics, hotels, agencies, and local businesses — designed to generate leads.",
    tags: ["Leads", "Brand", "CMS"],
    accent: "from-[#6d28d9]/20 to-transparent",
  },
  {
    num: "05",
    icon: ShoppingBag,
    title: "E-Commerce Website Development",
    href: "/services/ecommerce-website-development",
    description:
      "Product management, secure checkout, inventory, and SEO product pages for stores that actually convert.",
    tags: ["Payments", "Inventory", "SEO"],
    accent: "from-[#9b5cf6]/20 to-transparent",
  },
  {
    num: "06",
    icon: Camera,
    title: "Portfolio Website Development",
    href: "/services/portfolio-website-development",
    description:
      "Immersive portfolios for designers, photographers, and creatives — showcase the work, land the next client.",
    tags: ["Showcase", "Motion", "Mobile"],
    accent: "from-[#c084fc]/20 to-transparent",
  },
  {
    num: "07",
    icon: MousePointerClick,
    title: "Landing Page Design",
    href: "/services/landing-page-design",
    description:
      "High-converting landing pages for launches and campaigns, with Framer Motion polish and sub-second loads.",
    tags: ["CRO", "A/B ready", "Fast"],
    accent: "from-[#af50ff]/25 to-transparent",
  },
];

const INDUSTRIES = [
  "Gyms & Fitness",
  "Schools",
  "Restaurants",
  "Startups",
  "Clinics",
  "Hotels",
  "Agencies",
  "E-Commerce",
];

const process = [
  { step: "01", label: "Discover", desc: "Goals, audience, and scope in one call." },
  { step: "02", label: "Design", desc: "UI direction that matches your brand." },
  { step: "03", label: "Build", desc: "Fast, accessible, production-ready code." },
  { step: "04", label: "Launch", desc: "Deploy, SEO, and handoff — then support." },
];

export function ServicesPageContent() {
  return (
    <div className="relative pt-[120px]">
      <ServicesMoltenMetal />

      {/* Hero */}
      <section className="relative z-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-signal-violet/12 blur-[130px]" />
          <div className="absolute right-[-10%] top-[20%] h-[280px] w-[280px] rounded-full bg-[#7c3aed]/10 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-[1200px] px-6 pb-16 sm:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet"
          >
            Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-4 max-w-3xl font-sans text-[clamp(2.25rem,5vw+0.5rem,4.5rem)] font-medium leading-[1.05] tracking-tight text-almost-white"
          >
            Websites that work as hard as{" "}
            <span className="bg-gradient-to-r from-signal-violet via-[#c084fc] to-lavender-mist bg-clip-text text-transparent">
              your business
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-5 max-w-xl font-sans text-lg leading-relaxed text-steel"
          >
            Custom web development for gyms, schools, restaurants, startups, and local businesses.
            Modern stack, obsessive performance, built to grow with you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[52px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-signal-violet px-8 font-sans text-sm font-medium text-almost-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(175,80,255,0.45)]"
            >
              Start Your Project
              <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/work"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/[0.12] bg-white/[0.03] px-8 font-sans text-sm text-steel transition-all duration-300 hover:-translate-y-0.5 hover:border-almost-white/30 hover:text-almost-white"
            >
              See Our Work
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>

          {/* Industry chips */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {INDUSTRIES.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-steel"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-8">
        <div className="mb-8 flex items-end justify-between gap-6 border-b border-white/[0.06] pb-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
              What we build
            </p>
            <h2 className="mt-2 font-sans text-2xl font-medium tracking-tight text-almost-white sm:text-3xl">
              Seven ways we ship
            </h2>
          </div>
          <p className="hidden max-w-xs font-sans text-sm text-steel sm:block">
            Every engagement is scoped to your goals — pick a specialty below or tell us what you
            need.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className={i === SERVICES.length - 1 ? "md:col-span-2 lg:col-span-1" : undefined}
              >
                <Link
                  href={service.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[19.2px] border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal-violet/35 hover:bg-signal-violet/[0.04] hover:shadow-[0_12px_40px_-12px_rgba(175,80,255,0.35)]"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${service.accent}`}
                  />

                  <div className="relative flex items-start justify-between">
                    <div className="inline-flex size-11 items-center justify-center rounded-[12px] border border-white/[0.08] bg-near-black transition-colors duration-300 group-hover:border-signal-violet/40 group-hover:bg-signal-violet/10">
                      <Icon className="size-5 text-signal-violet" />
                    </div>
                    <span className="font-mono text-[11px] tracking-[0.16em] text-steel/70 transition-colors group-hover:text-signal-violet/80">
                      {service.num}
                    </span>
                  </div>

                  <h3 className="relative mt-5 font-sans text-lg font-medium leading-snug text-almost-white">
                    {service.title}
                  </h3>
                  <p className="relative mt-2.5 flex-1 font-sans text-sm leading-relaxed text-steel">
                    {service.description}
                  </p>

                  <div className="relative mt-5 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.06] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-steel"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="relative mt-6 flex items-center gap-1.5 border-t border-white/[0.06] pt-4 font-sans text-sm text-signal-violet">
                    Explore
                    <ArrowUpRight className="size-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process strip */}
      <section className="relative z-10 mx-auto max-w-[1200px] px-6 py-20 sm:py-24">
        <div className="rounded-[19.2px] border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-sm">
              <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
                How it works
              </p>
              <h2 className="mt-3 font-sans text-2xl font-medium tracking-tight text-almost-white sm:text-3xl">
                From brief to launch
              </h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-steel">
                A clear path, no agency theater. You always know what&rsquo;s next.
              </p>
              <Link
                href="/process"
                className="mt-5 inline-flex items-center gap-1.5 font-sans text-sm text-signal-violet transition-transform hover:translate-x-0.5"
              >
                Full process
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <ol className="grid flex-1 gap-4 sm:grid-cols-2 lg:max-w-2xl">
              {process.map((item, i) => (
                <motion.li
                  key={item.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-[14px] border border-white/[0.06] bg-near-black/60 p-5"
                >
                  <span className="font-mono text-[11px] tracking-[0.16em] text-signal-violet">
                    {item.step}
                  </span>
                  <h3 className="mt-2 font-sans text-base font-medium text-almost-white">
                    {item.label}
                  </h3>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-steel">{item.desc}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <ProjectCTA />
      </div>
    </div>
  );
}
