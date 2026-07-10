import type { Metadata } from "next";
import { ContactForm } from "@/components/marketing/contact-form";

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
    <div className="pt-[140px]">
      <section className="mx-auto max-w-[1200px] px-6 pb-32">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
            Get in Touch
          </p>
          <h1 className="mt-4 font-sans text-4xl font-medium tracking-tight text-almost-white sm:text-5xl lg:text-6xl">
            Let&rsquo;s build something incredible.
          </h1>
          <p className="mt-4 font-sans text-lg text-steel">
            Tell us about your project. We will get back to you within one business day.
          </p>
        </div>

        <div className="mt-16 max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
