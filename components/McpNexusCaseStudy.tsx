import { ShieldCheck } from "lucide-react";
import { mcpNexus } from "@/content/projects";
import { SectionHeader } from "@/components/SectionHeader";

export function McpNexusCaseStudy() {
  return (
    <section id="mcp-nexus" className="section-shell">
      <SectionHeader
        index="05"
        eyebrow={mcpNexus.label}
        title={mcpNexus.name}
        description={mcpNexus.summary}
      />
      <div className="grid gap-5 lg:grid-cols-[1fr_1.05fr]">
        <div className="space-y-4">
          <article className="stagger-item surface-card p-5 sm:p-6">
            <p className="eyebrow">Problem</p>
            <p className="mt-3 text-base leading-7 text-ink-soft">{mcpNexus.problem}</p>
          </article>
          <article className="stagger-item surface-card p-5 sm:p-6">
            <p className="eyebrow">Approach</p>
            <p className="mt-3 text-base leading-7 text-ink-soft">{mcpNexus.approach}</p>
          </article>
          <article className="stagger-item rounded-card border border-ink/20 bg-ink p-5 text-panel shadow-lift sm:p-6">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-teal">
              Ownership
            </p>
            <p className="mt-3 text-base leading-7 text-panel/90">{mcpNexus.ownership}</p>
          </article>
        </div>

        <div className="stagger-item surface-card p-5 shadow-lift sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
              <ShieldCheck className="h-4 w-4 text-teal" aria-hidden="true" />
              Prototype flow
            </div>
            <span className="chip">Personal · research</span>
          </div>

          <ol className="relative mt-6">
            {mcpNexus.flow.map((node, index) => (
              <li
                key={node}
                className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-3 pb-4 last:pb-0"
              >
                <div className="relative flex justify-center">
                  {index < mcpNexus.flow.length - 1 ? (
                    <span
                      className="absolute top-9 bottom-[-1rem] w-px bg-gradient-to-b from-signal/50 to-line"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-signal/40 bg-paper font-mono text-xs font-semibold text-signal shadow-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="min-w-0 rounded-card border border-line bg-paper/80 px-4 py-3 font-mono text-sm text-ink">
                  {node}
                </div>
              </li>
            ))}
          </ol>

          <ul className="mt-7 space-y-3 border-t border-line pt-5">
            {mcpNexus.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-6 text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
