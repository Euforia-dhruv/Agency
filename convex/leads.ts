import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";
import { internal } from "./_generated/api";

export const list = query({
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");
    return await ctx.db.query("leads").order("desc").collect();
  },
});

export const count = query({
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");
    return await ctx.db.query("leads").collect();
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    phone: v.optional(v.string()),
    budget: v.optional(v.string()),
    timeline: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("leads", {
      name: args.name,
      email: args.email,
      company: args.company,
      phone: args.phone,
      budget: args.budget,
      timeline: args.timeline,
      message: args.message,
      status: "NEW",
      score: 0,
    });

    await ctx.scheduler.runAfter(0, internal.emails.sendLeadNotification, {
      name: args.name,
      email: args.email,
      company: args.company,
      message: args.message,
    });
  },
});

export const updateStatus = mutation({
  args: {
    id: v.id("leads"),
    status: v.union(
      v.literal("NEW"),
      v.literal("CONTACTED"),
      v.literal("QUALIFIED"),
      v.literal("WON"),
      v.literal("LOST"),
    ),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");
    await ctx.db.patch(args.id, { status: args.status });
  },
});
