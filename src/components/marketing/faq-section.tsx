"use client";

import { useState } from "react";
import { StampedSectionHeading } from "./stamped-section-heading";
import { AnimatedSection } from "./animated-section";
import { ChevronDown } from "lucide-react";

interface FAQ {
  _id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

function FAQItem({ question, answer }: FAQ) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/10">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left font-sans text-sm font-medium text-almost-white transition-colors hover:text-signal-violet"
      >
        {question}
        <ChevronDown
          className={`size-4 shrink-0 text-steel transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <div className="pb-5 font-sans text-sm leading-relaxed text-steel">{answer}</div>}
    </div>
  );
}

export function FAQSection({ faqs }: FAQSectionProps) {
  if (faqs.length === 0) return null;

  return (
    <AnimatedSection className="mx-auto max-w-[800px] px-6 py-32">
      <StampedSectionHeading>FAQs</StampedSectionHeading>

      <div className="mt-16">
        {faqs.map((faq) => (
          <FAQItem key={faq._id} {...faq} />
        ))}
      </div>
    </AnimatedSection>
  );
}
