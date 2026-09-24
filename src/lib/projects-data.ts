export interface ProjectCard {
  slug: string;
  name: string;
  url: string;
  category: string;
  description: string;
  status: "Live" | "WIP";
  previewUrl?: string | null;
  previewBlurDataUrl?: string;
}

export const PROJECTS: ProjectCard[] = [
  {
    slug: "ramagya-sports-academy",
    name: "Ramagya Sports Academy",
    url: "https://ramagyasportsacademy.com/",
    category: "Sports Academy",
    description:
      "Enterprise website for one of India's leading sports academies with modern UI and CMS.",
    status: "Live",
  },
  {
    slug: "gym-56",
    name: "Gym 56",
    url: "https://gym56.cc.cd/",
    category: "Fitness Website",
    description: "Modern fitness and gym website with premium UI and smooth animations.",
    status: "Live",
  },
  {
    slug: "donayan",
    name: "Donayan",
    url: "https://donayan.com/",
    category: "Portfolio Website",
    description: "Creative portfolio showcasing advertising, marketing, and production work.",
    status: "Live",
  },
  {
    slug: "policyadda",
    name: "PolicyAdda",
    url: "https://policyadda.co.in/",
    category: "Insurance Website",
    description:
      "Insurance discovery and advisory platform with 20+ insurer tie-ups, multilingual support, and lead capture.",
    status: "Live",
  },
  {
    slug: "techsc0ut",
    name: "TechSc0ut",
    url: "https://techsc0ut.vercel.app/",
    category: "Tech Community",
    description: "Community platform for technology enthusiasts.",
    status: "WIP",
  },
];
