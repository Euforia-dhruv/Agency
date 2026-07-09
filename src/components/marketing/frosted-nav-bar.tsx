"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

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

interface FrostedNavBarProps {
  brand?: string;
  ctaLabel?: string;
  ctaHref?: string;
  links?: readonly { label: string; href: string }[];
}

export function FrostedNavBar({
  brand = SITE_NAME,
  ctaLabel = "Start a Project",
  ctaHref = "/contact",
  links = NAV_LINKS,
}: FrostedNavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
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

  const navItems = links
    .filter((l) => l.label !== "Services")
    .map((l) => (
      <Link
        key={l.href}
        href={l.href}
        className="font-sans text-xs font-medium uppercase tracking-[0.07em] text-graphite transition-colors hover:text-almost-white"
        style={pathname === l.href ? { color: "var(--color-almost-white)" } : undefined}
      >
        {l.label}
      </Link>
    ));

  return (
    <header
      style={{ background: "rgba(51, 50, 72, 0.7)" }}
      className="fixed top-0 right-0 left-0 z-50 backdrop-blur-[10px]"
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-8 px-6">
        <Link href="/" className="font-sans text-lg font-medium tracking-tight text-almost-white">
          {brand}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems}
          <button
            type="button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center gap-1.5 font-sans text-xs font-medium uppercase tracking-[0.07em] text-graphite transition-colors hover:text-almost-white"
          >
            Services
            <ChevronDown
              className={`size-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
            />
          </button>
        </nav>

        <div className="hidden items-center gap-4 md:flex md:ml-auto">
          <Link
            href={ctaHref}
            className="rounded-lg border border-almost-white bg-near-black px-4 py-2.5 font-sans text-sm font-normal text-almost-white transition-all hover:bg-almost-white hover:text-near-black"
          >
            {ctaLabel}
          </Link>
        </div>

        <button
          type="button"
          className="ml-auto md:hidden"
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
            ref={menuRef}
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

      {mobileOpen && (
        <nav className="border-t border-ash/50 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-xs font-medium uppercase tracking-[0.07em] text-graphite transition-colors hover:text-almost-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              className="mt-2 inline-block rounded-lg border border-almost-white bg-near-black px-4 py-2.5 text-center font-sans text-sm font-normal text-almost-white"
              onClick={() => setMobileOpen(false)}
            >
              {ctaLabel}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
