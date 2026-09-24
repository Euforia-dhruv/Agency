import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/marketing/services-page-content";

export const metadata: Metadata = {
  title: "Web Development Services for Gyms, Schools, Restaurants & Businesses | VENTRIEE",
  description:
    "Custom website development for gyms, schools, restaurants, startups, clinics, hotels, and local businesses. Fast, modern, SEO-optimized sites built with Next.js.",
  openGraph: {
    title: "Web Development Services | VENTRIEE",
    description: "Custom websites for gyms, schools, restaurants, startups, and local businesses.",
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
