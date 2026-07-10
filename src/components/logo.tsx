import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { img: 24 },
  md: { img: 30 },
  lg: { img: 36 },
};

export function Logo({ size = "md", className }: LogoProps) {
  const dims = sizeMap[size];

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src="/logo.png"
        alt=""
        width={dims.img}
        height={dims.img}
        className="size-auto object-contain"
        priority
      />
      <Image
        src="/logo-text.png"
        alt="VENTRIEE"
        width={dims.img * 4}
        height={dims.img}
        className="size-auto object-contain"
        priority
      />
    </span>
  );
}
