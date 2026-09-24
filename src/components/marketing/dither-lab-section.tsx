"use client";

import { motion } from "framer-motion";
import DitherShaderInteractive from "@/components/ui/dither-shader-interactive";

export function DitherLabSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-near-black py-[64px] md:py-[80px] lg:py-[120px]">
      <div
        className="absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          background:
            "radial-gradient(ellipse at 30% 0%, rgba(175,80,255,0.25) 0%, transparent 55%)",
        }}
      />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <motion.div
          className="mx-auto mb-10 max-w-2xl text-center md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
            Visual Lab
          </p>
          <h2 className="mt-3 font-sans text-[clamp(1.75rem,3vw+0.5rem,3.75rem)] font-medium tracking-tight text-almost-white">
            Craft you can <span className="font-heading italic">touch</span>.
          </h2>
          <p className="mt-3 font-sans text-[clamp(0.9375rem,1vw+0.25rem,1.125rem)] text-steel">
            A live dithering shader — the kind of experimental detail we bake into the
            products we build. Play with the pattern, grain, and tone.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto w-full max-w-3xl"
        >
          <DitherShaderInteractive />
        </motion.div>
      </div>
    </section>
  );
}
