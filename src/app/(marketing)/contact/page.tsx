import type { Metadata } from "next";
import { StampedSectionHeading } from "@/components/marketing/stamped-section-heading";
import { ContactForm } from "@/components/marketing/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to discuss your project.",
};

export default function ContactPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-[1200px] px-6 pb-32">
        <StampedSectionHeading>Contact</StampedSectionHeading>
        <p className="mt-6 max-w-xl font-sans text-lg font-light leading-relaxed text-steel">
          Tell us about your project. We will get back to you within one business day.
        </p>

        <div className="mt-16 max-w-lg">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
