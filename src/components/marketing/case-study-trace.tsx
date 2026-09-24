"use client";

import { TracingBeam } from "@/components/ui/tracing-beam";
import type { CaseStudy } from "@/lib/case-studies";

interface CaseStudyTraceProps {
  study: CaseStudy;
  previewUrl?: string | null;
}

export function CaseStudyTrace({ study, previewUrl }: CaseStudyTraceProps) {
  return (
    <TracingBeam className="px-6">
      <div className="relative mx-auto max-w-2xl pt-4 antialiased">
        {study.sections.map((section, index) => (
          <div key={section.badge} className="mb-10">
            <h2 className="mb-4 w-fit rounded-full border border-signal-violet/30 bg-signal-violet/10 px-4 py-1 font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
              {section.badge}
            </h2>

            <p className="mb-4 font-heading text-xl italic leading-snug text-almost-white">
              {section.title}
            </p>

            <div className="text-sm leading-relaxed text-steel">
              {index === 0 && previewUrl && (
                <img
                  src={previewUrl}
                  alt="Project preview"
                  height={1000}
                  width={1000}
                  className="mb-10 w-full rounded-lg border border-white/[0.06] object-cover"
                />
              )}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
