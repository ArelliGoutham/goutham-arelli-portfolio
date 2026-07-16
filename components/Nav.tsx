"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#backend", label: "Backend" },
  { href: "#p3p", label: "P3P" },
  { href: "#experience", label: "Experience" },
  { href: "#ai-mcp", label: "Direction" },
  { href: "#mcp-nexus", label: "MCP Nexus" },
  { href: "#stack", label: "Stack" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const sections = links
        .map((link) => {
          const id = link.href.slice(1);
          const el = document.getElementById(id);
          if (!el) return null;
          return { id: link.href, top: el.getBoundingClientRect().top };
        })
        .filter(Boolean) as { id: string; top: number }[];

      const current = [...sections].reverse().find((section) => section.top <= 120);
      setActive(current?.id ?? "");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`nav-shell sticky top-0 z-40 border-b transition-all duration-300 ease-out ${
        scrolled
          ? "border-line bg-paper/85 shadow-nav backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[var(--nav-h)] w-full max-w-content items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <a href="#top" className="group flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-mono text-xs font-semibold text-panel transition group-hover:bg-signal">
            GA
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-semibold tracking-tight text-ink">
              Goutham Arelli
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted sm:block">
              Backend · Payments
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-pill px-3 py-1.5 font-mono text-xs transition duration-200 ${
                  isActive
                    ? "bg-signal-soft text-signal"
                    : "text-ink-muted hover:bg-panel/80 hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/goutham_arelli_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-primary hidden !px-4 !py-2 text-xs sm:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-panel/90 text-ink shadow-soft transition hover:border-signal/40 hover:text-signal lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-paper/95 px-5 py-4 shadow-nav backdrop-blur-xl sm:px-8 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-card px-3 py-3 font-mono text-sm transition ${
                  active === link.href ? "bg-signal-soft text-signal" : "text-ink-soft hover:bg-panel"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/goutham_arelli_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-2 w-full sm:hidden"
              onClick={() => setOpen(false)}
            >
              Download Resume
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
