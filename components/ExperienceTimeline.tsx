import { experience } from "@/content/experience";
import { SectionHeader } from "@/components/SectionHeader";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="border-b border-ink/15 py-14">
      <SectionHeader
        eyebrow="Timeline"
        title="Systems experience across payments, EdTech, and telecom."
        description="The roles form a progression from full-stack delivery to backend performance, reliability, and platform-oriented work."
      />
      <div className="space-y-5">
        {experience.map((item) => (
          <article key={item.company} className="grid gap-4 rounded-sm border border-ink/15 bg-panel/88 p-5 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">{item.period}</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink">{item.company}</h3>
              <p className="mt-1 font-mono text-sm text-ink/64">{item.role}</p>
              <p className="mt-4 text-sm leading-6 text-ink/70">{item.focus}</p>
            </div>
            <div>
              <ul className="space-y-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-base leading-7 text-ink/78">
                    <span className="mt-3 h-px w-5 shrink-0 bg-signal" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span key={tech} className="rounded-sm border border-ink/15 px-2.5 py-1 font-mono text-xs text-ink/68">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
