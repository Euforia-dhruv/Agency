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
      "A personal portfolio for Donayan Sahdev — freelance director's assistant and creative producer — where the work leads and everything else gets out of the way.",
    sections: [
      {
        badge: "Brief",
        title: "Show the work, not the template.",
        paragraphs: [
          "Donayan works across commercials, brand films, music videos, and fashion campaigns. The portfolio had to carry that range with the confidence of a production log — not a generic agency theme.",
          "The site needed to feel editorial and bold while staying fast, searchable, and easy to update as new projects shipped.",
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
          "Donayan launched with a distinctive online presence that showcases commercial, brand-film, and production work in a format clients and collaborators actually enjoy exploring — live, responsive, and simple to extend.",
        ],
      },
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  policyadda: {
    intro:
      "An insurance discovery and advisory platform — complex product categories, plain-language guidance, and lead capture across a language-switching audience.",
    sections: [
      {
        badge: "Brief",
        title: "Insurance without the intimidation.",
        paragraphs: [
          "PolicyAdda helps people understand, compare, and get assistance with insurance — health, motor, life, business, property, and travel — with an insurer partner wall and paths from enquiry to support.",
          "The challenge was density: dozens of product pages, renewal flows, claims guidance, and FAQs, all of which had to feel clear and trustworthy to a first-time buyer, with an English UI plus a second-locale switcher.",
        ],
      },
      {
        badge: "Approach",
        title: "Structure the complexity out of the experience.",
        paragraphs: [
          "We organized the catalog into deep but navigable category trees, with every product page following the same rhythm — what it covers, why it matters, how to enquire — so users learn the pattern once.",
          "Enquiry forms, WhatsApp and call CTAs, partner and claims content, and trust signals (testimonials, insurer logos, IRDAI-aware disclosures) were woven in without turning the site into a form farm. Language switching and a responsive mobile-first build met the audience where they are.",
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
      "A custom PC builder web app — component catalogs, compatibility checking, comparison, and shareable builds — currently in development.",
    sections: [
      {
        badge: "Brief",
        title: "Make PC building feel guided, not guesswork.",
        paragraphs: [
          "TechScout set out to help people assemble custom PCs with real-time compatibility checking, product comparison, and clearer guidance for gaming and workstation builds.",
          "The work is underway: frontend foundations first, data and deploy endpoints layered in as the product stabilizes.",
        ],
      },
      {
        badge: "Approach",
        title: "Build the builder before the polish.",
        paragraphs: [
          "Information architecture and core loops come first — how builders find components, validate compatibility, estimate power, and save a configuration — before surface-level spectacle.",
          "The stack favors fast iteration (Vite + React) so the product can evolve with its catalog instead of against it.",
        ],
      },
      {
        badge: "Status",
        title: "Work in progress.",
        paragraphs: [
          "TechSc0ut is marked WIP. The public deploy is a live frontend shell; backend data endpoints are not yet available on this URL, so catalog-backed features are incomplete in production.",
        ],
      },
    ],
    techStack: ["Vite", "React", "TanStack Query", "Radix UI", "Vercel"],
  },
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES[slug];
}
