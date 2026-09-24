import type { Metadata } from "next";
import { ProjectCTA } from "@/components/marketing/project-cta";
import GlobeDemo from "@/components/globe-demo";
import { ContactCrtWarp } from "@/components/marketing/contact-crt-warp";

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
    <div className="relative pt-[100px] sm:pt-[120px]">
      <ContactCrtWarp />
      <div className="relative z-10">
        <ProjectCTA />
        <GlobeDemo />
      </div>
    </div>
  );
}
