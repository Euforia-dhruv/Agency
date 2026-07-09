import { FrostedNavBar } from "@/components/marketing/frosted-nav-bar";
import { CoordinateFooter } from "@/components/marketing/coordinate-footer";

const VENTRIEE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
] as const;

export default function VentrieeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FrostedNavBar
        brand="VENTRIEE"
        ctaLabel="Start a Project"
        ctaHref="mailto:hello@ventriee.com"
        links={VENTRIEE_LINKS}
      />
      <main className="flex-1">{children}</main>
      <CoordinateFooter />
    </>
  );
}
