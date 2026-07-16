import { CheckCircle2 } from "lucide-react";
import { experience } from "@/content/experience";
import { SectionHeader } from "@/components/SectionHeader";

const pineLabs = experience[0];

export function BackendFoundation() {
  return (
    <section id="backend" className="section-shell">
      <SectionHeader
        index="01"
        eyebrow="Production payments systems"
        title="Beyond feature delivery: scale, reliability, and architecture."
        description="My backend work is focused on how payment and platform systems behave under real load: throughput, service boundaries, observability, failure handling, and reliable integrations."
      />
      <article className="stagger-item surface-card overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-line bg-gradient-to-br from-signal-soft/80 via-panel to-panel p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-signal">{pineLabs.period}</p>
            <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink">
              {pineLabs.company}
            </h3>
            <p className="mt-2 font-mono text-sm text-ink-muted">{pineLabs.role}</p>
            <p className="mt-5 text-base leading-7 text-ink-soft">{pineLabs.focus}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {pineLabs.stack.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
              Impact highlights
            </p>
            <ul className="mt-5 space-y-4">
              {pineLabs.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-base leading-7 text-ink-soft">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-signal" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
