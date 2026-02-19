import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Analytics } from "@vercel/analytics/next";

const sora = Sora({ subsets: ['latin'], variable: "--font-sora" });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: "--font-jakarta" });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.codexmkt.com'),
  title: {
    default: "Codex | Ecossistemas Digitais e Marketing de Alta Performance",
    template: "%s | Codex Educação e Marketing"
  },
  description: "Transformando empresas através de ecossistemas digitais, automação de WhatsApp, tráfego pago e landing pages de altíssima conversão.",
  keywords: [
    "Marketing Digital", 
    "Automação de WhatsApp", 
    "Tráfego Pago", 
    "Lançamentos",
    "Gestão de Tráfego",
    "Criação de Landing Pages", 
    "Next.js", 
    "Consultoria de Marketing", 
    "Codex"
  ],
  authors: [{ name: "Codex Team" }],
  creator: "Codex",
  
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.codexmkt.com",
    title: "Codex | Marketing de Elite e Máquinas de Vendas",
    description: "Não entregamos tarefas. Construímos negócios digitais. Escala, previsibilidade e lucro para a sua marca.",
    siteName: "Codex Educação e Marketing",
    images: [
      {
        url: "/codex-og.png",
        width: 1200,
        height: 630,
        alt: "Codex Educação e Marketing"
      }
    ]
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Codex | Marketing de Elite",
    description: "Ecossistemas digitais de alta performance para escalar sua empresa.",
    images: ["/og-image.jpg"],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth" style={{ scrollPaddingTop: '80px' }}> 
      <body className={`${jakarta.variable} ${sora.variable} font-sans antialiased bg-[#000000] text-white`}>
        <Header/>
        {children}
        <Analytics />
      </body>
    </html>
  );
}