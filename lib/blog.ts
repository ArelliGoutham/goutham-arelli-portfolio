import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
};

export type Post = PostMeta & {
  content: string;
};

function normaliseDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().split("T")[0];
  return String(value ?? "");
}

function parseMeta(data: Record<string, unknown>, slug: string): PostMeta {
  const missing = ["title", "date", "description"].filter((k) => !data[k]);
  if (missing.length > 0) {
    throw new Error(`Post "${slug}" missing required frontmatter: ${missing.join(", ")}`);
  }
  return {
    slug,
    title: String(data.title),
    date: normaliseDate(data.date),
    description: String(data.description),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
      const { data } = matter(raw);
      return parseMeta(data as Record<string, unknown>, slug);
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post {
  let raw: string;
  try {
    raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.mdx`), "utf-8");
  } catch {
    throw new Error(`Post not found: ${slug}`);
  }
  const { data, content } = matter(raw);
  return {
    ...parseMeta(data as Record<string, unknown>, slug),
    content,
  };
}
