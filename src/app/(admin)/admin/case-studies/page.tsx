import type { Metadata } from "next";
import Link from "next/link";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convex/api";
import { CrudPageHeader } from "@/components/admin/crud-page";
import { EmptyState } from "@/components/admin/empty-state";
import { DeleteButton } from "@/components/admin/delete-button";

export const metadata: Metadata = {
  title: "Case Studies",
};

export default async function AdminCaseStudiesPage() {
  const studies = await fetchQuery(api.projects.list);

  return (
    <div className="p-8">
      <CrudPageHeader
        title="Case Studies"
        description="Manage portfolio projects."
        createHref="/admin/case-studies/new"
      />

      {studies.length === 0 ? (
        <EmptyState
          title="No case studies yet"
          description="Create your first case study to showcase your work."
          createHref="/admin/case-studies/new"
        />
      ) : (
        <div className="space-y-3">
          {studies.map((study) => (
            <div
              key={study._id}
              className="flex items-center justify-between rounded-[19.2px] border border-border/20 px-6 py-4"
            >
              <div className="flex-1">
                <Link
                  href={`/admin/case-studies/${study._id}`}
                  className="font-sans text-sm font-medium text-almost-white transition-colors hover:text-signal-violet"
                >
                  {study.title}
                </Link>
                <p className="mt-0.5 font-sans text-xs text-steel line-clamp-1">
                  {study.challenge?.slice(0, 120)}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="rounded-[6px] bg-iron/50 px-2 py-0.5 font-sans text-xs text-ash">
                  {study.status.toLowerCase()}
                </span>
                <DeleteButton id={study._id} table="projects" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
