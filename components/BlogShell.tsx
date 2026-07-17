import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BlogShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-panel"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-line bg-paper/85 shadow-nav backdrop-blur-xl">
        <div className="mx-auto flex h-[var(--nav-h)] w-full max-w-content items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-mono text-xs font-semibold text-panel transition group-hover:bg-signal">
              GA
            </span>
            <span>
              <span className="block font-display text-base font-semibold tracking-tight text-ink">
                Goutham Arelli
              </span>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted sm:block">
                Blog
              </span>
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-pill border border-line bg-panel/90 px-4 py-2 font-mono text-xs text-ink-muted shadow-soft transition hover:border-signal/40 hover:text-signal"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Portfolio
          </Link>
        </div>
      </header>

      <main id="main" className="mx-auto w-full max-w-content px-5 pb-16 pt-4 sm:px-8 lg:px-10">
        {children}
      </main>

      <footer className="border-t border-line bg-paper-deep/50">
        <div className="mx-auto flex w-full max-w-content flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="font-mono text-xs text-ink-muted">
            © {new Date().getFullYear()} Goutham Arelli
          </p>
          <Link
            href="/"
            className="font-mono text-xs text-ink-muted transition hover:text-signal"
          >
            Visit the portfolio →
          </Link>
        </div>
      </footer>
    </div>
  );
}
