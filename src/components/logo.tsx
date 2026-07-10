import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { width: 90, height: 28 },
  md: { width: 110, height: 34 },
  lg: { width: 130, height: 40 },
};

export function Logo({ size = "md", className }: LogoProps) {
  const dims = sizeMap[size];

  return (
    <Image
      src="/logo.png"
      alt="ventriee"
      width={dims.width}
      height={dims.height}
      className={cn("object-contain", className)}
      priority
    />
  );
}
