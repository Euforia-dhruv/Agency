import { cn } from "@/lib/utils";

interface VioletBloomCardProps {
  heading: string;
  description: string;
  className?: string;
}

export function VioletBloomCard({ heading, description, className }: VioletBloomCardProps) {
  return (
    <div
      className={cn("rounded-[19.2px] p-10 text-almost-white", className)}
      style={{ background: "var(--color-signal-violet)" }}
    >
      <h3 className="font-sans text-[32px] font-normal leading-tight tracking-tight">{heading}</h3>
      <p className="mt-2 font-sans text-sm text-almost-white/80">{description}</p>
    </div>
  );
}
