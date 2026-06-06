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
    <section id="ai-mcp" className="border-b border-ink/15 py-14">
      <SectionHeader
        eyebrow="Engineering direction"
        title="Using AI to move faster while thinking deeper about systems."
        description="I am using LLM tools to increase execution speed, but the focus remains engineering ownership: architecture, tradeoffs, scale, security, and maintainable system design."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {steps.map((step) => (
          <article key={step.title} className="rounded-sm border border-ink/15 bg-panel/88 p-5">
            <step.icon className="h-6 w-6 text-signal" />
            <h3 className="mt-4 font-display text-xl font-bold text-ink">{step.title}</h3>
            <p className="mt-3 text-base leading-7 text-ink/74">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
