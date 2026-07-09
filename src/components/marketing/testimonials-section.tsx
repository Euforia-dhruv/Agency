import { StampedSectionHeading } from "./stamped-section-heading";
import { AnimatedSection } from "./animated-section";

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

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (testimonials.length === 0) return null;

  return (
    <AnimatedSection className="mx-auto max-w-[1200px] px-6 py-32">
      <StampedSectionHeading>Client Stories</StampedSectionHeading>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t._id} className="flex flex-col rounded-[19.2px] border border-border/20 p-8">
            {t.rating && (
              <div className="mb-4">
                <StarRating rating={t.rating} />
              </div>
            )}
            <blockquote className="flex-1 font-sans text-sm leading-relaxed text-foreground">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="mt-6 border-t border-border/10 pt-4">
              <p className="font-sans text-sm font-medium text-almost-white">{t.author}</p>
              {(t.role || t.company) && (
                <p className="font-sans text-xs text-steel mt-0.5">
                  {[t.role, t.company].filter(Boolean).join(", ")}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
