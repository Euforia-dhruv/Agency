import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convex/api";
import { HeroBoardingPass } from "@/components/marketing/hero-boarding-pass";
import { TrustLogos } from "@/components/marketing/trust-logos";
import { AgencyStats } from "@/components/marketing/agency-stats";
import { FeaturedWork } from "@/components/marketing/featured-work";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { FAQSection } from "@/components/marketing/faq-section";
import { CTASection } from "@/components/marketing/cta-section";

export default async function HomePage() {
  const [projects, testimonials, faqs, clients] = await Promise.all([
    fetchQuery(api.projects.getFeatured),
    fetchQuery(api.testimonials.getPublic),
    fetchQuery(api.faqs.list),
    fetchQuery(api.clients.getPublic),
  ]);

  return (
    <>
      <HeroBoardingPass />

      <TrustLogos logos={clients} />

      <AgencyStats />

      <FeaturedWork projects={projects} />

      <TestimonialsSection testimonials={testimonials} />

      <FAQSection faqs={faqs} />

      <CTASection />
    </>
  );
}
