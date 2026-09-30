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

export const goose = {
  name: "Goose",
  fullName: "Goose — Lightweight Kafka-to-Sink Firehose",
  label: "Personal open-source project",
  summary:
    "A cloud-native Kafka consumer that delivers streaming data to HTTP, gRPC, MongoDB, PostgreSQL, and Redis sinks — built in Go as a 25x lighter replacement for raystack firehose (786MB Java → 33MB Go binary).",
  problem:
    "Raystack firehose is the standard Kafka-to-HTTP firehose at scale, but it ships as a 786MB Java application with 50+ dependencies, ~300MB RAM at idle, and a connection pinning bug that causes uneven load distribution across backend pods.",
  approach:
    "Rebuild the firehose from scratch in Go using a worker-pool architecture with channel-based backpressure, contiguity-gated offset commits, batch-poll consumer with chunk splitting, and a pluggable sink interface supporting 5 sink types. Production-hardened with Cosign image signing, SBOM, Trivy scanning, NetworkPolicy, and PDB.",
  ownership:
    "Owned the entire project end-to-end: architecture, implementation (Go), CI/CD, Docker/Helm, integration tests, load testing, documentation, and release management. Used AI-assisted development (Copilot CLI) as the implementer while directing all architectural decisions.",
  flow: [
    "Kafka → Batch-poll (ReadMessage loop, 500 msgs/cycle)",
    "Schema parse (protobuf→JSON via Stencil)",
    "Validation (CEL expressions)",
    "Filter (CEL or JSONPath)",
    "Chunk split → Worker pool (N goroutines)",
    "Sink: HTTP / gRPC / MongoDB / PostgreSQL / Redis",
    "Retry → DLQ → Circuit breaker",
    "Contiguity-gated offset commit",
  ],
  stack: [
    "Go",
    "Kafka (segmentio/kafka-go)",
    "HTTP/gRPC/MongoDB/PostgreSQL/Redis sinks",
    "CEL filtering",
    "Protobuf (DynamicMessage)",
    "Prometheus + OpenTelemetry",
    "Helm + Docker (distroless)",
    "Cosign + SBOM + Trivy",
  ],
  links: [
    {
      label: "GitHub — Goose",
      href: "https://github.com/Goose-Kafka/goose",
      detail: "Source code, v1.1.0 released",
    },
    {
      label: "Documentation",
      href: "https://goose-kafka.mintlify.site/",
      detail: "Mintlify docs — 35+ pages",
    },
    {
      label: "Website",
      href: "https://goose-kafka.github.io/goose/",
      detail: "Marketing site + benchmarks",
    },
    {
      label: "Docker Image",
      href: "https://github.com/Goose-Kafka/goose/pkgs/container/goose",
      detail: "ghcr.io/goose-kafka/goose:v1.1.0",
    },
    {
      label: "Integration Tests",
      href: "https://github.com/Goose-Kafka/goose-integration-test",
      detail: "18 E2E tests with custom mock server",
    },
  ],
  bullets: [
    "Built a 33MB Go binary replacing a 786MB Java firehose — 25x smaller, with 13–23 MiB RAM at load (vs 300MB Java) and <1s startup (vs 5–10s JVM).",
    "Implemented batch-poll consumer with chunk splitting: 6,017 msg/s at 0ms sink delay, ~4,000 msg/s at 50ms delay (60% improvement over single-poll baseline), zero message drops.",
    "Shipped 5 sink types (HTTP, gRPC, MongoDB, PostgreSQL, Redis) with a pluggable Sink interface, CEL-based filtering and validation, protobuf→JSON conversion via Stencil, circuit breaker, and DLQ.",
    "Production-hardened: Cosign image signing, SBOM (SPDX), Trivy vulnerability scanning, K8s security context (nonroot, readonly FS, drop ALL caps), NetworkPolicy, PodDisruptionBudget, Dependabot.",
    "TDD throughout: 82 unit tests (with -race), 18 integration tests (custom mock server with atomic request counting), 6 CI jobs, load tested on kind K8s cluster.",
  ],
} as const;
