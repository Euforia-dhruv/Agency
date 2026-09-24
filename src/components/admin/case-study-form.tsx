"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/lib/convex/api";
import { Loader2 } from "lucide-react";

interface CaseStudyFormProps {
  study?: {
    _id: string;
    title: string;
    challenge?: string;
    solution?: string;
    results?: string;
  };
}

export function CaseStudyForm({ study }: CaseStudyFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const create = useMutation(api.projects.create);
  const update = useMutation(api.projects.update);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = formData.get("title") as string;
    const challenge = (formData.get("challenge") as string) || undefined;
    const solution = (formData.get("solution") as string) || undefined;
    const results = (formData.get("results") as string) || undefined;

    try {
      if (study) {
        await update({ id: study._id as any, title, challenge, solution, results });
      } else {
        await create({ title, challenge, solution, results });
      }
      router.push("/admin/case-studies");
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
          defaultValue={study?.title ?? ""}
          className="mt-1 block w-full rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>
      <div>
        <label htmlFor="challenge" className="font-sans text-sm font-medium text-foreground">
          Challenge
        </label>
        <textarea
          id="challenge"
          name="challenge"
          rows={4}
          defaultValue={study?.challenge ?? ""}
          className="mt-1 block w-full rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring resize-y"
        />
      </div>
      <div>
        <label htmlFor="solution" className="font-sans text-sm font-medium text-foreground">
          Solution
        </label>
        <textarea
          id="solution"
          name="solution"
          rows={4}
          defaultValue={study?.solution ?? ""}
          className="mt-1 block w-full rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring resize-y"
        />
      </div>
      <div>
        <label htmlFor="results" className="font-sans text-sm font-medium text-foreground">
          Results
        </label>
        <textarea
          id="results"
          name="results"
          rows={4}
          defaultValue={study?.results ?? ""}
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
          {study ? "Save Changes" : "Create Case Study"}
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
