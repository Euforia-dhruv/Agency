"use client";

import { useState, useCallback } from "react";
import { useMutation } from "convex/react";
import { api } from "@/lib/convex/api";
import { Trash2 } from "lucide-react";

interface DeleteButtonProps {
  id: string;
  table:
    "services" | "projects" | "blogPosts" | "testimonials" | "faqs" | "blogCategories" | "blogTags";
}

const MUTATIONS = {
  services: api.services.remove,
  projects: api.projects.remove,
  blogPosts: api.blog.remove,
  testimonials: api.testimonials.remove,
  faqs: api.faqs.remove,
  blogCategories: api.blog_categories.remove,
  blogTags: api.blog_tags.remove,
} as const;

export function DeleteButton({ id, table }: DeleteButtonProps) {
  const [confirming, setConfirming] = useState(false);
  const remove = useMutation(MUTATIONS[table]);

  const handleDelete = useCallback(async () => {
    await remove({ id: id as any });
    setConfirming(false);
  }, [remove, id]);

  if (confirming) {
    return (
      <div className="flex items-center gap-2">
        <span className="font-sans text-xs text-destructive">Are you sure?</span>
        <button
          type="button"
          onClick={handleDelete}
          className="rounded-[6px] bg-destructive/10 px-2 py-1 font-sans text-xs text-destructive transition-colors hover:bg-destructive/20"
        >
          Confirm
        </button>
        <button
          type="button"
          onClick={() => setConfirming(false)}
          className="rounded-[6px] px-2 py-1 font-sans text-xs text-steel transition-colors hover:text-almost-white"
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setConfirming(true)}
      className="flex items-center gap-1 rounded-[6px] px-2 py-1 font-sans text-xs text-steel transition-colors hover:text-destructive"
    >
      <Trash2 className="size-3" />
      Delete
    </button>
  );
}
