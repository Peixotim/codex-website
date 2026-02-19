'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Smartphone, LineChart, Globe, Zap, Target, Rocket,Layers } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    icon: <Smartphone size={32} strokeWidth={1.5} />,
    tag: "Recuperação & Escala",
    title: "Funis de Automação & WhatsApp",
    shortDesc: "Transforme leads em alunos e clientes fiéis com inteligência artificial e jornadas de compra automatizadas.",
    valueProp: "Otimizamos seu tempo e aumentamos sua margem de lucro. Criamos funis que engajam, qualificam e vendem 24h por dia, sem depender de esforço manual constante.",
    features: [
      { title: "Recuperação de Vendas", desc: "Fluxos inteligentes para resgate de carrinhos, boletos e PIX pendentes." },
      { title: "Triagem Automatizada", desc: "IA para qualificar o lead e entregar apenas os clientes 'quentes' para o seu comercial." },
      { title: "Escala em Lançamentos", desc: "Distribuição de conteúdo e lembretes estratégicos para maximizar o comparecimento." }
    ],
    metric: "+40%",
    metricLabel: "Em conversão de leads"
  },
  {
    id: 2,
    icon: <LineChart size={32} strokeWidth={1.5} />,
    tag: "Performance",
    title: "Tráfego Pago & Captação",
    shortDesc: "Domine o leilão com campanhas agressivas focadas em custo por lead baixo e alta taxa de conversão.",
    valueProp: "Não compramos apenas cliques, compramos dados e ROI. Encontramos o seu comprador ideal no Meta, Google e TikTok com segmentação de elite.",
    features: [
      { title: "Gestão de Lançamentos", desc: "Captação massiva de leads para eventos com foco em escala e baixo custo." },
      { title: "Escala no Perpétuo", desc: "Campanhas contínuas otimizadas para gerar lucro consistente todos os dias." },
      { title: "Data Analytics", desc: "Pixel, API de Conversão e Tracking avançado para o algoritmo trabalhar para você." }
    ],
    metric: "3.5x",
    metricLabel: "Média de ROAS atingido"
  },
  {
    id: 3,
    icon: <Globe size={32} strokeWidth={1.5} />,
    tag: "Alta Conversão",
    title: "Páginas de Vendas & Infra",
    shortDesc: "Landing pages de alto padrão desenvolvidas com neurodesign para guiar o usuário até o checkout.",
    valueProp: "A sua página é a sua vitrine de luxo. Criamos ecossistemas que carregam em milissegundos e elevam a percepção de valor do seu produto digital.",
    features: [
      { title: "Neurodesign de Vendas", desc: "Layouts que aplicam gatilhos mentais visuais para aumentar a taxa de conversão." },
      { title: "Tecnologia Next.js", desc: "Performance extrema: sites ultrarrápidos que reduzem a fuga de leads." },
      { title: "Integração Full-Stack", desc: "Conexão direta com checkouts (Kiwify, Hotmart) e sistemas de CRM." }
    ],
    metric: "-85%",
    metricLabel: "Taxa de rejeição por lentidão"
  },
  {
    id: 4,
    icon: <Zap size={32} strokeWidth={1.5} />,
    tag: "Persuasão",
    title: "Copywriting & Estratégia",
    shortDesc: "Textos que vendem sem parecer que estão vendendo. Comunicação assertiva para quebrar qualquer objeção.",
    valueProp: "Palavras certas geram faturamento. Criamos toda a narrativa do seu negócio para criar desejo imediato e transformar estranhos em advogados da marca.",
    features: [
      { title: "Narrativas de Lançamento", desc: "VSLs, CPLs e e-mails desenhados para construir antecipação e pico de vendas." },
      { title: "Copy para Anúncios", desc: "Criativos impossíveis de ignorar, focados no clique e na curiosidade do lead." },
      { title: "Posicionamento de Autoridade", desc: "Ajuste na comunicação para te tornar o número 1 no seu nicho de atuação." }
    ],
    metric: "2x",
    metricLabel: "Aumento em CTR de anúncios"
  },
  {
    id: 5,
    icon: <Rocket size={32} strokeWidth={1.5} />,
    tag: "Audiovisual",
    title: "Vibe & Vídeos que Vendem",
    shortDesc: "Edição dinâmica e cinematográfica para Reels, VSLs e anúncios que retêm a atenção até o último segundo.",
    valueProp: "Em um mundo de distrações, a atenção é a moeda mais cara. Entregamos vídeos com alto valor de produção para o seu produto brilhar na tela.",
    features: [
      { title: "Edição de Alto Impacto", desc: "Ritmo frenético e elementos visuais que aumentam drasticamente o tempo de retenção." },
      { title: "Vídeos de Vendas (VSL)", desc: "Produção técnica focada na estrutura de vendas: Gancho, História e Oferta." },
      { title: "Ads Criativos", desc: "Vídeos curtos desenhados especificamente para converter no Meta e TikTok." }
    ],
    metric: "+60%",
    metricLabel: "Retenção de visualização"
  },
  {
    id: 6,
    icon: <Layers size={32} strokeWidth={1.5} />,
    tag: "Premium",
    title: "Design & Social Media de Elite",
    shortDesc: "Design System completo e gestão de redes sociais focado em autoridade e presença de mercado.",
    valueProp: "Design não é apenas estética, é confiança. Transformamos o visual da sua marca para que ela respire profissionalismo e alto ticket.",
    features: [
      { title: "Identidade Visual SaaS", desc: "Estética minimalista e premium aplicada em todos os seus pontos de contato." },
      { title: "Gestão Estratégica", desc: "Planejamento de conteúdo que educa o público e prepara para a venda." },
      { title: "Social Proof Design", desc: "Organização visual de depoimentos e resultados para gerar autoridade imediata." }
    ],
    metric: "10/10",
    metricLabel: "Nível de percepção de marca"
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedService]);

  return (
    <section id="servicos" className="relative bg-[#000000] pt-20 pb-40 overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-[#0000FF]/10 blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-gray-300 mb-6">
            <Zap size={16} className="text-[#0000FF]" /> Nossas Especialidades
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight mb-6">
            Não entregamos tarefas. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-100 via-blue-300 to-[#0000FF]">Construímos negócios digitais.</span>
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-2xl">
            Sistemas operacionais completos que atraem alunos, nutrem leads e convertem de forma automática.
          </p>
        </div>

        {/* GRID DE CARDS (Menos efeito neon, mais sofisticação premium) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedService(service)}
              className="group relative bg-[#0A0A0A] border border-white/5 hover:border-[#0000FF]/30 rounded-4xl p-8 md:p-10 cursor-pointer overflow-hidden transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:bg-[#0c0c0c] flex flex-col h-full"
            >
              <div className="flex-1 relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/3 border border-white/5 flex items-center justify-center text-gray-300 transition-all duration-300 group-hover:bg-[#0000FF]/10 group-hover:text-[#0000FF] group-hover:border-[#0000FF]/20">
                    {service.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-400 group-hover:text-blue-300 transition-colors">
                    {service.tag}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-blue-200 transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light mb-8 text-sm md:text-base group-hover:text-gray-400 transition-colors">
                  {service.shortDesc}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                <div className="flex items-center justify-between text-sm font-medium text-gray-600 group-hover:text-[#0000FF] transition-colors">
                  Entender a estrutura
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-[#000000]/70 backdrop-blur-md"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 15 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl h-[90vh] md:h-162.5 bg-[#0A0A0A] border border-white/10 rounded-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all"
              >
                <X size={18} />
              </button>
              <div className="w-full md:w-2/5 bg-[#050505] p-8 md:p-12 flex flex-col relative border-b md:border-b-0 md:border-r border-white/5 shrink-0 overflow-y-auto custom-scrollbar">
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-[#0000FF]/10 border border-[#0000FF]/20 flex items-center justify-center text-[#0000FF] mb-8">
                    {selectedService.icon}
                  </div>
                  
                  <h3 className="text-3xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                    {selectedService.title}
                  </h3>
                  
                  <p className="text-gray-400 text-base leading-relaxed font-light mb-8">
                    {selectedService.valueProp}
                  </p>

                  <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 mb-8">
                    <span className="block text-gray-500 text-xs font-semibold mb-1 uppercase tracking-wider">Impacto Médio</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-[#0000FF]">{selectedService.metric}</span>
                      <span className="text-gray-400 text-sm font-medium">{selectedService.metricLabel}</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <a
                      href={`https://wa.me/5531989774224?text=Olá!%20Gostaria%20de%20iniciar%20o%20projeto%20de%20${encodeURIComponent(selectedService.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 w-full bg-[#0000FF] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white hover:text-black"
                    >
                      Solicitar Orçamento
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-12 bg-[#0A0A0A] overflow-y-auto custom-scrollbar relative">
                <div className="max-w-xl mx-auto md:mx-0">
                  <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-6">
                    <div className="w-10 h-10 rounded-full bg-[#0000FF]/10 flex items-center justify-center text-[#0000FF]">
                      <Rocket size={18} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Entregáveis do Projeto</h4>
                      <p className="text-gray-500 text-sm font-light">Estrutura técnica que sua empresa irá receber.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {selectedService.features.map((feature, index) => (
                      <motion.div 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index, duration: 0.3 }}
                        key={index} 
                        className="flex gap-4 p-5 rounded-xl bg-white/2 border border-white/5 hover:border-white/10 transition-colors"
                      >
                        <div className="shrink-0 mt-1">
                          <CheckCircle2 size={20} className="text-[#0000FF]" />
                        </div>
                        <div>
                          <h5 className="text-base font-semibold text-gray-200 mb-1">
                            {feature.title}
                          </h5>
                          <p className="text-gray-500 text-sm leading-relaxed font-light">
                            {feature.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 rounded-xl bg-[#111111] border border-white/5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Target size={20} className="text-gray-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-300 mb-1 text-sm">Acompanhamento Consultivo</h5>
                      <p className="text-gray-500 text-sm font-light leading-relaxed">
                        Nossa equipe acompanha os resultados lado a lado com você para garantir a performance nos lançamentos e perpétuo.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}