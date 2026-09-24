import type { Metadata } from "next";
import { PROJECTS } from "@/lib/projects-data";
import { getWebsitePreview } from "@/lib/preview";
import { WorkCard } from "@/components/marketing/work-card";

export const metadata: Metadata = {
  title: "Our Work — Web Development Portfolio | VENTRIEE",
  description:
    "See our portfolio of websites for gyms, schools, restaurants, startups, and local businesses. Real projects, real results.",
  openGraph: {
    title: "Our Work | VENTRIEE",
    description: "Portfolio of custom websites for businesses across industries.",
  },
};

export default async function WorkPage() {
  const projectsWithPreviews = await Promise.all(
    PROJECTS.map(async (p) => ({
      ...p,
      previewUrl: await getWebsitePreview(p.url),
    })),
  );

  return (
    <div className="pt-[140px]">
      <section className="mx-auto max-w-[1200px] px-6 pb-32">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
            Our Work
          </p>
          <h1 className="mt-4 font-sans text-4xl font-medium tracking-tight text-almost-white sm:text-5xl lg:text-6xl">
            Live Projects
          </h1>
          <p className="mt-4 font-sans text-lg text-steel">
            Real websites we&rsquo;ve built and launched for clients across industries.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projectsWithPreviews.map((project, i) => (
            <WorkCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
