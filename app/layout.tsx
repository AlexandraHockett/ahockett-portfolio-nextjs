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
    "Alexandra Hockett | Front-End Developer Portfolio | React & Next.js Expert",
  description:
    "Professional front-end developer transforming from hospitality to tech. Expert in React, Next.js, and modern web technologies. Creating innovative digital solutions with a unique professional perspective.",
  keywords:
    "front-end developer, React developer, Next.js, web developer, portfolio, Alexandra Hockett",
  openGraph: {
    title: "Alexandra Hockett - Front-End Developer",
    description:
      "Professional front-end developer portfolio showcasing expertise in React and Next.js.",
    images: [{ url: "/logo.svg" }],
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
