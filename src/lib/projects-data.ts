export interface ProjectCard {
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
    name: "Ramagya Sports Academy",
    url: "https://ramagyasportsacademy.com/",
    category: "Sports Academy",
    description:
      "Enterprise website for one of India's leading sports academies with modern UI and CMS.",
    status: "Live",
  },
  {
    name: "Gym 56",
    url: "https://gym-56.vercel.app/",
    category: "Fitness Website",
    description: "Modern fitness and gym website with premium UI and smooth animations.",
    status: "Live",
  },
  {
    name: "Donayan",
    url: "https://donayan.com/",
    category: "Portfolio Website",
    description: "Creative portfolio showcasing advertising, marketing, and production work.",
    status: "Live",
  },
  {
    name: "PolicyAdda",
    url: "https://policyadda.co.in/",
    category: "Insurance Website",
    description:
      "Insurance discovery and advisory platform with 20+ insurer tie-ups, multilingual support, and lead capture.",
    status: "Live",
  },
  {
    name: "TechSc0ut",
    url: "https://techsc0ut.vercel.app/",
    category: "Tech Community",
    description: "Community platform for technology enthusiasts.",
    status: "WIP",
  },
];
