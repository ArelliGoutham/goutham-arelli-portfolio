import { experience } from "@/content/experience";
import { SectionHeader } from "@/components/SectionHeader";

const timelineExperience = experience.filter((item) => item.company !== "Pine Labs");

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeader
        index="03"
        eyebrow="Timeline"
        title="Previous systems experience across EdTech and telecom."
      />
      <div className="relative space-y-4">
        <div
          className="pointer-events-none absolute left-[1.15rem] top-4 bottom-4 hidden w-px bg-gradient-to-b from-signal/40 via-line-strong to-transparent md:block"
          aria-hidden="true"
        />
        {timelineExperience.map((item, index) => (
          <article
            key={item.company}
            className="stagger-item surface-card-hover relative grid gap-6 p-5 sm:p-6 md:grid-cols-[2.5rem_minmax(0,1fr)] lg:grid-cols-[2.5rem_0.34fr_0.66fr]"
          >
            <div className="relative hidden md:flex md:justify-center">
              <span className="relative z-10 mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-signal/40 bg-panel font-mono text-[10px] font-semibold text-signal shadow-soft">
                {index + 1}
              </span>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">{item.period}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                {item.company}
              </h3>
              <p className="mt-1 font-mono text-sm text-ink-muted">{item.role}</p>
              <p className="mt-4 text-sm leading-6 text-ink-soft">{item.focus}</p>
            </div>

            <div>
              <ul className="space-y-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-base leading-7 text-ink-soft">
                    <span className="mt-3 h-px w-4 shrink-0 bg-signal/70" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span key={tech} className="chip">
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
