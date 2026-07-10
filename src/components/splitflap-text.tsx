"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SplitFlapTextProps {
  text: string;
  className?: string;
  filledClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
  delay?: number;
  duration?: number;
}

export function SplitFlapText({
  text,
  className = "",
  filledClassName = "",
  as: Tag = "h3",
  delay = 0,
  duration = 1.2,
}: SplitFlapTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const chars = text.split("");

  return (
    <div ref={ref} className="relative inline-block">
      <Tag className={className} aria-hidden={false}>
        {chars.map((char, i) => (
          <span key={i} className="char">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </Tag>
      <div className="absolute inset-0 overflow-hidden" style={{ pointerEvents: "none" }}>
        <motion.div
          className="h-full"
          initial={{ width: "0%" }}
          animate={isInView ? { width: "100%" } : { width: "0%" }}
          transition={{
            duration,
            delay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Tag aria-hidden className={filledClassName}>
            {chars.map((char, i) => (
              <span key={i} className="char">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </Tag>
        </motion.div>
      </div>
    </div>
  );
}
