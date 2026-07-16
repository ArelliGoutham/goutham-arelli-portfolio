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
        ink: {
          DEFAULT: "#121a2b",
          soft: "#2a3548",
          muted: "#5c677a",
        },
        paper: {
          DEFAULT: "#f4efe4",
          deep: "#ebe4d4",
        },
        panel: {
          DEFAULT: "#fffaf2",
          elevated: "#ffffff",
        },
        line: {
          DEFAULT: "rgba(18, 26, 43, 0.12)",
          strong: "rgba(18, 26, 43, 0.22)",
        },
        signal: {
          DEFAULT: "#0b5cab",
          soft: "#e8f1fb",
          bright: "#1a73d4",
        },
        teal: {
          DEFAULT: "#0f766e",
          soft: "#e6f4f2",
        },
        amber: {
          DEFAULT: "#b7791f",
          soft: "#fbf3e4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 0 rgba(18, 26, 43, 0.04), 0 12px 32px rgba(18, 26, 43, 0.06)",
        lift: "0 2px 0 rgba(18, 26, 43, 0.04), 0 18px 48px rgba(18, 26, 43, 0.10)",
        glow: "0 0 0 1px rgba(11, 92, 171, 0.12), 0 16px 40px rgba(11, 92, 171, 0.12)",
        nav: "0 1px 0 rgba(18, 26, 43, 0.06), 0 12px 40px rgba(18, 26, 43, 0.08)",
        inset: "inset 0 1px 0 rgba(255, 255, 255, 0.7)",
      },
      borderRadius: {
        card: "14px",
        pill: "999px",
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
