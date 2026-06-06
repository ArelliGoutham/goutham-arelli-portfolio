# Portfolio Site Design

## Purpose

Build a Vercel-deployable personal portfolio for Goutham Arelli that expands beyond a one-page resume. The site should help engineering interviewers understand the systems behind the resume: scalable backend work, reliability improvements, production observability, agentic commerce exposure, and an emerging MCP/AI-agent infrastructure direction.

The site should not present Goutham as a senior AI infrastructure expert. It should present him as a backend engineer with production systems experience who is now applying that foundation to MCP research, agentic commerce concepts, secure workflow thinking, and Codex-assisted prototyping.

## Primary Audience

The primary audience is engineering interviewers. The site should give them a fast scan of credibility and then let them go deeper into implementation choices, tradeoffs, and architecture thinking.

Secondary audiences:

- Recruiters who need a quick summary, resume download, contact links, and role fit.
- AI/platform teams who want to see practical MCP curiosity and fast execution.

## Positioning

Primary headline:

> Backend Engineer applying scalable systems experience to AI-agent infrastructure.

Supporting narrative:

> I have production backend experience in scalable microservices, observability, reliability, and distributed workflows. I am now applying that foundation to AI-agent infrastructure through MCP research, agentic commerce concepts, and Codex-assisted prototyping, using AI not just to write code but to explore architecture, validate workflows, and ship working systems faster.

The site should emphasize three layers:

1. **Production Backend Foundation** - Pine Labs, EMI scale, microservices, observability, reliability.
2. **AI/MCP Learning Trajectory** - beginner-to-practitioner journey using backend knowledge to understand MCP systems and agent workflows.
3. **Execution Proof** - MCP Nexus researched, designed, and built quickly with Codex-assisted development.

## Honesty Constraints

The site must avoid overstating expertise. It should not use claims such as:

- AI infrastructure expert
- Production-grade MCP platform
- Advanced OIDC/security implementation expert
- AI workflow orchestration expert
- Built enterprise-ready MCP marketplace

Preferred phrasing:

- Applying backend systems experience to MCP and agentic workflows
- AI-assisted research prototype
- Architecture-led prototyping
- Secure workflow exploration
- Codex-assisted development for faster system execution
- Early AI-agent infrastructure work grounded in production backend experience

MCP Nexus should be framed as:

> An AI-assisted research prototype built after deep exploration of MCP gateways, connector marketplaces, tool permissions, provider onboarding, governance, and secure agent-tool interaction patterns.

## Recommended Information Architecture

Use a polished one-page homepage for v1, with content sections deep enough that a separate route is not required immediately. A dedicated `/mcp-nexus` route can be added after v1 if the case study grows.

### Homepage Sections

1. **Hero**
   - Name, headline, short positioning paragraph.
   - Primary actions: Download Resume, View MCP Nexus.
   - Secondary links: GitHub, LinkedIn, Email.

2. **Signal Strip**
   - 4+ years backend experience.
   - 2000+ TPS EMI Offer Discovery capacity improvement.
   - 50% backend-call reduction at Eduspeed.
   - Current focus: MCP research and agentic commerce.

3. **Backend Foundation**
   - Pine Labs as the strongest production section.
   - Explain scale, observability, HTTP client reliability, and distributed service work.
   - Keep this section practical and evidence-led.

4. **AI/MCP Direction**
   - Explain the shift into MCP and agentic workflows as a learning and building direction.
   - Make clear that Codex is used for architecture exploration, implementation acceleration, and iteration.
   - Avoid implying deep expertise in every underlying security or auth concept.

5. **MCP Nexus Case Study**
   - Present as a research prototype.
   - Cover:
     - Problem: AI clients need a governed way to connect to third-party MCP providers.
     - Approach: managed connector layer, provider onboarding, tool discovery, validation gates.
     - Architecture thinking: portals, registry, runtime state, permissions, review flows.
     - Secure workflow exploration: audit logs, rate limits, confirmation flows, token boundaries as concepts.
     - Codex-assisted execution: prompts, code generation, review, iteration, integration behavior.
   - Include a compact system-flow visual.

6. **Experience Timeline**
   - Pine Labs, Eduspeed, Cognizant.
   - Each item should state role, dates, stack, and 2-3 impact bullets.

7. **Stack**
   - Grouped categories:
     - Backend
     - Scale / reliability
     - AI / MCP exploration
     - Databases
     - Frontend

8. **Resume and Contact**
   - Resume PDF download.
   - Email, GitHub, LinkedIn.
   - Short availability line for backend/platform/AI-adjacent engineering roles.

## Visual Direction

Concept: **Systems Dossier**.

The site should feel like a technical dossier or systems map, not a generic personal homepage or flashy AI landing page.

Visual traits:

- Refined, engineering-focused, dense but readable.
- Off-white background with deep navy text.
- Sharp blue accents matching the resume.
- Muted green or amber indicators for metrics/status.
- Thin connector lines, protocol nodes, system cards, route-like labels.
- Compact architecture diagrams rather than decorative illustrations.
- No purple AI gradients, generic glassmorphism, oversized hero sections, or fake dashboards.

Typography:

- Use a distinctive but professional display face for headings.
- Use a readable text face for body content.
- Avoid generic Arial/Inter-only styling.

Layout:

- Desktop should feel like a structured engineering document with strong hierarchy.
- Mobile should become a clean stacked dossier with metrics and cards remaining readable.
- Sections should use full-width bands or unframed layouts. Cards are acceptable for repeated items and case-study modules.

Motion:

- Restrained page-load reveal and hover states.
- No distracting animation.
- Architecture visual can have subtle line or node hover behavior if implementation remains simple.

## Technical Architecture

Framework:

- Next.js
- TypeScript
- Tailwind CSS

Deployment:

- Vercel

Content:

- Store portfolio content as structured local TypeScript data.
- Keep resume PDF in `public/`.
- Keep copy clear enough that it can be reused in future Markdown or PDF exports.

Suggested project layout:

```text
portfolio/
  app/
    page.tsx
    layout.tsx
    globals.css
  components/
    Hero.tsx
    SignalStrip.tsx
    BackendFoundation.tsx
    McpDirection.tsx
    McpNexusCaseStudy.tsx
    ExperienceTimeline.tsx
    StackMatrix.tsx
    ContactPanel.tsx
  content/
    profile.ts
    experience.ts
    projects.ts
    stack.ts
  public/
    goutham_arelli_resume_ai_platform.pdf
```

## Success Criteria

- Site builds successfully with `npm run build`.
- Site can be deployed to Vercel without a backend.
- Homepage clearly communicates the corrected positioning within the first viewport.
- Resume PDF is downloadable.
- MCP Nexus is described honestly as AI-assisted research/prototype work.
- Production backend credibility remains stronger than the AI/MCP learning narrative.
- Layout works on desktop and mobile without text overlap or cramped controls.
- Visual style feels specific to backend systems and MCP architecture, not like a generic AI template.

## Open Implementation Choices

These can be decided during the implementation plan:

- Whether v1 should live at the repository root or inside a `portfolio/` folder.
- Whether to use a single-page site only or include `/mcp-nexus` immediately.
- Whether to use locally bundled fonts or remote Google Fonts.
- Whether to add a simple architecture diagram as HTML/CSS or SVG.

## Phase 2: LLM-Readable Site Map

After the v1 site is deployed, add lightweight machine-readable discovery files:

- `public/llms.txt` - a curated Markdown overview of the site for LLMs and AI agents.
- `public/sitemap.xml` - standard search-engine sitemap for deployed routes.
- Optional `public/llms-full.txt` - a fuller plain-text version of the portfolio if the case study grows.

The `llms.txt` file should summarize:

- Who Goutham is.
- What roles the site is relevant for.
- The main pages or sections.
- The MCP Nexus research prototype.
- Resume and contact links.
- Clear caveat that the MCP work is AI-assisted research/prototyping, not a production SaaS claim.

This should remain a small static addition and should not block the first Vercel deployment.
