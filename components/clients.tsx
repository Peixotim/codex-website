'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const partnersRow1 = [
  { id: 1, name: "Empresa 1", logo: "/logos/logo1.png" },
  { id: 2, name: "Empresa 2", logo: "/logos/logo2.png" },
  { id: 3, name: "Empresa 1", logo: "/logos/logo3.png" },
  { id: 4, name: "Empresa 2", logo: "/logos/logo4.png" },
  { id: 5, name: "Empresa 2", logo: "/logos/logo5.png" },
  { id: 6, name: "Empresa 2", logo: "/logos/logo6.png" },
  { id: 7, name: "Empresa 2", logo: "/logos/logo7.png" },
];

const partnersRow2 = [
  { id: 9, name: "Empresa 2", logo: "/logos/logo8.png" },
  { id: 10, name: "Empresa 1", logo: "/logos/logo9.png" },
  { id: 11, name: "Empresa 2", logo: "/logos/logo10.png" },
  { id: 12, name: "Empresa 2", logo: "/logos/logo11.png" },
  { id: 13, name: "Empresa 2", logo: "/logos/logo12.png" },
  { id: 14, name: "Empresa 2", logo: "/logos/logo13.png" },
  { id: 15, name: "Empresa 2", logo: "/logos/logo14.png" },
];

export default function Clients() {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden rounded-[3rem] md:rounded-[4rem] mx-4 md:mx-6 my-12 shadow-sm border border-gray-100">
      
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        /* Animação contínua e linear para evitar trancos */
        .animate-scroll-left { 
          animation: scroll-left 40s linear infinite; 
          display: flex;
          width: max-content;
        }
        .animate-scroll-right { 
          animation: scroll-right 40s linear infinite; 
          display: flex;
          width: max-content;
        }
      `}</style>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-6 shadow-sm">
            <ShieldCheck size={14} />
            Evolução e Parceria
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Marcas que alcançaram <br className="hidden md:block"/> outro nível com a <span className="text-blue-600">Codex</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        
        <div className="animate-scroll-left gap-6 mb-8 px-3">
          {[...partnersRow1, ...partnersRow1, ...partnersRow1, ...partnersRow1].map((partner, index) => (
            <div 
              key={index}
              className="shrink-0 w-48 md:w-64 h-24 md:h-28 bg-[#FDFDFD] border border-gray-100 rounded-3xl flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-100 group mx-3"
            >
              <div className="relative w-28 md:w-36 h-10 md:h-12 transition-transform duration-500 group-hover:scale-110">
                 <Image 
                   src={partner.logo} 
                   alt={partner.name}
                   fill
                   className="object-contain"
                   sizes="(max-width: 768px) 112px, 144px"
                 />
              </div>
            </div>
          ))}
        </div>

        <div className="animate-scroll-right gap-6 px-3">
          {[...partnersRow2, ...partnersRow2, ...partnersRow2, ...partnersRow2].map((partner, index) => (
            <div 
              key={index}
              className="shrink-0 w-48 md:w-64 h-24 md:h-28 bg-[#FDFDFD] border border-gray-100 rounded-3xl flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-100 group mx-3"
            >
              <div className="relative w-28 md:w-36 h-10 md:h-12 transition-transform duration-500 group-hover:scale-110">
                 <Image 
                   src={partner.logo} 
                   alt={partner.name}
                   fill
                   className="object-contain"
                   sizes="(max-width: 768px) 112px, 144px"
                 />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}