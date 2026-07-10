"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/logo";

const SERVICE_MENU_ITEMS = [
  {
    group: "Development",
    items: [
      {
        label: "Web Development",
        href: "/services",
        description: "Full-stack applications with modern frameworks",
      },
      {
        label: "SaaS Applications",
        href: "/services",
        description: "Scalable multi-tenant platforms",
      },
      {
        label: "Mobile Apps",
        href: "/services",
        description: "Native and cross-platform experiences",
      },
      {
        label: "AI Integrations",
        href: "/services",
        description: "LLMs, embeddings, and intelligent automation",
      },
    ],
  },
  {
    group: "Design",
    items: [
      {
        label: "UI/UX Design",
        href: "/services",
        description: "Research-driven product interfaces",
      },
      {
        label: "Brand Identity",
        href: "/services",
        description: "Distinct visual systems and guidelines",
      },
      { label: "Landing Pages", href: "/services", description: "High-conversion marketing sites" },
      { label: "Design Systems", href: "/services", description: "Scalable component libraries" },
    ],
  },
  {
    group: "Growth",
    items: [
      { label: "SEO", href: "/services", description: "Technical and on-page optimization" },
      {
        label: "Performance Optimization",
        href: "/services",
        description: "Sub-second load times and Core Web Vitals",
      },
      { label: "Analytics", href: "/services", description: "Data-driven insights and reporting" },
      { label: "Maintenance", href: "/services", description: "Ongoing support and monitoring" },
    ],
  },
];

interface NavLink {
  readonly label: string;
  readonly href: string;
  readonly description?: string;
}

interface FrostedNavBarProps {
  ctaLabel?: string;
  ctaHref?: string;
  links?: NavLink[];
}

export function FrostedNavBar({
  ctaLabel = "Start Project",
  ctaHref = "/contact",
  links = NAV_LINKS,
}: FrostedNavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const navLinks = links.filter((l) => l.label !== "Services");
  const servicesLink = links.find((l) => l.label === "Services");

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 border-b border-ash/60"
      style={{ background: "rgba(51, 50, 72, 0.7)", backdropFilter: "blur(10px)" }}
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center gap-10 px-6">
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-80">
          <Logo size="lg" className="hidden md:inline-flex" />
          <Logo size="md" className="hidden sm:inline-flex md:hidden" />
          <Logo size="sm" className="sm:hidden" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative font-sans text-[13px] font-medium text-steel transition-colors hover:text-almost-white"
            >
              {link.label}
              <span
                className="absolute -bottom-1.5 left-0 h-px bg-signal-violet transition-all duration-300 group-hover:w-full"
                style={{ width: pathname === link.href ? "100%" : "0%" }}
              />
            </Link>
          ))}

          {servicesLink && (
            <button
              type="button"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setServicesOpen(!servicesOpen)}
              className="group relative flex items-center gap-1.5 font-sans text-[13px] font-medium text-steel transition-colors hover:text-almost-white"
            >
              Services
              <ChevronDown
                className={`size-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
              <span
                className="absolute -bottom-1.5 left-0 h-px bg-signal-violet transition-all duration-300"
                style={{ width: servicesOpen ? "100%" : "0%" }}
              />
            </button>
          )}
        </nav>

        <Link
          href={ctaHref}
          className="ml-auto hidden items-center gap-2 rounded-[999px] bg-signal-violet px-6 py-2.5 font-sans text-[13px] font-medium text-almost-white transition-all hover:-translate-y-0.5 hover:bg-signal-violet hover:shadow-[0_0_20px_rgba(175,80,255,0.4)] md:inline-flex"
        >
          {ctaLabel}
          <ArrowRight className="size-3.5" />
        </Link>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="size-5 text-almost-white" />
          ) : (
            <Menu className="size-5 text-almost-white" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 hidden border-b border-border/10 md:block"
            style={{
              background: "rgba(9, 9, 9, 0.95)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="mx-auto max-w-[1200px] px-6 py-10">
              <div className="grid grid-cols-3 gap-12">
                {SERVICE_MENU_ITEMS.map((group) => (
                  <div key={group.group}>
                    <p className="font-mono text-[10px] uppercase tracking-[1.8px] text-signal-violet">
                      {group.group}
                    </p>
                    <div className="mt-4 space-y-3">
                      {group.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="group/link flex items-start justify-between rounded-lg p-2 transition-all hover:bg-signal-violet/5"
                        >
                          <div>
                            <p className="font-sans text-sm text-almost-white transition-colors group-hover/link:text-signal-violet">
                              {item.label}
                            </p>
                            <p className="mt-0.5 font-sans text-xs text-steel">
                              {item.description}
                            </p>
                          </div>
                          <ArrowUpRight className="mt-1 size-3 shrink-0 text-steel opacity-0 transition-all group-hover/link:opacity-100 group-hover/link:text-signal-violet" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border/10 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-base font-medium text-steel transition-colors hover:text-almost-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={ctaHref}
                className="mt-3 inline-flex items-center gap-2 rounded-[999px] bg-signal-violet px-6 py-3 font-sans text-sm font-medium text-almost-white"
                onClick={() => setMobileOpen(false)}
              >
                {ctaLabel}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
