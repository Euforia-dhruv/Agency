"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/lib/convex/api";
import { Loader2 } from "lucide-react";

interface ServiceFormProps {
  service?: {
    _id: string;
    title: string;
    description?: string;
  };
}

export function ServiceForm({ service }: ServiceFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const create = useMutation(api.services.create);
  const update = useMutation(api.services.update);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = formData.get("title") as string;
    const description = (formData.get("description") as string) || undefined;

    try {
      if (service) {
        await update({ id: service._id as any, title, description });
      } else {
        await create({ title, description });
      }
      router.push("/admin/services");
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
          defaultValue={service?.title ?? ""}
          className="mt-1 block w-full rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>

      <div>
        <label htmlFor="description" className="font-sans text-sm font-medium text-foreground">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          defaultValue={service?.description ?? ""}
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
          {service ? "Save Changes" : "Create Service"}
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
