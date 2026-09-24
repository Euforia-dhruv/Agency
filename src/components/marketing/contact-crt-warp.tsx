"use client";

import CRTWarp from "@/components/ui/crt-warp";

export function ContactCrtWarp() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 opacity-60">
        <CRTWarp
          color="#c755f7"
          backgroundColor="#05010a"
          speed={0.45}
          curvature={0.28}
          scanlineStrength={0.22}
          scanlineFrequency={200}
          waveAmplitude={0.28}
          waveFrequency={2.4}
          bloom={1.4}
          bloomRadius={1}
          noise={0.08}
          vignette={0.2}
          brightness={1.1}
          pixelation={1}
          rgbShift={0.014}
          mouseReact
          mouseStrength={0.45}
          dpr={1}
          fps={30}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-near-black/75 via-near-black/45 to-near-black/90" />
    </div>
  );
}
