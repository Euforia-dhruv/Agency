"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { getScreenshotFallbacks, type PreviewMode } from "@/lib/showreel-preview";

interface LivePreviewProps {
  url: string;
  title: string;
  previewMode: PreviewMode;
  previewUrl?: string | null;
  accent: string;
  active?: boolean;
  priority?: boolean;
  fill?: boolean;
  className?: string;
}

function screenshotSources(previewUrl: string | null | undefined, url: string): string[] {
  const sources: string[] = [];
  if (previewUrl) sources.push(previewUrl);
  sources.push(...getScreenshotFallbacks(url));
  return sources;
}

export function LivePreview({
  url,
  title,
  previewUrl,
  accent,
  priority = false,
  fill = false,
  className,
}: LivePreviewProps) {
  const [shotIndex, setShotIndex] = useState(0);
  const [shotFailed, setShotFailed] = useState(false);

  const shots = useMemo(() => screenshotSources(previewUrl, url), [previewUrl, url]);
  const currentShot = shots[Math.min(shotIndex, shots.length - 1)];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0c0c12]",
        fill && "flex h-full min-h-0 flex-col",
        className,
      )}
      style={
        {
          "--preview-accent": accent,
        } as React.CSSProperties
      }
    >
      <div className="flex shrink-0 items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="ml-2 truncate font-mono text-[10px] tracking-wide text-steel">
          {url.replace(/^https?:\/\//, "")}
        </span>
        <span className="ml-auto shrink-0 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-steel">
          Snapshot
        </span>
      </div>

      <div
        className={cn(
          "relative w-full",
          fill ? "min-h-[220px] flex-1" : "aspect-[16/10]",
        )}
      >
        {currentShot && !shotFailed && (
          <img
            src={currentShot}
            alt={`${title} website preview`}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-top"
            onError={() => {
              if (shotIndex < shots.length - 1) {
                setShotIndex((i) => i + 1);
              } else {
                setShotFailed(true);
              }
            }}
          />
        )}

        {shotFailed && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#12101a] to-[#090909] p-6 text-center">
            <div
              className="size-12 rounded-2xl"
              style={{ background: `${accent}22`, boxShadow: `inset 0 0 0 1px ${accent}55` }}
            />
            <p className="max-w-[240px] font-sans text-sm text-steel">
              Preview unavailable in this browser.
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[1.5px] text-signal-violet transition-colors hover:text-lavender-mist"
            >
              Open live site ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
