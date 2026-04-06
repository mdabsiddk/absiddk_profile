import type { Metadata } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "মোঃ আবু বকর | Software Requirements Analyst",
  description: "Personal portfolio of Md. Abu Bakar (AB Siddk) - Software Requirements Analyst and Digital Creator",
};

import Clarity from "@/components/Clarity";
import CookieConsent from "@/components/CookieConsent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="scroll-smooth">
      <body
        className={`${hindSiliguri.variable} ${inter.variable} font-hind antialiased bg-slate-950 text-slate-50`}
      >
        <Clarity />
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
