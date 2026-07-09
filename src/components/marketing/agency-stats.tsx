interface Stat {
  value: string;
  label: string;
}

const DEFAULT_STATS: Stat[] = [
  { value: "50+", label: "Projects Delivered" },
  { value: "4+", label: "Years in Business" },
  { value: "30+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

interface AgencyStatsProps {
  stats?: Stat[];
}

export function AgencyStats({ stats = DEFAULT_STATS }: AgencyStatsProps) {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-sans text-4xl font-normal tracking-tight text-almost-white sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 font-sans text-sm text-steel">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
