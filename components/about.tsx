'use client';

import { motion, Variants } from 'framer-motion';
import { Target, Zap, TrendingUp, Workflow, CheckCircle2 } from 'lucide-react';

export default function About() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section id="sobre" className="relative bg-[#F8F9FA] pt-32 pb-24 rounded-[2.5rem] md:rounded-[4rem] -mt-12 mb-12 z-20 shadow-[0_0_80px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <span className="px-4 py-1.5 rounded-full border border-black/5 bg-black/3 text-sm font-semibold text-gray-600 mb-6 inline-block">
            Nossa Metodologia
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111111] tracking-tight leading-[1.1]">
            Sua empresa precisa de <br className="hidden md:block"/>
            <span className="text-[#0000FF]">estrutura digital,</span> não só presença.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl">
            Nós não vendemos &ldquo;likes&ldquo; ou posts genéricos. Construímos ecossistemas completos onde educação e marketing se unem para escalar suas vendas.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={fadeUp} className="md:col-span-2 group relative bg-white p-8 md:p-12 rounded-4xl border border-black/4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:shadow-[0_8px_40px_rgb(0,0,255,0.08)] hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-blue-50 to-transparent rounded-full blur-3xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-14 h-14 bg-[#0000FF]/5 text-[#0000FF] rounded-2xl flex items-center justify-center mb-8">
              <Workflow size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">Estratégia que Educa e Converte</h3>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
              Integramos tráfego pago, presença digital e automação. O cliente é educado sobre a sua solução de forma automatizada, chegando ao comercial pronto para comprar.
            </p>
            <ul className="space-y-3">
              {['Atração qualificada', 'Funis de nutrição', 'Fechamento previsível'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 size={20} className="text-[#0000FF]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="relative bg-[#0000FF] p-8 md:p-10 rounded-4xl shadow-[0_20px_40px_-10px_rgba(0,0,255,0.4)] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-60"></div>
            <div>
              <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Performance Real</h3>
              <p className="text-blue-100/80 leading-relaxed font-light">
                Foco em resultados mensuráveis, leads qualificados e aumento de faturamento. Nada de métricas de vaidade.
              </p>
            </div>
            <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <span className="block text-blue-200 text-sm font-medium mb-1">Aumento médio</span>
              <span className="text-4xl font-extrabold text-white tracking-tighter">+300%</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white p-8 md:p-10 rounded-4xl border border-black/4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_8px_40px_rgb(0,0,255,0.08)] hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#0000FF]/5 text-[#0000FF] rounded-xl flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Automação Inteligente</h3>
            <p className="text-gray-500 leading-relaxed">
              WhatsApp integrado com automações que aceleram o atendimento e não deixam nenhum lead esfriar.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-2 bg-white p-8 md:p-10 rounded-4xl border border-black/4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 transition-all duration-500 hover:shadow-[0_8px_40px_rgb(0,0,255,0.08)] hover:-translate-y-1">
            <div className="shrink-0 w-16 h-16 bg-[#0000FF]/5 text-[#0000FF] rounded-2xl flex items-center justify-center">
              <Target size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Estratégia Focada no seu ICP</h3>
              <p className="text-gray-500 leading-relaxed max-w-xl">
                Desenhamos o perfil do seu cliente ideal e mapeamos a jornada perfeita para transformar um desconhecido em um comprador leal à sua marca.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}