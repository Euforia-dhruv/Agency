import { query } from "./_generated/server";

export const getPublic = query({
  handler: async (ctx) => {
    return await ctx.db.query("clients").collect();
  },
});
