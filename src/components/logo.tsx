import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | number;
  className?: string;
}

const sizeClasses = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
};

export function Logo({ size = "md", className }: LogoProps) {
  const isResponsive = typeof size === "string";

  return (
    <span
      className={cn(
        "font-sans font-semibold tracking-tight text-almost-white",
        isResponsive && sizeClasses[size],
        className,
      )}
      style={!isResponsive ? { fontSize: size } : undefined}
      aria-label="ventriee"
    >
      ventriee
    </span>
  );
}
