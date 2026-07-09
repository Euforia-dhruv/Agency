import Link from "next/link";
import { AnimatedSection } from "./animated-section";

export function CTASection() {
  return (
    <AnimatedSection className="mx-auto max-w-[1200px] px-6 py-32">
      <div
        className="relative overflow-hidden rounded-[19.2px] border p-12 text-center sm:p-20"
        style={{
          background:
            "linear-gradient(135deg, rgba(175, 80, 255, 0.08) 0%, rgba(175, 80, 255, 0.02) 50%, transparent 100%)",
          borderColor: "rgba(175, 80, 255, 0.15)",
        }}
      >
        <h2 className="font-sans text-3xl font-normal tracking-tight text-almost-white sm:text-4xl">
          Ready to build something great?
        </h2>
        <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-steel">
          Let&apos;s talk about your project. No commitment, just a conversation about what&apos;s
          possible.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-almost-white bg-near-black px-6 py-3 font-sans text-sm text-almost-white transition-all hover:bg-almost-white hover:text-near-black"
          >
            Book a Discovery Call
            <span>&rarr;</span>
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-sans text-sm text-steel transition-colors hover:text-almost-white"
          >
            View Our Work
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
