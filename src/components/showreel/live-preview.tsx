"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LivePreviewProps {
  url: string;
  title: string;
  fill?: boolean;
  className?: string;
}

const DESKTOP_WIDTH = 1440;

const preloaded = new Set<string>();

function preloadPreview(url: string) {
  if (typeof document === "undefined" || preloaded.has(url)) return;
  preloaded.add(url);
  const preconnect = document.createElement("link");
  preconnect.rel = "preconnect";
  preconnect.href = new URL(url).origin;
  document.head.appendChild(preconnect);
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "document";
  link.href = url;
  document.head.appendChild(link);
}

export function LivePreview({ url, title, fill = false, className }: LivePreviewProps) {
  const [near, setNear] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [scale, setScale] = useState(1);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = frameRef.current;
    if (!el || near) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          preloadPreview(url);
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [near, url]);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      if (w > 0) setScale(w / DESKTOP_WIDTH);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0c0c12]",
        fill && "flex h-full min-h-0 flex-col",
        className,
      )}
    >
      <div className="flex shrink-0 items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="ml-2 truncate font-mono text-[10px] tracking-wide text-steel">
          {url.replace(/^https?:\/\//, "")}
        </span>
        <span className="ml-auto shrink-0 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-steel">
          Live
        </span>
      </div>

      <div
        ref={frameRef}
        className={cn(
          "relative w-full overflow-hidden bg-[#0c0c12]",
          fill ? "min-h-[220px] flex-1" : "aspect-[16/10]",
        )}
      >
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#15121f] to-[#0c0c12]" />
        )}
        {near && (
          <iframe
            src={url}
            title={`${title} live preview`}
            tabIndex={-1}
            aria-hidden="true"
            onLoad={() => setLoaded(true)}
            className="pointer-events-none absolute left-0 top-0 border-0 transition-opacity duration-700"
            style={{
              width: DESKTOP_WIDTH,
              height: `${100 / scale}%`,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              opacity: loaded ? 1 : 0,
            }}
          />
        )}
      </div>
    </div>
  );
}
