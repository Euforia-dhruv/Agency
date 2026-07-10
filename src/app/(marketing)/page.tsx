import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convex/api";
import { HeroSection } from "@/components/marketing/hero";
import { TrustSection } from "@/components/marketing/trust-section";
import { ServicesSection } from "@/components/marketing/services-section";
import { WorkSection } from "@/components/marketing/work-section";
import { ProcessSection } from "@/components/marketing/process-section";
import { TechStackSection } from "@/components/marketing/tech-stack-section";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { FAQSection } from "@/components/marketing/faq-section";
import { ContactForm } from "@/components/marketing/contact-form";

export default async function HomePage() {
  const [testimonials, faqs] = await Promise.all([
    fetchQuery(api.testimonials.getPublic).catch(() => []),
    fetchQuery(api.faqs.list).catch(() => []),
  ]);

  return (
    <>
      <HeroSection />

      <TrustSection />

      <ServicesSection />

      <WorkSection />

      <ProcessSection />

      <TechStackSection />

      <TestimonialsSection testimonials={testimonials} />

      <FAQSection faqs={faqs} />

      <section className="mx-auto max-w-[1200px] px-6 py-[140px] md:py-[96px] sm:py-[72px]">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
              Start a Project
            </p>
            <h2 className="mt-4 font-sans text-4xl font-medium tracking-tight text-almost-white sm:text-5xl lg:text-6xl">
              Let&rsquo;s build something incredible.
            </h2>
            <p className="mt-4 font-sans text-lg text-steel">
              Tell us about your project and we&rsquo;ll get back to you within one business day.
            </p>
          </div>

          <div className="mt-16">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
