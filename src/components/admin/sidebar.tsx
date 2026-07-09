"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthActions } from "@convex-dev/auth/react";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  PenLine,
  MessageSquare,
  HelpCircle,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Services", href: "/admin/services", icon: Briefcase },
  { label: "Case Studies", href: "/admin/case-studies", icon: FileText },
  { label: "Blog", href: "/admin/blog", icon: PenLine },
  { label: "Testimonials", href: "/admin/testimonials", icon: MessageSquare },
  { label: "FAQs", href: "/admin/faqs", icon: HelpCircle },
  { label: "Leads", href: "/admin/leads", icon: Users },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const { signOut } = useAuthActions();

  return (
    <aside
      className="flex w-64 flex-col border-r border-border/20 bg-near-black"
      aria-label="Admin navigation"
    >
      <div className="flex h-16 items-center border-b border-border/20 px-6">
        <Link
          href="/admin/dashboard"
          className="font-sans text-lg font-medium tracking-tight text-almost-white"
          aria-label="Dashboard home"
        >
          VENTRIEE
        </Link>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4" aria-label="Main menu">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 font-sans text-sm transition-colors",
                isActive
                  ? "bg-signal-violet/10 text-signal-violet"
                  : "text-steel hover:bg-iron/30 hover:text-almost-white",
              )}
            >
              <Icon className="size-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border/20 px-3 py-4">
        <button
          type="button"
          onClick={() => signOut()}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 font-sans text-sm text-steel transition-colors hover:bg-iron/30 hover:text-almost-white"
        >
          <LogOut className="size-4 shrink-0" />
          Log Out
        </button>
      </div>
    </aside>
  );
}
