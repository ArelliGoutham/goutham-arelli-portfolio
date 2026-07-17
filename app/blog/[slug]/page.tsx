import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { BlogShell } from "@/components/BlogShell";
import { getAllPosts, getPost } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  try {
    return getAllPosts().map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://goutham-arelli.vercel.app";
  try {
    const post = getPost(slug);
    return {
      title: `${post.title} | Goutham Arelli`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        url: `${siteUrl}/blog/${slug}`,
        publishedTime: post.date,
        tags: post.tags,
        authors: ["Goutham Arelli"],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
      },
    };
  } catch {
    return {};
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  const formatted = new Date(`${post.date}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <BlogShell>
      <article className="mx-auto max-w-2xl py-12 sm:py-16">
        <header className="mb-10">
          <Link
            href="/blog"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted transition hover:text-signal"
          >
            ← Blog
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            {post.title}
          </h1>
          <time className="mt-4 block font-mono text-sm text-ink-muted">{formatted}</time>
        </header>
        <div className="prose">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [[rehypePrettyCode, { theme: "github-light" }]],
              },
            }}
          />
        </div>
      </article>
    </BlogShell>
  );
}
