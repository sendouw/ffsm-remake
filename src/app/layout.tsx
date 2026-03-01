import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import GlobalChrome from "@/components/layout/GlobalChrome";
import SanityLive from "@/components/SanityLive";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://foothillfiresafe.com"),
  title: {
    default: "Foothill FireSafe & Maintenance | Fire Authority Validation",
    template: "%s | FFSM",
  },
  description:
    "Wildfire resilience today is not just about defensible space. Protecting Homes. Preserving Insurability. Strengthening Communities.",
  keywords: [
    "wildfire mitigation",
    "home hardening",
    "defensible space",
    "fire risk assessment",
    "Southern California",
    "CSLB #660690",
  ],
  authors: [{ name: "Rich Snyder & Team", url: "https://foothillfiresafe.com" }],
  creator: "Foothill FireSafe & Maintenance",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://foothillfiresafe.com",
    title: "Foothill FireSafe & Maintenance",
    description:
      "Wildfire resilience today is not just about defensible space. Protecting Homes. Preserving Insurability. Strengthening Communities.",
    siteName: "Foothill FireSafe & Maintenance",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Foothill FireSafe & Maintenance Hero Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foothill FireSafe & Maintenance",
    description: "Protecting Homes. Preserving Insurability. Strengthening Communities.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sourceSans.variable} antialiased bg-ffsm-surface text-ffsm-ink flex flex-col min-h-screen selection:bg-ffsm-primary-soft-strong selection:text-ffsm-ink`}
      >
        <GlobalChrome>
          {children}
          <SanityLive />
        </GlobalChrome>
      </body>
    </html>
  );
}
