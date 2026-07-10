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
    <section className="bg-surface py-[140px] md:py-[96px] sm:py-[72px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet">
            Questions
          </p>
          <h2 className="mt-4 font-sans text-4xl font-medium tracking-tight text-almost-white sm:text-5xl lg:text-6xl">
            Frequently asked
          </h2>
        </div>

        <div className="max-w-3xl space-y-2">
          {items.map((faq) => {
            const isOpen = openId === faq._id;
            return (
              <div
                key={faq._id}
                className="overflow-hidden rounded-[19.2px]"
                style={{
                  background: "rgba(23, 23, 31, 0.5)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq._id)}
                  className="flex w-full items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-lg font-medium text-almost-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-muted-text transition-transform duration-300 ${
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
                      <p className="px-6 pb-6 font-sans text-sm leading-relaxed text-muted-text">
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
