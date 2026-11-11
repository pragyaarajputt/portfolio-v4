import type { Metadata } from "next";
import { Archivo, Geist_Mono, Homemade_Apple, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./v4.css";

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-archivo" });
const hand = Homemade_Apple({ subsets: ["latin"], weight: "400", variable: "--font-hand" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains" });
const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Pragya Rajput, full-stack developer",
  description:
    "Full-stack developer in New Delhi. React and Next.js on Node.js, PostgreSQL and AI. Builder of PostDrip and a live BTC/USDT chart.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${hand.variable} ${jetbrains.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
