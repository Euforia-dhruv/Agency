import type { Metadata } from "next";
import { TestimonialForm } from "@/components/admin/testimonial-form";

export const metadata: Metadata = {
  title: "New Testimonial",
};

export default function NewTestimonialPage() {
  return (
    <div className="p-8">
      <h1 className="font-sans text-2xl font-normal text-almost-white">New Testimonial</h1>
      <div className="mt-8 max-w-lg">
        <TestimonialForm />
      </div>
    </div>
  );
}
