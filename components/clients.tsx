'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const partnersRow1 = [
  { id: 1, name: "Empresa 1", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=128&fit=crop&auto=format" },
  { id: 2, name: "Empresa 2", logo: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=128&h=128&fit=crop&auto=format" },
  { id: 3, name: "Empresa 3", logo: "https://images.unsplash.com/photo-1611162618071-b39a2ec055ce?w=128&h=128&fit=crop&auto=format" },
  { id: 4, name: "Empresa 4", logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=128&h=128&fit=crop&auto=format" },
  { id: 5, name: "Empresa 5", logo: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=128&h=128&fit=crop&auto=format" },
];

const partnersRow2 = [
  { id: 6, name: "Empresa 6", logo: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=128&h=128&fit=crop&auto=format" },
  { id: 7, name: "Empresa 7", logo: "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=128&h=128&fit=crop&auto=format" },
  { id: 8, name: "Empresa 8", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=128&fit=crop&auto=format" },
  { id: 9, name: "Empresa 9", logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=128&h=128&fit=crop&auto=format" },
  { id: 10, name: "Empresa 10", logo: "https://images.unsplash.com/photo-1611162618071-b39a2ec055ce?w=128&h=128&fit=crop&auto=format" },
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
        
        /* Removido o efeito de pause/slow no hover para garantir a continuidade absoluta */
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
              className="shrink-0 w-44 md:w-60 h-24 md:h-28 bg-[#FDFDFD] border border-gray-100 rounded-3xl flex items-center justify-center p-8 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-100 group mx-3"
            >
              <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
                 <Image 
                   src={partner.logo} 
                   alt={partner.name}
                   fill
                   className="object-contain"
                 />
              </div>
            </div>
          ))}
        </div>

        <div className="animate-scroll-right gap-6 px-3">
          {[...partnersRow2, ...partnersRow2, ...partnersRow2, ...partnersRow2].map((partner, index) => (
            <div 
              key={index}
              className="shrink-0 w-44 md:w-60 h-24 md:h-28 bg-[#FDFDFD] border border-gray-100 rounded-3xl flex items-center justify-center p-8 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-100 group mx-3"
            >
              <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
                 <Image 
                   src={partner.logo} 
                   alt={partner.name}
                   fill
                   className="object-contain"
                 />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}