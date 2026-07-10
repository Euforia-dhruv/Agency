import { FrostedNavBar } from "@/components/marketing/frosted-nav-bar";
import { Footer } from "@/components/marketing/footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FrostedNavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
