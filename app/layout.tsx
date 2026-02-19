import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Analytics } from "@vercel/analytics/next";

// Fontes configuradas para o padrão premium
const sora = Sora({
  subsets: ['latin'],
  variable: "--font-sora"
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: "--font-jakarta" 
});

export const metadata: Metadata = {
  title: "Codex",
  description: "Codex Educação e Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${jakarta.variable} ${sora.variable} font-sans antialiased bg-[#000000] text-white`}
      >
        <Header/>
        {children}
        <Analytics />
      </body>
    </html>
  );
}