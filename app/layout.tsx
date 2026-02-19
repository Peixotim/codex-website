import type { Metadata } from "next";
import { Geist, Geist_Mono , Plus_Jakarta_Sans, Sora} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  subsets:['latin'],
  variable:"--font-sora"
})

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

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
    <html lang="pt-br">
      <body
        className={`${sora.variable} font-sans`} //${geistSans.variable} ${geistMono.variable} antialiased
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
