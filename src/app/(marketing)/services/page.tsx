import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Services for Gyms, Schools, Restaurants & Businesses | VENTRIEE",
  description:
    "Custom website development for gyms, schools, restaurants, startups, clinics, hotels, and local businesses. Fast, modern, SEO-optimized sites built with Next.js.",
  openGraph: {
    title: "Web Development Services | VENTRIEE",
    description: "Custom websites for gyms, schools, restaurants, startups, and local businesses.",
  },
};

const SERVICES = [
  {
    title: "Gym Website Development",
    href: "/services/gym-website-development",
    description:
      "Modern websites for fitness businesses with member management, class scheduling, online booking, and payment integration.",
  },
  {
    title: "School Website Development",
    href: "/services/school-website-development",
    description:
      "Professional websites for educational institutions with LMS integration, parent portals, event calendars, and enrollment management.",
  },
  {
    title: "Restaurant Website Development",
    href: "/services/restaurant-website-development",
    description:
      "Beautiful websites for restaurants, cafes, and food businesses with online ordering, reservations, and menu management.",
  },
  {
    title: "Business Website Development",
    href: "/services/business-website-development",
    description:
      "Professional websites for startups, clinics, hotels, agencies, and local businesses. Built to establish credibility and generate leads.",
  },
  {
    title: "E-Commerce Website Development",
    href: "/services/ecommerce-website-development",
    description:
      "Custom online stores with product management, secure payments, inventory tracking, and SEO-optimized product pages.",
  },
  {
    title: "Portfolio Website Development",
    href: "/services/portfolio-website-development",
    description:
      "Stunning portfolio websites for designers, photographers, artists, and creatives. Showcase your work and land more clients.",
  },
  {
    title: "Landing Page Design",
    href: "/services/landing-page-design",
    description:
      "High-converting landing pages for product launches, campaigns, and lead generation. Built with Framer Motion animations.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-[140px]">
      <section className="mx-auto max-w-[1200px] px-6 pb-32">
        <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
          Services
        </p>
        <h1 className="mt-4 font-sans text-4xl font-medium tracking-tight text-almost-white sm:text-5xl lg:text-6xl">
          Websites That Work for Your Business
        </h1>
        <p className="mt-4 max-w-xl font-sans text-lg text-steel">
          Custom web development for gyms, schools, restaurants, startups, and local businesses.
          Fast, modern, and built to grow with you.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-[19.2px] border border-[rgba(247,249,250,0.2)] p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal-violet/30"
            >
              <div className="flex items-start justify-between">
                <h2 className="font-sans text-xl font-medium text-almost-white">{service.title}</h2>
                <ArrowUpRight className="size-5 shrink-0 text-steel transition-all duration-300 group-hover:text-signal-violet group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <p className="mt-3 font-sans text-sm leading-relaxed text-steel">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
