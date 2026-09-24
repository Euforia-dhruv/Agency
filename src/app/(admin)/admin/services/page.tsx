import type { Metadata } from "next";
import Link from "next/link";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convex/api";
import { CrudPageHeader } from "@/components/admin/crud-page";
import { EmptyState } from "@/components/admin/empty-state";
import { DeleteButton } from "@/components/admin/delete-button";

export const metadata: Metadata = {
  title: "Services",
};

export default async function AdminServicesPage() {
  const services = await fetchQuery(api.services.list);

  return (
    <div className="p-8">
      <CrudPageHeader
        title="Services"
        description="Manage your service offerings."
        createHref="/admin/services/new"
      />

      {services.length === 0 ? (
        <EmptyState
          title="No services yet"
          description="Create your first service to get started."
          createHref="/admin/services/new"
        />
      ) : (
        <div className="space-y-3">
          {services.map((service) => (
            <div
              key={service._id}
              className="flex items-center justify-between rounded-[19.2px] border border-border/20 px-6 py-4"
            >
              <div className="flex-1">
                <Link
                  href={`/admin/services/${service._id}`}
                  className="font-sans text-sm font-medium text-almost-white transition-colors hover:text-signal-violet"
                >
                  {service.title}
                </Link>
                {service.description && (
                  <p className="mt-0.5 font-sans text-xs text-steel line-clamp-1">
                    {service.description}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-4">
                <span className="font-sans text-xs text-ash">/&thinsp;{service.slug}</span>
                <DeleteButton id={service._id} table="services" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
