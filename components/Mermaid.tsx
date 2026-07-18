"use client";
import { useEffect, useId, useRef } from "react";

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/:/g, "m");

  useEffect(() => {
    if (!ref.current) return;
    let cancelled = false;

    import("mermaid").then((mod) => {
      if (cancelled) return;
      initMermaid(mod.default);
      mod.default.render(uid, chart.trim()).then(({ svg }) => {
        if (!cancelled && ref.current) injectSvg(ref.current, svg);
      }).catch(() => {});
    });

    return () => { cancelled = true; };
  }, [chart, uid]);

  return <div ref={ref} className="mermaid-wrap" role="img" aria-label="Diagram" />;
}

/** Scans the DOM for [data-mermaid] placeholders and hydrates them.
 *  Used by the blog shell so the MDX author only writes ```mermaid fences. */
export function MermaidRenderer() {
  useEffect(() => {
    import("mermaid").then((mod) => {
      initMermaid(mod.default);
      document.querySelectorAll<HTMLDivElement>("[data-mermaid]").forEach((el) => {
        const encoded = el.getAttribute("data-mermaid");
        if (!encoded || el.dataset.rendered) return;
        el.dataset.rendered = "1";
        el.className = "mermaid-wrap";

        try {
          const chart = atob(encoded);
          const id = "md" + Math.random().toString(36).slice(2, 9);
          mod.default.render(id, chart).then(({ svg }) => injectSvg(el, svg)).catch(() => {});
        } catch { /* skip malformed */ }
      });
    });
  }, []);

  return null;
}

function initMermaid(mermaid: Awaited<typeof import("mermaid")>["default"]) {
  mermaid.initialize({
    startOnLoad: false,
    theme: "base",
    fontFamily: "var(--font-body, system-ui, sans-serif)",
    fontSize: 14,
    themeVariables: {
      background: "#f2f5f9",
      mainBkg: "#eef2f8",
      primaryColor: "#eef2f8",
      primaryBorderColor: "rgba(11,79,156,0.28)",
      primaryTextColor: "#0a1628",
      secondaryColor: "#e6ebf2",
      secondaryBorderColor: "rgba(10,22,40,0.12)",
      secondaryTextColor: "#1e2d45",
      tertiaryColor: "#f2f5f9",
      tertiaryBorderColor: "rgba(10,22,40,0.12)",
      tertiaryTextColor: "#5b6b82",
      lineColor: "rgba(10,22,40,0.40)",
      clusterBkg: "#e6ebf2",
      clusterBorder: "rgba(10,22,40,0.14)",
      titleColor: "#0a1628",
      edgeLabelBackground: "#f2f5f9",
    },
  });
}

function injectSvg(el: HTMLDivElement, svg: string) {
  el.innerHTML = svg;
  const svgEl = el.querySelector("svg");
  if (svgEl) {
    svgEl.removeAttribute("width");
    svgEl.removeAttribute("height");
    svgEl.setAttribute("width", "100%");
  }
}

