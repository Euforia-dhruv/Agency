import Link from "next/link";
import { Plus } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  createHref?: string;
}

export function EmptyState({ title, description, createHref }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[19.2px] border border-border/20 px-6 py-16 text-center">
      <p className="font-sans text-base font-medium text-almost-white">{title}</p>
      <p className="mt-1 font-sans text-sm text-steel">{description}</p>
      {createHref && (
        <Link
          href={createHref}
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-almost-white bg-near-black px-4 py-2 font-sans text-sm font-normal text-almost-white transition-opacity hover:opacity-90"
        >
          <Plus className="size-4" />
          Create
        </Link>
      )}
    </div>
  );
}
