import { ShieldCheck } from "lucide-react";
import { mcpNexus } from "@/content/projects";
import { SectionHeader } from "@/components/SectionHeader";

export function McpNexusCaseStudy() {
  return (
    <section id="mcp-nexus" className="border-b border-ink/15 py-14">
      <SectionHeader eyebrow={mcpNexus.label} title={mcpNexus.name} description={mcpNexus.summary} />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
        <div className="space-y-4">
          <article className="rounded-sm border border-ink/15 bg-panel p-5">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">Problem</p>
            <p className="mt-3 text-base leading-7 text-ink/76">{mcpNexus.problem}</p>
          </article>
          <article className="rounded-sm border border-ink/15 bg-panel p-5">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">Approach</p>
            <p className="mt-3 text-base leading-7 text-ink/76">{mcpNexus.approach}</p>
          </article>
          <article className="rounded-sm border border-ink/15 bg-ink p-5 text-panel">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal">Ownership</p>
            <p className="mt-3 text-base leading-7">{mcpNexus.ownership}</p>
          </article>
        </div>

        <div className="rounded-sm border border-ink/15 bg-panel p-5 shadow-dossier">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink/64">
            <ShieldCheck className="h-4 w-4 text-teal" />
            Prototype flow
          </div>
          <ol className="mt-5">
            {mcpNexus.flow.map((node, index) => (
              <li key={node} className="relative grid grid-cols-[2.75rem_minmax(0,1fr)] gap-4 pb-3 last:pb-0">
                {index < mcpNexus.flow.length - 1 ? (
                  <span
                    className="pointer-events-none absolute left-[1.375rem] top-11 bottom-0 border-l border-dashed border-signal/45"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex justify-center">
                  <span className="relative z-10 flex h-11 w-9 items-center justify-center rounded-sm border border-signal/45 bg-paper font-mono text-xs text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex min-h-11 min-w-0 items-center rounded-sm border border-ink/15 bg-paper px-4 py-3 font-mono text-sm text-ink">
                  {node}
                </div>
              </li>
            ))}
          </ol>
          <ul className="mt-6 space-y-3 border-t border-ink/15 pt-5">
            {mcpNexus.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-6 text-ink/76">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
