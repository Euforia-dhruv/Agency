import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("faqs").order("asc").collect();
  },
});

export const create = mutation({
  args: {
    question: v.string(),
    answer: v.string(),
    displayOrder: v.number(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("faqs", args);
  },
});

export const remove = mutation({
  args: { id: v.id("faqs") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
