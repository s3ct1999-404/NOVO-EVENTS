import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Event Production Uganda`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Event Production Uganda",
    "Event Management Uganda",
    "Sound Hire Uganda",
    "Stage Hire Uganda",
    "Photography Uganda",
    "Videography Uganda",
    "Conference Production Uganda",
    "Corporate Events Uganda",
    "Wedding Production Uganda",
    "Equipment Hire Kampala",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.slogan}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/hero/main.png",
        width: 2400,
        height: 1600,
        alt: "Novo Events — Premium event production in Uganda",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white text-novo-black">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
