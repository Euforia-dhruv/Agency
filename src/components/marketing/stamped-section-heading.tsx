interface StampedSectionHeadingProps {
  children: string;
}

export function StampedSectionHeading({ children }: StampedSectionHeadingProps) {
  return (
    <h2 className="font-mono text-5xl font-normal uppercase leading-[0.9] tracking-[0.2em] text-soft-white md:text-7xl">
      {children}
    </h2>
  );
}
