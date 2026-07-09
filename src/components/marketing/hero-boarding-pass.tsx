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
            Your new
          </span>
          <h1 className="mt-2 font-sans text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Digital Agency
          </h1>
          <span
            className="block font-heading text-3xl font-light italic leading-none tracking-tight sm:text-4xl lg:text-5xl"
            style={{ fontStyle: "italic" }}
          >
            with a human touch.
          </span>
          <p className="mt-6 max-w-md font-sans text-lg font-light leading-relaxed text-almost-white/70 sm:text-xl">
            We design and build digital products that earn trust through clarity, evidence, and
            restraint.
          </p>
        </div>

        <div className="w-full shrink-0 lg:w-[420px]">
          <div
            className="rounded-[19.2px] border p-8 sm:p-10"
            style={{
              background: "rgba(237, 195, 196, 0.05)",
              borderColor: "rgba(247, 249, 250, 0.2)",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="font-sans text-xs font-medium uppercase tracking-[0.07em] text-steel">
                Boarding Pass
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3 border-b border-border/20 pb-4">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.05em] text-ash">Origin</p>
                <p className="font-sans text-sm font-medium text-almost-white">LEGACY</p>
              </div>
              <span className="mt-4 font-sans text-sm text-steel">&rarr;</span>
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.05em] text-ash">
                  Destination
                </p>
                <p className="font-sans text-sm font-medium text-almost-white">DS</p>
              </div>
            </div>

            <h3 className="mt-4 font-sans text-2xl font-normal leading-tight tracking-tight text-almost-white sm:text-3xl">
              Deploys on device in minutes
            </h3>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-block rounded-[1584px] px-5 py-2.5 text-center font-sans text-sm text-almost-white transition-opacity hover:opacity-80"
                style={{ background: "rgba(237, 195, 196, 0.05)" }}
              >
                Try now with Google
              </Link>
              <Link
                href="/contact"
                className="inline-block rounded-[1584px] px-5 py-2.5 text-center font-sans text-sm text-almost-white transition-opacity hover:opacity-80"
                style={{ background: "rgba(237, 195, 196, 0.05)" }}
              >
                Try now with Microsoft
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
