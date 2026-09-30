"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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

const DESKTOP_WIDTH = 1440;

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
  active,
  className,
}: LivePreviewProps) {
  const [shotIndex, setShotIndex] = useState(0);
  const [shotFailed, setShotFailed] = useState(false);
  const [inView, setInView] = useState(false);
  const [frameLoaded, setFrameLoaded] = useState(false);
  const [scale, setScale] = useState(1);
  const frameRef = useRef<HTMLDivElement>(null);

  const shots = useMemo(() => screenshotSources(previewUrl, url), [previewUrl, url]);
  const currentShot = shots[Math.min(shotIndex, shots.length - 1)];

  const showFrame = inView && active !== false;

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "200px",
    });
    io.observe(el);
    const ro = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      if (w > 0) setScale(w / DESKTOP_WIDTH);
    });
    ro.observe(el);
    return () => {
      io.disconnect();
      ro.disconnect();
    };
  }, []);

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
          {frameLoaded ? "Live" : "Snapshot"}
        </span>
      </div>

      <div
        ref={frameRef}
        className={cn(
          "relative w-full overflow-hidden",
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

        {showFrame && (
          <iframe
            src={url}
            title={`${title} live preview`}
            loading="lazy"
            tabIndex={-1}
            aria-hidden="true"
            onLoad={() => setFrameLoaded(true)}
            className="pointer-events-none absolute left-0 top-0 border-0 transition-opacity duration-700"
            style={{
              width: DESKTOP_WIDTH,
              height: `${100 / scale}%`,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              opacity: frameLoaded ? 1 : 0,
            }}
          />
        )}
      </div>
    </div>
  );
}
