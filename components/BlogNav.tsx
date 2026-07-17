"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BlogNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ease-out ${
        scrolled
          ? "border-line bg-paper/85 shadow-nav backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
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
  );
}
