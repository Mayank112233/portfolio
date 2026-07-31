import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mayank Madhukar | Enterprise AI Engineer",
  description: "AI Engineer passionate about building production-ready applications using LLMs, Agentic AI, Machine Learning, and Data Intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen selection:bg-accent-blue/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
