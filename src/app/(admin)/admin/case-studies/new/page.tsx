import type { Metadata } from "next";
import { CaseStudyForm } from "@/components/admin/case-study-form";

export const metadata: Metadata = {
  title: "New Case Study",
};

export default function NewCaseStudyPage() {
  return (
    <div className="p-8">
      <h1 className="font-sans text-2xl font-normal text-almost-white">New Case Study</h1>
      <div className="mt-8 max-w-lg">
        <CaseStudyForm />
      </div>
    </div>
  );
}
