import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GhostPillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function GhostPillButton({ children, className, ...props }: GhostPillButtonProps) {
  return (
    <button
      className={cn(
        "rounded-[1584px] px-5 py-2.5 font-sans text-sm text-almost-white transition-opacity hover:opacity-80",
        className,
      )}
      style={{ background: "rgba(237, 195, 196, 0.05)" }}
      {...props}
    >
      {children}
    </button>
  );
}
