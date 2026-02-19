'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Scale, FileText, ShieldAlert, CheckCircle2 } from 'lucide-react';
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

export default function TermsPage() {
  const lastUpdated = "19 de Fevereiro de 2026"; 

  const tableOfContents = [
    { id: "aceitacao", title: "01. Aceitação dos Termos" },
    { id: "escopo", title: "02. Escopo dos Serviços" },
    { id: "pagamentos", title: "03. Pagamentos e Cancelamento" },
    { id: "propriedade", title: "04. Propriedade Intelectual" },
  ];

  return (
    <main className="min-h-screen bg-[#000000] text-gray-300 pt-32 pb-40 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_100%_at_50%_0%,#000_40%,transparent_100%)] pointer-events-none z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-[#0000FF]/15 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Voltar para o início
          </Link>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <aside className="hidden lg:flex flex-col w-72 shrink-0 sticky top-32 h-fit">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.div variants={fadeInUp} className="w-14 h-14 rounded-2xl bg-[#0000FF]/10 border border-[#0000FF]/20 flex items-center justify-center text-[#0000FF] mb-8 shadow-[0_0_30px_rgba(0,0,255,0.15)]">
                <Scale size={24} />
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-xl font-bold text-white mb-2 tracking-tight">Termos de Serviço</motion.h2>
              <motion.p variants={fadeInUp} className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-8">
                Atualizado em {lastUpdated}
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
              <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter mb-6 leading-[1.1]">
                Nossas regras <br /> de <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-[#0000FF]">excelência.</span>
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                A transparência é a base de grandes ecossistemas. Leia atentamente as condições que regem a nossa infraestrutura e parceria.
              </p>
            </motion.div>

            <div className="space-y-4">
              
              <AnimatedSection id="aceitacao">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                  <span className="text-[#0000FF] font-black text-3xl">01.</span> Aceitação dos Termos
                </h2>
                <div className="text-gray-400 font-light leading-relaxed space-y-4 text-lg">
                  <p>
                    Ao acessar, contratar ou utilizar qualquer serviço fornecido pela <strong className="text-white font-medium">Codex Educação e Marketing</strong>, você concorda irrevogavelmente em cumprir e ser regido por estes Termos de Serviço.
                  </p>
                  <p>
                    Se você estiver aceitando estes termos em nome de uma empresa ou outra pessoa jurídica, você declara que tem autoridade legal para vincular tal entidade a estas diretrizes operacionais.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection id="escopo">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                  <span className="text-[#0000FF] font-black text-3xl">02.</span> Escopo dos Serviços
                </h2>
                <div className="text-gray-400 font-light leading-relaxed space-y-4 text-lg">
                  <p>
                    A Codex atua como provedora de infraestrutura digital de alta conversão, automação inteligente e estratégias de captação de tráfego pago. Nosso compromisso inegociável é com a excelência técnica.
                  </p>
                  <ul className="space-y-4 mt-6">
                    <li className="flex items-start gap-3 bg-white/2 border border-white/5 p-4 rounded-2xl">
                      <CheckCircle2 size={24} className="text-[#0000FF] shrink-0" />
                      <span><strong className="text-white font-medium">Natureza Variável:</strong> O Cliente reconhece que o marketing digital envolve leilões em tempo real. Não garantimos resultados financeiros exatos (ROI/ROAS fixos), mas arquitetamos o melhor cenário estatístico para o sucesso.</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/2 border border-white/5 p-4 rounded-2xl">
                      <CheckCircle2 size={24} className="text-[#0000FF] shrink-0" />
                      <span><strong className="text-white font-medium">Plataformas de Terceiros:</strong> Não nos responsabilizamos por bloqueios de contas de anúncios originados pelas políticas do Meta ou Google, nem por instabilidades nas APIs de WhatsApp.</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="relative overflow-hidden my-16 p-8 md:p-10 rounded-[2.5rem] bg-[#050505] border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,255,0.2)] group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-[#0000FF]/20 to-transparent rounded-full blur-3xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-[#0000FF] flex items-center justify-center text-white shrink-0 shadow-[0_0_30px_rgba(0,0,255,0.4)]">
                      <ShieldAlert size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Política de Privacidade e LGPD</h3>
                      <p className="text-gray-400 font-light leading-relaxed">
                        Tratamos os dados do seu negócio e dos seus clientes (leads) com nível de <strong className="text-gray-200">sigilo empresarial absoluto</strong>. A Codex sob nenhuma hipótese comercializa, aluga ou compartilha suas listas de contatos com terceiros. Sua base é o seu maior ativo, e nós a protegemos.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection id="pagamentos">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                  <span className="text-[#0000FF] font-black text-3xl">03.</span> Pagamentos e Cancelamento
                </h2>
                <div className="text-gray-400 font-light leading-relaxed space-y-4 text-lg">
                  <p>
                    A estruturação de ecossistemas demanda alocação imediata de nossa equipe técnica e criativa. Por isso, operamos sob regras claras de contratação:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-500 marker:text-[#0000FF]">
                    <li>Os orçamentos para tráfego (Ads) são debitados diretamente nos cartões do Cliente, não passando pelo caixa da Codex.</li>
                    <li>Projetos de setup possuem taxa inicial não reembolsável após a assinatura e início do escopo.</li>
                    <li>Consultorias contínuas requerem notificação de cancelamento com 30 dias de antecedência.</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection id="propriedade">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                  <span className="text-[#0000FF] font-black text-3xl">04.</span> Propriedade Intelectual
                </h2>
                <div className="text-gray-400 font-light leading-relaxed space-y-4 text-lg">
                  <p>
                    A arquitetura é feita para você. Após a quitação integral do projeto, toda a propriedade intelectual das Landing Pages, cópias e ativos visuais criados sob demanda passam a pertencer inteiramente à sua marca.
                  </p>
                  <p>
                    A Codex reserva-se apenas o direito de utilizar métricas agregadas e layouts como cases de sucesso anônimos em nosso portfólio de engenharia de conversão.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4 text-gray-500">
                    <FileText size={20} />
                    <span className="text-sm font-medium uppercase tracking-widest">Documento Oficial</span>
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