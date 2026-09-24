import type { Metadata } from "next";
import { VentrieeHero } from "@/components/marketing/ventriee/ventriee-hero";
import { VentrieeCapabilities } from "@/components/marketing/ventriee/ventriee-capabilities";

export const metadata: Metadata = {
  title: "VENTRIEE — Digital Agency",
  description:
    "Strategy, design, and engineering for startups and enterprises that need more than a template.",
};

export default function VentrieePage() {
  return (
    <>
      <VentrieeHero />
      <VentrieeCapabilities />
    </>
  );
}
