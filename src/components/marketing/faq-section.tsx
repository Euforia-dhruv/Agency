"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQ {
  _id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

const defaultFAQs: FAQ[] = [
  {
    _id: "1",
    question: "What types of projects do you take on?",
    answer:
      "We work on web applications, SaaS platforms, mobile apps, AI integrations, and custom software. From MVPs to full production deployments and ongoing maintenance.",
  },
  {
    _id: "2",
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. Landing pages take 1-2 weeks, MVPs 4-8 weeks, and full platforms 8-16 weeks. We provide a detailed timeline during discovery.",
  },
  {
    _id: "3",
    question: "What's your pricing model?",
    answer:
      "We work on fixed-scope projects with clear deliverables, or retainer for ongoing work. No hourly billing surprises. You know the cost before we start.",
  },
  {
    _id: "4",
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with clients worldwide. Communication is async-friendly and we adapt to your timezone for key meetings.",
  },
  {
    _id: "5",
    question: "What happens after launch?",
    answer:
      "We provide ongoing support, monitoring, and maintenance. You can also opt for a retainer for continued feature development and optimization.",
  },
];

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const items = faqs.length > 0 ? faqs : defaultFAQs;

  return (
    <section className="bg-near-black py-[64px] md:py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="mb-10 max-w-2xl md:mb-16">
          <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
            Questions
          </p>
          <h2 className="mt-3 font-sans text-[clamp(1.75rem,3vw+0.5rem,3.75rem)] font-medium tracking-tight text-almost-white md:mt-4">
            Frequently asked
          </h2>
        </div>

        <div className="max-w-3xl space-y-2">
          {items.map((faq) => {
            const isOpen = openId === faq._id;
            return (
              <div
                key={faq._id}
                className="overflow-hidden rounded-[19.2px] border border-[rgba(247,249,250,0.2)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq._id)}
                  className="flex w-full items-center justify-between p-4 text-left md:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-base font-medium text-almost-white md:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-steel transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 font-sans text-sm leading-relaxed text-steel">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
