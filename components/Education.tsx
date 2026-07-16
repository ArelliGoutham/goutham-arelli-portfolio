import { GraduationCap } from "lucide-react";
import { education } from "@/content/education";
import { SectionHeader } from "@/components/SectionHeader";

export function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeader
        index="07"
        eyebrow="Education"
        title="Academic foundation behind the engineering work."
        description="Formal study across computer science, electronics, IoT, and software systems complements hands-on backend experience."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item) => (
          <article key={item.institution} className="stagger-item surface-card-hover p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-card border border-line bg-signal-soft text-signal">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-muted">{item.year}</p>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
              {item.institution}
            </h3>
            <p className="mt-2 font-mono text-sm text-signal">{item.credential}</p>
            <p className="mt-4 text-base leading-7 text-ink-soft">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
