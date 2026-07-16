export const profile = {
  name: "Goutham Arelli",
  location: "Hyderabad, India",
  phone: "+91-7396437155",
  email: "arelligoutham@gmail.com",
  headline: "Backend Engineer focused on scalable systems, reliability, and enterprise agentic payments.",
  summary:
    "I work on backend systems where throughput, reliability, and observability matter. At Pine Labs I own enterprise-ready SDKs for P3P (Pine Labs Payments Protocol) — agentic payment flows over x402 and UPI ReservePay — and I also explore agent tooling through personal side projects.",
  links: [
    { label: "Email", href: "mailto:arelligoutham@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/goutham-arelli/" },
    { label: "GitHub", href: "https://github.com/ArelliGoutham" },
    { label: "Scaler", href: "https://scaler.com/academy/profile/0446f67c7dc7" },
    { label: "Resume", href: "/goutham_arelli_resume.pdf" },
  ],
  signals: [
    { value: "4+", label: "years backend experience" },
    { value: "2000+ TPS", label: "EMI Offer Discovery capacity improvement" },
    { value: "50%", label: "backend-call reduction through caching and lazy loading" },
    { value: "P3P", label: "enterprise SDKs for agentic payments at Pine Labs" },
  ],
} as const;
