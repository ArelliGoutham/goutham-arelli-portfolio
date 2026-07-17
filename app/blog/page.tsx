import type { Metadata } from "next";
import { BlogShell } from "@/components/BlogShell";
import { BlogPostCard } from "@/components/BlogPostCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Goutham Arelli",
  description:
    "Thoughts on backend engineering, payment systems, reliability, and what I'm building.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <BlogShell>
      <section className="py-12 sm:py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
          Writing
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Blog
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-ink-soft">
          Notes on backend systems, payment infrastructure, reliability engineering, and
          things I&apos;m building or learning.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
          {posts.length === 0 && (
            <p className="col-span-full text-sm text-ink-muted">
              No posts yet — check back soon.
            </p>
          )}
        </div>
      </section>
    </BlogShell>
  );
}
