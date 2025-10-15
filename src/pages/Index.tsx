import Header from "@/components/Header";
import ProductHero from "@/components/ProductHero";
import ProductFeatures from "@/components/ProductFeatures";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kit 2 GlicoMax - Medidor de Glicose + Oxímetro | Varejo Shop</title>
        <meta 
          name="description" 
          content="Kit 2 GlicoMax Medidor de Glicose a Laser e Oxímetro - Portátil, Seguro e Prático. Frete Grátis para todo Brasil. 50% de desconto!" 
        />
        <meta name="keywords" content="medidor de glicose, oxímetro, glicomax, saúde, monitoramento" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <ProductHero />
          <ProductFeatures />
          <Testimonials />
          <FAQ />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
