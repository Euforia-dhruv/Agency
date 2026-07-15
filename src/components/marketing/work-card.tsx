"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import ExpandableProfileCard from "@/components/ui/expandable-profile-card";

interface WorkCardData {
  name: string;
  url: string;
  category: string;
  description: string;
  status: "Live" | "WIP";
  previewUrl: string | null;
}

function StatusBadge({ status }: { status: WorkCardData["status"] }) {
  return (
    <span
      className={cn(
        "shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider backdrop-blur-sm",
        status === "Live"
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
          : "border-amber-500/30 bg-amber-500/10 text-amber-400",
      )}
    >
      {status}
    </span>
  );
}

export function WorkCard({ project, index }: { project: WorkCardData; index: number }) {
  const cleanUrl = project.url.replace(/https?:\/\//, "").replace(/\/$/, "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <ExpandableProfileCard
        layoutKey={`work-${project.name}`}
        eyebrow={project.category}
        title={project.name}
        imageSrc={project.previewUrl ?? undefined}
        icon={<Globe />}
        badge={<StatusBadge status={project.status} />}
        preview={
          <p className="line-clamp-2 font-sans text-xs leading-relaxed text-zinc-400 md:text-sm">
            {project.description}
          </p>
        }
        content={
          <div className="flex flex-col gap-6">
            <p className="text-almost-white/80">{project.description}</p>
            <div className="flex items-center gap-2 font-mono text-xs text-steel">
              <Globe className="size-4 text-signal-violet" />
              <span className="truncate">{cleanUrl}</span>
            </div>
          </div>
        }
        cta={{ label: "Visit Website", href: project.url }}
      />
    </motion.div>
  );
}
