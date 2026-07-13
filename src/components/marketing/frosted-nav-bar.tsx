"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/logo";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "https://github.com/Euforia-dhruv" },
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

const menuItemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function FrostedNavBar({
  ctaLabel = "Start Project",
  ctaHref = "https://docs.google.com/forms/d/e/1FAIpQLSdw4IlcSamgm0OX-hQ-oG8ZdROOXnBV7JsohBDIcNex98Zsfw/viewform?usp=sharing&ouid=104155249190921591426",
  links = NAV_LINKS,
}: FrostedNavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      lastFocusedRef.current = document.activeElement as HTMLElement;
      setTimeout(() => closeButtonRef.current?.focus(), 350);
    } else {
      document.body.style.overflow = "";
      lastFocusedRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = useCallback(() => setMobileOpen(false), []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [closeMenu],
  );

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-[0_1px_12px_rgba(0,0,0,0.3)] border-b border-white/[0.06]"
          : "border-b border-transparent"
      }`}
      style={{
        height: "clamp(64px, 8vw, 72px)",
        background: "rgba(9, 9, 9, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="mx-auto flex h-full max-w-[1280px] items-center px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-85" aria-label="Home">
          <Logo size="md" className="hidden sm:inline-flex" />
          <Logo size="sm" className="sm:hidden" />
        </Link>

        {/* Desktop nav */}
        <nav
          className="mx-auto hidden items-center justify-center gap-8 md:flex lg:gap-9"
          aria-label="Main navigation"
        >
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative font-sans text-[13px] font-medium transition-all duration-200 ${
                  active ? "text-almost-white" : "text-steel hover:text-almost-white"
                }`}
              >
                {link.label}
                <span
                  className="absolute -bottom-1.5 left-1/2 h-px bg-signal-violet transition-all duration-200 -translate-x-1/2"
                  style={{
                    width: active ? "100%" : "0%",
                    opacity: active ? 1 : 0,
                  }}
                />
                {!active && (
                  <span className="absolute -bottom-1.5 left-1/2 h-px w-0 bg-signal-violet transition-all duration-200 group-hover:w-full -translate-x-1/2" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto hidden h-[46px] items-center gap-2 rounded-full bg-gradient-to-r from-signal-violet to-[#8b3fdb] px-6 font-sans text-[13px] font-medium text-almost-white shadow-[0_0_0px_rgba(175,80,255,0)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(175,80,255,0.4)] md:inline-flex"
        >
          {ctaLabel}
          <ArrowRight className="size-3.5 transition-all duration-200 group-hover:translate-x-0.5" />
        </a>

        {/* Hamburger */}
        <button
          type="button"
          className="relative z-[60] ml-auto flex size-10 items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <div className="relative flex size-5 items-center justify-center">
            <motion.span
              className="absolute block h-[1.5px] w-5 rounded-full bg-almost-white"
              animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute block h-[1.5px] w-5 rounded-full bg-almost-white"
              animate={mobileOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="absolute block h-[1.5px] w-5 rounded-full bg-almost-white"
              animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[55] md:hidden"
            onClick={closeMenu}
            onKeyDown={handleKeyDown}
            aria-modal="true"
            role="dialog"
            aria-label="Navigation menu"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Slide panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 flex h-full w-full max-w-[400px] flex-col border-l border-white/[0.06] bg-near-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{
                paddingTop: "env(safe-area-inset-top)",
                paddingBottom: "env(safe-area-inset-bottom)",
              }}
            >
              {/* Top bar */}
              <div className="flex h-[68px] shrink-0 items-center justify-between border-b border-white/[0.06] px-5">
                <Link
                  href="/"
                  className="transition-opacity hover:opacity-85"
                  onClick={closeMenu}
                  aria-label="Home"
                >
                  <Logo size="sm" />
                </Link>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeMenu}
                  className="relative flex size-10 items-center justify-center rounded-full transition-colors hover:bg-white/[0.06]"
                  aria-label="Close menu"
                >
                  <motion.span
                    className="absolute block h-[1.5px] w-4 rounded-full bg-almost-white"
                    animate={{ rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="absolute block h-[1.5px] w-4 rounded-full bg-almost-white"
                    animate={{ rotate: -45 }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </div>

              {/* Nav links */}
              <nav
                className="flex-1 space-y-1 overflow-y-auto px-5 pt-8"
                aria-label="Mobile navigation"
              >
                {links.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      custom={links.indexOf(link)}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`group flex items-center justify-between rounded-xl px-4 py-3 font-sans text-[28px] font-medium leading-tight tracking-tight transition-all duration-200 hover:translate-x-1 sm:text-[32px] ${
                          active ? "text-signal-violet" : "text-steel hover:text-almost-white"
                        }`}
                      >
                        {link.label}
                        <ExternalLink
                          className={`size-5 transition-opacity ${
                            active ? "opacity-100 text-signal-violet" : "opacity-0"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom section */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + links.length * 0.04 }}
                className="shrink-0 border-t border-white/[0.06] px-5 pt-6 pb-8"
              >
                {/* Primary CTA */}
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex h-[56px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-signal-violet to-[#8b3fdb] font-sans text-[15px] font-medium text-almost-white shadow-[0_0_0px_rgba(175,80,255,0)] transition-all duration-200 active:scale-[0.98]"
                >
                  {ctaLabel}
                  <ArrowRight className="size-4" />
                </a>

                {/* Email */}
                <a
                  href="mailto:ventriee.contact@gmail.com"
                  onClick={closeMenu}
                  className="mt-3 flex h-[48px] w-full items-center justify-center rounded-full border border-white/[0.1] font-sans text-sm text-steel transition-colors hover:border-almost-white/20 hover:text-almost-white"
                >
                  ventriee.contact@gmail.com
                </a>

                {/* Social links */}
                <div className="mt-6 flex items-center justify-center gap-6">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs text-steel transition-colors hover:text-almost-white"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
