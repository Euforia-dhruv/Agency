import type { Metadata } from "next";
import { ServiceForm } from "@/components/admin/service-form";

export const metadata: Metadata = {
  title: "New Service",
};

export default function NewServicePage() {
  return (
    <div className="p-8">
      <h1 className="font-sans text-2xl font-normal text-almost-white">New Service</h1>
      <div className="mt-8 max-w-lg">
        <ServiceForm />
      </div>
    </div>
  );
}
