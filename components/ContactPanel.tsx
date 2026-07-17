import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/content/profile";

export function ContactPanel() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-card border border-ink/15 bg-ink p-6 text-panel shadow-lift sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-signal/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-10 h-40 w-40 rounded-full bg-teal/20 blur-3xl" />

        <div className="relative">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-teal">
            08 · Resume and contact
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Open to backend and payments platform roles with real systems ownership.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-panel/75 sm:text-lg">
                Best fit: high-throughput payment systems, enterprise payment SDKs, EMI and agentic commerce
                workflows, reliability-focused platform services, or agent-aware products where architecture
                and throughput matter.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="/goutham_arelli_resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-pill bg-panel px-5 py-2.5 font-mono text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:bg-white"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-pill border border-panel/25 px-5 py-2.5 font-mono text-sm transition hover:-translate-y-0.5 hover:border-teal hover:text-teal"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/goutham-arelli/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-pill border border-panel/25 px-5 py-2.5 font-mono text-sm transition hover:-translate-y-0.5 hover:border-teal hover:text-teal"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/ArelliGoutham"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-pill border border-panel/25 px-5 py-2.5 font-mono text-sm transition hover:-translate-y-0.5 hover:border-teal hover:text-teal"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-panel/15 pt-5 font-mono text-xs text-panel/65">
            <span>{profile.location}</span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {profile.phone}
            </span>
            <span>{profile.email}</span>
            <a href="/llms.txt" className="transition hover:text-teal">
              llms.txt
            </a>
            <a href="/llms-full.txt" className="transition hover:text-teal">
              llms-full.txt
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
