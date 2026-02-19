'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, EyeOff, Database, Server, Fingerprint } from 'lucide-react';
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

export default function PrivacyPage() {
  const lastUpdated = "19 de Fevereiro de 2026"; 

  const tableOfContents = [
    { id: "coleta", title: "01. Coleta de Dados" },
    { id: "uso", title: "02. Uso das Informações" },
    { id: "protecao", title: "03. Proteção e Sigilo" },
    { id: "direitos", title: "04. Seus Direitos (LGPD)" },
  ];

  return (
    <main className="min-h-screen bg-[#000000] text-gray-300 pt-32 pb-40 relative overflow-hidden">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_80%_100%_at_50%_0%,#000_40%,transparent_100%)] pointer-events-none z-0"></div>
      
      <div className="absolute top-[-10%] left-[-10%] w-150 h-150 bg-[#0000FF]/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

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
                <ShieldCheck size={24} className="text-[#0000FF]" />
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-xl font-bold text-white mb-2 tracking-tight">Privacidade</motion.h2>
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
                <Lock size={14} className="text-[#0000FF]" /> Transparência Total
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter mb-6 leading-[1.1]">
                Os seus dados são <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-200 via-gray-400 to-gray-500">inegociáveis.</span>
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Nós construímos máquinas de vendas, não empresas de corretagem de dados. Entenda exatamente como protegemos a sua operação e os seus clientes.
              </p>
            </motion.div>

            <div className="space-y-6">
              
              <AnimatedSection id="coleta">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                  <span className="text-gray-600 font-black text-3xl">01.</span> Coleta de Dados
                </h2>
                <p className="text-gray-400 font-light leading-relaxed mb-8 text-lg">
                  Coletamos apenas o estritamente necessário para que a nossa arquitetura de marketing funcione com máxima performance.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#050505] border border-white/10 p-6 rounded-2xl flex flex-col gap-4 group hover:border-[#0000FF]/30 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 group-hover:text-[#0000FF] transition-colors">
                      <Fingerprint size={18} />
                    </div>
                    <h3 className="text-white font-bold">Dados Fornecidos</h3>
                    <p className="text-gray-500 text-sm font-light">Informações que você nos envia diretamente, como nome, e-mail, telefone e detalhes da empresa em formulários de contato.</p>
                  </div>
                  <div className="bg-[#050505] border border-white/10 p-6 rounded-2xl flex flex-col gap-4 group hover:border-[#0000FF]/30 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 group-hover:text-[#0000FF] transition-colors">
                      <Server size={18} />
                    </div>
                    <h3 className="text-white font-bold">Dados de Navegação</h3>
                    <p className="text-gray-500 text-sm font-light">Métricas anônimas coletadas (como cookies e IP) para otimização de performance das páginas e campanhas de anúncios.</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection id="uso">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                  <span className="text-gray-600 font-black text-3xl">02.</span> Uso das Informações
                </h2>
                <div className="text-gray-400 font-light leading-relaxed space-y-4 text-lg">
                  <p>
                    O único propósito de armazenarmos qualquer dado é <strong>melhorar os resultados da sua empresa</strong>. Utilizamos as informações para:
                  </p>
                  <ul className="space-y-3 mt-6">
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#0000FF]"></div> Estruturar e calibrar campanhas de tráfego pago (Pixel/API).</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#0000FF]"></div> Personalizar a experiência de automação de WhatsApp.</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#0000FF]"></div> Enviar propostas comerciais, faturamentos e atualizações.</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection id="protecao">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                  <span className="text-gray-600 font-black text-3xl">03.</span> Proteção e Sigilo
                </h2>
                
                <div className="relative overflow-hidden my-8 p-8 md:p-10 rounded-4xl bg-linear-to-br from-[#050505] to-[#0A0A0A] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-size-[1rem_1rem]"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#0000FF]/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#0000FF]/20 transition-colors duration-700"></div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 backdrop-blur-md relative">
                      <div className="absolute inset-0 rounded-2xl border border-[#0000FF]/50 animate-pulse"></div>
                      <Database size={28} className="text-[#0000FF]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Infraestrutura Blindada</h3>
                      <p className="text-gray-400 font-light leading-relaxed">
                        Nós não brincamos com segurança. Aplicamos protocolos rigorosos para evitar acessos não autorizados. Seus dados e a base de leads da sua empresa são confidenciais. <strong>Nós nunca venderemos suas listas.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection id="direitos">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                  <span className="text-gray-600 font-black text-3xl">04.</span> Seus Direitos (LGPD)
                </h2>
                <div className="text-gray-400 font-light leading-relaxed space-y-4 text-lg">
                  <p>
                    Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você possui controle total sobre o seu rastro digital em nossa infraestrutura. A qualquer momento, você pode solicitar:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {['Acesso aos dados coletados', 'Correção de informações', 'Exclusão completa da base', 'Revogação de consentimento'].map((direito, idx) => (
                      <div key={idx} className="bg-white/2 border border-white/5 px-4 py-3 rounded-xl text-sm text-gray-300 flex items-center gap-3">
                        <EyeOff size={16} className="text-[#0000FF]" /> {direito}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4 text-gray-500">
                    <ShieldCheck size={20} />
                    <span className="text-sm font-medium uppercase tracking-widest">Canal de Privacidade</span>
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