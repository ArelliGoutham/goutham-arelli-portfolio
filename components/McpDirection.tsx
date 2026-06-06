import { BrainCircuit, Code2, LockKeyhole, Route } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const steps = [
  {
    icon: BrainCircuit,
    title: "Research first",
    text: "Studying MCP gateways, connector marketplaces, tool permissions, provider onboarding, and governance before treating the prototype as code.",
  },
  {
    icon: Route,
    title: "Architecture-led prototyping",
    text: "Using backend experience to reason through boundaries, runtime state, validation gates, approval flows, and service responsibilities.",
  },
  {
    icon: LockKeyhole,
    title: "Secure workflow thinking",
    text: "Exploring audit logs, rate limits, confirmation flows, provider token boundaries, and permission models as design constraints.",
  },
  {
    icon: Code2,
    title: "Codex-assisted execution",
    text: "Using Codex to turn researched requirements into working modules quickly, while reviewing generated code for behavior and integration fit.",
  },
];

export function McpDirection() {
  return (
    <section id="ai-mcp" className="border-b border-ink/15 py-14">
      <SectionHeader
        eyebrow="AI/MCP direction"
        title="Beginner in AI-agent infrastructure, not beginner in backend systems."
        description="The goal is not to claim deep AI infrastructure expertise. The goal is to show how production backend knowledge helps evaluate MCP architecture, security boundaries, and agent-tool workflows."
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
