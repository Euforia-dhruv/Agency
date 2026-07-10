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
    name: "Policy Adda",
    url: "https://policyadda.co.in/",
    category: "Insurance Platform",
    description: "Insurance platform for comparing and purchasing insurance policies online.",
    status: "Live",
  },
  {
    name: "Dhruv Portfolio",
    url: "https://dhruvnyx.vercel.app/",
    category: "Portfolio Website",
    description: "Personal portfolio with modern animations and fully responsive design.",
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
