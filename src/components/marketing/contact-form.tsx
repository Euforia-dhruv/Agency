"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "convex/react";
import { api } from "@/lib/convex/api";
import { contactSchema, type ContactInput } from "@/lib/validators/contact";
import { ArrowRight, Loader2 } from "lucide-react";

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
      <div className="rounded-[19.2px] border border-[rgba(247,249,250,0.2)] p-10 text-center">
        <p className="font-sans text-xl text-almost-white">Message received.</p>
        <p className="mt-2 font-sans text-sm text-steel">
          We will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-sans text-sm font-medium text-almost-white">
            Name <span className="text-signal-violet">*</span>
          </label>
          <input
            id="name"
            {...register("name")}
            className="mt-2 block w-full rounded-[12px] border border-[rgba(247,249,250,0.15)] bg-transparent px-4 py-3 font-sans text-sm text-almost-white placeholder:text-steel focus:outline-none focus:ring-2 focus:ring-signal-violet/50"
          />
          {errors.name && (
            <p className="mt-1 font-sans text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="font-sans text-sm font-medium text-almost-white">
            Email <span className="text-signal-violet">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="mt-2 block w-full rounded-[12px] border border-[rgba(247,249,250,0.15)] bg-transparent px-4 py-3 font-sans text-sm text-almost-white placeholder:text-steel focus:outline-none focus:ring-2 focus:ring-signal-violet/50"
            placeholder="you@company.com"
          />
          {errors.email && (
            <p className="mt-1 font-sans text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="font-sans text-sm font-medium text-almost-white">
            Company
          </label>
          <input
            id="company"
            {...register("company")}
            className="mt-2 block w-full rounded-[12px] border border-[rgba(247,249,250,0.15)] bg-transparent px-4 py-3 font-sans text-sm text-almost-white placeholder:text-steel focus:outline-none focus:ring-2 focus:ring-signal-violet/50"
            placeholder="Company name"
          />
        </div>

        <div>
          <label htmlFor="budget" className="font-sans text-sm font-medium text-almost-white">
            Budget Range
          </label>
          <select
            id="budget"
            {...register("budget")}
            className="mt-2 block w-full rounded-[12px] border border-[rgba(247,249,250,0.15)] bg-transparent px-4 py-3 font-sans text-sm text-steel focus:outline-none focus:ring-2 focus:ring-signal-violet/50"
          >
            <option value="">Select budget</option>
            <option value="5k-10k">$5k - $10k</option>
            <option value="10k-25k">$10k - $25k</option>
            <option value="25k-50k">$25k - $50k</option>
            <option value="50k+">$50k+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-sans text-sm font-medium text-almost-white">
          Project Details <span className="text-signal-violet">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="mt-2 block w-full rounded-[12px] border border-[rgba(247,249,250,0.15)] bg-transparent px-4 py-3 font-sans text-sm text-almost-white placeholder:text-steel focus:outline-none focus:ring-2 focus:ring-signal-violet/50 resize-y"
          placeholder="Tell us about your project, goals, and timeline..."
        />
        {errors.message && (
          <p className="mt-1 font-sans text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitState === "loading"}
        className="inline-flex h-[52px] items-center justify-center gap-2 rounded-[999px] bg-signal-violet px-8 font-sans text-[15px] font-medium text-almost-white transition-all duration-250 hover:-translate-y-0.5 hover:bg-signal-violet hover:shadow-[0_0_30px_rgba(175,80,255,0.35)] disabled:opacity-50"
      >
        {submitState === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Start Project
            <ArrowRight className="size-4" />
          </>
        )}
      </button>

      {submitState === "error" && (
        <p className="font-sans text-xs text-destructive">
          Something went wrong. Please try again or email us directly at ventriee.contact@gmail.com.
        </p>
      )}
    </form>
  );
}
