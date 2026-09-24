import type { Metadata } from "next";
import { BlogCategoryForm } from "@/components/admin/blog-category-form";

export const metadata: Metadata = {
  title: "New Category",
};

export default function NewBlogCategoryPage() {
  return (
    <div className="p-8">
      <h1 className="font-sans text-2xl font-normal text-almost-white">New Category</h1>
      <div className="mt-8 max-w-lg">
        <BlogCategoryForm />
      </div>
    </div>
  );
}
