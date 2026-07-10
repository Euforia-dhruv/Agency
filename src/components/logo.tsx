import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | number;
  className?: string;
  monochrome?: boolean;
}

const sizeClasses = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
};

export function Logo({ size = "md", className, monochrome = false }: LogoProps) {
  const isResponsive = typeof size === "string";

  return (
    <span
      className={cn(
        "inline-flex items-baseline tracking-tight text-almost-white",
        isResponsive && sizeClasses[size],
        className,
      )}
      style={!isResponsive ? { fontSize: size } : undefined}
      role="img"
      aria-label="VENTRIEE"
    >
      <span
        className={cn("font-sans font-bold leading-none", monochrome && "font-normal")}
        style={{ letterSpacing: "-0.03em" }}
      >
        VENT
      </span>
      <span
        className={cn(
          "font-heading italic leading-none",
          monochrome && "font-sans not-italic font-bold",
        )}
        style={{
          letterSpacing: "-0.02em",
          marginLeft: "-0.02em",
        }}
      >
        RIEE
      </span>
    </span>
  );
}
