"use client";

import GradientWaves from "@/components/ui/gradient-waves";

export function AboutGradientWaves() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 opacity-75 mix-blend-screen">
        <GradientWaves
          horizonColor="#5227FF"
          waveColor="#FF9FFC"
          crestColor="#FFFFFF"
          speed={0.35}
          amplitude={2.4}
          waveScale={0.55}
          waveRatio={0.9}
          swell={35}
          turbulence={18}
          tilt={1.15}
          zoom={1.0}
          height={5.5}
          fogDepth={16}
          detail="medium"
          brightness={0.9}
          opacity={0.8}
          mouseInteraction
          parallaxStrength={0.45}
          grain
          grainIntensity={0.04}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-near-black/70 via-near-black/45 to-near-black/85" />
    </div>
  );
}
