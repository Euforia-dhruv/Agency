import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  textOnly?: boolean;
}

const sizeMap = {
  sm: { img: 36 },
  md: { img: 46 },
  lg: { img: 56 },
};

const textSizes = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl",
};

export function Logo({ size = "md", className, textOnly = false }: LogoProps) {
  const dims = sizeMap[size];
  const textSize = textSizes[size];

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {!textOnly && (
        <Image
          src="/logo.png"
          alt=""
          width={dims.img}
          height={dims.img}
          className="size-auto object-contain"
          priority
        />
      )}
      <span className={cn("inline-flex items-baseline leading-none", textSize)}>
        <span className="font-cendrick tracking-tight text-almost-white">VEN</span>
        <span className="font-heading italic text-almost-white">TRIEE</span>
      </span>
    </span>
  );
}
