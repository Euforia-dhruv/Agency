import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convex/api";
import { HeroSection } from "@/components/marketing/hero";
import { TrustSection } from "@/components/marketing/trust-section";
import { ServicesSection } from "@/components/marketing/services-section";
import { WorkSection } from "@/components/marketing/work-section";
import { ProcessSection } from "@/components/marketing/process-section";
import { SpeedSection } from "@/components/marketing/speed-section";
import { TechStackSection } from "@/components/marketing/tech-stack-section";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { FAQSection } from "@/components/marketing/faq-section";
import { ProjectCTA } from "@/components/marketing/project-cta";
import { PROJECTS } from "@/lib/projects-data";
import { getWebsitePreview } from "@/lib/preview";

export default async function HomePage() {
  const [testimonials, faqs] = await Promise.all([
    fetchQuery(api.testimonials.getPublic).catch(() => []),
    fetchQuery(api.faqs.list).catch(() => []),
  ]);

  const projectsWithPreviews = await Promise.all(
    PROJECTS.map(async (p) => ({
      ...p,
      previewUrl: await getWebsitePreview(p.url),
    })),
  );

  return (
    <>
      <HeroSection />

      <TrustSection />

      <ServicesSection />

      <WorkSection projects={projectsWithPreviews} />

      <ProcessSection />

      <SpeedSection />

      <TechStackSection />

      <TestimonialsSection testimonials={testimonials} />

      <FAQSection faqs={faqs} />

      <ProjectCTA />
    </>
  );
}
