import type { Metadata } from "next";
import Link from "next/link";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convex/api";
import { CrudPageHeader } from "@/components/admin/crud-page";
import { EmptyState } from "@/components/admin/empty-state";
import { DeleteButton } from "@/components/admin/delete-button";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function AdminBlogPage() {
  const posts = await fetchQuery(api.blog.list);

  return (
    <div className="p-8">
      <div className="mb-6 flex items-center gap-4 border-b border-border/10 pb-4">
        <span className="font-sans text-sm font-medium text-almost-white">Posts</span>
        <Link
          href="/admin/blog/categories"
          className="font-sans text-sm text-steel transition-colors hover:text-almost-white"
        >
          Categories
        </Link>
        <Link
          href="/admin/blog/tags"
          className="font-sans text-sm text-steel transition-colors hover:text-almost-white"
        >
          Tags
        </Link>
      </div>

      <CrudPageHeader
        title="Blog Posts"
        description="Manage your blog content."
        createHref="/admin/blog/new"
      />

      {posts.length === 0 ? (
        <EmptyState
          title="No blog posts yet"
          description="Write your first blog post."
          createHref="/admin/blog/new"
        />
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <div
              key={post._id}
              className="flex items-center justify-between rounded-[19.2px] border border-border/20 px-6 py-4"
            >
              <div className="flex-1">
                <Link
                  href={`/admin/blog/${post._id}`}
                  className="font-sans text-sm font-medium text-almost-white transition-colors hover:text-signal-violet"
                >
                  {post.title}
                </Link>
                {post.excerpt && (
                  <p className="mt-0.5 font-sans text-xs text-steel line-clamp-1">{post.excerpt}</p>
                )}
              </div>
              <div className="flex items-center gap-4">
                {post.publishedAt && (
                  <span className="rounded-[6px] bg-signal-violet/10 px-2 py-0.5 font-sans text-xs text-signal-violet">
                    Published
                  </span>
                )}
                <DeleteButton id={post._id} table="blogPosts" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
