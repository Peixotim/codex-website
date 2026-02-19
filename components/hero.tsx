'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } 
    },
  };

  return (
    // Removido o min-h-[95vh] fixo para deixar o conteúdo ditar a altura de forma mais orgânica,
    // e aumentado o pb-40 para o mockup respirar antes da seção branca (Sobre) subir.
    <section className="relative flex flex-col items-center justify-start overflow-hidden bg-[#000000] pt-36 pb-40">
      
      {/* BACKGROUND ARCHITECTURAL GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,#000_60%,transparent_100%)] z-0 pointer-events-none"></div>
    
      {/* BRILHO CENTRAL (Ajustado para não ofuscar o texto) */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[500px] bg-[#0000FF] rounded-full blur-[140px] opacity-20 pointer-events-none animate-pulse-slow z-0"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center w-full">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto w-full flex flex-col items-center"
        >
          {/* TAGLINE COM PULSING DOT */}
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <span className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-300 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,255,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4D4DFF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0000FF]"></span>
              </span>
              Evolução, Lucro e Crescimento
            </span>
          </motion.div>

          {/* TÍTULO (Gradiente mais claro e legível) */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-[5rem] font-extrabold text-[#FFFFFF] tracking-tight leading-[1.05] mb-8"
          >
            Vamos construir algo <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#9999FF] via-[#4D4DFF] to-[#0000FF] drop-shadow-[0_0_20px_rgba(0,0,255,0.4)]">
              realmente grande?
            </span>
          </motion.h1>

          {/* SUBTÍTULO */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed px-4"
          >
            Sua marca pode ir mais longe. Criamos estratégias de educação e marketing que conectam presença online e conversão em um único fluxo.
          </motion.p>

          {/* BOTÕES DE AÇÃO */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto px-4 z-20 mb-16 md:mb-24"
          >
            <a
              href="https://wa.me/5531989774224"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2 bg-[#0000FF] text-[#FFFFFF] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#3333FF] shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_0_30px_-5px_rgba(0,0,255,0.6)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_0_40px_-5px_rgba(0,0,255,0.8)] hover:-translate-y-1 w-full sm:w-auto"
            >
              Falar com um Especialista
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <Link
              href="#servicos"
              className="flex items-center justify-center gap-2 bg-transparent text-[#FFFFFF] border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:border-white/50 hover:bg-white/5 hover:-translate-y-1 w-full sm:w-auto backdrop-blur-sm"
            >
              Conhecer Serviços
            </Link>
          </motion.div>

          {/* INDICADOR DE SCROLL (Movido para cima do Dashboard) */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center gap-2 text-gray-500 z-20 mb-12"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-500">Role para explorar</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
              <ChevronDown size={20} className="text-[#0000FF]/70" />
            </motion.div>
          </motion.div>

          {/* DASHBOARD MOCKUP PREMIUM (O grande diferencial) */}
<motion.div 
            variants={itemVariants}
            className="relative w-full max-w-5xl mx-auto h-72 sm:h-[26rem] md:h-[30rem] border border-white/10 rounded-t-3xl bg-[#050505]/80 backdrop-blur-2xl overflow-hidden shadow-[0_-20px_80px_-20px_rgba(0,0,255,0.25)]"
          >
            {/* Top Bar (Navegador/App) - Mais detalhada */}
            <div className="flex items-center justify-between px-6 h-14 border-b border-white/5 bg-white/[0.02]">
              <div className="flex gap-2.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-white/10"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-white/10"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-white/10"></div>
              </div>
              {/* Barra de pesquisa/URL simulada */}
              <div className="hidden sm:block w-64 h-7 bg-white/5 rounded-md border border-white/5"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0000FF] to-blue-400 opacity-80"></div>
            </div>

            {/* Corpo do Dashboard */}
            <div className="flex h-full relative z-10">
              
              {/* Sidebar Simulada (Navegação) */}
              <div className="hidden md:flex flex-col gap-4 w-56 h-full border-r border-white/5 p-6 bg-white/[0.01]">
                <div className="w-full h-8 rounded-lg bg-[#0000FF]/10 border border-[#0000FF]/20 flex items-center px-3 gap-3">
                   <div className="w-4 h-4 rounded-sm bg-[#0000FF]/50"></div>
                   <div className="w-20 h-2 rounded-full bg-[#0000FF]/80"></div>
                </div>
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-full h-8 rounded-lg flex items-center px-3 gap-3 hover:bg-white/5 transition-colors">
                     <div className="w-4 h-4 rounded-sm bg-white/10"></div>
                     <div className="w-16 h-2 rounded-full bg-white/20"></div>
                  </div>
                ))}
              </div>
              
              {/* Área Principal do Software */}
              <div className="flex-1 flex flex-col gap-6 p-6 md:p-8">
                
                {/* Top Metrics Cards (Simulando faturamento/leads) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-24 relative overflow-hidden group hover:border-white/10 transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-white/20"></div>
                        </div>
                        {i === 0 && <span className="text-[10px] font-bold text-[#0000FF] bg-[#0000FF]/10 px-2 py-1 rounded-full">+34%</span>}
                      </div>
                      <div className="w-2/3 h-3 rounded-full bg-white/20 mt-auto"></div>
                      <div className="w-1/2 h-2 rounded-full bg-white/10 mt-2"></div>
                      {/* Glow no card principal */}
                      {i === 0 && <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#0000FF] rounded-full blur-2xl opacity-20"></div>}
                    </div>
                  ))}
                </div>

                {/* Main Chart Area (Gráfico Vetorial Premium) */}
                <div className="flex-1 border border-white/5 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent relative overflow-hidden flex flex-col">
                  {/* Linhas de grade horizontais do gráfico */}
                  <div className="absolute inset-0 flex flex-col justify-between py-8 px-0 pointer-events-none opacity-20">
                    <div className="w-full border-b border-white/10 border-dashed"></div>
                    <div className="w-full border-b border-white/10 border-dashed"></div>
                    <div className="w-full border-b border-white/10 border-dashed"></div>
                  </div>
                  
                  {/* Gráfico SVG Curvado e Brilhante */}
                  <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0000FF" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#0000FF" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Preenchimento sob a linha */}
                    <path d="M0,100 C20,80 40,85 60,40 C80,-5 90,30 100,10 L100,100 L0,100 Z" fill="url(#chartGradient)" />
                    {/* Linha do gráfico */}
                    <path d="M0,100 C20,80 40,85 60,40 C80,-5 90,30 100,10" fill="none" stroke="#0000FF" strokeWidth="1.5" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(0,0,255,0.8)]" />
                  </svg>

                  {/* Ponto de destaque no topo do gráfico */}
                  <div className="absolute top-[10%] right-[5%] w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)] border-2 border-[#0000FF]"></div>
                  {/* Tooltip flutuante no gráfico */}
                  <div className="absolute top-[2%] right-[10%] bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg">
                     <div className="w-12 h-2 rounded-full bg-white/80 mb-1"></div>
                     <div className="w-8 h-1.5 rounded-full bg-white/40"></div>
                  </div>
                </div>

              </div>
            </div>

            {/* Fade de Fusão Inferior Mais Intenso */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/90 to-transparent z-20 pointer-events-none"></div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}