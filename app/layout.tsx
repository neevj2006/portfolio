import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);

  return {
    metadataBase: base,
    title: "Neev Jain - Web Developer × AI/ML Engineer",
    description:
      "Neev Jain builds intelligent products where thoughtful web interfaces meet real machine learning.",
    openGraph: {
      title: "Neev Jain - Web Developer × AI/ML Engineer",
      description: "Engineering intelligence into interfaces.",
      type: "website",
      images: [
        {
          url: new URL("/og.png", base),
          width: 1731,
          height: 909,
          alt: "Neev Jain portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Neev Jain — Web Developer × AI/ML Engineer",
      description: "Engineering intelligence into interfaces.",
      images: [new URL("/og.png", base)],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
