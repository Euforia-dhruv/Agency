"use client";
import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

const colors = ["#af50ff", "#e1bdff", "#7c3aed"];

function arcColor(i: number) {
  return colors[i % colors.length];
}

const sampleArcs = [
  {
    order: 1,
    startLat: 23.3441,
    startLng: 85.3096,
    endLat: 28.6139,
    endLng: 77.209,
    arcAlt: 0.1,
    color: arcColor(0),
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: arcColor(1),
  },
  {
    order: 1,
    startLat: 23.3441,
    startLng: 85.3096,
    endLat: -1.303396,
    endLng: 36.852443,
    arcAlt: 0.4,
    color: arcColor(2),
  },
  {
    order: 2,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: arcColor(3),
  },
  {
    order: 2,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 23.3441,
    endLng: 85.3096,
    arcAlt: 0.3,
    color: arcColor(4),
  },
  {
    order: 2,
    startLat: 23.3441,
    startLng: 85.3096,
    endLat: 36.162809,
    endLng: -115.119411,
    arcAlt: 0.4,
    color: arcColor(5),
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 23.3441,
    endLng: 85.3096,
    arcAlt: 0.3,
    color: arcColor(6),
  },
  {
    order: 3,
    startLat: 21.3099,
    startLng: -157.8581,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: arcColor(7),
  },
  {
    order: 3,
    startLat: 23.3441,
    startLng: 85.3096,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.35,
    color: arcColor(8),
  },
  {
    order: 4,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: 23.3441,
    endLng: 85.3096,
    arcAlt: 0.5,
    color: arcColor(9),
  },
  {
    order: 4,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 23.3441,
    endLng: 85.3096,
    arcAlt: 0.6,
    color: arcColor(10),
  },
  {
    order: 4,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.1,
    color: arcColor(11),
  },
  {
    order: 5,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: arcColor(12),
  },
  {
    order: 5,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.2,
    color: arcColor(13),
  },
  {
    order: 5,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.2,
    color: arcColor(14),
  },
  {
    order: 6,
    startLat: 23.3441,
    startLng: 85.3096,
    endLat: 1.094136,
    endLng: -63.34546,
    arcAlt: 0.6,
    color: arcColor(15),
  },
  {
    order: 6,
    startLat: 37.5665,
    startLng: 126.978,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.1,
    color: arcColor(16),
  },
  {
    order: 6,
    startLat: 23.3441,
    startLng: 85.3096,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: arcColor(17),
  },
  {
    order: 7,
    startLat: 48.8566,
    startLng: -2.3522,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.1,
    color: arcColor(18),
  },
  {
    order: 7,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: arcColor(19),
  },
  {
    order: 8,
    startLat: -8.833221,
    startLng: 13.264837,
    endLat: -33.936138,
    endLng: 18.436529,
    arcAlt: 0.2,
    color: arcColor(20),
  },
  {
    order: 8,
    startLat: 49.2827,
    startLng: -123.1207,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.2,
    color: arcColor(21),
  },
  {
    order: 8,
    startLat: 23.3441,
    startLng: 85.3096,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: arcColor(22),
  },
  {
    order: 9,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: arcColor(23),
  },
  {
    order: 9,
    startLat: 23.3441,
    startLng: 85.3096,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.7,
    color: arcColor(24),
  },
  {
    order: 9,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.5,
    color: arcColor(25),
  },
  {
    order: 10,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: 28.6139,
    endLng: 77.209,
    arcAlt: 0.7,
    color: arcColor(26),
  },
  {
    order: 10,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.3,
    color: arcColor(27),
  },
  {
    order: 10,
    startLat: 23.3441,
    startLng: 85.3096,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.35,
    color: arcColor(28),
  },
  {
    order: 11,
    startLat: 41.9028,
    startLng: 12.4964,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: arcColor(29),
  },
  {
    order: 11,
    startLat: 23.3441,
    startLng: 85.3096,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.25,
    color: arcColor(30),
  },
  {
    order: 11,
    startLat: 23.3441,
    startLng: 85.3096,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: arcColor(31),
  },
  {
    order: 12,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.1,
    color: arcColor(32),
  },
  {
    order: 12,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 23.3441,
    endLng: 85.3096,
    arcAlt: 0.3,
    color: arcColor(33),
  },
  {
    order: 12,
    startLat: 23.3441,
    startLng: 85.3096,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.3,
    color: arcColor(34),
  },
  {
    order: 13,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 23.3441,
    endLng: 85.3096,
    arcAlt: 0.3,
    color: arcColor(35),
  },
  {
    order: 13,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: arcColor(36),
  },
  {
    order: 13,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.1,
    color: arcColor(37),
  },
  {
    order: 14,
    startLat: -33.936138,
    startLng: 18.436529,
    endLat: 21.395643,
    endLng: 39.883798,
    arcAlt: 0.3,
    color: arcColor(38),
  },
];

export default function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#12061f",
    showAtmosphere: true,
    atmosphereColor: "#af50ff",
    atmosphereAltitude: 0.22,
    emissive: "#af50ff",
    emissiveIntensity: 0.12,
    shininess: 0.9,
    polygonColor: "rgba(225, 189, 255, 0.55)",
    ambientLight: "#e1bdff",
    directionalLeftLight: "#af50ff",
    directionalTopLight: "#ffffff",
    pointLight: "#af50ff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 23.3441, lng: 85.3096 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  return (
    <div className="relative flex h-auto w-full flex-row items-center justify-center bg-black py-16 md:py-24">
      <div className="relative mx-auto h-[28rem] w-full max-w-7xl overflow-hidden px-4 md:h-[40rem]">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="relative z-20"
        >
          <p className="text-center font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
            Worldwide
          </p>
          <h2 className="mt-3 text-center font-sans text-xl font-medium tracking-tight text-almost-white md:text-4xl">
            Built in India. <span className="font-heading italic">Shipped</span>{" "}
            worldwide.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center font-sans text-sm font-light text-steel md:text-base">
            We partner with teams across time zones — drag the globe, every arc is a
            collaboration.
          </p>
        </motion.div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-40 select-none bg-gradient-to-b from-transparent to-black" />
        <div className="absolute -bottom-20 z-10 h-full w-full md:h-full">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
