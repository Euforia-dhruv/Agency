import { FrostedNavBar } from "@/components/marketing/frosted-nav-bar";
import { Footer } from "@/components/marketing/footer";
import { GOOGLE_FORM_URL } from "@/lib/constants";

const VENTRIEE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/ventriee#capabilities" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function VentrieeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FrostedNavBar ctaLabel="Start a Project" ctaHref={GOOGLE_FORM_URL} links={VENTRIEE_LINKS} />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
