"use client";

import { useState, useCallback } from "react";
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

export function WorkCard({ project, index }: { project: WorkCardData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[#8B5CF6]/30 bg-[#0A0A0A] transition-all duration-500 hover:border-[#8B5CF6]/60 hover:shadow-[0_0_40px_-8px_rgba(139,92,246,0.2)]"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <CardThumbnail previewUrl={project.previewUrl} name={project.name} url={project.url} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <span className="font-mono text-[11px] uppercase tracking-[1.2px] text-signal-violet">
                {project.category}
              </span>
              <h3 className="mt-1.5 font-sans text-xl font-medium text-almost-white transition-colors duration-300 group-hover:text-[#8B5CF6]">
                {project.name}
              </h3>
            </div>
            <span
              className={cn(
                "shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider",
                project.status === "Live"
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                  : "border-amber-500/30 bg-amber-500/10 text-amber-400",
              )}
            >
              {project.status}
            </span>
          </div>

          <p className="mt-3 font-sans text-sm leading-relaxed text-zinc-400">
            {project.description}
          </p>

          <div className="mt-auto flex items-center gap-1.5 pt-5 font-sans text-sm text-almost-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#8B5CF6]">
            <span>Visit Website</span>
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </a>
    </motion.div>
  );
}
