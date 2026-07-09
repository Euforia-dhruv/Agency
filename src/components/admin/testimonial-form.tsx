"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/lib/convex/api";
import { Loader2 } from "lucide-react";

export function TestimonialForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const create = useMutation(api.testimonials.create);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await create({
        author: formData.get("author") as string,
        quote: formData.get("quote") as string,
        role: (formData.get("role") as string) || undefined,
        company: (formData.get("company") as string) || undefined,
        rating: formData.get("rating") ? Number(formData.get("rating")) : undefined,
      });
      router.push("/admin/testimonials");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="author" className="font-sans text-sm font-medium text-foreground">
          Author <span className="text-destructive">*</span>
        </label>
        <input
          id="author"
          name="author"
          required
          className="mt-1 block w-full rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="role" className="font-sans text-sm font-medium text-foreground">
            Role
          </label>
          <input
            id="role"
            name="role"
            className="mt-1 block w-full rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="company" className="font-sans text-sm font-medium text-foreground">
            Company
          </label>
          <input
            id="company"
            name="company"
            className="mt-1 block w-full rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>
      <div>
        <label htmlFor="rating" className="font-sans text-sm font-medium text-foreground">
          Rating (1-5)
        </label>
        <input
          id="rating"
          name="rating"
          type="number"
          min="1"
          max="5"
          className="mt-1 block w-full max-w-[100px] rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>
      <div>
        <label htmlFor="quote" className="font-sans text-sm font-medium text-foreground">
          Quote <span className="text-destructive">*</span>
        </label>
        <textarea
          id="quote"
          name="quote"
          required
          rows={4}
          className="mt-1 block w-full rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring resize-y"
        />
      </div>
      {error && <p className="font-sans text-xs text-destructive">{error}</p>}
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-lg border border-almost-white bg-near-black px-4 py-2.5 font-sans text-sm font-normal text-almost-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {loading && <Loader2 className="size-4 animate-spin" />}
          Create Testimonial
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="font-sans text-sm text-steel transition-colors hover:text-almost-white"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
