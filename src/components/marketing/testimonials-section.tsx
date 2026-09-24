"use client";

import { motion } from "framer-motion";

interface Testimonial {
  _id: string;
  author: string;
  role?: string;
  company?: string;
  rating?: number;
  quote: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`size-4 ${i < rating ? "text-signal-violet" : "text-iron"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex size-12 items-center justify-center rounded-full bg-signal-violet/15 font-sans text-sm font-medium text-signal-violet">
      {initials}
    </div>
  );
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (testimonials.length === 0) {
    const defaultTestimonials = [
      {
        _id: "1",
        author: "Sarah Chen",
        role: "Founder",
        company: "TechFlow",
        rating: 5,
        quote:
          "VENTRIEE delivered our SaaS platform ahead of schedule. The attention to detail and code quality exceeded our expectations.",
      },
      {
        _id: "2",
        author: "Marcus Patel",
        role: "CTO",
        company: "DevHive",
        rating: 5,
        quote:
          "The best development experience we've had. Clear communication, premium design, and a product that just works.",
      },
      {
        _id: "3",
        author: "Aisha Rahman",
        role: "Product Lead",
        company: "ScaleKit",
        rating: 5,
        quote:
          "From discovery to launch, the process was smooth and transparent. Our MVP was live in 6 weeks.",
      },
    ];
    return <TestimonialsContent testimonials={defaultTestimonials} />;
  }
  return <TestimonialsContent testimonials={testimonials} />;
}

function TestimonialsContent({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-[64px] sm:px-6 md:py-[80px] lg:py-[120px]">
      <div className="mb-10 max-w-2xl md:mb-16">
        <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
          Client Stories
        </p>
        <h2 className="mt-3 font-sans text-[clamp(1.75rem,3vw+0.5rem,3.75rem)] font-medium tracking-tight text-almost-white">
          Trusted by founders
        </h2>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
            className="flex flex-col rounded-[19.2px] border border-[rgba(247,249,250,0.2)] p-5 md:p-8"
          >
            {t.rating && (
              <div className="mb-3 md:mb-4">
                <StarRating rating={t.rating} />
              </div>
            )}
            <blockquote className="flex-1 font-sans text-sm leading-relaxed text-almost-white/90 md:text-base">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="mt-4 flex items-center gap-3 border-t border-white/[0.06] pt-4 md:mt-6 md:gap-4 md:pt-6">
              <Avatar name={t.author} />
              <div>
                <p className="font-sans text-sm font-medium text-almost-white">{t.author}</p>
                {(t.role || t.company) && (
                  <p className="mt-0.5 font-sans text-xs text-steel">
                    {[t.role, t.company].filter(Boolean).join(", ")}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
