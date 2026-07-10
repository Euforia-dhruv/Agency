import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { SERVICE_DETAILS } from "@/lib/services";
import Script from "next/script";

export async function generateStaticParams() {
  return Object.keys(SERVICE_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug];
  if (!service) return {};

  return {
    title: service.seoTitle,
    description: service.seoDesc,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDesc,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug];
  if (!service) notFound();

  return (
    <>
      <Script
        id="schema-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: {
              "@type": "ProfessionalService",
              name: "VENTRIEE",
              url: "https://ventriee.in",
            },
            areaServed: "India",
          }),
        }}
      />

      <div className="pt-[140px]">
        <section className="mx-auto max-w-[1200px] px-6 pb-32">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-steel" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-almost-white">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <Link href="/services" className="transition-colors hover:text-almost-white">
              Services
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-almost-white">{service.title}</span>
          </nav>

          <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
            {service.title}
          </p>
          <h1 className="mt-4 font-sans text-4xl font-medium tracking-tight text-almost-white sm:text-5xl lg:text-6xl">
            {service.headline}
          </h1>
          <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-steel">
            {service.description}
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-[999px] bg-signal-violet px-8 py-3.5 font-sans text-sm font-medium text-almost-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(175,80,255,0.4)]"
          >
            Start Your Project
            <ArrowRight className="size-4" />
          </Link>

          {/* Features */}
          <div className="mt-24">
            <h2 className="font-sans text-2xl font-medium text-almost-white">
              What&rsquo;s Included
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-[19.2px] border border-[rgba(247,249,250,0.2)] p-5"
                >
                  <Check className="mt-0.5 size-5 shrink-0 text-signal-violet" />
                  <span className="font-sans text-sm text-almost-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-20">
            <h2 className="font-sans text-2xl font-medium text-almost-white">Tech Stack</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-[6px] border border-[rgba(247,249,250,0.12)] px-3 py-1.5 font-mono text-sm text-steel"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Ideal For */}
          <div className="mt-20">
            <h2 className="font-sans text-2xl font-medium text-almost-white">Ideal For</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {service.idealFor.map((item) => (
                <span
                  key={item}
                  className="rounded-[99px] border border-signal-violet/20 bg-signal-violet/5 px-4 py-2 font-sans text-sm text-almost-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="mt-20">
            <h2 className="font-sans text-2xl font-medium text-almost-white">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-4">
              {service.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-[19.2px] border border-[rgba(247,249,250,0.2)] transition-colors duration-300 open:border-signal-violet/30"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-sans text-sm font-medium text-almost-white">
                    {faq.q}
                    <ChevronRight className="size-4 shrink-0 text-steel transition-transform duration-300 group-open:rotate-90" />
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="font-sans text-sm leading-relaxed text-steel">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-24 rounded-[19.2px] border border-signal-violet/20 bg-signal-violet/5 p-10 text-center sm:p-14">
            <h2 className="font-sans text-3xl font-medium text-almost-white">
              Ready to Get Started?
            </h2>
            <p className="mt-3 font-sans text-base text-steel">
              Let&rsquo;s discuss your project and find the right solution for your business.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-[999px] bg-signal-violet px-8 py-3.5 font-sans text-sm font-medium text-almost-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(175,80,255,0.4)]"
            >
              Start Your Project
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
