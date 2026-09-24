import type { Metadata } from "next";
import Link from "next/link";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convex/api";
import { AnimatedSection } from "@/components/marketing/animated-section";

export const metadata: Metadata = {
  title: "Blog — Web Development Insights & Guides | VENTRIEE",
  description:
    "Learn about web development, website design, SEO, and digital strategy. Guides for gyms, schools, restaurants, and local business owners.",
  openGraph: {
    title: "Blog | VENTRIEE",
    description: "Web development insights, guides, and resources for business owners.",
  },
};

export default async function BlogPage() {
  const posts = await fetchQuery(api.blog.getPublicList);

  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <AnimatedSection className="mx-auto max-w-[900px] px-6 pt-32 pb-24">
      <h1 className="font-sans text-4xl font-normal tracking-tight text-almost-white sm:text-5xl">
        Blog
      </h1>
      <p className="mt-3 font-sans text-lg text-steel">
        Insights on web development, design, and digital strategy.
      </p>

      {featured.length > 0 && (
        <div className="mt-16">
          <p className="font-sans text-xs uppercase tracking-[0.12em] text-signal-violet mb-6">
            Featured
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group rounded-[19.2px] border border-border/20 p-6 transition-all hover:border-signal-violet/30 sm:p-8"
              >
                <h2 className="font-sans text-lg font-medium tracking-tight text-almost-white transition-colors group-hover:text-signal-violet">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="mt-2 font-sans text-sm leading-relaxed text-steel line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
                <p className="mt-4 font-sans text-xs text-ash">
                  {post.readingTime} min read
                  {post.publishedAt && (
                    <>
                      {" "}
                      ·{" "}
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </>
                  )}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16">
        <p className="font-sans text-xs uppercase tracking-[0.12em] text-steel mb-6">
          All Articles
        </p>
        {rest.length === 0 && featured.length === 0 ? (
          <p className="font-sans text-sm text-steel">No articles yet. Check back soon.</p>
        ) : (
          <div className="space-y-4">
            {rest.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group flex items-start justify-between rounded-[19.2px] border border-border/20 px-6 py-4 transition-all hover:border-signal-violet/30"
              >
                <div className="flex-1">
                  <h2 className="font-sans text-sm font-medium text-almost-white transition-colors group-hover:text-signal-violet">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="mt-1 font-sans text-xs text-steel line-clamp-1">{post.excerpt}</p>
                  )}
                </div>
                <p className="ml-4 shrink-0 font-sans text-xs text-ash">
                  {post.readingTime} min read
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
