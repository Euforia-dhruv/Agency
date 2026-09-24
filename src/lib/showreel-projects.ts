import { PROJECTS, type ProjectCard } from "./projects-data";

export type PreviewMode = "iframe" | "screenshot" | "hybrid";

export interface ShowreelFacts {
  slug: string;
  tagline: string;
  summary: string;
  highlights: string[];
  tech: string[];
  accent: string;
  previewMode: PreviewMode;
}

export interface ShowreelProject extends Omit<ProjectCard, "previewUrl">, ShowreelFacts {
  previewUrl: string | null;
  displayUrl: string;
}

const FACTS: ShowreelFacts[] = [
  {
    slug: "ramagya-sports-academy",
    tagline: "Noida multi-sport academy platform",
    summary:
      "Marketing and lead-gen site for Ramagya Sports Academy — deep sports navigation, appointment booking, payment hand-off, and a content program covering blogs, events, and achievements.",
    highlights: [
      "Mega-menu across indoor and outdoor sports programs",
      "Calendly staff appointment booking and external Pay & Play checkout",
      "Enquiry form with sport multi-select and source attribution",
      "Blog, events, and achievements sitemaps (content-managed publishing)",
      "Hero video carousel with DigitalOcean Spaces CDN delivery",
      "GA4 analytics and schema.org structured data",
    ],
    tech: [
      "Next.js App Router",
      "Tailwind CSS",
      "Swiper",
      "Lenis",
      "Cloudflare",
      "DigitalOcean Spaces",
      "Google Analytics 4",
    ],
    accent: "#DC2626",
    previewMode: "iframe",
  },
  {
    slug: "gym-56",
    tagline: "Premium fitness site for Gandhinagar",
    summary:
      "Brand-forward gym website for Gym 56 in Sector 26, Gandhinagar — exercise library, facility content, and WhatsApp-led membership conversion.",
    highlights: [
      "Exercise library with equipment and difficulty tagging",
      "Equipment, nutrition, tools, and AI Coach routes",
      "WhatsApp join funnel with prefilled message",
      "On-site contact form and Google Maps embed",
      "JSON-LD Gym / Organization / WebSite schema",
      "ImageKit CDN imagery and service-worker registration",
    ],
    tech: [
      "Next.js App Router",
      "Tailwind-style UI",
      "ImageKit CDN",
      "JSON-LD",
      "WhatsApp API",
      "Service Worker",
    ],
    accent: "#DC2626",
    previewMode: "hybrid",
  },
  {
    slug: "donayan",
    tagline: "Portfolio for a Mumbai creative producer",
    summary:
      "Personal site for Donayan Sahdev, Freelance Director's Assistant and Creative Producer — production log, searchable creative library, and multi-channel contact intake.",
    highlights: [
      "Filterable production log / selected works archive",
      "Searchable creative library for decks, pitches, and treatments",
      "Google Form lead capture plus email, WhatsApp, and social links",
      "Resume download and availability badges",
      "GA4 measurement (G-JMKN76JYS6)",
      "Cinema-themed visual system with gold on near-black",
    ],
    tech: [
      "Next.js App Router",
      "Tailwind CSS",
      "Switzer typeface",
      "Google Analytics 4",
      "Google Forms",
    ],
    accent: "#C8A24D",
    previewMode: "hybrid",
  },
  {
    slug: "policyadda",
    tagline: "Insurance discovery and advisory",
    summary:
      "PolicyAdda helps people browse insurance categories in plain language and move from enquiry to policy assistance — built as a deep, navigable Next.js catalog with lead capture.",
    highlights: [
      "Insurance category mega-menu (health, motor, life, business, property, travel)",
      "Multi-step enquiry flow with WhatsApp and call CTAs",
      "Theme toggle and EN plus second-locale language switcher",
      "FAQ accordion covering claims and IRDAI-related questions",
      "Insurer partner wall and trust-oriented support paths",
      "Next/Image optimization and Supabase-backed connect surface",
    ],
    tech: [
      "Next.js App Router",
      "Next/Image",
      "Supabase",
      "Custom design tokens",
      "WhatsApp API",
      "Lead capture",
    ],
    accent: "#0B1120",
    previewMode: "hybrid",
  },
  {
    slug: "techsc0ut",
    tagline: "Custom PC builder (work in progress)",
    summary:
      "TechScout is a Vite + React PC building app — component catalog, compatibility checking, comparison, and shareable builds. Public deploy is frontend-only while backend endpoints are not live.",
    highlights: [
      "Component catalog with brand, category, stock, and price filters",
      "Compatibility checks and estimated power for PSU guidance",
      "Side-by-side product comparison (up to 3 items)",
      "Build save / share flows wired to /api/builds",
      "Pre-built PC categories and step-by-step guide content",
      "Current status: WIP — data APIs return 404 on this deploy",
    ],
    tech: [
      "Vite",
      "React 18",
      "wouter",
      "TanStack Query",
      "Radix UI",
      "shadcn-style tokens",
      "Inter + JetBrains Mono",
      "Vercel",
    ],
    accent: "#3B82F6",
    previewMode: "hybrid",
  },
];

function displayUrl(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function getShowreelFacts(slug: string): ShowreelFacts | undefined {
  return FACTS.find((f) => f.slug === slug);
}

export function buildShowreelProjects(
  previews: Record<string, string | null | undefined>,
): ShowreelProject[] {
  return PROJECTS.map((project) => {
    const facts = getShowreelFacts(project.slug);
    if (!facts) {
      throw new Error(`Missing showreel facts for project: ${project.slug}`);
    }
    return {
      slug: project.slug,
      name: project.name,
      url: project.url,
      category: project.category,
      description: project.description,
      status: project.status,
      tagline: facts.tagline,
      summary: facts.summary,
      highlights: facts.highlights,
      tech: facts.tech,
      accent: facts.accent,
      previewMode: facts.previewMode,
      previewUrl: previews[project.slug] ?? null,
      displayUrl: displayUrl(project.url),
    };
  });
}
