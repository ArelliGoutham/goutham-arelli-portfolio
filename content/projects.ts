export const mcpNexus = {
  name: "MCP Nexus",
  label: "AI-assisted research prototype",
  summary:
    "A secure MCP gateway concept where multiple provider MCPs can be registered once and exposed to AI clients through one controlled access layer.",
  problem:
    "AI clients can connect to many MCP servers, but direct one-off integrations make provider discovery, tool permissions, tokens, and auditability fragmented.",
  approach:
    "Prototype a gateway that registers provider MCPs, routes approved tool calls to the right server, and adds governance controls such as validation, permissions, audit logs, rate limits, and confirmations.",
  ownership:
    "Owned the product architecture, system flow, research direction, prompts, and integration behavior while using AI-assisted development to accelerate implementation.",
  flow: ["AI Client", "MCP Nexus Gateway", "Tool Registry + Policy", "Registered Provider MCPs", "Governed Tool Result"],
  bullets: [
    "Built an AI-assisted TypeScript monorepo prototype for a Model Context Protocol gateway that can expose multiple registered MCPs through one managed interface.",
    "Designed customer, admin, and developer portal flows for provider onboarding across commerce, grocery, developer tooling, and future third-party workflow integrations.",
    "Prototyped backend and frontend modules using Fastify, Next.js, React, PostgreSQL, Redis, BullMQ, Zod, Vitest, MCP SDK, and pnpm workspaces.",
    "Treated governance as the safety layer around the gateway: role-based access, provider token boundaries, per-tool permissions, audit logging, rate limits, emergency kill switches, and high-risk confirmations.",
  ],
} as const;
