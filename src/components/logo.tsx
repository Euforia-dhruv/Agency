import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { img: 28, text: "text-base" },
  md: { img: 34, text: "text-xl" },
  lg: { img: 40, text: "text-2xl" },
};

export function Logo({ size = "md", className }: LogoProps) {
  const dims = sizeMap[size];

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/logo.png"
        alt=""
        width={dims.img}
        height={dims.img}
        className="size-auto object-contain"
        priority
      />
      <span className={cn("font-sans font-semibold tracking-tight text-almost-white", dims.text)}>
        ventriee
      </span>
    </span>
  );
}
