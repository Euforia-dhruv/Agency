import type { Metadata } from "next";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convex/api";
import { CrudPageHeader } from "@/components/admin/crud-page";
import { EmptyState } from "@/components/admin/empty-state";
import { DeleteButton } from "@/components/admin/delete-button";

export const metadata: Metadata = {
  title: "Testimonials",
};

export default async function AdminTestimonialsPage() {
  const testimonials = await fetchQuery(api.testimonials.list);

  return (
    <div className="p-8">
      <CrudPageHeader
        title="Testimonials"
        description="Client testimonials displayed on the homepage."
        createHref="/admin/testimonials/new"
      />

      {testimonials.length === 0 ? (
        <EmptyState
          title="No testimonials yet"
          description="Add your first client testimonial."
          createHref="/admin/testimonials/new"
        />
      ) : (
        <div className="space-y-3">
          {testimonials.map((t) => (
            <div key={t._id} className="rounded-[19.2px] border border-border/20 px-6 py-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-sans text-sm font-medium text-almost-white">{t.author}</p>
                  {(t.role || t.company) && (
                    <p className="font-sans text-xs text-steel">
                      {[t.role, t.company].filter(Boolean).join(" · ")}
                    </p>
                  )}
                  {t.rating && (
                    <div className="mt-1 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`size-3 ${i < t.rating! ? "text-signal-violet" : "text-iron"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  )}
                  <p className="mt-2 font-sans text-sm text-ash italic line-clamp-2">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <DeleteButton id={t._id} table="testimonials" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
