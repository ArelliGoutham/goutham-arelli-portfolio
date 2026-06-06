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
