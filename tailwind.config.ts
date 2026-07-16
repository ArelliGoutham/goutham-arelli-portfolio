import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy / slate — payments & platform trust palette
        ink: {
          DEFAULT: "#0a1628",
          soft: "#1e2d45",
          muted: "#5b6b82",
        },
        paper: {
          DEFAULT: "#f2f5f9",
          deep: "#e6ebf2",
        },
        panel: {
          DEFAULT: "#ffffff",
          elevated: "#ffffff",
        },
        line: {
          DEFAULT: "rgba(10, 22, 40, 0.10)",
          strong: "rgba(10, 22, 40, 0.18)",
        },
        signal: {
          DEFAULT: "#0b4f9c",
          soft: "#e8f1fb",
          bright: "#1565c0",
        },
        // Ledger / settlement positive accent
        teal: {
          DEFAULT: "#0c6b5c",
          soft: "#e5f4f1",
        },
        // Cool steel highlight (replaces warm amber)
        amber: {
          DEFAULT: "#3d5a80",
          soft: "#e9eef5",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 0 rgba(10, 22, 40, 0.04), 0 10px 28px rgba(10, 22, 40, 0.05)",
        lift: "0 2px 0 rgba(10, 22, 40, 0.04), 0 16px 40px rgba(10, 22, 40, 0.09)",
        glow: "0 0 0 1px rgba(11, 79, 156, 0.14), 0 12px 32px rgba(11, 79, 156, 0.14)",
        nav: "0 1px 0 rgba(10, 22, 40, 0.06), 0 10px 32px rgba(10, 22, 40, 0.07)",
        inset: "inset 0 1px 0 rgba(255, 255, 255, 0.85)",
      },
      borderRadius: {
        card: "12px",
        pill: "8px",
      },
      maxWidth: {
        content: "72rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 500ms ease both",
        shimmer: "shimmer 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
