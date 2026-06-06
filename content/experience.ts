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
    timelineBullets: [
      "Current payments backend role across EMI workflows, service reliability, and observability.",
      "Work is trending deeper into system design, throughput thinking, operational visibility, and AI-assisted commerce workflows.",
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
