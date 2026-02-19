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
      transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } 
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#000000] pt-32 pb-36">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>
    
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-[#0000FF] rounded-full blur-[150px] opacity-20 pointer-events-none animate-pulse-slow z-0"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <span className="px-5 py-2 rounded-full border border-white/10 bg-white/3 text-sm font-medium text-gray-300 backdrop-blur-md shadow-lg shadow-black/50">
              Evolução, Lucro e Crescimento
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#FFFFFF] tracking-tight leading-[1.1] mb-8"
          >
            Vamos construir algo <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0000FF] via-[#4D4DFF] to-blue-300">
              realmente grande?
            </span>
          </motion.h1>


          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4"
          >
            Sua marca pode ir mais longe. Criamos estratégias de educação e marketing que conectam presença online e conversão em um único fluxo.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto px-4"
          >
            <a
              href="https://wa.me/5531989774224"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2 bg-[#0000FF] text-[#FFFFFF] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#3333FF] hover:shadow-[0_0_30px_-5px_rgba(0,0,255,0.6)] hover:-translate-y-1 w-full sm:w-auto"
            >
              Falar com um Especialista
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <Link
              href="#servicos"
              className="flex items-center justify-center gap-2 bg-transparent text-[#FFFFFF] border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:border-white/50 hover:bg-white/5 hover:-translate-y-1 w-full sm:w-auto"
            >
              Conhecer Serviços
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-500"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-400">Role para explorar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-[#0000FF]" />
        </motion.div>
      </motion.div>
    </section>
  );
}