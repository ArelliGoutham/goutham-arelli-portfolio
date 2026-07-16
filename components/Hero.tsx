import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, UserRound } from "lucide-react";
import { profile } from "@/content/profile";

const secondaryLinks = profile.links.filter((link) => !["Resume", "Email"].includes(link.label));

const iconMap = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Scaler: UserRound,
} as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line pb-14 pt-6 sm:pb-16 sm:pt-10">
      <div className="pointer-events-none absolute -right-16 top-8 h-56 w-56 rounded-full bg-signal/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-pill border border-line bg-panel/80 px-3 py-1.5 shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              Open to backend & payments roles
            </span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-2xl font-display text-xl italic leading-snug text-ink-soft sm:text-2xl">
            {profile.headline}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/goutham_arelli_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a href="#mcp-nexus" className="btn-secondary">
              View MCP Nexus
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-pill border border-line bg-panel/70 px-3 py-1.5 font-mono text-xs text-ink-muted">
              <MapPin className="h-3.5 w-3.5 text-teal" />
              {profile.location}
            </span>
            {secondaryLinks.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost !px-3 !py-1.5 text-xs"
                >
                  {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <aside className="surface-card relative flex flex-col overflow-hidden p-6 sm:p-7">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ink via-signal to-teal" />
          <div className="flex items-center justify-between gap-3">
            <p className="eyebrow">Systems brief</p>
            <span className="chip">Payments · Platform</span>
          </div>

          <div className="mt-6 space-y-5">
            <div className="rounded-card border border-line bg-paper/70 p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">Core strength</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft sm:text-base sm:leading-7">
                Scalable backend services, throughput tuning, observability, caching, and reliability patterns under real load.
              </p>
            </div>
            <div className="rounded-card border border-line bg-paper/70 p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal">Current exploration</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft sm:text-base sm:leading-7">
                MCP gateways, agentic commerce, and secure tool workflows — designed with the same reliability mindset as production systems.
              </p>
            </div>
          </div>

          <div className="mt-auto grid gap-3 border-t border-line pt-5 sm:grid-cols-2">
            <div className="rounded-card bg-signal-soft/70 px-4 py-3">
              <p className="font-mono text-lg font-semibold text-signal">4+</p>
              <p className="mt-0.5 text-xs leading-4 text-ink-muted">years shipping backend systems</p>
            </div>
            <div className="rounded-card bg-teal-soft/80 px-4 py-3">
              <p className="font-mono text-lg font-semibold text-teal">2000+ TPS</p>
              <p className="mt-0.5 text-xs leading-4 text-ink-muted">EMI discovery capacity lift</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
