'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    necessidade: '',
    detalhes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.necessidade) {
      alert("Por favor, preencha pelo menos o seu nome e a sua necessidade.");
      return;
    }

    const mensagem = `Olá, vim pelo site e gostaria de conversar sobre um projeto!%0A%0A*Nome:* ${formData.nome}%0A*E-mail:* ${formData.email || 'Não informado'}%0A*Interesse:* ${formData.necessidade}%0A*Descrição:* ${formData.detalhes || 'Sem detalhes adicionais'}`;

    const numeroWhatsApp = "5531989774224";

    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
    window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#000000] text-white pt-32 pb-24 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_100%)] pointer-events-none z-0"></div>
      <div className="absolute top-0 left-0 w-125 h-125 bg-[#0000FF]/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-24"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-8 text-sm font-medium">
            <ArrowRight size={16} className="rotate-180" /> Voltar para o início
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-blue-400 mb-6">
            <Sparkles size={14} /> Atendimento VIP
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.05]">
            Vamos iniciar o seu <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-[#0000FF]">próximo grande projeto.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-12"
          >
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-md">
              Nossa equipe de estrategistas está pronta para analisar o seu negócio e desenhar a arquitetura perfeita para escalar seus resultados.
            </p>

            <div className="flex flex-col gap-8">
              <a href="https://wa.me/5531989774224" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-6 p-6 rounded-3xl bg-white/2 border border-white/5 hover:bg-white/5 hover:border-[#0000FF]/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#0000FF]/10 flex items-center justify-center text-[#0000FF] group-hover:bg-[#0000FF] group-hover:text-white transition-colors">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">WhatsApp Comercial</h3>
                  <p className="text-gray-500 font-light mb-2">Atendimento imediato para novos projetos.</p>
                  <span className="text-[#0000FF] font-semibold group-hover:text-blue-400 transition-colors">+55 31 98977-4224</span>
                </div>
              </a>

              <a href="mailto:contato@codexmkt.com" className="group flex items-start gap-6 p-6 rounded-3xl bg-white/2 border border-white/5 hover:bg-white/5 hover:border-[#0000FF]/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#0000FF] group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">E-mail Corporativo</h3>
                  <p className="text-gray-500 font-light mb-2">Para parcerias, propostas e suporte.</p>
                  <span className="text-[#0000FF] font-semibold group-hover:text-blue-400 transition-colors">contato@codexmkt.com</span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-[#0000FF]/30 to-purple-600/30 rounded-[2.5rem] blur-2xl opacity-50"></div>
            
            <div className="relative bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8">Envie uma mensagem</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Nome Completo</label>
                    <input 
                      type="text" 
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Códex Contato" 
                      className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#0000FF] transition-colors" 
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">E-mail de Trabalho</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="contato@codexmkt.com" 
                      className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#0000FF] transition-colors" 
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Qual a sua necessidade?</label>
                  <select 
                    name="necessidade"
                    value={formData.necessidade}
                    onChange={handleChange}
                    className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#0000FF] transition-colors appearance-none"
                    required
                  >
                    <option value="" disabled>Selecione uma opção...</option>
                    <option value="Automação de WhatsApp">Automação de WhatsApp</option>
                    <option value="Tráfego Pago (Lançamento/Perpétuo)">Tráfego Pago (Lançamento/Perpétuo)</option>
                    <option value="Criação de Páginas de Vendas">Criação de Páginas de Vendas</option>
                    <option value="Ecossistema Completo (Consultoria)">Ecossistema Completo (Consultoria)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Detalhes do Projeto</label>
                  <textarea 
                    name="detalhes"
                    value={formData.detalhes}
                    onChange={handleChange}
                    rows={4} 
                    placeholder="Conte-nos um pouco sobre o momento atual da sua empresa..." 
                    className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#0000FF] transition-colors resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="mt-4 group relative w-full flex items-center justify-center gap-2 bg-[#FFFFFF] text-[#000000] py-4 rounded-xl font-bold text-lg transition-all duration-500 hover:bg-[#0000FF] hover:text-[#FFFFFF] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,0,255,0.5)]">
                  Solicitar Contato
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}