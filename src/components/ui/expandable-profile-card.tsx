"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpandableCardProps {
  layoutKey: string;
  eyebrow?: string;
  title: string;
  imageSrc?: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  preview?: React.ReactNode;
  content?: React.ReactNode;
  cta?: { label: string; href: string };
  className?: string;
}

export default function ExpandableProfileCard({
  layoutKey,
  eyebrow,
  title,
  imageSrc,
  icon,
  badge,
  preview,
  content,
  cta,
  className,
}: ExpandableCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const layoutId = `expandable-card-${layoutKey}`;
  const showImage = Boolean(imageSrc) && !imgError;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const renderMedia = ({ expanded }: { expanded?: boolean }) =>
    showImage ? (
      <motion.img
        layoutId={`image-${layoutId}`}
        src={imageSrc}
        alt={title}
        onError={() => setImgError(true)}
        className={cn(
          "h-full w-full object-cover object-top",
          !expanded && "transition-transform duration-700 group-hover:scale-105",
        )}
      />
    ) : (
      <motion.div
        layoutId={`image-${layoutId}`}
        className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#12101a] to-[#090909]"
      >
        <div
          className={cn(
            "inline-flex items-center justify-center rounded-[16px] bg-signal-violet/10 text-signal-violet transition-colors group-hover:bg-signal-violet/20",
            expanded ? "size-20 [&_svg]:size-9" : "size-14 [&_svg]:size-6",
          )}
        >
          {icon}
        </div>
      </motion.div>
    );

  return (
    <>
      <motion.div
        layoutId={layoutId}
        onClick={() => setIsOpen(true)}
        whileHover={{ y: -4 }}
        className={cn(
          "group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[20px] border border-[rgba(247,249,250,0.2)] bg-[#0A0A0A] transition-colors duration-300 hover:border-signal-violet/60 hover:shadow-[0_0_40px_-8px_rgba(175,80,255,0.25)] md:rounded-[24px]",
          className,
        )}
      >
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
          {renderMedia({})}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
          {badge && <div className="absolute right-3 top-3 z-10">{badge}</div>}
        </div>

        <div className="flex flex-1 flex-col p-4 md:p-6">
          {eyebrow && (
            <motion.span
              layoutId={`eyebrow-${layoutId}`}
              className="font-mono text-[10px] uppercase tracking-[1.2px] text-signal-violet md:text-[11px]"
            >
              {eyebrow}
            </motion.span>
          )}
          <motion.h3
            layoutId={`title-${layoutId}`}
            className="mt-1 font-sans text-base font-medium text-almost-white transition-colors duration-300 group-hover:text-signal-violet md:mt-1.5 md:text-xl"
          >
            {title}
          </motion.h3>
          {preview && <div className="mt-2 md:mt-3">{preview}</div>}
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-near-black/80 backdrop-blur-md"
            />
            <motion.div
              layoutId={layoutId}
              className="relative z-10 flex max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-[24px] border border-signal-violet/30 bg-[#0A0A0A] shadow-[0_0_60px_-12px_rgba(175,80,255,0.35)] md:flex-row"
            >
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 z-20 flex size-8 items-center justify-center rounded-full border border-[rgba(247,249,250,0.2)] bg-near-black/50 text-almost-white backdrop-blur-sm transition-colors hover:bg-signal-violet/20"
              >
                <X className="size-4" />
              </button>

              <div className="relative h-56 w-full shrink-0 overflow-hidden md:h-auto md:w-1/2">
                {renderMedia({ expanded: true })}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent md:hidden" />
              </div>

              <div className="custom-scrollbar flex w-full flex-col overflow-y-auto p-6 sm:p-8 md:w-1/2">
                {eyebrow && (
                  <motion.span
                    layoutId={`eyebrow-${layoutId}`}
                    className="font-mono text-[11px] uppercase tracking-[1.8px] text-signal-violet"
                  >
                    {eyebrow}
                  </motion.span>
                )}
                <motion.h3
                  layoutId={`title-${layoutId}`}
                  className="mt-2 border-b border-white/[0.06] pb-4 font-sans text-2xl font-medium tracking-tight text-almost-white sm:text-3xl"
                >
                  {title}
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="mt-6 grow font-sans text-sm leading-relaxed text-steel"
                >
                  {content}
                </motion.div>

                {cta && (
                  <motion.a
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="mt-6 inline-flex h-[48px] items-center justify-center gap-2 self-start rounded-[16px] bg-signal-violet px-6 font-sans text-[14px] font-medium text-almost-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(175,80,255,0.3)]"
                  >
                    {cta.label}
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
