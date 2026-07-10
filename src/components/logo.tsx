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

const textSizeMap = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl",
};

export function Logo({ size = "md", className }: LogoProps) {
  const dims = sizeMap[size];
  const textSize = textSizeMap[size];

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
      <span className={cn("inline-flex items-baseline", textSize)}>
        <span className="font-sans font-extrabold tracking-tight text-almost-white">VEN</span>
        <span className="font-heading italic text-almost-white">TRIEE</span>
      </span>
    </span>
  );
}
