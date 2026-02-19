import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (

    <main className="relative min-h-screen bg-[#000000] text-[#FFFFFF] overflow-hidden selection:bg-[#0000FF] selection:text-white">
      
      {/* 1. O Cabeçalho (Fixo no topo) */}
      <Header />

      {/* 2. Primeira Dobra (Hero Section) */}
      <Hero />

      {/* As próximas seções entrarão aqui, naturalmente uma debaixo da outra */}
      
      {/* <Servicos /> */}
      
      {/* <Sobre /> */}
      
      {/* <Contato /> */}

      {/* <Footer /> */}
      
    </main>
  );
}