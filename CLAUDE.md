# Portfolio Codebase — Agent Instructions

## Project
Goutham Arelli's personal portfolio — Next.js App Router application deployed on Vercel.
Live at: https://goutham-arelli.vercel.app

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
