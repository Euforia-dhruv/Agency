import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("projects").order("desc").collect();
  },
});

export const getById = query({
  args: { id: v.id("projects") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("projects")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    challenge: v.optional(v.string()),
    solution: v.optional(v.string()),
    results: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");

    const slug = args.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    await ctx.db.insert("projects", {
      title: args.title,
      slug,
      challenge: args.challenge,
      solution: args.solution,
      results: args.results,
      featured: false,
      status: "DRAFT",
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("projects"),
    title: v.string(),
    challenge: v.optional(v.string()),
    solution: v.optional(v.string()),
    results: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");

    await ctx.db.patch(args.id, {
      title: args.title,
      challenge: args.challenge,
      solution: args.solution,
      results: args.results,
    });
  },
});

export const remove = mutation({
  args: { id: v.id("projects") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");

    await ctx.db.delete(args.id);
  },
});

export const getFeatured = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("projects")
      .filter((q) => q.and(q.eq(q.field("status"), "ACTIVE"), q.eq(q.field("featured"), true)))
      .order("desc")
      .collect();
  },
});

export const getPublicList = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("status"), "ACTIVE"))
      .order("desc")
      .collect();
  },
});
