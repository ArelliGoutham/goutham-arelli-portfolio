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
        ink: "#172238",
        paper: "#f7f3ea",
        panel: "#fffaf0",
        line: "#c8d2df",
        signal: "#0756b5",
        teal: "#0f766e",
        amber: "#b7791f",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        dossier: "0 18px 60px rgba(23, 34, 56, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
