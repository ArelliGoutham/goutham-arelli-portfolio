import { CheckCircle2, Gauge, Network, Telescope } from "lucide-react";
import { experience } from "@/content/experience";
import { SectionHeader } from "@/components/SectionHeader";

const pineLabs = experience[0];

const proofs = [
  { icon: Gauge, label: "Throughput", text: "2000+ TPS improvement in EMI Offer Discovery capacity." },
  { icon: Telescope, label: "Observability", text: "OpenTelemetry Java Agent and custom spans for sharper production diagnostics." },
  { icon: Network, label: "Reliability", text: "Configurable HTTP clients with timeout, retry, and circuit breaker controls." },
];

export function BackendFoundation() {
  return (
    <section id="backend" className="border-b border-ink/15 py-14">
      <SectionHeader
        eyebrow="Production backend work"
        title="Beyond feature delivery: scale, reliability, and architecture."
        description="My backend work is focused on how systems behave under real load: throughput, service boundaries, observability, failure handling, and reliable integrations."
      />
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-sm border border-ink/15 bg-panel p-5 shadow-dossier">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-signal">{pineLabs.period}</p>
          <h3 className="mt-3 font-display text-2xl font-bold text-ink">{pineLabs.company}</h3>
          <p className="mt-1 font-mono text-sm text-ink/64">{pineLabs.role}</p>
          <p className="mt-5 text-base leading-7 text-ink/75">{pineLabs.focus}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {pineLabs.stack.map((item) => (
              <span key={item} className="rounded-sm border border-ink/15 px-2.5 py-1 font-mono text-xs text-ink/72">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {proofs.map((proof) => (
            <article key={proof.label} className="rounded-sm border border-ink/15 bg-panel/88 p-4">
              <div className="flex items-start gap-4">
                <proof.icon className="mt-1 h-5 w-5 shrink-0 text-signal" />
                <div>
                  <h4 className="font-mono text-sm uppercase tracking-[0.18em] text-ink/72">{proof.label}</h4>
                  <p className="mt-2 text-base leading-7 text-ink/78">{proof.text}</p>
                </div>
              </div>
            </article>
          ))}
          <article className="rounded-sm border border-ink/15 bg-ink p-4 text-panel">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal" />
              <p className="text-base leading-7">
                This is the same lens I bring to MCP and agentic systems: understand boundaries, failure modes, permissions, and operational visibility before scaling the workflow.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
