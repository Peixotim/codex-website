import About from "@/components/about";
import Clients from "@/components/clients";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (

    <main className="relative min-h-screen bg-[#000000] text-[#FFFFFF] overflow-hidden selection:bg-[#0000FF] selection:text-white">
      
      <Header />

      <Hero />
      
      <About/>
      
      <Services/>
    
      <Clients/>

      <Footer/>
      
    </main>
  );
}