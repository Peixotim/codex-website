'use client';

import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-md py-4 shadow-lg shadow-black/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        <Link href="/" className="flex items-center gap-1">
          <Image
              src="/codex-no-background-white.png"
              alt="Logo Codex Educação e Marketing"
              width={600}
              height={600}
              priority
              className="w-auto h-10 md:h-12 object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link 
            href="/#servicos" 
            className="text-sm font-medium text-gray-300 px-4 py-2.5 rounded-xl transition-all duration-300 hover:text-white hover:bg-white/5"
          >
            Serviços
          </Link>
          <Link 
            href="/#sobre" 
            className="text-sm font-medium text-gray-300 px-4 py-2.5 rounded-xl transition-all duration-300 hover:text-white hover:bg-white/5"
          >
            Sobre
          </Link>
          <Link 
            href="/contato" 
            className="text-sm font-medium text-gray-300 px-4 py-2.5 rounded-xl transition-all duration-300 hover:text-white hover:bg-white/5"
          >
            Contato
          </Link>
        </nav>

        <a
          href="https://wa.me/5531989774224"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#0000FF] text-[#FFFFFF] px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-0.10"
        >
          <MessageCircle size={18} />
          Falar no WhatsApp
        </a>

        <button
          className="md:hidden text-[#FFFFFF] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#000000]/95 backdrop-blur-xl border-t border-white/10 transition-all duration-300 overflow-hidden flex flex-col items-center ${
          isMobileMenuOpen ? 'max-h-125 py-8 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <Link 
          href="/#servicos" 
          className="text-gray-300 text-lg font-medium py-3 w-full text-center hover:text-white hover:bg-white/5 transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Serviços
        </Link>
        <Link 
          href="/#sobre" 
          className="text-gray-300 text-lg font-medium py-3 w-full text-center hover:text-white hover:bg-white/5 transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Sobre
        </Link>
        <Link 
          href="/contato" 
          className="text-gray-300 text-lg font-medium py-3 w-full text-center hover:text-white hover:bg-white/5 transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contato
        </Link>
        
        <a
          href="https://wa.me/5531989774224"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center gap-2 bg-[#0000FF] text-[#FFFFFF] px-8 py-3 rounded-full font-medium active:scale-95 transition-all"
        >
          <MessageCircle size={20} />
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}