import Link from "next/link";
import type { PostMeta } from "@/lib/blog";

export function BlogPostCard({ post }: { post: PostMeta }) {
  const formatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="surface-card-hover group flex flex-col gap-3 p-5"
    >
      <div className="flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <span key={tag} className="chip text-[10px]">
            {tag}
          </span>
        ))}
      </div>
      <h2 className="font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-signal">
        {post.title}
      </h2>
      <p className="flex-1 text-sm leading-6 text-ink-muted">{post.description}</p>
      <time className="font-mono text-[11px] text-ink-muted">{formatted}</time>
    </Link>
  );
}
