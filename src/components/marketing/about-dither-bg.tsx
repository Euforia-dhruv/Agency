"use client";

import { DitherShader } from "@/components/ui/dither-shader";

const DITHER_SRC =
  "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=3432&auto=format&fit=crop";

export function AboutDitherBg() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 opacity-45 mix-blend-luminosity">
        <DitherShader
          src={DITHER_SRC}
          gridSize={4}
          ditherMode="bayer"
          colorMode="grayscale"
          brightness={-0.15}
          contrast={1.15}
          threshold={0.45}
          animated
          animationSpeed={0.012}
          className="h-full w-full"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-near-black/80 via-near-black/55 to-near-black/90" />
    </div>
  );
}
