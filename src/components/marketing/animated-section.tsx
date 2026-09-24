"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

function getResponsiveDuration(): number {
  if (typeof window === "undefined") return 0.5;
  const w = window.innerWidth;
  if (w < 768) return 0.35;
  if (w < 1024) return 0.5;
  return 0.8;
}

function useDuration(): number {
  const prefersReducedMotion = useReducedMotion();
  const [duration, setDuration] = useState(getResponsiveDuration);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const update = () => setDuration(getResponsiveDuration());
    const mq = window.matchMedia("(max-width: 1024px)");
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [prefersReducedMotion]);

  return duration;
}

export function AnimatedSection({ children, className }: AnimatedSectionProps) {
  const duration = useDuration();

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
