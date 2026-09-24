"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/lib/convex/api";
import { Loader2 } from "lucide-react";

interface Settings {
  siteName?: string;
  logo?: string;
}

interface SettingsFormProps {
  settings?: Settings | null;
}

export function SettingsForm({ settings }: SettingsFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const update = useMutation(api.settings.update);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await update({
        siteName: (formData.get("siteName") as string) || undefined,
        logo: (formData.get("logo") as string) || undefined,
      });
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
        <label htmlFor="siteName" className="font-sans text-sm font-medium text-foreground">
          Site Name
        </label>
        <input
          id="siteName"
          name="siteName"
          defaultValue={settings?.siteName ?? ""}
          className="mt-1 block w-full rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>
      <div>
        <label htmlFor="logo" className="font-sans text-sm font-medium text-foreground">
          Logo URL
        </label>
        <input
          id="logo"
          name="logo"
          defaultValue={settings?.logo ?? ""}
          className="mt-1 block w-full rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
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
          Save Settings
        </button>
      </div>
    </form>
  );
}
