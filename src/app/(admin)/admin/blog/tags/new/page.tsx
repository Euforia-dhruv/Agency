import type { Metadata } from "next";
import { BlogTagForm } from "@/components/admin/blog-tag-form";

export const metadata: Metadata = {
  title: "New Tag",
};

export default function NewBlogTagPage() {
  return (
    <div className="p-8">
      <h1 className="font-sans text-2xl font-normal text-almost-white">New Tag</h1>
      <div className="mt-8 max-w-lg">
        <BlogTagForm />
      </div>
    </div>
  );
}
