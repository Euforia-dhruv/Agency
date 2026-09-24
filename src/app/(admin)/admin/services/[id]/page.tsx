import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convex/api";
import { ServiceForm } from "@/components/admin/service-form";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = await fetchQuery(api.services.getById, { id: id as any });
  if (!service) return { title: "Not Found" };
  return { title: `Edit ${service.title}` };
}

export default async function EditServicePage({ params }: Props) {
  const { id } = await params;
  const service = await fetchQuery(api.services.getById, { id: id as any });

  if (!service) notFound();

  return (
    <div className="p-8">
      <h1 className="font-sans text-2xl font-normal text-almost-white">Edit Service</h1>
      <div className="mt-8 max-w-lg">
        <ServiceForm service={service} />
      </div>
    </div>
  );
}
