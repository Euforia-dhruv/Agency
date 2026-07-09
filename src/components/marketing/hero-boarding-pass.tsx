import Link from "next/link";

export function HeroBoardingPass() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #0a0a1a 0%, #1a0a2e 30%, #2d1b4e 50%, #1a0a2e 70%, #090909 100%)",
        }}
      />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 pt-32 pb-24 lg:flex-row lg:items-center lg:pt-24">
        <div className="flex-1">
          <span
            className="font-heading text-5xl font-light italic leading-none tracking-tight sm:text-7xl lg:text-8xl"
            style={{ fontStyle: "italic" }}
          >
            We build
          </span>
          <h1 className="mt-2 font-sans text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Software That Grows
          </h1>
          <span
            className="block font-heading text-3xl font-light italic leading-none tracking-tight sm:text-4xl lg:text-5xl"
            style={{ fontStyle: "italic" }}
          >
            Businesses.
          </span>
          <p className="mt-6 max-w-md font-sans text-lg font-light leading-relaxed text-almost-white/70 sm:text-xl">
            VENTRIEE is a freelance software development agency crafting fast, scalable, and premium
            digital experiences for startups, creators, and businesses.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-almost-white bg-near-black px-6 py-3 font-sans text-sm text-almost-white transition-all hover:bg-almost-white hover:text-near-black"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-sans text-sm text-steel transition-colors hover:text-almost-white"
            >
              View Our Work &rarr;
            </Link>
          </div>
        </div>

        <div className="w-full shrink-0 lg:w-[420px]">
          <div
            className="rounded-[19.2px] border p-8 sm:p-10"
            style={{
              background: "rgba(175, 80, 255, 0.05)",
              borderColor: "rgba(247, 249, 250, 0.2)",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="font-sans text-xs font-medium uppercase tracking-[0.07em] text-signal-violet">
                VENTRIEE
              </span>
            </div>

            <div className="mt-4 border-b border-border/20 pb-4">
              <p className="font-sans text-xs uppercase tracking-[0.05em] text-ash">Software</p>
              <p className="font-sans text-sm font-medium text-almost-white">Development Agency</p>
            </div>

            <h3 className="mt-4 font-sans text-xl font-normal leading-tight tracking-tight text-almost-white sm:text-2xl">
              We build custom software for clients.
            </h3>

            <ul className="mt-4 space-y-2">
              {[
                "Web Development",
                "UI / UX Design",
                "Mobile Apps",
                "AI Integrations",
                "API Development",
                "Performance Optimization",
              ].map((service) => (
                <li key={service} className="flex items-center gap-2 font-sans text-sm text-steel">
                  <span className="size-1.5 rounded-full bg-signal-violet" />
                  {service}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block rounded-[8px] border border-almost-white bg-near-black px-5 py-2.5 text-center font-sans text-sm text-almost-white transition-all hover:bg-almost-white hover:text-near-black"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
