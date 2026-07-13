import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,
  services: defineTable({
    title: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
    icon: v.optional(v.string()),
    featured: v.boolean(),
    displayOrder: v.number(),
  }).index("by_slug", ["slug"]),

  projects: defineTable({
    title: v.string(),
    slug: v.string(),
    clientId: v.optional(v.id("clients")),
    challenge: v.optional(v.string()),
    solution: v.optional(v.string()),
    results: v.optional(v.string()),
    coverImage: v.optional(v.string()),
    featured: v.boolean(),
    status: v.union(v.literal("DRAFT"), v.literal("ACTIVE"), v.literal("ARCHIVED")),
  }).index("by_slug", ["slug"]),

  clients: defineTable({
    companyName: v.string(),
    website: v.optional(v.string()),
    industry: v.optional(v.string()),
    logo: v.optional(v.string()),
    contactName: v.optional(v.string()),
    email: v.optional(v.string()),
    phone: v.optional(v.string()),
    status: v.optional(v.string()),
  }),

  technologies: defineTable({
    name: v.string(),
    icon: v.optional(v.string()),
    website: v.optional(v.string()),
  }),

  projectTechnologies: defineTable({
    projectId: v.id("projects"),
    technologyId: v.id("technologies"),
  }),

  testimonials: defineTable({
    clientId: v.optional(v.id("clients")),
    projectId: v.optional(v.id("projects")),
    author: v.string(),
    role: v.optional(v.string()),
    company: v.optional(v.string()),
    rating: v.optional(v.number()),
    quote: v.string(),
  }),

  blogPosts: defineTable({
    title: v.string(),
    slug: v.string(),
    excerpt: v.optional(v.string()),
    content: v.optional(v.string()),
    categoryId: v.optional(v.id("blogCategories")),
    featured: v.boolean(),
    publishedAt: v.optional(v.number()),
  }).index("by_slug", ["slug"]),

  blogCategories: defineTable({
    name: v.string(),
    slug: v.string(),
  }),

  blogTags: defineTable({
    name: v.string(),
    slug: v.string(),
  }),

  blogPostTags: defineTable({
    postId: v.id("blogPosts"),
    tagId: v.id("blogTags"),
  }),

  media: defineTable({
    filename: v.string(),
    bucket: v.string(),
    mimeType: v.string(),
    width: v.optional(v.number()),
    height: v.optional(v.number()),
    size: v.optional(v.number()),
  }),

  navigation: defineTable({
    title: v.string(),
    href: v.string(),
    order: v.number(),
  }),

  footerLinks: defineTable({
    section: v.string(),
    label: v.string(),
    href: v.string(),
  }),

  faqs: defineTable({
    question: v.string(),
    answer: v.string(),
    displayOrder: v.number(),
  }),

  settings: defineTable({
    siteName: v.optional(v.string()),
    logo: v.optional(v.string()),
    seo: v.optional(v.any()),
    socials: v.optional(v.any()),
  }),

  auditLogs: defineTable({
    userId: v.optional(v.id("users")),
    action: v.string(),
    resource: v.string(),
    before: v.optional(v.any()),
    after: v.optional(v.any()),
    ip: v.optional(v.string()),
  }),
});
