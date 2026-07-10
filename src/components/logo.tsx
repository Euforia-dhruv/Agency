import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  textOnly?: boolean;
}

const sizeMap = {
  sm: { img: 28 },
  md: { img: 36 },
  lg: { img: 44 },
};

export function Logo({ size = "md", className, textOnly = false }: LogoProps) {
  const dims = sizeMap[size];

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
      <Image
        src="/logo-text.png"
        alt="VENTRIEE"
        width={dims.img * 3}
        height={dims.img}
        className="size-auto object-contain"
        priority
      />
    </span>
  );
}
