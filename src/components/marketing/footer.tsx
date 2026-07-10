import Link from "next/link";

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Dribbble", href: "#" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/[0.06]" role="contentinfo">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-sans text-lg font-medium text-almost-white">VENTRIEE</p>
            <p className="mt-2 font-sans text-sm text-steel">Software Development Agency</p>
            <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed text-steel">
              We build premium software for ambitious businesses. From startups to enterprises, we
              craft digital products that perform.
            </p>
          </div>

          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.08em] text-steel">
              Navigation
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
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
            <p className="font-sans text-xs font-medium uppercase tracking-[0.08em] text-steel">
              Connect
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
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
                href="mailto:hello@ventriee.com"
                className="font-sans text-sm text-almost-white transition-colors hover:text-signal-violet"
              >
                ventriee.contact@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="font-sans text-xs text-steel">
            &copy; {year} VENTRIEE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
