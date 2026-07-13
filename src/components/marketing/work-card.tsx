"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkCardData {
  name: string;
  url: string;
  category: string;
  description: string;
  status: "Live" | "WIP";
  previewUrl: string | null;
}

function CardThumbnail({
  previewUrl,
  name,
  url,
}: {
  previewUrl: string | null;
  name: string;
  url: string;
}) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [retries, setRetries] = useState(0);

  const handleError = useCallback(() => {
    if (retries < 2) {
      setRetries((r) => r + 1);
    } else {
      setImgError(true);
    }
  }, [retries]);

  if (imgError || !previewUrl) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-zinc-900 to-black">
        <Globe className="size-10 text-zinc-700" />
        <span className="max-w-[200px] truncate px-4 text-center font-sans text-xs text-zinc-600">
          {url.replace(/https?:\/\//, "").replace(/\/$/, "")}
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={previewUrl}
        alt={`${name} website preview`}
        fill
        className={cn(
          "object-cover object-top transition-all duration-700 group-hover:scale-110",
          imgLoaded ? "opacity-100" : "opacity-0",
        )}
        onLoad={() => setImgLoaded(true)}
        onError={handleError}
        sizes="(max-width: 768px) 100vw, 50vw"
        unoptimized
      />
      {!imgLoaded && <div className="absolute inset-0 animate-pulse bg-zinc-900" />}
    </div>
  );
}

function getAnimDuration(): number {
  if (typeof window === "undefined") return 0.5;
  const w = window.innerWidth;
  if (w < 768) return 0.35;
  if (w < 1024) return 0.5;
  return 0.8;
}

function useMobileAnimationDuration(): number {
  const [duration, setDuration] = useState(getAnimDuration);
  const mqlRef = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    mqlRef.current = window.matchMedia("(max-width: 1024px)");
    const update = () => setDuration(getAnimDuration());
    mqlRef.current.addEventListener("change", update);
    return () => mqlRef.current?.removeEventListener("change", update);
  }, []);

  return duration;
}

export function WorkCard({ project, index }: { project: WorkCardData; index: number }) {
  const animDuration = useMobileAnimationDuration();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: animDuration, delay: index * 0.1 }}
      className="group"
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-full flex-col overflow-hidden rounded-[20px] border border-[#8B5CF6]/30 bg-[#0A0A0A] transition-all duration-500 md:rounded-[24px] md:hover:border-[#8B5CF6]/60 md:hover:shadow-[0_0_40px_-8px_rgba(139,92,246,0.2)]"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <CardThumbnail previewUrl={project.previewUrl} name={project.name} url={project.url} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
        </div>

        <div className="flex flex-1 flex-col p-4 md:p-6">
          <div className="flex items-start justify-between gap-2 md:gap-3">
            <div className="min-w-0">
              <span className="font-mono text-[10px] uppercase tracking-[1.2px] text-signal-violet md:text-[11px]">
                {project.category}
              </span>
              <h3 className="mt-1 font-sans text-base font-medium text-almost-white transition-colors duration-300 md:mt-1.5 md:text-xl md:group-hover:text-[#8B5CF6]">
                {project.name}
              </h3>
            </div>
            <span
              className={cn(
                "shrink-0 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider md:px-2.5 md:text-[10px]",
                project.status === "Live"
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                  : "border-amber-500/30 bg-amber-500/10 text-amber-400",
              )}
            >
              {project.status}
            </span>
          </div>

          <p className="mt-2 font-sans text-xs leading-relaxed text-zinc-400 md:mt-3 md:text-sm">
            {project.description}
          </p>

          <div className="mt-auto flex items-center gap-1.5 pt-3 font-sans text-xs text-almost-white transition-all duration-300 md:pt-5 md:text-sm md:group-hover:translate-x-1 md:group-hover:text-[#8B5CF6]">
            <span>Visit Website</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-300 md:size-4 md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5" />
          </div>
        </div>
      </a>
    </motion.div>
  );
}
