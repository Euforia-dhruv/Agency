"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/lib/convex/api";
import { Loader2 } from "lucide-react";

export function FAQForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const create = useMutation(api.faqs.create);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await create({
        question: formData.get("question") as string,
        answer: formData.get("answer") as string,
        displayOrder: Number(formData.get("displayOrder")) || 0,
      });
      router.push("/admin/faqs");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="question" className="font-sans text-sm font-medium text-foreground">
          Question <span className="text-destructive">*</span>
        </label>
        <input
          id="question"
          name="question"
          required
          className="mt-1 block w-full rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>
      <div>
        <label htmlFor="answer" className="font-sans text-sm font-medium text-foreground">
          Answer <span className="text-destructive">*</span>
        </label>
        <textarea
          id="answer"
          name="answer"
          required
          rows={5}
          className="mt-1 block w-full rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring resize-y"
        />
      </div>
      <div>
        <label htmlFor="displayOrder" className="font-sans text-sm font-medium text-foreground">
          Display Order
        </label>
        <input
          id="displayOrder"
          name="displayOrder"
          type="number"
          defaultValue="0"
          className="mt-1 block w-full max-w-[100px] rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
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
          Create FAQ
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
