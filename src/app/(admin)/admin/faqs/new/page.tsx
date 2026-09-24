import type { Metadata } from "next";
import { FAQForm } from "@/components/admin/faq-form";

export const metadata: Metadata = {
  title: "New FAQ",
};

export default function NewFAQPage() {
  return (
    <div className="p-8">
      <h1 className="font-sans text-2xl font-normal text-almost-white">New FAQ</h1>
      <div className="mt-8 max-w-lg">
        <FAQForm />
      </div>
    </div>
  );
}
