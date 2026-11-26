import type { Metadata } from "next";
import { Archivo, Geist, Geist_Mono, Homemade_Apple, JetBrains_Mono } from "next/font/google";
import { siteUrl } from "@/data/content";
import "./globals.css";
import "./minimal.css";

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-archivo" });
const hand = Homemade_Apple({ subsets: ["latin"], weight: "400", variable: "--font-hand" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-geist-mono" });

const title = "Pragya Rajput, full-stack developer";
const description =
  "Full-stack developer in New Delhi. React and Next.js on Node.js, PostgreSQL and AI. Builder of PolicyLens, CreatorDesk and PostDrip AI.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  authors: [{ name: "Pragya Rajput", url: siteUrl }],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Pragya Rajput",
    title,
    description,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${archivo.variable} ${hand.variable} ${jetbrains.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
