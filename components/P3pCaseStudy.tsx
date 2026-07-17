import { ArrowUpRight, Building2, Package, ShieldCheck } from "lucide-react";
import { p3p } from "@/content/projects";
import { SectionHeader } from "@/components/SectionHeader";

export function P3pCaseStudy() {
  return (
    <section id="p3p" className="section-shell">
      <SectionHeader
        index="02"
        eyebrow={p3p.label}
        title={p3p.fullName}
        description={p3p.summary}
      />

      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="chip inline-flex items-center gap-1.5">
          <Building2 className="h-3.5 w-3.5 text-signal" aria-hidden="true" />
          {p3p.company}
        </span>
        <span className="chip">{p3p.role}</span>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_1.05fr]">
        <div className="space-y-4">
          <article className="stagger-item surface-card p-5 sm:p-6">
            <p className="eyebrow">Problem</p>
            <p className="mt-3 text-base leading-7 text-ink-soft">{p3p.problem}</p>
          </article>
          <article className="stagger-item surface-card p-5 sm:p-6">
            <p className="eyebrow">Approach</p>
            <p className="mt-3 text-base leading-7 text-ink-soft">{p3p.approach}</p>
          </article>
          <article className="stagger-item rounded-card border border-ink/20 bg-ink p-5 text-panel shadow-lift sm:p-6">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-teal">
              Ownership
            </p>
            <p className="mt-3 text-base leading-7 text-panel/90">{p3p.ownership}</p>
          </article>
        </div>

        <div className="stagger-item surface-card p-5 shadow-lift sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
              <ShieldCheck className="h-4 w-4 text-teal" aria-hidden="true" />
              Payment flow
            </div>
            <span className="chip">x402 · enterprise</span>
          </div>

          <ol className="relative mt-6">
            {p3p.flow.map((node, index) => (
              <li
                key={node}
                className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-3 pb-4 last:pb-0"
              >
                <div className="relative flex justify-center">
                  {index < p3p.flow.length - 1 ? (
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
            {p3p.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-6 text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="stagger-item mt-5 surface-card p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Package className="h-4 w-4 text-signal" aria-hidden="true" />
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
              Public packages &amp; related
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {p3p.stack.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {p3p.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start justify-between gap-3 rounded-card border border-line bg-paper/70 px-4 py-3 transition hover:border-signal/40 hover:bg-signal-soft/50 hover:shadow-soft"
            >
              <span>
                <span className="block font-mono text-sm font-medium text-ink group-hover:text-signal">
                  {link.label}
                </span>
                <span className="mt-1 block text-xs text-ink-muted">{link.detail}</span>
              </span>
              <ArrowUpRight
                className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted transition group-hover:text-signal"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
