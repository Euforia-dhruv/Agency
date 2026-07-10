"use client";

import Hyperspeed from "@/components/hyperspeed";

export function SpeedSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
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
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
            Built for Speed
          </p>
          <h2 className="mt-4 font-sans text-4xl font-medium tracking-tight text-almost-white sm:text-5xl lg:text-6xl">
            Performance you can feel.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-lg text-steel">
            Every millisecond counts. We optimise every asset, query, and render path to deliver
            sub-second load times.
          </p>
        </div>
      </div>
    </section>
  );
}
