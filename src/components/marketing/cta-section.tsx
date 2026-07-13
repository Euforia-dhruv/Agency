import Link from "next/link";
import { AnimatedSection } from "./animated-section";

export function CTASection() {
  return (
    <AnimatedSection className="mx-auto max-w-[1280px] px-4 py-[64px] sm:px-6 md:py-[80px] lg:py-[120px]">
      <div
        className="relative overflow-hidden rounded-[19.2px] border p-6 text-center sm:p-10 md:p-12 lg:p-20"
        style={{
          background:
            "linear-gradient(135deg, rgba(175, 80, 255, 0.08) 0%, rgba(175, 80, 255, 0.02) 50%, transparent 100%)",
          borderColor: "rgba(175, 80, 255, 0.15)",
        }}
      >
        <h2 className="font-sans text-[clamp(1.5rem,2.5vw+0.5rem,2.5rem)] font-normal tracking-tight text-almost-white">
          Ready to build something great?
        </h2>
        <p className="mx-auto mt-3 max-w-md font-sans text-sm leading-relaxed text-steel md:mt-4">
          Let&apos;s talk about your project. No commitment, just a conversation about what&apos;s
          possible.
        </p>
        <div className="mt-6 flex flex-col items-center gap-4 md:mt-8 sm:flex-row sm:justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdw4IlcSamgm0OX-hQ-oG8ZdROOXnBV7JsohBDIcNex98Zsfw/viewform?usp=sharing&ouid=104155249190921591426"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-almost-white bg-near-black px-6 py-3 font-sans text-sm text-almost-white transition-all hover:bg-almost-white hover:text-near-black"
          >
            Start a Project
            <span>&rarr;</span>
          </a>
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
