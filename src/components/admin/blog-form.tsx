"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/lib/convex/api";
import { Loader2 } from "lucide-react";

interface BlogFormPost {
  _id: string;
  title: string;
  content?: string;
  excerpt?: string;
  categoryId?: string;
  featured: boolean;
  publishedAt?: number;
  tags?: { _id: string }[];
}

interface BlogFormProps {
  post?: BlogFormPost;
}

export function BlogForm({ post }: BlogFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const create = useMutation(api.blog.create);
  const update = useMutation(api.blog.update);
  const publish = useMutation(api.blog.publish);
  const unpublish = useMutation(api.blog.unpublish);
  const categories = useQuery(api.blog_categories.list) ?? [];
  const tags = useQuery(api.blog_tags.list) ?? [];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = formData.get("title") as string;
    const content = (formData.get("content") as string) || undefined;
    const excerpt = (formData.get("excerpt") as string) || undefined;
    const categoryId = (formData.get("categoryId") as string) || undefined;
    const featured = formData.get("featured") === "on";

    const tagElements = form.querySelectorAll<HTMLInputElement>('input[name="tagIds"]:checked');
    const tagIds = Array.from(tagElements).map((el) => el.value);

    try {
      if (post) {
        await update({
          id: post._id as any,
          title,
          content,
          excerpt,
          categoryId: categoryId as any,
          featured,
          tagIds: tagIds as any,
        });
      } else {
        await create({
          title,
          content,
          excerpt,
          categoryId: categoryId as any,
          featured,
          tagIds: tagIds as any,
        });
      }
      router.push("/admin/blog");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function handlePublish() {
    if (!post) return;
    setLoading(true);
    try {
      if (post.publishedAt) {
        await unpublish({ id: post._id as any });
      } else {
        await publish({ id: post._id as any });
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="title" className="font-sans text-sm font-medium text-foreground">
          Title
        </label>
        <input
          id="title"
          name="title"
          required
          defaultValue={post?.title ?? ""}
          className="mt-1 block w-full rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>

      <div>
        <label htmlFor="excerpt" className="font-sans text-sm font-medium text-foreground">
          Excerpt
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          rows={2}
          defaultValue={post?.excerpt ?? ""}
          className="mt-1 block w-full rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring resize-y"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="categoryId" className="font-sans text-sm font-medium text-foreground">
            Category
          </label>
          <select
            id="categoryId"
            name="categoryId"
            defaultValue={post?.categoryId ?? ""}
            className="mt-1 block w-full rounded-[6px] border border-input bg-near-black px-3 py-2 font-sans text-sm text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
          >
            <option value="">None</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end pb-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="featured"
              defaultChecked={post?.featured ?? false}
              className="size-4 rounded border-input bg-transparent text-signal-violet focus:ring-signal-violet"
            />
            <span className="font-sans text-sm text-foreground">Featured post</span>
          </label>
        </div>
      </div>

      {tags.length > 0 && (
        <fieldset>
          <legend className="font-sans text-sm font-medium text-foreground mb-2">Tags</legend>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => {
              const checked = post?.tags?.some((t) => t._id === tag._id) ?? false;
              return (
                <label
                  key={tag._id}
                  className="flex items-center gap-1.5 cursor-pointer rounded-[6px] border border-border/20 px-3 py-1.5 font-sans text-xs text-steel transition-colors has-[:checked]:border-signal-violet has-[:checked]:text-signal-violet"
                >
                  <input
                    type="checkbox"
                    name="tagIds"
                    value={tag._id}
                    defaultChecked={checked}
                    className="sr-only"
                  />
                  {tag.name}
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      <div>
        <label htmlFor="content" className="font-sans text-sm font-medium text-foreground">
          Content (Markdown)
        </label>
        <textarea
          id="content"
          name="content"
          rows={16}
          defaultValue={post?.content ?? ""}
          className="mt-1 block w-full rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring resize-y font-mono"
        />
      </div>

      {error && <p className="font-sans text-xs text-destructive">{error}</p>}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-lg border border-almost-white bg-near-black px-4 py-2.5 font-sans text-sm font-normal text-almost-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading && <Loader2 className="size-4 animate-spin" />}
            {post ? "Save Changes" : "Create Post"}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="font-sans text-sm text-steel transition-colors hover:text-almost-white"
          >
            Cancel
          </button>
        </div>

        {post && (
          <button
            type="button"
            onClick={handlePublish}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 font-sans text-sm transition-colors disabled:opacity-50"
            style={{
              borderColor: post.publishedAt ? "rgba(239, 68, 68, 0.3)" : "rgba(34, 197, 94, 0.3)",
              color: post.publishedAt ? "#ef4444" : "#22c55e",
            }}
          >
            {post.publishedAt ? "Unpublish" : "Publish"}
          </button>
        )}
      </div>
    </form>
  );
}
