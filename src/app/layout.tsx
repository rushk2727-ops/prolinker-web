import { LangProvider } from "@/context/LangContext";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ProLinker — The Professional Freelance Network",
  description: "The AI-powered enterprise freelance network. Post a project and instantly get matched with your top 3 verified professionals.",
  keywords: "freelance, hire freelancers, AI matching, professional network, enterprise talent",
  openGraph: {
    title: "ProLinker — The Professional Freelance Network",
    description: "AI-powered matching. Invite-only network. Enterprise-grade trust.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${inter.variable}`}>
      <body className={inter.className}>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
