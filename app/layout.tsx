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
  title:
    "Alexandra Hockett | Full Stack Developer & AI Integration Specialist | React & Next.js Expert",
  description:
    "Full Stack Developer & AI Integration Specialist building production SaaS platforms, e-commerce solutions, and AI-powered applications. Expert in React, Next.js, TypeScript, and modern web technologies.",
  keywords:
    "full stack developer, AI integration specialist, React developer, Next.js, TypeScript, SaaS, web developer, portfolio, Alexandra Hockett",
  openGraph: {
    title: "Alexandra Hockett — Full Stack Developer & AI Integration Specialist",
    description:
      "Full Stack Developer & AI Integration Specialist portfolio showcasing production SaaS platforms, e-commerce solutions, and AI-powered applications.",
    url: "https://alexandrahockett.com",
    siteName: "Alexandra Hockett",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandra Hockett — Full Stack Developer & AI Integration Specialist",
    description:
      "Full Stack Developer & AI Integration Specialist portfolio showcasing production SaaS platforms, e-commerce solutions, and AI-powered applications.",
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
