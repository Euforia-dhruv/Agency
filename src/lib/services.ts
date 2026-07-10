export interface ServiceDetail {
  slug: string;
  title: string;
  headline: string;
  seoTitle: string;
  seoDesc: string;
  h1: string;
  description: string;
  features: string[];
  techStack: string[];
  idealFor: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "gym-website-development": {
    slug: "gym-website-development",
    title: "Gym Website Development",
    headline: "Websites That Grow Your Gym Business",
    seoTitle: "Gym Website Development | VENTRIEE",
    seoDesc:
      "Get a fast, modern website for your gym. Member management, class scheduling, online booking, and payment integration — built for fitness businesses.",
    h1: "Gym Website Development Services",
    description:
      "A great gym website does more than look good — it handles member signups, class bookings, payment processing, and integrates with your access control system. We build custom gym websites that help you attract new members and retain existing ones.",
    features: [
      "Member registration & profile management",
      "Class scheduling with live availability",
      "Online booking & payment integration",
      "Trainer profiles and certification display",
      "Blog for fitness tips and SEO",
      "Mobile-first responsive design",
      "Google Maps & local SEO optimization",
      "Social media & review integration",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "Google Maps API"],
    idealFor: [
      "Personal training studios",
      "CrossFit boxes",
      "Yoga studios",
      "Large fitness chains",
      "Martial arts schools",
      "Dance studios",
    ],
    faqs: [
      {
        q: "How much does a gym website cost?",
        a: "Gym website pricing starts at ₹XX,XXX for a basic 5-page site with class scheduling and member signup. Full-featured platforms with payment integration and access control start at ₹XX,XXX.",
      },
      {
        q: "How long does it take to build a gym website?",
        a: "A standard gym website takes 2-4 weeks from start to launch. Complex platforms with custom integrations may take 6-8 weeks.",
      },
      {
        q: "Can I manage my gym website content myself?",
        a: "Yes. We build on a headless CMS so you can update class schedules, trainer profiles, pricing, and blog posts without touching code.",
      },
      {
        q: "Do you integrate with popular gym management software?",
        a: "We can integrate with most popular gym management platforms via their APIs, or build a custom solution tailored to your workflow.",
      },
    ],
  },
  "school-website-development": {
    slug: "school-website-development",
    title: "School Website Development",
    headline: "Modern Websites for Educational Institutions",
    seoTitle: "School Website Development | VENTRIEE",
    seoDesc:
      "Professional websites for schools, colleges, and educational institutions. LMS integration, parent portals, event calendars, and enrollment management.",
    h1: "School Website Development Services",
    description:
      "Your school website is often the first impression parents get. We build modern, accessible websites that showcase your institution, streamline enrollment, and keep parents engaged with portals and updates.",
    features: [
      "LMS integration (Moodle, Google Classroom, etc.)",
      "Parent portal with grades & attendance",
      "Event calendar and newsletter system",
      "Photo gallery and virtual tour",
      "Admissions & enrollment management",
      "Staff directory and contact pages",
      "Blog & news section",
      "Multi-language support",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "AWS S3", "SendGrid"],
    idealFor: [
      "Private K-12 schools",
      "Preschools & daycare",
      "Colleges & universities",
      "Tutoring centers",
      "Coaching institutes",
      "Vocational training centers",
    ],
    faqs: [
      {
        q: "How much does a school website cost?",
        a: "School websites start at ₹XX,XXX for a standard brochure site with CMS. Full-featured portals with LMS integration and parent dashboards start at ₹XX,XXX.",
      },
      {
        q: "Can parents access grades and attendance online?",
        a: "Yes. We build parent portal features that integrate with your existing school management system or include a custom-built solution.",
      },
      {
        q: "Do you offer ADA/WCAG accessibility compliance?",
        a: "Absolutely. Accessibility is a core part of our development process. All school sites we build meet WCAG 2.1 AA standards.",
      },
    ],
  },
  "restaurant-website-development": {
    slug: "restaurant-website-development",
    title: "Restaurant Website Development",
    headline: "Websites That Bring More Diners In",
    seoTitle: "Restaurant Website Development | VENTRIEE",
    seoDesc:
      "Modern restaurant websites with online ordering, reservation systems, menu management, and SEO optimization. Built to attract more customers and streamline operations.",
    h1: "Restaurant Website Development Services",
    description:
      "A great restaurant website turns browsers into diners. We build fast, beautiful sites with online ordering, table reservations, and menu management — integrated with your POS and delivery platforms.",
    features: [
      "Online ordering & takeaway system",
      "Table reservation booking",
      "Dynamic menu management",
      "Zomato/Swiggy integration",
      "Photo gallery and virtual tour",
      "Google Maps & local SEO",
      "Customer reviews integration",
      "Loyalty program integration",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "Google Maps API"],
    idealFor: [
      "Fine dining restaurants",
      "Cafes & bistros",
      "Quick-service restaurants",
      "Cloud kitchens",
      "Hotels & resorts",
      "Food trucks",
    ],
    faqs: [
      {
        q: "How much does a restaurant website cost?",
        a: "Restaurant websites start at ₹XX,XXX for a menu + contact site. Full-featured sites with online ordering and reservations start at ₹XX,XXX.",
      },
      {
        q: "Can I update my menu myself?",
        a: "Yes. We build a CMS where you can update menu items, prices, and descriptions instantly — no developer needed.",
      },
      {
        q: "Do you integrate with Zomato/Swiggy?",
        a: "We can integrate your website with Zomato, Swiggy, and other delivery platforms so orders flow directly into your system.",
      },
    ],
  },
  "business-website-development": {
    slug: "business-website-development",
    title: "Business Website Development",
    headline: "Professional Websites That Build Credibility",
    seoTitle: "Business Website Development | VENTRIEE",
    seoDesc:
      "Custom business websites for startups, clinics, hotels, agencies, and local businesses. Fast, modern, and built to generate leads.",
    h1: "Business Website Development Services",
    description:
      "Your website is your digital storefront. We build professional, high-performance websites that establish credibility, showcase your offerings, and convert visitors into customers.",
    features: [
      "Custom design aligned with your brand",
      "Lead capture forms & CRM integration",
      "Blog & resources section",
      "Team & about pages",
      "Service/portfolio showcase",
      "Testimonials & case studies",
      "Google Maps & local SEO",
      "Analytics & conversion tracking",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Resend", "Google Analytics"],
    idealFor: [
      "Startups & SaaS",
      "Clinics & healthcare",
      "Hotels & hospitality",
      "Agencies & consultancies",
      "Real estate",
      "Professional services",
    ],
    faqs: [
      {
        q: "How much does a business website cost?",
        a: "Business websites start at ₹XX,XXX for a 5-page brochure site. Multi-page sites with CMS, blog, and lead generation features start at ₹XX,XXX.",
      },
      {
        q: "How long does it take?",
        a: "Most business websites launch within 2-3 weeks. Complex projects with custom features take 4-6 weeks.",
      },
      {
        q: "Will my website rank on Google?",
        a: "We build all sites with SEO best practices baked in — proper semantics, fast load times, schema markup, and optimized content. Ranking also depends on your content strategy and backlinks.",
      },
    ],
  },
  "ecommerce-website-development": {
    slug: "ecommerce-website-development",
    title: "E-Commerce Website Development",
    headline: "Online Stores That Sell",
    seoTitle: "E-Commerce Website Development | VENTRIEE",
    seoDesc:
      "Custom e-commerce websites with product management, payment processing, inventory tracking, and SEO. Built for scale with modern tech.",
    h1: "E-Commerce Website Development Services",
    description:
      "We build custom e-commerce platforms that are fast, secure, and optimized for conversion. From product catalogs to checkout flows — we handle everything.",
    features: [
      "Product catalog with advanced filtering",
      "Shopping cart & checkout flow",
      "Payment gateway integration",
      "Inventory management",
      "Order tracking & email notifications",
      "Customer accounts & wishlists",
      "SEO-optimized product pages",
      "Admin dashboard",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe", "AWS"],
    idealFor: [
      "Retail brands",
      "D2C brands",
      "Handmade & crafts",
      "Wholesale businesses",
      "Subscription boxes",
      "Digital products",
    ],
    faqs: [
      {
        q: "How much does an e-commerce website cost?",
        a: "E-commerce sites start at ₹XX,XXX for a standard store with up to 50 products. Larger catalogs with custom features start at ₹XX,XXX.",
      },
      {
        q: "Which payment gateways do you support?",
        a: "We integrate with Razorpay, Stripe, PhonePe, and other major Indian and international payment gateways.",
      },
      {
        q: "Can I migrate from Shopify to a custom site?",
        a: "Yes. We handle data migration from Shopify, WooCommerce, and other platforms to your new custom e-commerce site.",
      },
    ],
  },
  "portfolio-website-development": {
    slug: "portfolio-website-development",
    title: "Portfolio Website Development",
    headline: "Showcase Your Work, Land More Clients",
    seoTitle: "Portfolio Website Development | VENTRIEE",
    seoDesc:
      "Custom portfolio websites for designers, photographers, artists, freelancers, and creatives. Beautiful, fast, and built to impress.",
    h1: "Portfolio Website Development Services",
    description:
      "Your portfolio is your most powerful marketing tool. We build stunning portfolio websites that showcase your work, tell your story, and make it easy for clients to hire you.",
    features: [
      "Custom gallery & project layouts",
      "Filterable project categories",
      "Lightbox & full-screen viewing",
      "About & contact pages",
      "Blog for case studies",
      "Client testimonial section",
      "SEO & fast loading",
      "Content management system",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Cloudinary"],
    idealFor: [
      "Photographers",
      "Designers & artists",
      "Architects",
      "Freelancers",
      "Creative agencies",
      "Models & actors",
    ],
    faqs: [
      {
        q: "How much does a portfolio website cost?",
        a: "Portfolio sites start at ₹XX,XXX for a single-page gallery. Multi-page sites with CMS start at ₹XX,XXX.",
      },
      {
        q: "Can I update my portfolio myself?",
        a: "Yes. You get a simple CMS where you can add, remove, and reorder projects anytime.",
      },
      {
        q: "Do you include image optimization?",
        a: "Absolutely. All images are automatically optimized for web — fast loading without sacrificing quality.",
      },
    ],
  },
  "landing-page-design": {
    slug: "landing-page-design",
    title: "Landing Page Design",
    headline: "High-Converting Landing Pages",
    seoTitle: "Landing Page Design | VENTRIEE",
    seoDesc:
      "Conversion-optimized landing pages for product launches, promotions, lead generation, and marketing campaigns. Built with Framer Motion for stunning animations.",
    h1: "Landing Page Design Services",
    description:
      "A great landing page turns visitors into leads. We design and build high-converting landing pages with clear value propositions, compelling CTAs, and smooth animations that grab attention.",
    features: [
      "Conversion-focused design",
      "A/B test ready structure",
      "Fast load times (under 2s)",
      "Mobile-first responsive",
      "Form analytics & tracking",
      "Social proof integration",
      "SEO optimization",
      "Framer Motion animations",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Google Analytics"],
    idealFor: [
      "Product launches",
      "Marketing campaigns",
      "Lead generation",
      "Event registrations",
      "Waitlist collection",
      "App downloads",
    ],
    faqs: [
      {
        q: "How much does a landing page cost?",
        a: "Single landing pages start at ₹XX,XXX. Multi-page campaign funnels start at ₹XX,XXX.",
      },
      {
        q: "How fast can you build a landing page?",
        a: "A standard landing page takes 3-5 days. Rush orders are available at an additional cost.",
      },
      {
        q: "Can you integrate with my email marketing tool?",
        a: "Yes. We integrate with Mailchimp, ConvertKit, HubSpot, and other major email platforms.",
      },
    ],
  },
};
