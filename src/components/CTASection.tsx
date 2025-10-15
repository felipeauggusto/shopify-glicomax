import { Button } from "@/components/ui/button";
import { Zap, Shield, Award } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Garanta o seu agora com 50% de desconto!
          </h2>
          
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Aproveite nossa oferta especial e monitore sua saúde com tecnologia de ponta
          </p>

          <div className="grid md:grid-cols-3 gap-6 py-8">
            <div className="flex flex-col items-center gap-3 p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <Zap className="w-12 h-12" />
              <h3 className="font-bold text-lg">Entrega Rápida</h3>
              <p className="text-sm opacity-80">Receba em até 7 dias</p>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <Shield className="w-12 h-12" />
              <h3 className="font-bold text-lg">Compra 100% Segura</h3>
              <p className="text-sm opacity-80">Ambiente protegido</p>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <Award className="w-12 h-12" />
              <h3 className="font-bold text-lg">Garantia Oficial</h3>
              <p className="text-sm opacity-80">12 meses do fabricante</p>
            </div>
          </div>

          <Button 
            variant="cta" 
            size="xl" 
            className="bg-success hover:bg-success/90 text-success-foreground shadow-2xl hover:scale-110 text-lg px-12"
            onClick={() => {
              const el = document.getElementById('produto');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            COMPRAR COM DESCONTO
          </Button>

          <p className="text-sm opacity-75">
            ⏰ Oferta por tempo limitado - Estoque de {257} unidades
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
