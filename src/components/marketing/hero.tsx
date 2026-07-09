"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const floatingOrbs = [
  { size: 400, x: "15%", y: "10%", delay: 0, duration: 20, opacity: 0.08 },
  { size: 300, x: "70%", y: "20%", delay: 5, duration: 25, opacity: 0.06 },
  { size: 250, x: "40%", y: "60%", delay: 10, duration: 18, opacity: 0.05 },
  { size: 350, x: "80%", y: "70%", delay: 3, duration: 22, opacity: 0.04 },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #0a0a1a 0%, #1a0a2e 30%, #2d1b4e 50%, #1a0a2e 70%, #090909 100%)",
        }}
      />

      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute -z-10 rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: "radial-gradient(circle, rgba(175, 80, 255, 0.3) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 30, -20, 40, 0],
            y: [0, -40, 20, -30, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 pt-32 pb-24 lg:flex-row lg:items-center lg:pt-24">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="font-mono text-[10px] uppercase tracking-[1.8px] text-signal-violet"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            VENTRIEE &mdash; Software Development Agency
          </motion.p>

          <motion.span
            className="mt-6 block font-heading text-5xl font-light italic leading-none tracking-tight sm:text-7xl lg:text-8xl"
            style={{ fontStyle: "italic" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We build
          </motion.span>

          <motion.h1
            className="mt-2 font-sans text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Premium Software
          </motion.h1>

          <motion.span
            className="block font-heading text-3xl font-light italic leading-none tracking-tight sm:text-4xl lg:text-5xl"
            style={{ fontStyle: "italic" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            For Ambitious Businesses.
          </motion.span>

          <motion.p
            className="mt-6 max-w-md font-sans text-lg font-light leading-relaxed text-almost-white/70 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            VENTRIEE is a freelance software development agency crafting fast, scalable, and premium
            digital experiences for startups, creators, and businesses.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-almost-white bg-near-black px-6 py-3 font-sans text-sm text-almost-white transition-all hover:bg-almost-white hover:text-near-black"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-sans text-sm text-steel transition-colors hover:text-almost-white"
            >
              View Our Work &rarr;
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full shrink-0 lg:w-[420px]"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <div
            className="rounded-[19.2px] border p-8 backdrop-blur-[6px] sm:p-10"
            style={{
              background: "rgba(175, 80, 255, 0.04)",
              borderColor: "rgba(247, 249, 250, 0.15)",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="font-sans text-xs font-medium uppercase tracking-[0.07em] text-signal-violet">
                VENTRIEE
              </span>
            </div>

            <div className="mt-4 border-b border-border/20 pb-4">
              <p className="font-sans text-xs uppercase tracking-[0.05em] text-ash">Software</p>
              <p className="font-sans text-sm font-medium text-almost-white">Development Agency</p>
            </div>

            <h3 className="mt-4 font-sans text-xl font-normal leading-tight tracking-tight text-almost-white sm:text-2xl">
              We build custom software for clients.
            </h3>

            <ul className="mt-4 space-y-2">
              {[
                "Web Development",
                "UI / UX Design",
                "Mobile Apps",
                "AI Integrations",
                "API Development",
                "Performance Optimization",
              ].map((service) => (
                <li key={service} className="flex items-center gap-2 font-sans text-sm text-steel">
                  <span className="size-1.5 rounded-full bg-signal-violet" />
                  {service}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block rounded-lg border border-almost-white bg-near-black px-5 py-2.5 text-center font-sans text-sm text-almost-white transition-all hover:bg-almost-white hover:text-near-black"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
