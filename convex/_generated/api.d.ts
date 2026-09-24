/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as auth from "../auth.js";
import type * as auth_queries from "../auth_queries.js";
import type * as blog from "../blog.js";
import type * as blog_categories from "../blog_categories.js";
import type * as blog_tags from "../blog_tags.js";
import type * as clients from "../clients.js";
import type * as faqs from "../faqs.js";
import type * as projects from "../projects.js";
import type * as services from "../services.js";
import type * as settings from "../settings.js";
import type * as testimonials from "../testimonials.js";

import type { ApiFromModules, FilterApi, FunctionReference } from "convex/server";

declare const fullApi: ApiFromModules<{
  auth: typeof auth;
  auth_queries: typeof auth_queries;
  blog: typeof blog;
  blog_categories: typeof blog_categories;
  blog_tags: typeof blog_tags;
  clients: typeof clients;
  faqs: typeof faqs;
  projects: typeof projects;
  services: typeof services;
  settings: typeof settings;
  testimonials: typeof testimonials;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<typeof fullApi, FunctionReference<any, "public">>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<typeof fullApi, FunctionReference<any, "internal">>;

export declare const components: {};
