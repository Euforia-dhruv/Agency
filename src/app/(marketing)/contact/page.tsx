import type { Metadata } from "next";
import { ProjectCTA } from "@/components/marketing/project-cta";

export const metadata: Metadata = {
  title: "Contact — Start Your Web Development Project | VENTRIEE",
  description:
    "Ready to build your website? Contact VENTRIEE for a free consultation. We build websites for gyms, schools, restaurants, startups, and local businesses.",
  openGraph: {
    title: "Contact VENTRIEE",
    description: "Start your web development project today.",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-[100px] sm:pt-[120px]">
      <ProjectCTA />
    </div>
  );
}
