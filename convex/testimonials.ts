import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("testimonials").order("desc").collect();
  },
});

export const getPublic = query({
  handler: async (ctx) => {
    return await ctx.db.query("testimonials").order("desc").collect();
  },
});

export const create = mutation({
  args: {
    author: v.string(),
    role: v.optional(v.string()),
    company: v.optional(v.string()),
    rating: v.optional(v.number()),
    quote: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("testimonials", args);
  },
});

export const remove = mutation({
  args: { id: v.id("testimonials") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
