"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "convex/react";
import { api } from "@/lib/convex/api";
import { contactSchema, type ContactInput } from "@/lib/validators/contact";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const submitLead = useMutation(api.leads.create);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactInput) {
    setSubmitState("loading");
    try {
      await submitLead(data);
      setSubmitState("success");
      reset();
    } catch {
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <div className="rounded-[19.2px] border border-border/20 p-10 text-center">
        <p className="font-sans text-lg text-almost-white">Message received.</p>
        <p className="mt-2 font-sans text-sm text-steel">
          We will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="font-sans text-sm font-medium text-foreground">
          Name <span className="text-destructive">*</span>
        </label>
        <input
          id="name"
          {...register("name")}
          className="mt-1 block w-full rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
          placeholder="Jane Doe"
        />
        {errors.name && (
          <p className="mt-1 font-sans text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="font-sans text-sm font-medium text-foreground">
          Email <span className="text-destructive">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="mt-1 block w-full rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
          placeholder="jane@example.com"
        />
        {errors.email && (
          <p className="mt-1 font-sans text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="font-sans text-sm font-medium text-foreground">
          Company
        </label>
        <input
          id="company"
          {...register("company")}
          className="mt-1 block w-full rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
          placeholder="Acme Inc."
        />
      </div>

      <div>
        <label htmlFor="message" className="font-sans text-sm font-medium text-foreground">
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="mt-1 block w-full rounded-[6px] border border-input bg-transparent px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring resize-y"
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <p className="mt-1 font-sans text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitState === "loading"}
        className="inline-flex items-center gap-2 rounded-lg border border-almost-white bg-near-black px-6 py-3 font-sans text-sm font-normal text-almost-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {submitState === "loading" && <Loader2 className="size-4 animate-spin" />}
        {submitState === "loading" ? "Sending..." : "Submit Inquiry"}
      </button>

      {submitState === "error" && (
        <p className="font-sans text-xs text-destructive">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
