import { FrostedNavBar } from "@/components/marketing/frosted-nav-bar";
import { Footer } from "@/components/marketing/footer";

const VENTRIEE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function VentrieeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FrostedNavBar
        ctaLabel="Start a Project"
        ctaHref="mailto:ventriee.contact@gmail.com"
        links={VENTRIEE_LINKS}
      />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
