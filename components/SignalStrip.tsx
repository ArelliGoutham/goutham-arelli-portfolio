import { profile } from "@/content/profile";

export function SignalStrip() {
  return (
    <section aria-label="Key signals" className="border-b border-line py-8 sm:py-10">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {profile.signals.map((signal, index) => (
          <div
            key={signal.value}
            className="stagger-item surface-card-hover group relative overflow-hidden p-5"
          >
            <div className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-signal to-teal opacity-0 transition group-hover:opacity-100" />
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
              0{index + 1}
            </p>
            <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-[1.65rem]">
              <span className="text-signal">{signal.value}</span>
            </p>
            <p className="mt-2 text-sm leading-5 text-ink-muted">{signal.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
