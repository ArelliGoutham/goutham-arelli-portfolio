import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/content/profile";

export function ContactPanel() {
  return (
    <section id="contact" className="py-14">
      <div className="rounded-sm border border-ink/15 bg-ink p-6 text-panel shadow-dossier sm:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.26em] text-teal">Resume and contact</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">Open to backend and platform roles with real systems ownership.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-panel/78">
              Best fit: teams building reliable backend systems, payment or commerce workflows, platform services, or agent-aware products where architecture and throughput matter.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href="/goutham_arelli_resume.pdf"
              className="inline-flex items-center gap-2 rounded-sm bg-panel px-4 py-2 font-mono text-sm text-ink transition hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-sm border border-panel/25 px-4 py-2 font-mono text-sm transition hover:border-teal hover:text-teal">
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a href="https://www.linkedin.com/in/goutham-arelli/" className="inline-flex items-center gap-2 rounded-sm border border-panel/25 px-4 py-2 font-mono text-sm transition hover:border-teal hover:text-teal">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a href="https://github.com/ArelliGoutham" className="inline-flex items-center gap-2 rounded-sm border border-panel/25 px-4 py-2 font-mono text-sm transition hover:border-teal hover:text-teal">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 border-t border-panel/15 pt-5 font-mono text-xs text-panel/68">
          <span>{profile.location}</span>
          <span className="inline-flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" />
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
    </section>
  );
}
