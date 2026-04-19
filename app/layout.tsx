import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeuroLock — Reclaim Your Attention",
  description:
    "NeuroLock helps you break free from short-form video addiction by introducing intentional friction. Pause, reflect, and choose how you spend your time.",
  keywords: [
    "NeuroLock",
    "digital wellbeing",
    "screen time",
    "focus app",
    "reduce phone addiction",
    "mindful technology",
    "app timer",
  ],
  openGraph: {
    title: "NeuroLock — Reclaim Your Attention",
    description:
      "A calm, privacy-first app that helps you build intentional digital habits. Download early access.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroLock — Reclaim Your Attention",
    description:
      "Pause. Reflect. Choose. NeuroLock gives your attention back to you.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030712",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
