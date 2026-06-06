import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Radar, UserRound } from "lucide-react";
import { profile } from "@/content/profile";

const iconMap = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
  Scaler: UserRound,
  Resume: Download,
};

export function Hero() {
  return (
    <section className="grid min-h-[72vh] gap-10 border-b border-ink/15 pb-12 pt-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-signal">Engineering Portfolio</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-3xl text-2xl leading-tight text-ink sm:text-3xl">{profile.headline}</p>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/78">{profile.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {profile.links.map((link) => {
            const Icon = iconMap[link.label as keyof typeof iconMap];
            const opensNewTab = !link.href.startsWith("mailto:");
            return (
              <a
                key={link.label}
                href={link.href}
                target={opensNewTab ? "_blank" : undefined}
                rel={opensNewTab ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-sm border border-ink/20 bg-panel px-4 py-2 font-mono text-sm text-ink shadow-dossier transition hover:-translate-y-0.5 hover:border-signal hover:text-signal"
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>

      <div className="rounded-sm border border-ink/15 bg-panel p-5 shadow-dossier">
        <div className="flex items-center justify-between border-b border-ink/15 pb-3 font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
          <span>Engineering direction</span>
          <ArrowDown className="h-4 w-4 text-signal" />
        </div>
        <div className="mt-5 space-y-4 text-base leading-7 text-ink/82">
          <p>Core strength: scalable backend services, throughput tuning, observability, caching, and reliability patterns.</p>
          <p>Current exploration: MCP, agentic commerce, and secure tool workflows from a backend architecture perspective.</p>
          <p className="font-mono text-sm text-signal">Keeping backend engineering current with agent-aware systems.</p>
        </div>
        <div className="mt-6 grid gap-3 border-t border-ink/15 pt-4 font-mono text-xs text-ink/68 sm:grid-cols-2">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-teal" />
            {profile.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <Radar className="h-4 w-4 text-amber" />
            Backend / Platform
          </span>
        </div>
      </div>
    </section>
  );
}
