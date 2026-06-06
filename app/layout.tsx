import type { Metadata } from "next";
import { IBM_Plex_Mono, Libre_Baskerville, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const display = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
});

const body = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Goutham Arelli | Backend Systems and MCP Portfolio",
  description:
    "Backend engineer applying scalable systems experience to MCP research, agentic commerce, and AI-assisted prototyping.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
