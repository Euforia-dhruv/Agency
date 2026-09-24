"use client";

import Hyperspeed from "@/components/hyperspeed";

export function SpeedSection() {
  return (
    <section className="relative min-h-[80svh] w-full overflow-hidden md:min-h-screen">
      <div className="absolute inset-0 max-md:hidden">
        <Hyperspeed
          effectOptions={{
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [12, 80],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="mx-auto max-w-[1280px] px-4 text-center sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
            Built for Speed
          </p>
          <h2 className="mt-4 font-sans text-[clamp(1.75rem,3vw+0.5rem,3.75rem)] font-medium tracking-tight text-almost-white">
            Performance you can feel.
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-sans text-[clamp(0.9375rem,1vw+0.25rem,1.125rem)] text-steel md:mt-4">
            Every millisecond counts. We optimise every asset, query, and render path to deliver
            sub-second load times.
          </p>
        </div>
      </div>
    </section>
  );
}
