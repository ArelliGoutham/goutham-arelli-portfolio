import { CheckCircle2 } from "lucide-react";
import { experience } from "@/content/experience";
import { SectionHeader } from "@/components/SectionHeader";

const pineLabs = experience[0];

export function BackendFoundation() {
  return (
    <section id="backend" className="border-b border-ink/15 py-14">
      <SectionHeader
        eyebrow="Production backend work"
        title="Beyond feature delivery: scale, reliability, and architecture."
        description="My backend work is focused on how systems behave under real load: throughput, service boundaries, observability, failure handling, and reliable integrations."
      />
      <article className="rounded-sm border border-ink/15 bg-panel p-5 shadow-dossier">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-signal">{pineLabs.period}</p>
        <h3 className="mt-3 font-display text-2xl font-bold text-ink">{pineLabs.company}</h3>
        <p className="mt-1 font-mono text-sm text-ink/64">{pineLabs.role}</p>
        <p className="mt-5 max-w-3xl text-base leading-7 text-ink/75">{pineLabs.focus}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {pineLabs.stack.map((item) => (
            <span key={item} className="rounded-sm border border-ink/15 px-2.5 py-1 font-mono text-xs text-ink/72">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-7 border-t border-ink/15 pt-5">
          <ul className="space-y-3">
            {pineLabs.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-base leading-7 text-ink/78">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-signal" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
