import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Globe } from "lucide-react";
import { PROJECTS } from "@/lib/projects-data";
import { GOOGLE_FORM_URL } from "@/lib/constants";
import { getCaseStudy } from "@/lib/case-studies";
import { getWebsitePreview } from "@/lib/preview";
import { CaseStudyTrace } from "@/components/marketing/case-study-trace";
import { cn } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  const study = getCaseStudy(slug);
  if (!project || !study) return { title: "Not Found" };
  return {
    title: `${project.name} — Case Study`,
    description: study.intro.slice(0, 160),
    openGraph: {
      title: `${project.name} Case Study | VENTRIEE`,
      description: study.intro.slice(0, 160),
    },
  };
}

function StatusBadge({ status }: { status: "Live" | "WIP" }) {
  return (
    <span
      className={cn(
        "shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider",
        status === "Live"
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
          : "border-amber-500/30 bg-amber-500/10 text-amber-400",
      )}
    >
      {status}
    </span>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  const study = getCaseStudy(slug);

  if (!project || !study) {
    notFound();
  }

  const previewUrl = await getWebsitePreview(project.url);
  const cleanUrl = project.url.replace(/https?:\/\//, "").replace(/\/$/, "");
  const projectIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <div className="pt-[140px]">
      <article className="pb-32">
        <header className="mx-auto mb-12 max-w-[800px] px-6">
          <Link
            href="/work"
            className="font-sans text-sm text-steel transition-colors hover:text-almost-white"
          >
            &larr; Back to Work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
              {project.category}
            </p>
            <StatusBadge status={project.status} />
          </div>

          <h1 className="mt-4 font-sans text-4xl font-medium leading-tight tracking-tight text-almost-white sm:text-5xl lg:text-6xl">
            {project.name}
          </h1>

          <p className="mt-5 max-w-2xl font-sans text-lg leading-relaxed text-steel">
            {study.intro}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-signal-violet transition-colors hover:text-lavender-mist"
            >
              <Globe className="size-3.5" />
              {cleanUrl}
            </a>
            <span className="font-mono text-[10px] uppercase tracking-[1.2px] text-graphite">
              Tech
            </span>
            <div className="flex flex-wrap gap-1.5">
              {study.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/[0.06] px-2.5 py-0.5 font-mono text-[10px] text-steel"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </header>

        <CaseStudyTrace study={study} previewUrl={previewUrl} />

        <footer className="mx-auto mt-8 max-w-[800px] px-6">
          <div className="flex flex-col gap-6 border-t border-white/[0.06] pt-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
                Next Project
              </p>
              <Link
                href={`/work/${nextProject.slug}`}
                className="mt-2 block font-sans text-2xl font-medium tracking-tight text-almost-white transition-colors hover:text-signal-violet"
              >
                {nextProject.name} &rarr;
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-[16px] bg-signal-violet px-6 font-sans text-sm font-medium text-almost-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(175,80,255,0.3)]"
              >
                Start Similar Project
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/work"
                className="inline-flex h-[48px] items-center justify-center font-sans text-sm text-steel underline-offset-2 transition-colors hover:text-almost-white hover:underline"
              >
                All Work
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
