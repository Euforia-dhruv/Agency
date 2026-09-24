import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convex/api";
import { CaseStudyForm } from "@/components/admin/case-study-form";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const study = await fetchQuery(api.projects.getById, { id: id as any });
  if (!study) return { title: "Not Found" };
  return { title: `Edit ${study.title}` };
}

export default async function EditCaseStudyPage({ params }: Props) {
  const { id } = await params;
  const study = await fetchQuery(api.projects.getById, { id: id as any });
  if (!study) notFound();
  return (
    <div className="p-8">
      <h1 className="font-sans text-2xl font-normal text-almost-white">Edit Case Study</h1>
      <div className="mt-8 max-w-lg">
        <CaseStudyForm study={study} />
      </div>
    </div>
  );
}
