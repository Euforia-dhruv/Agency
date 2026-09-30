"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LivePreviewProps {
  url: string;
  title: string;
  active?: boolean;
  fill?: boolean;
  className?: string;
}

const DESKTOP_WIDTH = 1440;

export function LivePreview({ url, title, active, fill = false, className }: LivePreviewProps) {
  const [loaded, setLoaded] = useState(false);
  const [scale, setScale] = useState(1);
  const frameRef = useRef<HTMLDivElement>(null);

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
        {active !== false && (
          <iframe
            src={url}
            title={`${title} live preview`}
            loading="lazy"
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
