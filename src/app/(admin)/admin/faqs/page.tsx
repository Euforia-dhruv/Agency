import type { Metadata } from "next";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convex/api";
import { CrudPageHeader } from "@/components/admin/crud-page";
import { EmptyState } from "@/components/admin/empty-state";
import { DeleteButton } from "@/components/admin/delete-button";

export const metadata: Metadata = {
  title: "FAQs",
};

export default async function AdminFAQsPage() {
  const faqs = await fetchQuery(api.faqs.list);

  return (
    <div className="p-8">
      <CrudPageHeader
        title="FAQs"
        description="Frequently asked questions displayed on the homepage."
        createHref="/admin/faqs/new"
      />

      {faqs.length === 0 ? (
        <EmptyState
          title="No FAQs yet"
          description="Add your first FAQ."
          createHref="/admin/faqs/new"
        />
      ) : (
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq._id} className="rounded-[19.2px] border border-border/20 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-sans text-sm font-medium text-almost-white">{faq.question}</p>
                  <p className="mt-1 font-sans text-xs text-steel line-clamp-2">{faq.answer}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-sans text-xs text-ash">#{faq.displayOrder}</span>
                  <DeleteButton id={faq._id} table="faqs" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
