"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

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
  const pathname = usePathname();

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
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-xs font-medium uppercase tracking-[0.07em] text-graphite transition-colors hover:text-almost-white"
              style={pathname === link.href ? { color: "var(--color-almost-white)" } : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex md:ml-auto">
          <Link
            href={ctaHref}
            className="rounded-lg border border-almost-white bg-near-black px-4 py-2.5 font-sans text-sm font-normal text-almost-white transition-opacity hover:opacity-90"
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
