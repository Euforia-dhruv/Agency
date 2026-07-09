import Image from "next/image";

interface TrustLogo {
  _id: string;
  companyName: string;
  logo?: string;
}

interface TrustLogosProps {
  logos: TrustLogo[];
}

export function TrustLogos({ logos }: TrustLogosProps) {
  if (logos.length === 0) return null;

  return (
    <section className="border-y border-border/10">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <p className="font-sans text-xs uppercase tracking-[0.12em] text-steel text-center mb-10">
          Trusted by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map((client) => (
            <div
              key={client._id}
              className="flex items-center gap-3 font-sans text-sm text-ash transition-colors hover:text-almost-white"
            >
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={client.companyName}
                  width={32}
                  height={32}
                  className="h-8 w-auto object-contain opacity-50 grayscale transition-all hover:opacity-80 hover:grayscale-0"
                />
              ) : (
                <span className="font-medium tracking-tight">{client.companyName}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
