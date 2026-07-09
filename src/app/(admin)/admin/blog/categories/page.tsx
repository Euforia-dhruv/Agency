import type { Metadata } from "next";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convex/api";
import { CrudPageHeader } from "@/components/admin/crud-page";
import { EmptyState } from "@/components/admin/empty-state";
import { DeleteButton } from "@/components/admin/delete-button";

export const metadata: Metadata = {
  title: "Categories",
};

export default async function AdminBlogCategoriesPage() {
  const categories = await fetchQuery(api.blog_categories.list);

  return (
    <div className="p-8">
      <CrudPageHeader
        title="Categories"
        description="Blog post categories."
        createHref="/admin/blog/categories/new"
      />
      {categories.length === 0 ? (
        <EmptyState
          title="No categories yet"
          description="Create your first category."
          createHref="/admin/blog/categories/new"
        />
      ) : (
        <div className="space-y-3">
          {categories.map((cat) => (
            <div
              key={cat._id}
              className="flex items-center justify-between rounded-[19.2px] border border-border/20 px-6 py-4"
            >
              <div>
                <p className="font-sans text-sm font-medium text-almost-white">{cat.name}</p>
                <p className="font-sans text-xs text-steel mt-0.5">/&thinsp;{cat.slug}</p>
              </div>
              <DeleteButton id={cat._id} table="blogCategories" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
