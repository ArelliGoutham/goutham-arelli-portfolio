import { BrainCircuit, Code2, LockKeyhole, Route } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const steps = [
  {
    icon: BrainCircuit,
    title: "LLMs as engineering tools",
    text: "Using AI assistants for research, code generation, refactoring, and validation while keeping ownership of design decisions and final behavior.",
  },
  {
    icon: Route,
    title: "Architecture before code",
    text: "Thinking through HLD, LLD, service boundaries, data flow, failure modes, and operational concerns before jumping into implementation.",
  },
  {
    icon: LockKeyhole,
    title: "Secure and scalable AI workflows",
    text: "Exploring MCPs, tool access, permissions, auditability, rate limits, and provider integrations with the same reliability mindset used in backend systems.",
  },
  {
    icon: Code2,
    title: "Faster execution with review",
    text: "Using AI-assisted development to ship prototypes faster while reviewing generated code, tests, integration fit, and long-term maintainability.",
  },
];

export function McpDirection() {
  return (
    <section id="ai-mcp" className="section-shell">
      <SectionHeader
        index="03"
        eyebrow="Engineering direction"
        title="Using AI to move faster while thinking deeper about systems."
        description="I am using LLM tools to increase execution speed, but the focus remains engineering ownership: architecture, tradeoffs, scale, security, and maintainable system design."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <article key={step.title} className="stagger-item surface-card-hover group p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-card border border-line bg-signal-soft text-signal transition group-hover:border-signal/30 group-hover:bg-signal group-hover:text-white">
                <step.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-mono text-[11px] text-ink-muted">0{index + 1}</span>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
              {step.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-ink-soft">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
