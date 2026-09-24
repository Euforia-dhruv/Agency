export interface CaseStudySection {
  badge: string;
  title: string;
  paragraphs: string[];
}

export interface CaseStudy {
  intro: string;
  sections: CaseStudySection[];
  techStack: string[];
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "ramagya-sports-academy": {
    intro:
      "An enterprise-grade web presence for one of India's leading sports academies — structured for scale, built for coaches, parents, and athletes alike.",
    sections: [
      {
        badge: "Brief",
        title: "A digital home worthy of the academy.",
        paragraphs: [
          "Ramagya Sports Academy needed more than a brochure site. Programs, squads, facilities, and achievements all had to live in one place — easy to browse on a phone from the sidelines, credible enough for partnerships and press.",
          "The brief called for a modern interface backed by a CMS the academy team could actually run, without calling a developer every time a schedule changed.",
        ],
      },
      {
        badge: "Approach",
        title: "Information architecture first, polish second.",
        paragraphs: [
          "We mapped the journeys that matter — a parent evaluating programs, an athlete checking training tracks, a partner scanning results — and built the navigation and page templates around those goals.",
          "A component-driven UI system kept the experience consistent across long content pages, while the CMS layer let the academy publish updates, galleries, and announcements independently.",
        ],
      },
      {
        badge: "Outcome",
        title: "Live, modern, and maintainable.",
        paragraphs: [
          "The site launched with a clean, contemporary interface and a content model the academy controls day to day. Program discovery is straightforward, the brand reads at enterprise level, and the platform is ready to grow with new sports and seasons.",
        ],
      },
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "CMS"],
  },
  "gym-56": {
    intro:
      "A premium fitness website engineered to feel as considered as the training floor — smooth motion, sharp UI, zero clutter.",
    sections: [
      {
        badge: "Brief",
        title: "Sell the energy before the first visit.",
        paragraphs: [
          "Gym 56 needed a site that converted curiosity into memberships. The existing options in the market felt generic — template gyms with stock photos and no sense of brand.",
          "The goal: a modern fitness presence with premium UI and motion that makes the gym feel elite the moment the page loads.",
        ],
      },
      {
        badge: "Approach",
        title: "Motion with intent.",
        paragraphs: [
          "We designed around hierarchy and restraint — bold typography, disciplined spacing, and animations that guide attention rather than decorate. Every transition was tuned for smoothness on mid-range phones, not just demo laptops.",
          "Membership plans, schedules, and highlights were structured so a prospective member can decide in under a minute.",
        ],
      },
      {
        badge: "Outcome",
        title: "A site that trains as hard as the brand.",
        paragraphs: [
          "Gym 56 went live with a polished, animation-rich experience that stands apart from template competitors. The interface feels premium, loads fast, and gives the gym a digital front door matching its in-person energy.",
        ],
      },
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  donayan: {
    intro:
      "A creative portfolio for an advertising, marketing, and production house — the work leads, everything else gets out of the way.",
    sections: [
      {
        badge: "Brief",
        title: "Show the work, not the template.",
        paragraphs: [
          "Donayan operates across advertising, marketing, and production. Their portfolio had to carry that range — campaigns, films, and brand work presented with the confidence of a creative studio, not a generic agency theme.",
          "The site needed to feel editorial and bold while staying fast and easy to update as new projects shipped.",
        ],
      },
      {
        badge: "Approach",
        title: "Editorial layout, project-forward storytelling.",
        paragraphs: [
          "We put projects at the center of the experience — large visuals, concise case framing, and a browsing rhythm that feels like flipping through a lookbook.",
          "Type and motion were kept deliberate: enough personality to signal creative caliber, never enough to upstage the work itself.",
        ],
      },
      {
        badge: "Outcome",
        title: "A portfolio that closes the gap between reel and reputation.",
        paragraphs: [
          "Donayan launched with a distinctive online presence that showcases advertising, marketing, and production work in a format clients and collaborators actually enjoy exploring — live, responsive, and simple to extend.",
        ],
      },
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  policyadda: {
    intro:
      "An insurance discovery and advisory platform — complex product categories, plain-language guidance, and lead capture across a multilingual audience.",
    sections: [
      {
        badge: "Brief",
        title: "Insurance without the intimidation.",
        paragraphs: [
          "PolicyAdda helps people understand, compare, and get assistance with insurance — health, motor, life, business, property, and travel — with tie-ups across 20+ insurers.",
          "The challenge was density: dozens of product pages, renewal flows, claims guidance, and FAQs, all of which had to feel clear and trustworthy to a first-time buyer, in English and Hindi.",
        ],
      },
      {
        badge: "Approach",
        title: "Structure the complexity out of the experience.",
        paragraphs: [
          "We organized the catalog into deep but navigable category trees, with every product page following the same rhythm — what it covers, why it matters, how to enquire — so users learn the pattern once.",
          "Enquiry forms, WhatsApp and call CTAs, partner and claims content, and trust signals (testimonials, insurer logos, IRDAI-aware disclosures) were woven in without turning the site into a form farm. Bilingual support and a responsive mobile-first build met the audience where they are.",
        ],
      },
      {
        badge: "Outcome",
        title: "A platform ready for real enquiries.",
        paragraphs: [
          "PolicyAdda is live as a full insurance discovery site — searchable categories, structured policy information, lead capture, and support paths from quote to claim. The foundation scales as new products and insurer partnerships come online.",
        ],
      },
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO", "Lead Capture"],
  },
  techsc0ut: {
    intro:
      "A community platform for technology enthusiasts — currently in development, designed to make discovery and discussion feel native to the web.",
    sections: [
      {
        badge: "Brief",
        title: "Give tech culture a place to gather.",
        paragraphs: [
          "TechSc0ut set out to build a community platform for technology enthusiasts — a space for discovery, content, and conversation that feels native to modern web products rather than another forum skin.",
          "The work is underway: foundations first, features layered in as the product finds its voice.",
        ],
      },
      {
        badge: "Approach",
        title: "Build the skeleton before the spectacle.",
        paragraphs: [
          "We're shaping the information architecture and core loops early — how members find content, engage with it, and return — before investing in surface-level polish.",
          "The stack favors speed and iteration so the product can evolve with its community instead of against it.",
        ],
      },
      {
        badge: "Status",
        title: "Work in progress.",
        paragraphs: [
          "TechSc0ut is marked WIP. The platform is actively being built, with the public experience taking shape toward launch.",
        ],
      },
    ],
    techStack: ["Next.js", "TypeScript", "Community Platform"],
  },
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES[slug];
}
