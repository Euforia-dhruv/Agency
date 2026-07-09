import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

function calculateReadingTime(content?: string): number {
  if (!content) return 1;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("blogPosts").order("desc").collect();
  },
});

export const getPublicList = query({
  handler: async (ctx) => {
    const posts = await ctx.db
      .query("blogPosts")
      .filter((q) => q.neq(q.field("publishedAt"), undefined))
      .order("desc")
      .collect();
    return posts.map((p) => ({
      ...p,
      readingTime: calculateReadingTime(p.content),
    }));
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const post = await ctx.db
      .query("blogPosts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
    if (!post) return null;
    const category = post.categoryId ? await ctx.db.get(post.categoryId) : null;
    const postTags = await ctx.db
      .query("blogPostTags")
      .filter((q) => q.eq(q.field("postId"), post._id))
      .collect();
    const tagIds = postTags.map((pt) => pt.tagId);
    const tags = await Promise.all(tagIds.map((id) => ctx.db.get(id)));
    return {
      ...post,
      readingTime: calculateReadingTime(post.content),
      category: category ? { _id: category._id, name: category.name, slug: category.slug } : null,
      tags: tags.filter(Boolean).map((t) => ({ _id: t!._id, name: t!.name, slug: t!.slug })),
    };
  },
});

export const getFeatured = query({
  handler: async (ctx) => {
    const posts = await ctx.db
      .query("blogPosts")
      .filter((q) =>
        q.and(q.neq(q.field("publishedAt"), undefined), q.eq(q.field("featured"), true)),
      )
      .order("desc")
      .collect();
    return posts.map((p) => ({
      ...p,
      readingTime: calculateReadingTime(p.content),
    }));
  },
});

export const getById = query({
  args: { id: v.id("blogPosts") },
  handler: async (ctx, args) => {
    const post = await ctx.db.get(args.id);
    if (!post) return null;
    const category = post.categoryId ? await ctx.db.get(post.categoryId) : null;
    const postTags = await ctx.db
      .query("blogPostTags")
      .filter((q) => q.eq(q.field("postId"), post._id))
      .collect();
    const tagIds = postTags.map((pt) => pt.tagId);
    const tags = await Promise.all(tagIds.map((id) => ctx.db.get(id)));
    return {
      ...post,
      category: category ? { _id: category._id, name: category.name, slug: category.slug } : null,
      tags: tags.filter(Boolean).map((t) => ({ _id: t!._id, name: t!.name, slug: t!.slug })),
    };
  },
});

export const getTagsForPost = query({
  args: { postId: v.id("blogPosts") },
  handler: async (ctx, args) => {
    const postTags = await ctx.db
      .query("blogPostTags")
      .filter((q) => q.eq(q.field("postId"), args.postId))
      .collect();
    const tagIds = postTags.map((pt) => pt.tagId);
    return await Promise.all(tagIds.map((id) => ctx.db.get(id))).then((tags) =>
      tags.filter(Boolean).map((t) => ({ _id: t!._id, name: t!.name, slug: t!.slug })),
    );
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    content: v.optional(v.string()),
    excerpt: v.optional(v.string()),
    categoryId: v.optional(v.id("blogCategories")),
    featured: v.boolean(),
    tagIds: v.optional(v.array(v.id("blogTags"))),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");

    const slug = args.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    const { tagIds, ...fields } = args;

    const postId = await ctx.db.insert("blogPosts", {
      ...fields,
      slug,
    });

    if (tagIds) {
      for (const tagId of tagIds) {
        await ctx.db.insert("blogPostTags", { postId, tagId });
      }
    }
  },
});

export const update = mutation({
  args: {
    id: v.id("blogPosts"),
    title: v.string(),
    content: v.optional(v.string()),
    excerpt: v.optional(v.string()),
    categoryId: v.optional(v.id("blogCategories")),
    featured: v.boolean(),
    tagIds: v.optional(v.array(v.id("blogTags"))),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");

    const { id, tagIds, ...fields } = args;

    await ctx.db.patch(id, fields);

    if (tagIds) {
      const existing = await ctx.db
        .query("blogPostTags")
        .filter((q) => q.eq(q.field("postId"), id))
        .collect();
      for (const pt of existing) {
        await ctx.db.delete(pt._id);
      }
      for (const tagId of tagIds) {
        await ctx.db.insert("blogPostTags", { postId: id, tagId });
      }
    }
  },
});

export const publish = mutation({
  args: { id: v.id("blogPosts") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");
    await ctx.db.patch(args.id, { publishedAt: Date.now() });
  },
});

export const unpublish = mutation({
  args: { id: v.id("blogPosts") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");
    await ctx.db.patch(args.id, { publishedAt: undefined });
  },
});

export const remove = mutation({
  args: { id: v.id("blogPosts") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");

    const postTags = await ctx.db
      .query("blogPostTags")
      .filter((q) => q.eq(q.field("postId"), args.id))
      .collect();
    for (const pt of postTags) {
      await ctx.db.delete(pt._id);
    }
    await ctx.db.delete(args.id);
  },
});
