import type { Metadata } from "next";
import { Big_Shoulders, Big_Shoulders_Stencil, Literata } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/Chrome";
import { site } from "@/lib/site";
import "./globals.css";

const shoulders = Big_Shoulders({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-shoulders",
});

const stencil = Big_Shoulders_Stencil({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-stencil",
});

const literata = Literata({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-literata",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Hood Warfare 2 Guide — Friends, Game Modes & Troubleshooting",
    template: "%s",
  },
  description:
    "Hood Warfare 2 guides for private matches with friends, join and audio fixes on patch 1.0.1.4, six modes, and weapon unlock tracks. Unofficial Steam guide.",
  applicationName: site.name,
  authors: [{ name: site.domain, url: site.url }],
  creator: site.domain,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: site.name,
    images: ["/media/header.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${shoulders.variable} ${stencil.variable} ${literata.variable}`}>
      <body>
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-sodium focus:px-3 focus:py-2 focus:text-sodium-ink">
          Skip to content
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
