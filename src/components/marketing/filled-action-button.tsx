import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface FilledActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
}

export function FilledActionButton({ children, className, ...props }: FilledActionButtonProps) {
  return (
    <button
      className={cn(
        "rounded-lg border border-almost-white bg-near-black px-4 py-2.5 font-sans text-base font-normal text-almost-white transition-opacity hover:opacity-90",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
