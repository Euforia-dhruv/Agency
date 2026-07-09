import { cn } from "@/lib/utils";

interface ComparisonCardProps {
  number: string;
  label: string;
  children?: React.ReactNode;
  className?: string;
}

export function ComparisonCard({ number, label, children, className }: ComparisonCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-[19.2px] p-10",
        "bg-gradient-to-br from-signal-violet/10 via-transparent to-lavender-mist/5",
        className,
      )}
    >
      <span className="font-mono text-6xl font-normal text-almost-white/10">{number}</span>
      <p className="mt-2 font-sans text-xs font-medium uppercase tracking-[0.07em] text-steel">
        {label}
      </p>
      {children}
    </div>
  );
}
