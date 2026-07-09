import Link from "next/link";

export function CoordinateFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/20" role="contentinfo">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-sans text-sm text-almost-white transition-colors hover:text-signal-violet"
            aria-label="Home"
          >
            &copy; {year} Agency
          </Link>
          <Link
            href="/services"
            className="font-sans text-sm text-steel transition-colors hover:text-almost-white"
          >
            Services
          </Link>
          <Link
            href="/work"
            className="font-sans text-sm text-steel transition-colors hover:text-almost-white"
          >
            Work
          </Link>
          <Link
            href="/contact"
            className="font-sans text-sm text-steel transition-colors hover:text-almost-white"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-sans text-xs text-iron">NYC &middot; Global</span>
        </div>
      </div>
    </footer>
  );
}
