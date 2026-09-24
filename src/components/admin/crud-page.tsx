import Link from "next/link";
import { Plus } from "lucide-react";

interface CrudPageProps {
  title: string;
  description?: string;
  createHref?: string;
}

export function CrudPageHeader({ title, description, createHref }: CrudPageProps) {
  return (
    <div className="mb-8 flex items-start justify-between">
      <div>
        <h1 className="font-sans text-2xl font-normal text-almost-white">{title}</h1>
        {description && <p className="mt-1 font-sans text-sm text-steel">{description}</p>}
      </div>
      {createHref && (
        <Link
          href={createHref}
          className="inline-flex items-center gap-2 rounded-lg border border-almost-white bg-near-black px-4 py-2 font-sans text-sm font-normal text-almost-white transition-opacity hover:opacity-90"
        >
          <Plus className="size-4" />
          Create
        </Link>
      )}
    </div>
  );
}
