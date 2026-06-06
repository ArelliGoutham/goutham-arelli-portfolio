import { profile } from "@/content/profile";

export function SignalStrip() {
  return (
    <section className="grid gap-3 border-b border-ink/15 py-6 sm:grid-cols-2 lg:grid-cols-4">
      {profile.signals.map((signal) => (
        <div key={signal.value} className="rounded-sm border border-ink/15 bg-panel/88 p-4">
          <p className="font-mono text-2xl font-semibold text-signal">{signal.value}</p>
          <p className="mt-2 text-sm leading-5 text-ink/70">{signal.label}</p>
        </div>
      ))}
    </section>
  );
}
