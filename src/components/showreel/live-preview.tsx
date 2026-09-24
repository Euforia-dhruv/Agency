"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { getFallbackPreviewUrl, type PreviewMode } from "@/lib/showreel-preview";

interface LivePreviewProps {
  url: string;
  title: string;
  previewMode: PreviewMode;
  previewUrl?: string | null;
  accent: string;
  active?: boolean;
  priority?: boolean;
  className?: string;
}

type FrameState = "idle" | "loading" | "ready" | "blocked";

function screenshotSources(previewUrl: string | null | undefined, url: string): string[] {
  const sources: string[] = [];
  if (previewUrl) sources.push(previewUrl);
  sources.push(getFallbackPreviewUrl(url));
  return sources;
}

export function LivePreview({
  url,
  title,
  previewMode,
  previewUrl,
  accent,
  active = false,
  priority = false,
  className,
}: LivePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [activated, setActivated] = useState(priority);
  const [frameState, setFrameState] = useState<FrameState>("idle");
  const [shotIndex, setShotIndex] = useState(0);
  const [shotFailed, setShotFailed] = useState(false);

  if ((active || priority) && !activated) {
    setActivated(true);
  }

  const shots = useMemo(() => screenshotSources(previewUrl, url), [previewUrl, url]);
  const showIframe = previewMode !== "screenshot" && activated && !shotFailed;
  const showShot = previewMode === "screenshot" || shotFailed || frameState === "blocked";
  const currentShot = shots[Math.min(shotIndex, shots.length - 1)];
  const watchFrame = showIframe && frameState === "idle";
  const effectiveState: FrameState = watchFrame ? "loading" : frameState;

  useEffect(() => {
    if (!watchFrame) return;
    const el = iframeRef.current;
    if (!el) return;

    let settled = false;

    const finish = (state: FrameState, fallback?: boolean) => {
      if (settled) return;
      settled = true;
      setFrameState(state);
      if (fallback) setShotFailed(true);
    };

    const onLoad = () => {
      try {
        const doc = el.contentDocument;
        const blank =
          !doc || (doc.location.href === "about:blank" && !doc.body?.childElementCount);
        if (blank) {
          finish("blocked", previewMode === "hybrid");
        } else {
          finish("ready");
        }
      } catch {
        finish("ready");
      }
    };

    const timer = window.setTimeout(() => {
      if (previewMode === "hybrid") {
        finish("blocked", true);
      } else {
        finish("ready");
      }
    }, previewMode === "hybrid" ? 6000 : 4000);

    el.addEventListener("load", onLoad);
    return () => {
      window.clearTimeout(timer);
      el.removeEventListener("load", onLoad);
    };
  }, [watchFrame, previewMode, url, frameState]);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0c0c12]",
        className,
      )}
      style={
        {
          "--preview-accent": accent,
        } as React.CSSProperties
      }
    >
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="ml-2 truncate font-mono text-[10px] tracking-wide text-steel">
          {url.replace(/^https?:\/\//, "")}
        </span>
        <span
          className={cn(
            "ml-auto shrink-0 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider",
            previewMode === "screenshot"
              ? "border-white/10 bg-white/5 text-steel"
              : "border-emerald-500/25 bg-emerald-500/10 text-emerald-400",
          )}
        >
          {previewMode === "screenshot"
            ? "Snapshot"
            : previewMode === "hybrid"
              ? "Live + fallback"
              : "Live embed"}
        </span>
      </div>

      <div className="relative aspect-[16/10] w-full">
        {showShot && currentShot && !shotFailed && (
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
                if (previewMode !== "hybrid") {
                  setFrameState("blocked");
                }
              }
            }}
          />
        )}

        {showIframe && (
          <iframe
            ref={iframeRef}
            src={url}
            title={`${title} live preview`}
            loading={priority ? "eager" : "lazy"}
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            className="absolute inset-0 h-full w-full border-0 bg-[#0c0c12]"
          />
        )}

        {showIframe && effectiveState === "loading" && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0c0c12]/70 backdrop-blur-[2px]">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.5px] text-steel">
              <span className="size-1.5 animate-pulse rounded-full bg-signal-violet" />
              Loading live site…
            </div>
          </div>
        )}

        {effectiveState === "blocked" && showShot && (
          <div className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/70 px-3 py-1 font-mono text-[10px] text-steel backdrop-blur">
            Framing blocked by host — showing snapshot
          </div>
        )}

        {shotFailed && !showIframe && (
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
