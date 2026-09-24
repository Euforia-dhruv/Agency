import type { Metadata } from "next";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convex/api";
import { CrudPageHeader } from "@/components/admin/crud-page";
import { EmptyState } from "@/components/admin/empty-state";
import { DeleteButton } from "@/components/admin/delete-button";

export const metadata: Metadata = {
  title: "Tags",
};

export default async function AdminBlogTagsPage() {
  const tags = await fetchQuery(api.blog_tags.list);

  return (
    <div className="p-8">
      <CrudPageHeader
        title="Tags"
        description="Blog post tags."
        createHref="/admin/blog/tags/new"
      />
      {tags.length === 0 ? (
        <EmptyState
          title="No tags yet"
          description="Create your first tag."
          createHref="/admin/blog/tags/new"
        />
      ) : (
        <div className="space-y-3">
          {tags.map((tag) => (
            <div
              key={tag._id}
              className="flex items-center justify-between rounded-[19.2px] border border-border/20 px-6 py-4"
            >
              <div>
                <p className="font-sans text-sm font-medium text-almost-white">{tag.name}</p>
                <p className="font-sans text-xs text-steel mt-0.5">/&thinsp;{tag.slug}</p>
              </div>
              <DeleteButton id={tag._id} table="blogTags" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
