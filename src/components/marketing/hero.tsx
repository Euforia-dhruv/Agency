"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Logo } from "@/components/logo";
import ASCIIText from "@/components/ascii-text";

const services = [
  "Custom Websites",
  "SaaS Platforms",
  "AI Integrations",
  "Mobile Apps",
  "UI / UX Design",
  "API Development",
];

const stats = [
  { label: "Projects Delivered", value: "12+" },
  { label: "Client Satisfaction", value: "100%" },
];

const floatingOrbs = [
  { size: 500, x: "10%", y: "5%", delay: 0, duration: 25, opacity: 0.07 },
  { size: 400, x: "65%", y: "15%", delay: 5, duration: 30, opacity: 0.05 },
  { size: 300, x: "35%", y: "55%", delay: 10, duration: 22, opacity: 0.04 },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden">
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: "linear-gradient(180deg, #090909 0%, #0a0a12 40%, #0c0a16 60%, #090909 100%)",
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
            background: `radial-gradient(circle, rgba(175, 80, 255, ${orb.opacity}) 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 40, -30, 50, 0],
            y: [0, -50, 30, -40, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, #090909 85%)",
        }}
      />

      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.12]">
        <ASCIIText
          text="VENTRIEE"
          enableWaves={true}
          asciiFontSize={6}
          textFontSize={180}
          textColor="#f7f9fa"
          planeBaseHeight={6}
        />
      </div>

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-6 pt-[140px] pb-[100px] lg:flex-row lg:items-center lg:pt-[120px] lg:pb-[80px]">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            VENTRIEE &mdash; Software Development Agency
          </motion.p>

          <div className="mt-6">
            <motion.span
              className="block font-heading text-5xl italic leading-[0.95] tracking-tight text-almost-white sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We build
            </motion.span>
            <motion.h1
              className="mt-2 font-sans text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-almost-white sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              software that
            </motion.h1>
            <motion.h1
              className="font-sans text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-almost-white sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              businesses love to use.
            </motion.h1>
          </div>

          <motion.p
            className="mt-8 max-w-lg font-sans text-lg font-light leading-relaxed text-steel lg:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We design and build modern websites, SaaS platforms, AI products, mobile apps, and
            custom software engineered for startups, creators, and growing businesses.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link
              href="/contact"
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-[999px] bg-signal-violet px-7 font-sans text-[15px] font-medium text-almost-white transition-all duration-250 hover:-translate-y-0.5 hover:bg-signal-violet hover:shadow-[0_0_30px_rgba(175,80,255,0.35)]"
            >
              Start Your Project
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="mailto:ventriee.contact@gmail.com"
              className="inline-flex h-[52px] items-center font-sans text-[15px] font-medium text-steel transition-colors hover:text-almost-white"
            >
              Email Us Directly
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full shrink-0 lg:w-[400px]"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <div
            className="rounded-[19.2px] p-8 backdrop-blur-[12px] sm:p-10"
            style={{
              background: "rgba(66, 55, 56, 0.3)",
              border: "1px solid rgba(247, 249, 250, 0.2)",
            }}
          >
            <div>
              <Logo size="md" />
              <p className="mt-1 font-sans text-sm text-steel">Software Development Agency</p>
            </div>

            <div className="mt-6 space-y-3">
              {services.map((service, i) => (
                <motion.div
                  key={service}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.08 }}
                >
                  <Check className="size-4 shrink-0 text-signal-violet" />
                  <span className="font-sans text-sm text-almost-white/90">{service}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/[0.06] pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-sans text-2xl font-medium text-almost-white">{stat.value}</p>
                  <p className="mt-0.5 font-sans text-xs text-steel">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 font-sans text-xs text-steel">Available Worldwide</p>

            <Link
              href="/contact"
              className="mt-6 inline-flex h-[44px] w-full items-center justify-center gap-2 rounded-[999px] bg-signal-violet font-sans text-[14px] font-medium text-almost-white transition-all hover:-translate-y-0.5 hover:bg-signal-violet hover:shadow-[0_0_20px_rgba(175,80,255,0.3)]"
            >
              Let&rsquo;s Build
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
