import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const get = query({
  handler: async (ctx) => {
    return await ctx.db.query("settings").first();
  },
});

export const update = mutation({
  args: {
    siteName: v.optional(v.string()),
    logo: v.optional(v.string()),
    seo: v.optional(v.any()),
    socials: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db.query("settings").first();
    if (existing) {
      await ctx.db.patch(existing._id, args);
    } else {
      await ctx.db.insert("settings", args);
    }
  },
});
