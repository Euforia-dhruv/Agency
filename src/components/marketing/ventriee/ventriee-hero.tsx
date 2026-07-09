import Link from "next/link";

export function VentrieeHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          <p className="font-heading text-5xl italic leading-[0.8] tracking-[-0.03em] text-almost-white md:text-7xl lg:text-[88px]">
            We build
          </p>
          <h1 className="mt-4 font-sans text-5xl font-light leading-[1.2] tracking-[-0.04em] text-almost-white md:text-7xl lg:text-[88px]">
            Digital Products
          </h1>
          <p className="mt-4 font-heading text-5xl italic leading-[0.8] tracking-[-0.03em] text-almost-white md:text-7xl lg:text-[88px]">
            That Perform.
          </p>
          <p className="mt-8 max-w-lg font-sans text-[20px] font-light leading-[1.5] tracking-[-0.2px] text-steel">
            Strategy, design, and engineering for startups and enterprises that need more than a
            template.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <Link
              href="mailto:hello@ventriee.com"
              className="rounded-lg border border-almost-white bg-near-black px-6 py-3 font-sans text-base font-normal text-almost-white transition-all hover:bg-almost-white hover:text-near-black"
            >
              Start a Project
            </Link>
            <Link
              href="#capabilities"
              className="font-sans text-sm text-steel transition-colors hover:text-almost-white"
            >
              Explore Capabilities &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-24 flex items-center gap-4 border-t border-border/20 pt-8">
          <span className="font-mono text-[10px] uppercase tracking-[1.8px] text-soft-white">
            VENTRIEE &mdash; EST. 2024
          </span>
        </div>
      </div>
    </section>
  );
}
