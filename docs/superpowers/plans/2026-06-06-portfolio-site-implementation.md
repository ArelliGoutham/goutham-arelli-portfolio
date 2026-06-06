# Portfolio Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Vercel-deployable Next.js portfolio site that presents Goutham as a backend engineer applying scalable systems experience to MCP and AI-agent infrastructure.

**Architecture:** The site is a static App Router Next.js app at the repository root. Content lives in typed local data files, UI is split into focused reusable section components, and the generated resume PDF is served from `public/`.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, lucide-react, Vercel static deployment.

---

## File Structure

- Create `package.json`: project scripts and dependencies.
- Create `tsconfig.json`: TypeScript config for Next.js.
- Create `next.config.ts`: static-friendly Next.js config.
- Create `postcss.config.mjs`: Tailwind PostCSS setup.
- Create `tailwind.config.ts`: design tokens and content paths.
- Create `app/layout.tsx`: metadata, fonts, and document shell.
- Create `app/page.tsx`: composes the homepage sections.
- Create `app/globals.css`: base styles, tokens, background texture, responsive helpers.
- Create `content/profile.ts`: headline, links, signal metrics, summary.
- Create `content/experience.ts`: Pine Labs, Eduspeed, Cognizant data.
- Create `content/projects.ts`: MCP Nexus case study data.
- Create `content/stack.ts`: grouped technology data.
- Create `components/Shell.tsx`: site chrome and layout container.
- Create `components/Hero.tsx`: first viewport positioning and actions.
- Create `components/SignalStrip.tsx`: metric strip.
- Create `components/BackendFoundation.tsx`: production backend proof.
- Create `components/McpDirection.tsx`: honest AI/MCP learning trajectory.
- Create `components/McpNexusCaseStudy.tsx`: case study and compact architecture visual.
- Create `components/ExperienceTimeline.tsx`: career timeline.
- Create `components/StackMatrix.tsx`: grouped stack.
- Create `components/ContactPanel.tsx`: resume download and links.
- Copy `output/pdf/goutham_arelli_resume_ai_platform.pdf` to `public/goutham_arelli_resume_ai_platform.pdf`.

## Tasks

### Task 1: Scaffold Next.js Project Shell

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `tailwind.config.ts`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`

- [ ] **Step 1: Create package manifest**

Create `package.json`:

```json
{
  "name": "goutham-arelli-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@next/font": "latest",
    "lucide-react": "^0.468.0",
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.0.0",
    "eslint-config-next": "^15.0.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.0"
  }
}
```

- [ ] **Step 2: Create TypeScript and Next config**

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Create `next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

Create `postcss.config.mjs`:

```js
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

- [ ] **Step 3: Create Tailwind config**

Create `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172238",
        paper: "#f7f3ea",
        panel: "#fffaf0",
        line: "#c8d2df",
        signal: "#0756b5",
        teal: "#0f766e",
        amber: "#b7791f",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        dossier: "0 18px 60px rgba(23, 34, 56, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 4: Create app shell files**

Create `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { IBM_Plex_Mono, Libre_Baskerville, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const display = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
});

const body = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Goutham Arelli | Backend Systems and MCP Portfolio",
  description:
    "Backend engineer applying scalable systems experience to MCP research, agentic commerce, and AI-assisted prototyping.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

Create `app/page.tsx` with temporary placeholder:

```tsx
export default function Home() {
  return <main>Portfolio coming online.</main>;
}
```

Create `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    linear-gradient(rgba(23, 34, 56, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(23, 34, 56, 0.035) 1px, transparent 1px),
    #f7f3ea;
  background-size: 32px 32px;
  color: #172238;
  font-family: var(--font-body);
}

a {
  color: inherit;
  text-decoration: none;
}

::selection {
  background: #0756b5;
  color: #fffaf0;
}
```

- [ ] **Step 5: Install dependencies**

Run:

```bash
npm install
```

Expected: `node_modules/` and `package-lock.json` are created.

- [ ] **Step 6: Verify scaffold builds**

Run:

```bash
npm run build
```

Expected: build succeeds and `.next/` is created.

- [ ] **Step 7: Commit scaffold**

Run:

```bash
git add package.json package-lock.json tsconfig.json next.config.ts postcss.config.mjs tailwind.config.ts app/layout.tsx app/page.tsx app/globals.css
git commit -m "Scaffold portfolio site"
```

### Task 2: Add Structured Content

**Files:**
- Create: `content/profile.ts`
- Create: `content/experience.ts`
- Create: `content/projects.ts`
- Create: `content/stack.ts`
- Copy: `public/goutham_arelli_resume_ai_platform.pdf`

- [ ] **Step 1: Create profile content**

Create `content/profile.ts`:

```ts
export const profile = {
  name: "Goutham Arelli",
  location: "Hyderabad, India",
  phone: "+91-7396437155",
  email: "arelligoutham@gmail.com",
  headline: "Backend Engineer applying scalable systems experience to AI-agent infrastructure.",
  summary:
    "I build production backend systems around scalability, reliability, and observability. Recently I have been applying that foundation to MCP research, agentic commerce concepts, and Codex-assisted prototyping - using AI not just to write code, but to explore architecture, validate workflows, and get working systems shipped faster.",
  links: [
    { label: "Email", href: "mailto:arelligoutham@gmail.com" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Resume", href: "/goutham_arelli_resume_ai_platform.pdf" },
  ],
  signals: [
    { value: "4+", label: "years backend experience" },
    { value: "2000+ TPS", label: "EMI Offer Discovery capacity improvement" },
    { value: "50%", label: "backend-call reduction through caching and lazy loading" },
    { value: "MCP", label: "research prototype and agentic commerce exploration" },
  ],
} as const;
```

- [ ] **Step 2: Create experience content**

Create `content/experience.ts`:

```ts
export const experience = [
  {
    company: "Pine Labs",
    role: "Backend Engineer",
    period: "May 2025 - Present",
    focus: "High-throughput EMI systems, observability, service reliability, and agentic commerce.",
    stack: ["Kotlin", "Java", "Microservices", "OpenTelemetry", "Caching"],
    bullets: [
      "Designed and scaled distributed microservices for EMI workflows across high-volume payment systems.",
      "Increased EMI Offer Discovery capacity by 2000+ TPS using Kotlin coroutine-based concurrency, caching improvements, and refined content negotiation plugins.",
      "Improved production observability with OpenTelemetry Java Agent and custom span attributes for granular metric and trace analysis.",
      "Built a modular HTTP Client Factory with configurable timeouts, retries, and circuit breaker controls.",
      "Contributed to agentic commerce flows where merchants expose catalog, cart, checkout, payments, and order workflows through a common protocol.",
    ],
  },
  {
    company: "Eduspeed Technologies",
    role: "FullStack Engineer",
    period: "Jan 2024 - Jul 2024",
    focus: "EdTech platform features, backend efficiency, and assessment workflows.",
    stack: ["Angular", "Spring Boot", "MySQL", "Caching"],
    bullets: [
      "Built and enhanced an EdTech platform across coaching center and assessment workflows.",
      "Reduced backend calls by 50% through caching, lazy loading, and resource-saving frontend/backend interaction patterns.",
      "Designed optimized database schemas and bulk update mechanisms, improving large dataset handling efficiency by 30%.",
    ],
  },
  {
    company: "Cognizant",
    role: "Software Development Engineer (Full Stack)",
    period: "Aug 2021 - Jan 2024",
    focus: "Telecom customer data systems, Spring Boot microservices, and Angular frontend delivery.",
    stack: ["Java", "Spring Boot", "Angular", "MySQL", "JWT", "Eureka"],
    bullets: [
      "Designed and developed a full-stack telecom solution that centralized customer data and reduced query resolution time by 40%.",
      "Architected scalable Spring Boot microservices using MVC design and SOLID principles.",
      "Implemented JWT authentication, Eureka Server, API Gateway, and a responsive Angular frontend.",
    ],
  },
] as const;
```

- [ ] **Step 3: Create project content**

Create `content/projects.ts`:

```ts
export const mcpNexus = {
  name: "MCP Nexus",
  label: "AI-assisted research prototype",
  summary:
    "A secure MCP gateway and connector marketplace concept built after deep research into MCP gateways, provider onboarding, tool permissions, governance, and secure agent-tool interaction patterns.",
  problem:
    "AI clients need a governed way to connect to third-party MCP providers without every user managing fragmented integrations and permissions manually.",
  approach:
    "Explore a managed connector layer with provider onboarding, tool discovery, validation jobs, permission gates, and admin review workflows.",
  ownership:
    "Owned the product architecture, system flow, research direction, prompts, and integration behavior while using Codex to accelerate implementation.",
  flow: ["AI Client", "Managed Connector", "Tool Registry", "Provider MCP Server", "Governed Tool Result"],
  bullets: [
    "Built an AI-assisted TypeScript monorepo prototype for a Model Context Protocol gateway.",
    "Designed customer, admin, and developer portal flows for connector discovery, MCP server submissions, validation jobs, and approval gates.",
    "Prototyped backend and frontend modules using Fastify, Next.js, React, PostgreSQL, Redis, BullMQ, Zod, Vitest, MCP SDK, and pnpm workspaces.",
    "Explored governance concepts including role-based access, provider token boundaries, per-tool permissions, audit logging, rate limits, emergency kill switches, and high-risk confirmations.",
  ],
} as const;
```

- [ ] **Step 4: Create stack content**

Create `content/stack.ts`:

```ts
export const stackGroups = [
  { title: "Backend", items: ["Java", "Kotlin", "Spring Boot", "Node.js", "Express.js", "Fastify", "REST APIs", "Microservices"] },
  { title: "Scale / Reliability", items: ["Kotlin Coroutines", "Caching", "Circuit Breakers", "Retry Policies", "Timeout Management", "OpenTelemetry", "Distributed Tracing"] },
  { title: "AI / MCP Exploration", items: ["Model Context Protocol", "MCP Servers", "Agentic Commerce", "Tool Permissions", "Provider Onboarding", "Codex-Assisted Prototyping"] },
  { title: "Databases / Frontend", items: ["MySQL", "PostgreSQL", "Redis", "Angular", "React", "Next.js"] },
] as const;
```

- [ ] **Step 5: Copy resume PDF**

Run:

```bash
mkdir -p public
cp output/pdf/goutham_arelli_resume_ai_platform.pdf public/goutham_arelli_resume_ai_platform.pdf
```

Expected: `public/goutham_arelli_resume_ai_platform.pdf` exists.

- [ ] **Step 6: Commit content**

Run:

```bash
git add content public/goutham_arelli_resume_ai_platform.pdf
git commit -m "Add portfolio content"
```

### Task 3: Build Homepage Components

**Files:**
- Create: `components/Shell.tsx`
- Create: `components/Hero.tsx`
- Create: `components/SignalStrip.tsx`
- Create: `components/BackendFoundation.tsx`
- Create: `components/McpDirection.tsx`
- Create: `components/McpNexusCaseStudy.tsx`
- Create: `components/ExperienceTimeline.tsx`
- Create: `components/StackMatrix.tsx`
- Create: `components/ContactPanel.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create Shell component**

Create `components/Shell.tsx`:

```tsx
import type { ReactNode } from "react";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8 lg:px-10">
        {children}
      </div>
    </main>
  );
}
```

- [ ] **Step 2: Create Hero component**

Create `components/Hero.tsx`:

```tsx
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/profile";

const iconMap = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
  Resume: Download,
};

export function Hero() {
  return (
    <section className="grid min-h-[72vh] gap-10 border-b border-ink/15 pb-12 pt-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-signal">Systems dossier</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-3xl text-2xl leading-tight text-ink sm:text-3xl">
          {profile.headline}
        </p>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/78">{profile.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {profile.links.map((link) => {
            const Icon = iconMap[link.label as keyof typeof iconMap];
            return (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 border border-ink/20 bg-panel px-4 py-2 font-mono text-sm text-ink shadow-dossier transition hover:-translate-y-0.5 hover:border-signal hover:text-signal"
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
      <div className="border border-ink/15 bg-panel p-5 shadow-dossier">
        <div className="flex items-center justify-between border-b border-ink/15 pb-3 font-mono text-xs uppercase text-ink/60">
          <span>Current trajectory</span>
          <ArrowDown className="h-4 w-4 text-signal" />
        </div>
        <div className="mt-5 space-y-4 text-base leading-7 text-ink/82">
          <p>Production foundation: high-throughput backend services, observability, caching, and reliability patterns.</p>
          <p>Emerging direction: MCP research, agentic commerce, secure workflow exploration, and Codex-assisted execution.</p>
          <p className="font-mono text-sm text-signal">Applying backend experience to practical MCP and agent workflows.</p>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create remaining section components**

Create `components/SignalStrip.tsx`, `BackendFoundation.tsx`, `McpDirection.tsx`, `McpNexusCaseStudy.tsx`, `ExperienceTimeline.tsx`, `StackMatrix.tsx`, and `ContactPanel.tsx` using the data files from Task 2. Each component should render semantic sections with headings, compact cards, and responsive grids.

Implementation requirements:

- `SignalStrip` maps `profile.signals`.
- `BackendFoundation` highlights the Pine Labs item from `experience[0]`.
- `McpDirection` explains beginner-to-practitioner AI/MCP trajectory and Codex-assisted architecture exploration.
- `McpNexusCaseStudy` maps `mcpNexus.flow` into connected protocol nodes and maps `mcpNexus.bullets`.
- `ExperienceTimeline` maps all `experience`.
- `StackMatrix` maps `stackGroups`.
- `ContactPanel` links the resume PDF and contact links.

- [ ] **Step 4: Compose homepage**

Modify `app/page.tsx`:

```tsx
import { BackendFoundation } from "@/components/BackendFoundation";
import { ContactPanel } from "@/components/ContactPanel";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { McpDirection } from "@/components/McpDirection";
import { McpNexusCaseStudy } from "@/components/McpNexusCaseStudy";
import { Shell } from "@/components/Shell";
import { SignalStrip } from "@/components/SignalStrip";
import { StackMatrix } from "@/components/StackMatrix";

export default function Home() {
  return (
    <Shell>
      <Hero />
      <SignalStrip />
      <BackendFoundation />
      <McpDirection />
      <McpNexusCaseStudy />
      <ExperienceTimeline />
      <StackMatrix />
      <ContactPanel />
    </Shell>
  );
}
```

- [ ] **Step 5: Run build**

Run:

```bash
npm run build
```

Expected: build succeeds with no TypeScript errors.

- [ ] **Step 6: Commit components**

Run:

```bash
git add app components
git commit -m "Build portfolio homepage"
```

### Task 4: Visual Polish and Browser QA

**Files:**
- Modify: `app/globals.css`
- Modify: components from Task 3 as needed.

- [ ] **Step 1: Start dev server**

Run:

```bash
npm run dev
```

Expected: local server starts, usually at `http://localhost:3000`.

- [ ] **Step 2: Inspect desktop and mobile**

Use Browser or Playwright to inspect:

- Desktop: `1440x1000`
- Mobile: `390x844`

Expected:

- No overlapping text.
- Hero fits first viewport with hint of next section.
- Resume links work.
- MCP case study is readable and honest.
- Metrics and stack cards stay readable on mobile.

- [ ] **Step 3: Fix visual issues**

Make focused CSS/component edits only for observed issues:

- Reduce font size if text wraps poorly.
- Increase vertical spacing where sections collide.
- Adjust grid columns for mobile readability.
- Keep the Systems Dossier visual style.

- [ ] **Step 4: Re-run build**

Run:

```bash
npm run build
```

Expected: build succeeds.

- [ ] **Step 5: Commit polish**

Run:

```bash
git add app components
git commit -m "Polish portfolio visuals"
```

### Task 5: Vercel Readiness

**Files:**
- Create: `README.md`
- Optionally create: `.gitignore`

- [ ] **Step 1: Create gitignore**

Create `.gitignore`:

```gitignore
.DS_Store
node_modules
.next
out
.vercel
*.log
```

- [ ] **Step 2: Create README**

Create `README.md`:

```md
# Goutham Arelli Portfolio

Vercel-deployable portfolio for Goutham Arelli.

## Local Development

\`\`\`bash
npm install
npm run dev
\`\`\`

## Production Build

\`\`\`bash
npm run build
\`\`\`

## Deploy

Import this repository into Vercel. The default build command is:

\`\`\`bash
npm run build
\`\`\`

The output is handled by Next.js.
```

- [ ] **Step 3: Final verification**

Run:

```bash
npm run build
git status --short
```

Expected: build succeeds; only intentional uncommitted files remain.

- [ ] **Step 4: Commit deployment docs**

Run:

```bash
git add .gitignore README.md
git commit -m "Document portfolio deployment"
```

## Self-Review

Spec coverage:

- Vercel-ready Next.js app: Task 1 and Task 5.
- Structured local content: Task 2.
- Resume PDF download: Task 2 and Task 3.
- Systems Dossier design: Task 3 and Task 4.
- Honest MCP/AI positioning: Task 2 content and Task 3 components.
- Mobile/desktop verification: Task 4.
- Phase 2 LLM-readable discovery files are intentionally deferred until after v1 deployment.

Placeholder scan:

- No `TBD` or `TODO` content remains.
- Task 3 allows component implementation freedom for repeated UI sections but still defines exact file responsibilities and rendering requirements.

Type consistency:

- `profile`, `experience`, `mcpNexus`, and `stackGroups` are consistently imported by the planned components.

## Deferred Phase 2

After the v1 site is deployed, add:

- `public/llms.txt` as a curated Markdown overview for LLMs and AI agents.
- `public/sitemap.xml` as a standard route sitemap.
- Optional `public/llms-full.txt` if the site grows into multiple case studies or writing pages.

This should be handled as a separate small implementation pass so the first Vercel deployment remains focused.
