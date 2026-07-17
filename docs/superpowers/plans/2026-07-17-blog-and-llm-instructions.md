# Blog Page + LLM Agent Instructions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an MDX-based blog section at `/blog` and write LLM agent instruction files so future agents have full codebase context.

**Architecture:** Blog posts are `.mdx` files in `content/blog/` parsed by `gray-matter` and rendered server-side by `next-mdx-remote/rsc`. A `lib/blog.ts` utility reads the filesystem and exposes typed helpers. The blog list lives at `app/blog/page.tsx` and individual posts at `app/blog/[slug]/page.tsx`. Agent instruction files (`CLAUDE.md`, `AGENTS.md`, `.github/copilot-instructions.md`) capture stack, conventions, design tokens, file map, and commands for future AI workers.

**Tech Stack:** Next.js 15 App Router · TypeScript · Tailwind CSS · `gray-matter` · `next-mdx-remote` · `remark-gfm` · `rehype-pretty-code`

---

## File Map

| Action | Path | Responsibility |
|---|---|---|
| Create | `lib/blog.ts` | `getAllPosts()` + `getPost(slug)` — filesystem + frontmatter |
| Create | `content/blog/2026-07-17-first-post.mdx` | Sample blog post |
| Create | `app/blog/page.tsx` | Blog list page (Server Component) |
| Create | `app/blog/[slug]/page.tsx` | Individual post page (MDX render) |
| Create | `components/BlogPostCard.tsx` | Post card for list page |
| Modify | `app/globals.css` | Add `.prose` styles for blog article body |
| Modify | `components/Nav.tsx` | Add Blog nav link |
| Modify | `app/sitemap.ts` | Include `/blog` and post URLs |
| Create | `CLAUDE.md` | Claude Code agent instructions |
| Create | `AGENTS.md` | General / OpenAI Codex agent instructions |
| Create | `.github/copilot-instructions.md` | GitHub Copilot instructions |

---

## Task 1: Install packages

**Files:** `package.json` (modified by npm)

- [ ] **Step 1: Install MDX dependencies**

```bash
cd /Users/arelligoutham/Documents/Resume
npm install gray-matter next-mdx-remote remark-gfm rehype-pretty-code
```

Expected: packages added to `node_modules/`, `package.json` updated with 4 new deps.

- [ ] **Step 2: Verify TypeScript types are available**

```bash
npx tsc --noEmit 2>&1 | head -20
```

Expected: no new errors (zero output or existing errors only).

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add gray-matter, next-mdx-remote, remark-gfm, rehype-pretty-code"
```

---

## Task 2: Create `lib/blog.ts`

**Files:**
- Create: `lib/blog.ts`

- [ ] **Step 1: Create the lib directory and file**

```bash
mkdir -p /Users/arelligoutham/Documents/Resume/lib
```

- [ ] **Step 2: Write `lib/blog.ts`**

Create `/Users/arelligoutham/Documents/Resume/lib/blog.ts`:

```typescript
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

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        description: data.description as string,
        tags: (data.tags as string[]) ?? [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post {
  const filepath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) throw new Error(`Post not found: ${slug}`);
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    tags: (data.tags as string[]) ?? [],
    content,
  };
}
```

- [ ] **Step 3: Type-check**

```bash
cd /Users/arelligoutham/Documents/Resume && npx tsc --noEmit 2>&1
```

Expected: no errors related to `lib/blog.ts`.

- [ ] **Step 4: Commit**

```bash
git add lib/blog.ts
git commit -m "feat: add blog filesystem utility (getAllPosts, getPost)"
```

---

## Task 3: Create sample blog post

**Files:**
- Create: `content/blog/2026-07-17-first-post.mdx`

- [ ] **Step 1: Create content/blog directory**

```bash
mkdir -p /Users/arelligoutham/Documents/Resume/content/blog
```

- [ ] **Step 2: Create the sample post**

Create `/Users/arelligoutham/Documents/Resume/content/blog/2026-07-17-first-post.mdx`:

```mdx
---
title: "How we scaled EMI Offer Discovery to 2000+ TPS"
date: 2026-07-17
description: "A deep-dive into the caching, lazy loading, and throughput tuning work that cut backend calls by 50% and multiplied capacity by 8x."
tags: [backend, kotlin, performance, caching]
---

## The problem

Our EMI Offer Discovery service was buckling under peak load. Every checkout request
fired multiple synchronous downstream calls — bank eligibility checks, offer catalogue
fetches, and instalment plan calculations — before we could show a single offer to the user.

At 250 TPS the latency was acceptable. Above that, timeouts cascaded.

## What we changed

### Aggressive response caching

The biggest win was recognising that offer catalogues change slowly — at most once every
few minutes — but we were fetching them on every single request.

We introduced a two-tier cache:

1. **In-process cache** (Caffeine) with a 60-second TTL for the hottest offer sets
2. **Distributed cache** (Redis) with a 5-minute TTL as the source of truth

This alone cut downstream calls by ~40%.

### Lazy loading non-critical data

Not every checkout screen needs the full instalment breakdown up front. We moved
the instalment calculation to a deferred call triggered only when the user taps
an offer — eliminating it from the critical path entirely.

### Parallel eligibility checks

Bank eligibility checks were sequential. We moved them to `Dispatchers.IO` coroutine
scope and fanned out in parallel, collecting results with a structured concurrency pattern.

```kotlin
val results = bankIds.map { bankId ->
    async { eligibilityClient.check(bankId, customerId) }
}.awaitAll()
```

## Results

- **2000+ TPS** sustained under load test (8× previous capacity)
- **50% reduction** in total backend calls per checkout
- P99 latency dropped from ~1.2 s to ~280 ms

## What I'd do differently

Start with observability. We had to instrument after the fact to understand the
call patterns. Trace-first would have made the problem obvious on day one.
```

- [ ] **Step 3: Commit**

```bash
git add content/blog/
git commit -m "content: add first blog post (EMI throughput scaling)"
```

---

## Task 4: Create `BlogPostCard` component

**Files:**
- Create: `components/BlogPostCard.tsx`

- [ ] **Step 1: Create the component**

Create `/Users/arelligoutham/Documents/Resume/components/BlogPostCard.tsx`:

```typescript
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
```

- [ ] **Step 2: Type-check**

```bash
cd /Users/arelligoutham/Documents/Resume && npx tsc --noEmit 2>&1
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/BlogPostCard.tsx
git commit -m "feat: add BlogPostCard component"
```

---

## Task 5: Create blog list page `app/blog/page.tsx`

**Files:**
- Create: `app/blog/page.tsx`

- [ ] **Step 1: Create the directory and page**

```bash
mkdir -p /Users/arelligoutham/Documents/Resume/app/blog
```

Create `/Users/arelligoutham/Documents/Resume/app/blog/page.tsx`:

```typescript
import type { Metadata } from "next";
import { Shell } from "@/components/Shell";
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
    <Shell>
      <section className="py-12 sm:py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
          Writing
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Blog
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-ink-soft">
          Notes on backend systems, payment infrastructure, reliability engineering, and
          things I'm building or learning.
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
    </Shell>
  );
}
```

- [ ] **Step 2: Type-check**

```bash
cd /Users/arelligoutham/Documents/Resume && npx tsc --noEmit 2>&1
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/blog/page.tsx
git commit -m "feat: add blog list page at /blog"
```

---

## Task 6: Create individual post page `app/blog/[slug]/page.tsx`

**Files:**
- Create: `app/blog/[slug]/page.tsx`

- [ ] **Step 1: Create the directory and page**

```bash
mkdir -p "/Users/arelligoutham/Documents/Resume/app/blog/[slug]"
```

Create `/Users/arelligoutham/Documents/Resume/app/blog/[slug]/page.tsx`:

```typescript
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { Shell } from "@/components/Shell";
import { getAllPosts, getPost } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPost(slug);
    return { title: `${post.title} | Goutham Arelli`, description: post.description };
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

  const formatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Shell>
      <article className="mx-auto max-w-2xl py-12 sm:py-16">
        <header className="mb-10">
          <a
            href="/blog"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted transition hover:text-signal"
          >
            ← Blog
          </a>
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
    </Shell>
  );
}
```

- [ ] **Step 2: Type-check**

```bash
cd /Users/arelligoutham/Documents/Resume && npx tsc --noEmit 2>&1
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add "app/blog/[slug]/page.tsx"
git commit -m "feat: add individual blog post page with MDX rendering"
```

---

## Task 7: Add prose styles to `app/globals.css`

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Append `.prose` styles at the end of globals.css**

Add the following block at the very end of `/Users/arelligoutham/Documents/Resume/app/globals.css`:

```css
/* ── Blog prose ─────────────────────────────────────────────── */
.prose {
  color: var(--ink);
  font-size: 1.0625rem;
  line-height: 1.85;
  max-width: none;
}

.prose h2 {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin: 2.5rem 0 0.75rem;
}

.prose h3 {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--ink);
  margin: 2rem 0 0.5rem;
}

.prose p {
  margin: 1.25rem 0;
  color: #1e2d45;
}

.prose a {
  color: #0b4f9c;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.prose a:hover {
  color: #1565c0;
}

.prose strong {
  font-weight: 600;
  color: var(--ink);
}

.prose ul,
.prose ol {
  margin: 1.25rem 0;
  padding-left: 1.5rem;
}

.prose li {
  margin: 0.4rem 0;
  color: #1e2d45;
}

.prose ul li {
  list-style-type: disc;
}

.prose ol li {
  list-style-type: decimal;
}

.prose blockquote {
  border-left: 3px solid #0b4f9c;
  padding-left: 1rem;
  margin: 1.5rem 0;
  color: #5b6b82;
  font-style: italic;
}

.prose hr {
  border: none;
  border-top: 1px solid rgba(10, 22, 40, 0.10);
  margin: 2.5rem 0;
}

.prose code:not(pre code) {
  font-family: var(--font-mono);
  font-size: 0.875em;
  background: rgba(11, 79, 156, 0.07);
  color: #0b4f9c;
  padding: 0.15em 0.4em;
  border-radius: 4px;
}

.prose pre {
  background: #f6f8fa;
  border: 1px solid rgba(10, 22, 40, 0.10);
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  overflow-x: auto;
  margin: 1.75rem 0;
  font-size: 0.875rem;
  line-height: 1.7;
}

.prose pre code {
  background: none;
  color: inherit;
  padding: 0;
  font-size: inherit;
}

/* rehype-pretty-code overrides */
.prose [data-rehype-pretty-code-figure] pre {
  background: #f6f8fa;
}
```

- [ ] **Step 2: Verify build still passes**

```bash
cd /Users/arelligoutham/Documents/Resume && npm run build 2>&1 | tail -20
```

Expected: `✓ Compiled successfully`.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: add prose styles for blog article body"
```

---

## Task 8: Update `Nav.tsx` to add Blog link

**Files:**
- Modify: `components/Nav.tsx`

The Nav uses an anchor-links array. Blog is a full route (`/blog`), so add it as a separate entry. Replace the `links` const and add a Blog entry:

- [ ] **Step 1: Add Blog to the links array**

In `/Users/arelligoutham/Documents/Resume/components/Nav.tsx`, find the `links` const:

```typescript
const links = [
  { href: "#backend", label: "Backend" },
  { href: "#p3p", label: "P3P" },
  { href: "#experience", label: "Experience" },
  { href: "#ai-mcp", label: "Direction" },
  { href: "#mcp-nexus", label: "MCP Nexus" },
  { href: "#stack", label: "Stack" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;
```

Replace with:

```typescript
const links = [
  { href: "#backend", label: "Backend" },
  { href: "#p3p", label: "P3P" },
  { href: "#experience", label: "Experience" },
  { href: "#ai-mcp", label: "Direction" },
  { href: "#mcp-nexus", label: "MCP Nexus" },
  { href: "#stack", label: "Stack" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
] as const;
```

- [ ] **Step 2: Type-check**

```bash
cd /Users/arelligoutham/Documents/Resume && npx tsc --noEmit 2>&1
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/Nav.tsx
git commit -m "feat: add Blog link to nav"
```

---

## Task 9: Update `app/sitemap.ts` to include blog URLs

**Files:**
- Modify: `app/sitemap.ts`

- [ ] **Step 1: Update sitemap to include /blog and post slugs**

Replace the entire contents of `/Users/arelligoutham/Documents/Resume/app/sitemap.ts` with:

```typescript
import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://goutham-arelli-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts();

  return [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${siteUrl}/goutham_arelli_resume.pdf`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/llms.txt`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/llms-full.txt`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
```

- [ ] **Step 2: Type-check and build**

```bash
cd /Users/arelligoutham/Documents/Resume && npx tsc --noEmit && npm run build 2>&1 | tail -25
```

Expected: clean build, `/blog` and `/blog/2026-07-17-first-post` appear in the build output.

- [ ] **Step 3: Commit**

```bash
git add app/sitemap.ts
git commit -m "feat: include blog URLs in sitemap"
```

---

## Task 10: Create LLM agent instruction files

**Files:**
- Create: `CLAUDE.md`
- Create: `AGENTS.md`
- Create: `.github/copilot-instructions.md`

All three files share the same content — they cover stack, conventions, design tokens, file map, commands, and blog workflow. The shared content is written once below; create all three files with it.

- [ ] **Step 1: Create `CLAUDE.md`**

Create `/Users/arelligoutham/Documents/Resume/CLAUDE.md`:

```markdown
# Portfolio Codebase — Agent Instructions

## Project
Goutham Arelli's personal portfolio — Next.js App Router application deployed on Vercel.
Live at: https://goutham-arelli-portfolio.vercel.app

## Stack
- **Framework**: Next.js 15 (App Router, Server Components by default)
- **Language**: TypeScript — strict mode on
- **Styling**: Tailwind CSS with custom design tokens (see `tailwind.config.ts`)
- **Fonts**: Newsreader (`font-display`), Source Sans 3 (`font-body`), IBM Plex Mono (`font-mono`)
- **Blog**: MDX files parsed by `gray-matter`, rendered by `next-mdx-remote/rsc`
- **Deployment**: Vercel — auto-deploys `main` branch of `ArelliGoutham/goutham-arelli-portfolio`

## Commands
```bash
npm run dev          # local dev server
npm run lint         # ESLint
npx tsc --noEmit     # type check
npm run build        # production build
```

## File Map

| Path | Purpose |
|---|---|
| `app/layout.tsx` | Root layout — fonts, analytics (GA + Clarity), metadata |
| `app/page.tsx` | Home page — imports and orders section components |
| `app/blog/page.tsx` | Blog list page |
| `app/blog/[slug]/page.tsx` | Individual post — MDX rendering |
| `app/sitemap.ts` | Sitemap — update when adding new routes |
| `app/globals.css` | Global styles, design tokens, utility classes, prose styles |
| `components/Shell.tsx` | Wraps pages with `<Nav>` + footer — use for every page |
| `components/Nav.tsx` | Sticky nav — add links here when adding new routes |
| `components/RevealSection.tsx` | Scroll-reveal wrapper — use around sections on home page |
| `components/BlogPostCard.tsx` | Card component for blog list |
| `lib/blog.ts` | `getAllPosts()` + `getPost(slug)` — filesystem helpers |
| `content/profile.ts` | Name, headline, summary, links |
| `content/experience.ts` | Work history |
| `content/projects.ts` | Project details (P3P, etc.) |
| `content/stack.ts` | Tech stack groups |
| `content/education.ts` | Education history |
| `content/blog/*.mdx` | Blog posts (frontmatter + MDX body) |
| `public/llms.txt` | Short LLM-readable portfolio summary — keep in sync with content changes |
| `public/llms-full.txt` | Detailed LLM-readable context — keep in sync with content changes |
| `tailwind.config.ts` | All design tokens — colours, fonts, shadows, radii |

## Design Conventions

**Always use design tokens — never raw colours or font names.**

Colour roles:
- `text-ink` / `text-ink-soft` / `text-ink-muted` — body text hierarchy
- `text-signal` / `bg-signal` / `bg-signal-soft` — primary action (blue)
- `text-teal` / `bg-teal` / `bg-teal-soft` — secondary/positive accent
- `border-line` / `border-line-strong` — borders
- `bg-paper` / `bg-panel` — background surfaces

Utility classes (defined in `globals.css`):
- `surface-card` — card with border, background, shadow
- `surface-card-hover` — `surface-card` + hover lift effect
- `chip` — small mono label/tag pill
- `btn-primary` — filled signal button
- `btn-secondary` — outlined button
- `btn-ghost` — text-only button
- `eyebrow` — small mono uppercase section label
- `rounded-card` (12px) / `rounded-pill` (8px) — border radii
- `prose` — article body styles for blog posts

Component conventions:
- Server Components by default — only add `"use client"` when you need `useState`/`useEffect`/event handlers
- One component per file, named export matching filename
- Keep components focused — if a component grows past ~100 lines, consider splitting

## Adding a Blog Post

1. Create `content/blog/YYYY-MM-DD-slug.mdx` with frontmatter:

```yaml
---
title: "Your post title"
date: YYYY-MM-DD
description: "One sentence shown on the post card and in metadata."
tags: [backend, kotlin]
---
```

2. Write Markdown below the `---`. Standard Markdown + GFM (tables, strikethrough) + fenced code blocks with language tags for syntax highlighting.

3. The post appears automatically on `/blog` and gets its own URL at `/blog/YYYY-MM-DD-slug`.

## Adding a New Portfolio Section

1. Create `components/YourSection.tsx` as a Server Component
2. Add data to a new or existing file in `content/`
3. Import and add `<RevealSection><YourSection /></RevealSection>` in `app/page.tsx` at the correct position
4. Add an anchor link in `components/Nav.tsx` → `links` array

## GitHub Workflows

| Workflow | Trigger | What it checks |
|---|---|---|
| `.github/workflows/ci.yml` | Every PR + push to main | lint → type check → build |
| `.github/workflows/lighthouse.yml` | Every PR | Perf ≥85, A11y ≥90, SEO ≥90 |
| `.github/workflows/dead-links.yml` | Weekly Monday | Broken links in README + content |
| `.github/dependabot.yml` | Weekly | npm + Actions updates |

## Commit Style
Conventional commits: `feat:`, `fix:`, `chore:`, `content:`, `docs:`, `style:`

Always include the trailer:
```
Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>
```
```

- [ ] **Step 2: Create `AGENTS.md` with identical content**

```bash
cp /Users/arelligoutham/Documents/Resume/CLAUDE.md /Users/arelligoutham/Documents/Resume/AGENTS.md
```

- [ ] **Step 3: Create `.github/copilot-instructions.md`**

```bash
cp /Users/arelligoutham/Documents/Resume/CLAUDE.md /Users/arelligoutham/Documents/Resume/.github/copilot-instructions.md
```

- [ ] **Step 4: Commit**

```bash
git add CLAUDE.md AGENTS.md .github/copilot-instructions.md
git commit -m "docs: add LLM agent instruction files (CLAUDE.md, AGENTS.md, copilot-instructions.md)"
```

---

## Task 11: Final build verification and push

- [ ] **Step 1: Full lint + type check + build**

```bash
cd /Users/arelligoutham/Documents/Resume && npm run lint && npx tsc --noEmit && npm run build 2>&1 | tail -30
```

Expected: lint passes, no type errors, build succeeds with `/blog` and post pages listed in output.

- [ ] **Step 2: Push branch and open PR**

```bash
cd /Users/arelligoutham/Documents/Resume && git push personal feature/blog

GH_USER=ArelliGoutham gh pr create \
  --repo ArelliGoutham/goutham-arelli-portfolio \
  --title "feat: MDX blog at /blog + LLM agent instruction files" \
  --body "## What's in this PR

**Blog section**
- \`lib/blog.ts\` — filesystem helpers (\`getAllPosts\`, \`getPost\`) with TypeScript types
- \`content/blog/\` — MDX posts directory with sample post
- \`app/blog/page.tsx\` — post list page
- \`app/blog/[slug]/page.tsx\` — individual post with MDX render, syntax highlighting, static generation
- \`components/BlogPostCard.tsx\` — card for list page
- Prose styles added to \`globals.css\`
- Blog link added to Nav
- Blog URLs added to sitemap

**LLM agent instructions**
- \`CLAUDE.md\` / \`AGENTS.md\` / \`.github/copilot-instructions.md\` — identical content covering stack, file map, design conventions, blog workflow, and commands for future AI agents" \
  --head feature/blog \
  --base main
```

Expected: PR URL printed.
