import { ProcessSection } from "@/components/marketing/process-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process — How We Build Websites | VENTRIEE",
  description:
    "From discovery to launch — our structured approach to building websites for gyms, schools, restaurants, and local businesses.",
  openGraph: {
    title: "Our Process | VENTRIEE",
    description: "Learn how we design and develop modern websites.",
  },
};

export default function ProcessPage() {
  return (
    <div className="pt-[72px]">
      <ProcessSection />
    </div>
  );
}
