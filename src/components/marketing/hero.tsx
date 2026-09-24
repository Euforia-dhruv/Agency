"use client";

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
    <section className="relative flex min-h-screen w-full items-center overflow-hidden md:min-h-[82svh]">
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: "linear-gradient(180deg, #090909 0%, #0a0a12 40%, #0c0a16 60%, #090909 100%)",
        }}
      />

      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute -z-10 rounded-full blur-3xl max-md:opacity-50"
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
        className="absolute inset-0 -z-[15] opacity-[0.15] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='48' height='96' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23000000ff'/><path d='M0 0v8h4v4h4v4h4v4h4v-4h4v-4h4V8h4V4h4V0H0zm40 0v4h-4v4h-4v4h-4v4h-4v4h-4v4h-4v4h-4v4H4v-4H0v8h4v4h4v4h4v4h36v-8h-4v-4h-4v-4h-4v-4h-4v4h-4v4h-4v4h-4v4h-4v-4h-4v-4h4v-4h4v-4h4v-4h4v-4h8v4h4v4h4v4h4v-8h-4v-4h-4v-4h-4v-4h4V8h4V4h4V0h-8zM8 4h12v4h-4v4h-4V8H8V4zm24 32h4v4h4v4H28v-4h4v-4zM0 44v4h4v-4H0zm0 8v12h4v4h8v-4h4v-4h4v-4h4v-4H0zm40 0v4h4v4h4v-8h-8zM4 56h8v4H4v-4zm24 4v8h8v-8h-8zm8 8v4h8v-4h-8zm8 4v4h4v-4h-4zm-16-4h-8v4h8v-4zm-8 4h-8v4h8v-4zm-8 4H4v8h8v-8zm-8 0v-4H0v4h4zm24 0v4h-4v4h-4v4h-4v4h32v-4h-4v-4h-4v-4h-4v-4h-8zm0 8h8v4h-8v-4z' stroke-width='1' stroke='none' fill='%236d0081ff'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,-99)' fill='url(%23a)'/></svg>\")",
          maskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)",
        }}
      />

      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, #090909 85%)",
        }}
      />

      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.12] max-md:hidden">
        <ASCIIText
          text="VENTRIEE"
          enableWaves={true}
          asciiFontSize={6}
          textFontSize={180}
          textColor="#f7f9fa"
          planeBaseHeight={6}
        />
      </div>

      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-4 pt-[88px] pb-16 sm:px-6 sm:pt-[100px] sm:pb-20 lg:flex-row lg:items-center lg:gap-16 lg:pt-[120px] lg:pb-[80px]">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet max-sm:text-[10px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            VENTRIEE &mdash; Software Development Agency
          </motion.p>

          <div className="mt-4 sm:mt-6">
            <motion.span
              className="block font-heading italic leading-[0.95] tracking-tight text-almost-white"
              style={{ fontSize: "clamp(1.75rem, 5vw + 0.5rem, 4.5rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We build
            </motion.span>
            <motion.h1
              className="mt-2 font-sans font-medium leading-[1.05] tracking-[-0.03em] text-almost-white"
              style={{ fontSize: "clamp(2rem, 5vw + 0.5rem, 4.5rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              software that
            </motion.h1>
            <motion.h1
              className="font-sans font-medium leading-[1.05] tracking-[-0.03em] text-almost-white"
              style={{ fontSize: "clamp(2rem, 5vw + 0.5rem, 4.5rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              businesses love to use.
            </motion.h1>
          </div>

          <motion.p
            className="mt-6 max-w-lg font-sans font-light leading-relaxed text-steel sm:mt-8"
            style={{ fontSize: "clamp(1rem, 1.2vw + 0.25rem, 1.375rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We design and build modern websites, SaaS platforms, AI products, mobile apps, and
            custom software engineered for startups, creators, and growing businesses.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdw4IlcSamgm0OX-hQ-oG8ZdROOXnBV7JsohBDIcNex98Zsfw/viewform?usp=sharing&ouid=104155249190921591426"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[56px] w-full items-center justify-center gap-2 rounded-[16px] bg-signal-violet px-7 font-sans text-[15px] font-medium text-almost-white transition-all duration-250 hover:-translate-y-0.5 hover:bg-signal-violet hover:shadow-[0_0_30px_rgba(175,80,255,0.35)] sm:w-auto"
            >
              Start Your Project
              <ArrowRight className="size-4" />
            </a>
            <a
              href="mailto:ventriee.contact@gmail.com"
              className="inline-flex h-[56px] items-center justify-center font-sans text-[15px] font-medium text-steel transition-colors hover:text-almost-white max-sm:w-full"
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
            className="rounded-[19.2px] p-6 backdrop-blur-[12px] sm:p-8 lg:p-10"
            style={{
              background: "rgba(66, 55, 56, 0.3)",
              border: "1px solid rgba(247, 249, 250, 0.2)",
            }}
          >
            <div>
              <Logo size="md" />
              <p className="mt-1 font-sans text-sm text-steel">Software Development Agency</p>
            </div>

            <div className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
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

            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/[0.06] pt-5 sm:mt-8 sm:pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-sans text-2xl font-medium text-almost-white">{stat.value}</p>
                  <p className="mt-0.5 font-sans text-xs text-steel">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-3 font-sans text-xs text-steel sm:mt-4">Available Worldwide</p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdw4IlcSamgm0OX-hQ-oG8ZdROOXnBV7JsohBDIcNex98Zsfw/viewform?usp=sharing&ouid=104155249190921591426"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-[16px] bg-signal-violet px-7 font-sans text-[14px] font-medium text-almost-white transition-all hover:-translate-y-0.5 hover:bg-signal-violet hover:shadow-[0_0_20px_rgba(175,80,255,0.3)] sm:mt-6 sm:h-[44px]"
            >
              Let&rsquo;s Build
              <ArrowRight className="size-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
