"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 12, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "h", label: "Average Response" },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const stepDuration = duration / steps;
    const increment = value / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
    return () => clearInterval(interval);
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="mx-auto max-w-[1280px] px-4 py-[64px] sm:px-6 md:py-[80px] lg:py-[120px]"
      ref={ref}
    >
      <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-sans text-[clamp(2rem,4vw+0.5rem,3.75rem)] font-medium tracking-tight text-almost-white">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
            </p>
            <p className="mt-1 font-sans text-xs text-steel md:mt-2 md:text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
