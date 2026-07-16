import { stackGroups } from "@/content/stack";
import { SectionHeader } from "@/components/SectionHeader";

export function StackMatrix() {
  return (
    <section id="stack" className="section-shell">
      <SectionHeader index="05" eyebrow="Stack" title="Technical stack." />
      <div className="grid gap-4 md:grid-cols-2">
        {stackGroups.map((group, index) => (
          <article key={group.title} className="stagger-item surface-card-hover p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                {group.title}
              </h3>
              <span className="font-mono text-[11px] text-ink-muted">0{index + 1}</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-pill border border-line bg-paper/90 px-3 py-1.5 font-mono text-xs text-ink-soft transition hover:border-signal/35 hover:bg-signal-soft hover:text-signal"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
