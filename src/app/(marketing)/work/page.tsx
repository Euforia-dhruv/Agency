import type { Metadata } from "next";
import { ShowreelSection } from "@/components/showreel";
import { getWebsitePreview } from "@/lib/preview";
import { buildShowreelProjects } from "@/lib/showreel-projects";

export const metadata: Metadata = {
  title: "Our Work — Web Development Portfolio | VENTRIEE",
  description:
    "See our portfolio of websites for gyms, sports academies, insurance platforms, and local businesses. Real projects, real results.",
  openGraph: {
    title: "Our Work | VENTRIEE",
    description: "Portfolio of custom websites for businesses across industries.",
  },
};

export default async function WorkPage() {
  const base = buildShowreelProjects({});
  const previews = Object.fromEntries(
    await Promise.all(base.map(async (p) => [p.slug, await getWebsitePreview(p.url)] as const)),
  );
  const showreelProjects = buildShowreelProjects(previews);

  return (
    <div className="pt-[140px]">
      <ShowreelSection
        projects={showreelProjects}
        eyebrow="Our Work"
        title="Live projects, in motion."
        description="Scroll through the portfolio — live embeds where hosts allow framing, verified snapshots elsewhere, and only facts we can back with the shipped product."
      />
    </div>
  );
}
