'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, MessageCircle, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020202] pt-24 pb-12 border-t border-white/5">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-[#0000FF]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
          

          <div className="flex flex-col gap-8">
            <Link href="/" className="w-fit transition-opacity hover:opacity-80">
              <Image 
                src="/codex-no-background-white.png" 
                alt="Codex Logo" 
                width={150} 
                height={50} 
                className="w-auto h-9 object-contain"
              />
            </Link>
            <p className="text-gray-500 text-base leading-relaxed font-light">
              Elevando marcas através de ecossistemas digitais de alta performance e educação estratégica.
            </p>

            <div className="flex gap-4">
              {[
                { icon: <Instagram size={20} />, href: "https://www.instagram.com/codexmktdigitall/" },
                { icon: <MessageCircle size={20} />, href: "https://wa.me/5531989774224" }
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:pl-12">
            <h4 className="text-white font-semibold mb-8 text-sm uppercase tracking-widest">
              Explorar
            </h4>
            <ul className="flex flex-col gap-4">
              {['Serviços', 'Sobre', 'Contato', 'Metodologia'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-gray-500 hover:text-white transition-colors text-sm flex items-center group w-fit">
                    {link}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-1 text-[#0000FF]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-8 text-sm uppercase tracking-widest">
              Especialidades
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                'Automação de WhatsApp',
                'Tráfego Pago & Ads',
                'Páginas de Alta Conversão',
                'Consultoria de Marketing'
              ].map((service) => (
                <li key={service} className="text-gray-500 text-sm font-light hover:text-gray-300 transition-colors cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-8 text-sm uppercase tracking-widest">
              Conectar
            </h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#0000FF] shrink-0 border border-white/5">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1">E-mail Comercial</span>
                  <Link href="mailto:contato@codexmkt.com" className="text-gray-400 hover:text-white transition-colors text-sm">contato@codexmkt.com</Link>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#0000FF] shrink-0 border border-white/5">
                  <MessageCircle size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1">WhatsApp Oficial</span>
                  <Link href="https://wa.me/5531989774224" className="text-gray-400 hover:text-white transition-colors text-sm">+55 31 98977-4224</Link>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-gray-600 text-xs font-medium uppercase tracking-tight">
              © {currentYear} Codex Educação & Marketing.
            </p>
            <div className="h-4 w-px bg-white/10 hidden md:block"></div>
            <p className="text-gray-600 text-[10px] uppercase tracking-widest">
              Feito para quem busca o extraordinário.
            </p>
          </div>
          
          <div className="flex gap-8 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            <Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
            <Link href="/termos" className="hover:text-white transition-colors">Termos</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}