import type { Metadata } from "next";
import { BlogForm } from "@/components/admin/blog-form";

export const metadata: Metadata = {
  title: "New Blog Post",
};

export default function NewBlogPostPage() {
  return (
    <div className="p-8">
      <h1 className="font-sans text-2xl font-normal text-almost-white">New Blog Post</h1>
      <div className="mt-8 max-w-lg">
        <BlogForm />
      </div>
    </div>
  );
}
