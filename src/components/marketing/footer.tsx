import Link from "next/link";
import { Logo } from "@/components/logo";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Euforia-dhruv" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/[0.06]" role="contentinfo">
      <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 md:py-14 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
          <div className="sm:col-span-2">
            <Logo size="sm" />
            <p className="mt-1.5 font-sans text-xs text-steel sm:text-sm md:mt-2">
              Software Development Agency
            </p>
            <p className="mt-4 max-w-sm font-sans text-xs leading-relaxed text-steel sm:text-sm md:mt-6">
              We build premium software for ambitious businesses. From startups to enterprises, we
              craft digital products that perform.
            </p>
          </div>

          <div>
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-steel sm:text-xs">
              Navigation
            </p>
            <div className="mt-3 flex flex-col gap-2 md:mt-4 md:gap-2.5">
              <Link
                href="/work"
                className="font-sans text-sm text-almost-white transition-colors hover:text-signal-violet"
              >
                Work
              </Link>
              <Link
                href="/services"
                className="font-sans text-sm text-almost-white transition-colors hover:text-signal-violet"
              >
                Services
              </Link>
              <Link
                href="/process"
                className="font-sans text-sm text-almost-white transition-colors hover:text-signal-violet"
              >
                Process
              </Link>
              <Link
                href="/blog"
                className="font-sans text-sm text-almost-white transition-colors hover:text-signal-violet"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="font-sans text-sm text-almost-white transition-colors hover:text-signal-violet"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="font-sans text-sm text-almost-white transition-colors hover:text-signal-violet"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-steel sm:text-xs">
              Connect
            </p>
            <div className="mt-3 flex flex-col gap-2 md:mt-4 md:gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm text-almost-white transition-colors hover:text-signal-violet"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:ventriee.contact@gmail.com"
                className="font-sans text-sm text-almost-white transition-colors hover:text-signal-violet"
              >
                ventriee.contact@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row md:mt-14 md:pt-8">
          <p className="font-sans text-xs text-steel">
            &copy; {year} VENTRIEE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
