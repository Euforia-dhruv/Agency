import Link from "next/link";

interface FeatureRowCardProps {
  description: string;
  href: string;
}

export function FeatureRowCard({ description, href }: FeatureRowCardProps) {
  return (
    <div className="rounded-[19.2px] border-b border-border/10 pb-8 pt-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <p className="font-sans text-base font-normal leading-relaxed text-foreground md:max-w-xl md:text-left">
          {description}
        </p>
        <Link
          href={href}
          className="font-sans text-base font-normal text-foreground underline-offset-2 hover:underline md:text-right"
        >
          Learn More &rarr;
        </Link>
      </div>
    </div>
  );
}
