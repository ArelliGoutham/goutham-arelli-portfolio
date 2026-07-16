export const p3p = {
  name: "Pine Labs P3P",
  fullName: "Pine Labs Payments Protocol (P3P)",
  label: "Enterprise product · Pine Labs",
  company: "Pine Labs",
  role: "SDK ownership — enterprise-ready client and server SDKs",
  summary:
    "P3P is Pine Labs’ enterprise agentic payments protocol: an HTTP-native x402 payment flow that lets AI agents and applications pay for resources over UPI ReservePay / SBMD with human-approved budgets.",
  problem:
    "Autonomous agents and machine clients need a standardized way to pay for paid APIs without a human in every request, while enterprises still need auth, spend controls, receipts, and reliable capture semantics.",
  approach:
    "Ship production-grade client and server SDKs that implement the 402 challenge → payment credential → capture → receipt loop, with multi-language parity, auth refresh, payment-method selection, pending-debit handling, and optional Grantex spend governance.",
  ownership:
    "Owned SDK handling and enterprise readiness: TypeScript and Python client/server surfaces, protocol integration, reliability patterns (auth, retries, idempotency-aware capture), Grantex integration, and developer-facing packaging for integrators.",
  flow: [
    "Resource returns HTTP 402 challenge",
    "Client SDK creates one-shot P3P token",
    "Request retries with Payment credential",
    "Server SDK verifies and captures",
    "Payment-Receipt returned to client",
  ],
  stack: [
    "TypeScript",
    "Python",
    "x402 / HTTP 402",
    "UPI ReservePay",
    "SBMD",
    "OAuth / JWT",
    "Grantex",
    "npm",
    "PyPI",
  ],
  links: [
    {
      label: "p3p-client-sdk",
      href: "https://www.npmjs.com/package/p3p-client-sdk",
      detail: "npm · TypeScript client",
    },
    {
      label: "p3p-server-sdk",
      href: "https://www.npmjs.com/package/p3p-server-sdk",
      detail: "npm · TypeScript server",
    },
    {
      label: "pinelabs-online-p3p-client-sdk",
      href: "https://pypi.org/project/pinelabs-online-p3p-client-sdk/",
      detail: "PyPI · Python client",
    },
    {
      label: "pinelabs-online-p3p-server-sdk",
      href: "https://pypi.org/project/pinelabs-online-p3p-server-sdk/",
      detail: "PyPI · Python server",
    },
    {
      label: "Grantex",
      href: "https://grantex.dev",
      detail: "Delegated agent spend controls",
    },
  ],
  bullets: [
    "Owned enterprise-ready TypeScript and Python client/server SDKs for Pine Labs P3P, covering 402 challenge handling, token creation, credential verification, capture, and Payment-Receipt construction.",
    "Hardened SDK surfaces for production integrators: client-credentials and customer-key auth modes, concurrent token refresh dedupe, payment-method selection (ReservePay / OTM / Crypto), and pending-debit retry semantics.",
    "Integrated Grantex for delegated agent authorization and budget-aware spend controls around the payment path, without replacing core P3P mandate and capture flows.",
    "Drove multi-language parity and packaging so the same protocol contracts ship on npm and PyPI for both buyer-side agents and seller-side resource servers.",
  ],
} as const;

export const mcpNexus = {
  name: "MCP Nexus",
  label: "Personal side project",
  summary:
    "A personal AI-assisted research prototype for a secure MCP gateway where multiple provider MCPs can be registered once and exposed to AI clients through one controlled access layer.",
  problem:
    "AI clients can connect to many MCP servers, but direct one-off integrations make provider discovery, tool permissions, tokens, and auditability fragmented.",
  approach:
    "Prototype a gateway that registers provider MCPs, routes approved tool calls to the right server, and adds governance controls such as validation, permissions, audit logs, rate limits, and confirmations.",
  ownership:
    "Personal exploration: owned product architecture, system flow, research direction, and integration behavior while using AI-assisted development to ship a working prototype faster.",
  flow: ["AI Client", "MCP Nexus Gateway", "Tool Registry + Policy", "Registered Provider MCPs", "Governed Tool Result"],
  bullets: [
    "Built an AI-assisted TypeScript monorepo prototype for a Model Context Protocol gateway that can expose multiple registered MCPs through one managed interface.",
    "Designed customer, admin, and developer portal flows for provider onboarding across commerce, grocery, developer tooling, and future third-party workflow integrations.",
    "Prototyped backend and frontend modules using Fastify, Next.js, React, PostgreSQL, Redis, BullMQ, Zod, Vitest, MCP SDK, and pnpm workspaces.",
    "Explored governance patterns around the gateway: role-based access, provider token boundaries, per-tool permissions, audit logging, rate limits, and high-risk confirmations.",
  ],
} as const;
