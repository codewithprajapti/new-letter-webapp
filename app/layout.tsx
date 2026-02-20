import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NBC News – Tesla, Business & Tech Updates",
    template: "%s | NBC News",
  },
  description:
    "NBC News delivers the latest Tesla updates, US business headlines, TechCrunch insights, and Wall Street Journal coverage in one place.",
  keywords: [
    "Tesla news",
    "US business news",
    "TechCrunch updates",
    "Wall Street Journal",
    "stock market news",
    "technology news",
  ],
  authors: [{ name: "NBC News" }],
  creator: "NBC News",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NBC News",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@nbcnews",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col gap-7`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
