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
    <section className="relative flex flex-col items-center justify-start overflow-hidden bg-[#000000] pt-36 pb-40">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_10%,#000_60%,transparent_100%)] z-0 pointer-events-none"></div>
    
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-150 md:w-225 h-125 bg-[#0000FF] rounded-full blur-[140px] opacity-20 pointer-events-none animate-pulse-slow z-0"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center w-full">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto w-full flex flex-col items-center"
        >
          
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <span className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-300 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,255,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4D4DFF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0000FF]"></span>
              </span>
              Evolução, Lucro e Crescimento
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-[5rem] font-extrabold text-[#FFFFFF] tracking-tight leading-[1.05] mb-8"
          >
            Vamos construir algo <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-br from-[#9999FF] via-[#4D4DFF] to-[#0000FF] drop-shadow-[0_0_20px_rgba(0,0,255,0.4)]">
              realmente grande?
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed px-4"
          >
            Sua marca pode ir mais longe. Criamos estratégias de educação e marketing que conectam presença online e conversão em um único fluxo.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto px-4 z-20 mb-16 md:mb-24"
          >
            <a
              href="https://wa.me/5531989774224"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2 bg-[#0000FF] text-[#FFFFFF] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1 w-full sm:w-auto"
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

          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center gap-2 text-gray-500 z-20 mb-12"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-500">Role para explorar</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
              <ChevronDown size={20} className="text-[#0000FF]/70" />
            </motion.div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
}