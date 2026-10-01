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
    title: "Neev Jain | AI/ML x Web Developer",
    description:
      "Boston University Computer Engineering student building machine learning tools and full-stack applications. Seeking Summer 2027 AI/ML and software engineering internships.",
    openGraph: {
      title: "Neev Jain | AI/ML x Web Developer",
      description: "Machine learning projects, full-stack applications, and the evidence behind them. Boston University. Summer 2027 internship candidate.",
      type: "website",
      images: [
        {
          url: new URL("/og.png", base),
          width: 1731,
          height: 909,
          alt: "Neev Jain - AI/ML and web development portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Neev Jain | AI/ML x Web Developer",
      description: "Machine learning projects, full-stack applications, and the evidence behind them. Boston University. Summer 2027 internship candidate.",
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
