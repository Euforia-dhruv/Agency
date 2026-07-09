import type { Metadata } from "next";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convex/api";
import { SettingsForm } from "@/components/admin/settings-form";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function AdminSettingsPage() {
  const settings = await fetchQuery(api.settings.get);

  return (
    <div className="p-8">
      <h1 className="font-sans text-2xl font-normal text-almost-white">Settings</h1>
      <p className="mt-1 font-sans text-sm text-steel">Manage your site configuration.</p>
      <div className="mt-8 max-w-lg">
        <SettingsForm settings={settings} />
      </div>
    </div>
  );
}
