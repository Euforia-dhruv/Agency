import type { Metadata } from "next";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convex/api";
import { LeadStatusBadge } from "@/components/admin/lead-status-badge";

export const metadata: Metadata = {
  title: "Leads",
};

export default async function AdminLeadsPage() {
  const leads = await fetchQuery(api.leads.list);

  return (
    <div className="p-8">
      <h1 className="font-sans text-2xl font-normal text-almost-white">Leads</h1>
      <p className="mt-1 font-sans text-sm text-steel">Contact form submissions.</p>

      {leads.length === 0 ? (
        <div className="mt-8 rounded-[19.2px] border border-border/20 p-10 text-center">
          <p className="font-sans text-sm text-steel">No leads yet.</p>
        </div>
      ) : (
        <div className="mt-8 space-y-3">
          {leads.map((lead) => (
            <div key={lead._id} className="rounded-[19.2px] border border-border/20 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-sans text-sm font-medium text-almost-white">
                    {lead.name}
                  </span>
                  <a
                    href={`mailto:${lead.email}`}
                    className="ml-3 font-sans text-xs text-signal-violet transition-colors hover:text-signal-violet/80"
                  >
                    {lead.email}
                  </a>
                </div>
                <LeadStatusBadge leadId={lead._id} status={lead.status} />
              </div>
              {lead.company && (
                <p className="mt-1 font-sans text-xs text-steel">
                  {lead.company}
                  {lead.phone && <> · {lead.phone}</>}
                </p>
              )}
              <p className="mt-2 font-sans text-sm text-ash whitespace-pre-wrap line-clamp-3">
                {lead.message}
              </p>
              <p className="mt-2 font-sans text-xs text-iron">
                {new Date(lead._creationTime).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
