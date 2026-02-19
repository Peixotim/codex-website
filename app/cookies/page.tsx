'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Cookie, Settings2, Activity, Megaphone, ShieldCheck, ToggleRight } from 'lucide-react';
import React from 'react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const AnimatedSection = ({ children, delay = 0, id }: { children: React.ReactNode, delay?: number, id?: string }) => (
  <motion.div
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay }}
    variants={fadeInUp}
    className="mb-16 scroll-mt-32"
  >
    {children}
  </motion.div>
);

export default function CookiesPage() {
  const lastUpdated = "19 de Fevereiro de 2026"; 

  const tableOfContents = [
    { id: "o-que-sao", title: "01. O que são Cookies" },
    { id: "como-usamos", title: "02. Categorias de Uso" },
    { id: "terceiros", title: "03. Cookies de Terceiros" },
    { id: "controle", title: "04. O Seu Controle" },
  ];

  return (
    <main className="min-h-screen bg-[#000000] text-gray-300 pt-32 pb-40 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_80%_100%_at_50%_0%,#000_40%,transparent_100%)] pointer-events-none z-0"></div>
      <div className="absolute top-1/4 right-0 w-125 h-125 bg-[#0000FF]/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Voltar para o início
          </Link>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <aside className="hidden lg:flex flex-col w-72 shrink-0 sticky top-32 h-fit">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.div variants={fadeInUp} className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                <Cookie size={24} className="text-[#0000FF]" />
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-xl font-bold text-white mb-2 tracking-tight">Política de Cookies</motion.h2>
              <motion.p variants={fadeInUp} className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-8">
                Revisado em {lastUpdated}
              </motion.p>

              <nav className="flex flex-col gap-3 border-l border-white/10 pl-4">
                {tableOfContents.map((item, index) => (
                  <motion.a 
                    variants={fadeInUp}
                    key={index}
                    href={`#${item.id}`}
                    className="text-sm text-gray-500 hover:text-[#0000FF] transition-colors py-1 relative before:absolute before:-left-4.25 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-0 before:bg-[#0000FF] hover:before:h-full before:transition-all"
                  >
                    {item.title}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </aside>

          <div className="flex-1 max-w-3xl">
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-gray-300 uppercase tracking-widest mb-6">
                <Settings2 size={14} className="text-[#0000FF]" /> Rastreamento Inteligente
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter mb-6 leading-[1.1]">
                Transparência em <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-200 via-blue-400 to-[#0000FF]">cada clique.</span>
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Utilizamos cookies de forma estratégica para otimizar o tempo de carregamento do site, entender o que você busca e entregar a melhor experiência possível.
              </p>
            </motion.div>

            <div className="space-y-6">
              <AnimatedSection id="o-que-sao">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                  <span className="text-gray-600 font-black text-3xl">01.</span> A Tecnologia
                </h2>
                <p className="text-gray-400 font-light leading-relaxed text-lg">
                  Cookies são pequenos arquivos de texto armazenados no seu navegador. Eles funcionam como a &quot;memória de curto prazo&quot; do site. Sem eles, você teria que reconfigurar suas preferências ou fazer login toda vez que recarregasse uma de nossas páginas.
                </p>
              </AnimatedSection>

              <AnimatedSection id="como-usamos">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                  <span className="text-gray-600 font-black text-3xl">02.</span> Categorias de Uso
                </h2>
                
                <div className="grid grid-cols-1 gap-4">
                  
                  <div className="bg-[#050505] border border-white/10 p-6 md:p-8 rounded-4xl flex flex-col sm:flex-row gap-6 items-start group hover:border-white/20 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-300 shrink-0">
                      <ShieldCheck size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-white font-bold text-lg">Cookies Essenciais</h3>
                        <span className="text-xs font-bold px-2 py-1 rounded bg-white/10 text-white uppercase tracking-wider">Sempre Ativos</span>
                      </div>
                      <p className="text-gray-500 font-light leading-relaxed">
                        São a fundação do site. Garantem segurança, carregamento rápido via Next.js e previnem ataques maliciosos (CSRF). A infraestrutura não funciona sem eles.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#050505] border border-white/10 p-6 md:p-8 rounded-4xl flex flex-col sm:flex-row gap-6 items-start group hover:border-[#0000FF]/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#0000FF]/10 flex items-center justify-center text-[#0000FF] shrink-0">
                      <Activity size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-white font-bold text-lg">Análise e Performance</h3>
                        <ToggleRight size={24} className="text-[#0000FF]" />
                      </div>
                      <p className="text-gray-500 font-light leading-relaxed">
                        Coletam métricas anônimas (como tempo na página e taxa de rejeição). Usamos esses dados para refinar o neurodesign e deixar o site cada vez mais rápido.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#050505] border border-white/10 p-6 md:p-8 rounded-4xl flex flex-col sm:flex-row gap-6 items-start group hover:border-[#0000FF]/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#0000FF]/10 flex items-center justify-center text-[#0000FF] shrink-0">
                      <Megaphone size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-white font-bold text-lg">Marketing e Ads</h3>
                        <ToggleRight size={24} className="text-[#0000FF]" />
                      </div>
                      <p className="text-gray-500 font-light leading-relaxed">
                        Rastreiam a conversão das nossas campanhas de Tráfego Pago. Ajudam o Meta e o Google a entenderem que você se interessa pelo nosso conteúdo.
                      </p>
                    </div>
                  </div>

                </div>
              </AnimatedSection>

              <AnimatedSection id="terceiros">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                  <span className="text-gray-600 font-black text-3xl">03.</span> Ecossistemas de Terceiros
                </h2>
                <div className="text-gray-400 font-light leading-relaxed space-y-4 text-lg">
                  <p>
                    Como uma agência de performance, a Codex integra ferramentas avançadas no site (Pixel do Meta, Google Analytics 4, Tag Manager). Essas empresas podem definir cookies no seu dispositivo para medir a eficácia dos nossos anúncios fora do nosso domínio.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection id="controle">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                  <span className="text-gray-600 font-black text-3xl">04.</span> O Seu Controle
                </h2>
                
                <div className="relative overflow-hidden my-8 p-8 md:p-10 rounded-4xl bg-linear-to-br from-[#050505] to-[#0A0A0A] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-4">Gerenciamento no Navegador</h3>
                    <p className="text-gray-400 font-light leading-relaxed mb-6">
                      Você é dono da sua máquina. A qualquer momento, você pode limpar ou bloquear os cookies ajustando as configurações de privacidade do seu navegador (Chrome, Safari, Edge). 
                    </p>
                    <p className="text-gray-500 text-sm font-light">
                      *Atenção: Bloquear os <strong className="text-gray-300">Cookies Essenciais</strong> pode fazer com que partes da nossa infraestrutura (como formulários de conversão) deixem de funcionar corretamente.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4 text-gray-500">
                    <Cookie size={20} />
                    <span className="text-sm font-medium uppercase tracking-widest">Painel de Preferências</span>
                  </div>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}