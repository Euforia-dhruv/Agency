import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convex/api";
import { AnimatedSection } from "@/components/marketing/animated-section";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchQuery(api.blog.getBySlug, { slug });
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt ?? undefined,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchQuery(api.blog.getBySlug, { slug });
  if (!post) notFound();

  return (
    <AnimatedSection className="mx-auto max-w-[720px] px-6 pt-32 pb-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 font-sans text-sm text-steel transition-colors hover:text-almost-white"
      >
        &larr; Back to Blog
      </Link>

      <article className="mt-8">
        <header>
          <div className="flex flex-wrap items-center gap-3">
            {post.category && (
              <span className="rounded-[6px] bg-signal-violet/10 px-2.5 py-0.5 font-sans text-xs text-signal-violet">
                {post.category.name}
              </span>
            )}
            <span className="font-sans text-xs text-ash">{post.readingTime} min read</span>
            {post.publishedAt && (
              <span className="font-sans text-xs text-ash">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            )}
          </div>

          <h1 className="mt-6 font-sans text-3xl font-normal tracking-tight text-almost-white sm:text-4xl">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-4 font-sans text-lg leading-relaxed text-steel">{post.excerpt}</p>
          )}

          {post.tags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag._id}
                  className="rounded-[6px] border border-border/20 px-2.5 py-0.5 font-sans text-xs text-ash"
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          )}
        </header>

        {post.content && (
          <div className="mt-10 prose prose-invert max-w-none">
            <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
          </div>
        )}
      </article>
    </AnimatedSection>
  );
}
