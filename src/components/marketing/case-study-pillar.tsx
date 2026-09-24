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
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute left-1/2 top-[10%] h-[min(90vh,820px)] w-[min(100vw,980px)] -translate-x-1/2">
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
    </div>
  );
}
