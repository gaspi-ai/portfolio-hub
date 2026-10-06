import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Elena Vance | Principal Full-Stack & AI Systems Architect",
  description: "Portfolio and architectural case studies of Elena Vance. Specializing in high-performance web applications, distributed systems, and production AI pipelines.",
  keywords: [
    "Full-Stack Architect",
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "AI Systems",
    "Distributed Systems",
    "Kubernetes"
  ],
  authors: [{ name: "Elena Vance" }],
  openGraph: {
    title: "Elena Vance | Principal Full-Stack & AI Systems Architect",
    description: "Engineering scalable distributed systems and intelligent digital experiences.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#07090e] text-zinc-100 selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
