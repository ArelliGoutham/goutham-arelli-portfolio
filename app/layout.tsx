import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

const googleAnalyticsId = "G-K6KRVJWG7C";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://goutham-arelli-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Goutham Arelli | Backend Engineer",
  description:
    "Backend engineer at Pine Labs building enterprise P3P payment SDKs and scalable systems for agentic commerce.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable summary" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="Full LLM-readable portfolio context" />
      </head>
      <body className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "${googleAnalyticsId}", {
              "client_storage": "none"
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
