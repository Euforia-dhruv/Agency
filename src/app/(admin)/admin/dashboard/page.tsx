import type { Metadata } from "next";
import { fetchQuery } from "convex/nextjs";
import { convexAuthNextjsToken } from "@convex-dev/auth/nextjs/server";
import { api } from "@/lib/convex/api";
import { FileText, Briefcase, PenLine, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard",
};

const IconMap = {
  services: Briefcase,
  projects: FileText,
  blogPosts: PenLine,
  leads: MessageSquare,
} as const;

export default async function AdminDashboardPage() {
  const token = await convexAuthNextjsToken();
  const fetchOptions = token ? { token } : {};

  const [services, projects, posts, leads] = await Promise.all([
    fetchQuery(api.services.list, {}, fetchOptions),
    fetchQuery(api.projects.list, {}, fetchOptions),
    fetchQuery(api.blog.list, {}, fetchOptions),
    fetchQuery(api.leads.count, {}, fetchOptions),
  ]);

  const widgets = [
    {
      label: "Services",
      value: services.length,
      key: "services" as const,
      href: "/admin/services",
    },
    {
      label: "Case Studies",
      value: projects.length,
      key: "projects" as const,
      href: "/admin/case-studies",
    },
    { label: "Blog Posts", value: posts.length, key: "blogPosts" as const, href: "/admin/blog" },
    { label: "Leads", value: leads.length, key: "leads" as const, href: "/admin/leads" },
  ];

  return (
    <div className="p-8">
      <h1 className="font-sans text-2xl font-normal text-almost-white">Dashboard</h1>
      <p className="mt-1 font-sans text-sm text-steel">Overview of your site content.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {widgets.map((widget) => {
          const Icon = IconMap[widget.key];
          return (
            <a
              key={widget.label}
              href={widget.href}
              className="rounded-[19.2px] border border-border/20 p-6 transition-colors hover:border-almost-white/40"
            >
              <Icon className="size-5 text-signal-violet" />
              <p className="mt-4 font-sans text-3xl font-normal text-almost-white">
                {widget.value}
              </p>
              <p className="mt-1 font-sans text-sm text-steel">{widget.label}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
