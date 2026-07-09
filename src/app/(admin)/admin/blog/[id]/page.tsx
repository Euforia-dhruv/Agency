import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convex/api";
import { BlogForm } from "@/components/admin/blog-form";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await fetchQuery(api.blog.getById, { id: id as any });
  if (!post) return { title: "Not Found" };
  return { title: `Edit ${post.title}` };
}

export default async function EditBlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = await fetchQuery(api.blog.getById, { id: id as any });
  if (!post) notFound();
  return (
    <div className="p-8">
      <h1 className="font-sans text-2xl font-normal text-almost-white">Edit Blog Post</h1>
      <div className="mt-8 max-w-lg">
        <BlogForm post={post} />
      </div>
    </div>
  );
}
