import { ProcessSection } from "@/components/marketing/process-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process",
  description: "How we approach design and development engagements.",
};

export default function ProcessPage() {
  return (
    <div className="pt-[72px]">
      <ProcessSection />
    </div>
  );
}
