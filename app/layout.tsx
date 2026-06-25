import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/Provider";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Alexandra Hockett | Full Stack & AI Developer",
  description:
    "Full Stack Developer & AI Specialist building SaaS platforms, e-commerce, and AI-powered apps. Expert in Next.js, React, TypeScript & Claude AI.",
  keywords:
    "full stack developer, AI integration specialist, React developer, Next.js, TypeScript, SaaS, web developer, portfolio, Alexandra Hockett",
  openGraph: {
    title: "Alexandra Hockett — Full Stack & AI Developer",
    description:
      "Building production SaaS platforms, e-commerce, and AI-powered apps with Next.js, React, TypeScript & Claude AI.",
    url: "https://alexandrahockett.com",
    siteName: "Alexandra Hockett",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandra Hockett — Full Stack & AI Developer",
    description:
      "Building production SaaS platforms, e-commerce, and AI-powered apps with Next.js, React, TypeScript & Claude AI.",
  },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingNav navItems={navItems} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
