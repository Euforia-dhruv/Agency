"use client";

import { useMutation } from "convex/react";
import { api } from "@/lib/convex/api";

const STATUS_COLORS: Record<string, string> = {
  NEW: "bg-signal-violet/10 text-signal-violet",
  CONTACTED: "bg-blue-500/10 text-blue-400",
  QUALIFIED: "bg-amber-500/10 text-amber-400",
  WON: "bg-green-500/10 text-green-400",
  LOST: "bg-red-500/10 text-red-400",
};

interface LeadStatusBadgeProps {
  leadId: string;
  status: string;
}

export function LeadStatusBadge({ leadId, status }: LeadStatusBadgeProps) {
  const updateStatus = useMutation(api.leads.updateStatus);

  const STATUSES = ["NEW", "CONTACTED", "QUALIFIED", "WON", "LOST"] as const;

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    await updateStatus({ id: leadId as any, status: e.target.value as any });
  }

  return (
    <select
      value={status}
      onChange={handleChange}
      className={`rounded-[6px] border-none px-2.5 py-0.5 font-sans text-xs outline-none cursor-pointer ${STATUS_COLORS[status] ?? "text-steel"}`}
    >
      {STATUSES.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}
