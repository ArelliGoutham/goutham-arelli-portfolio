import type { ReactNode } from "react";
import Link from "next/link";
import { BlogNav } from "@/components/BlogNav";

export function BlogShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-panel"
      >
        Skip to content
      </a>

      <BlogNav />

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
