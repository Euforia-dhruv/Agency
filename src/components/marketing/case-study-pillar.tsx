"use client";

import LightPillar from "@/components/ui/light-pillar";

interface CaseStudyPillarProps {
  topColor?: string;
  bottomColor?: string;
}

export function CaseStudyPillar({
  topColor = "#5227FF",
  bottomColor = "#FF9FFC",
}: CaseStudyPillarProps) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0">
        <LightPillar
          topColor={topColor}
          bottomColor={bottomColor}
          intensity={0.85}
          rotationSpeed={0.25}
          glowAmount={0.004}
          pillarWidth={3.0}
          pillarHeight={0.4}
          noiseIntensity={0.35}
          pillarRotation={0}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-near-black/40 via-transparent to-near-black/70" />
    </div>
  );
}
