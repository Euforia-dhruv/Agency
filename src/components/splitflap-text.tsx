"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function randomChar(): string {
  return LETTERS[Math.floor(Math.random() * LETTERS.length)];
}

interface SplitFlapTextProps {
  text: string;
  className?: string;
  filledClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
  staggerDelay?: number;
  flipInterval?: number;
  minFlips?: number;
  maxFlips?: number;
}

export function SplitFlapText({
  text,
  className = "",
  filledClassName = "",
  as: Tag = "h3",
  staggerDelay = 80,
  flipInterval = 60,
  minFlips = 6,
  maxFlips = 10,
}: SplitFlapTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const startedRef = useRef(false);
  const [chars, setChars] = useState<string[]>(() => text.split("").map(() => randomChar()));

  useEffect(() => {
    if (!isInView || startedRef.current) return;
    startedRef.current = true;

    const target = text.split("");

    target.forEach((_char, index) => {
      const entryDelay = index * staggerDelay;
      const flips = minFlips + Math.floor(Math.random() * (maxFlips - minFlips + 1));

      let count = 0;
      const tick = () => {
        count++;
        if (count < flips) {
          setChars((prev) => {
            const next = [...prev];
            next[index] = randomChar();
            return next;
          });
          setTimeout(tick, flipInterval + Math.random() * 20);
        } else {
          setChars((prev) => {
            const next = [...prev];
            next[index] = target[index];
            return next;
          });
        }
      };

      setTimeout(tick, entryDelay);
    });
  }, [isInView, text, staggerDelay, flipInterval, minFlips, maxFlips]);

  return (
    <div ref={ref} className="relative inline-block">
      <Tag className={className} aria-hidden={false}>
        {chars.map((char, i) => (
          <span key={i} className="char" style={{ fontVariantNumeric: "tabular-nums" }}>
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
            duration: 1.2,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Tag aria-hidden className={filledClassName}>
            {chars.map((char, i) => (
              <span key={i} className="char" style={{ fontVariantNumeric: "tabular-nums" }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </Tag>
        </motion.div>
      </div>
    </div>
  );
}
