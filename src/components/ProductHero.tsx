import { useState } from "react";
import { Carousel } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Plus, Minus, Check, Shield, Truck, RotateCcw } from "lucide-react";
import { Award } from "lucide-react";
import { product } from "@/data/product";
import productImage from "@/assets/product-main.jpg";

const ProductHero = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleIncrement = () => setQuantity(q => Math.min(q + 1, 10));
  const handleDecrement = () => setQuantity(q => Math.max(q - 1, 1));

  const totalPrice = product.price * quantity;
  const installmentValue = (totalPrice / 12).toFixed(2);

    // Redireciona para o checkout com valor total e quantidade
    const redirectToCheckout = () => {
      const amount = (product.price * quantity).toFixed(2);
      window.location.href = `https://checkout.com?amount=${amount}&quantity=${quantity}`;
    };

  return (
    <section id="produto" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Imagem do produto */}
          <div className="space-y-4 animate-fade-in">
            {/* Carrossel manual de imagens do produto */}
            <div className="bg-card rounded-lg shadow-product p-0 flex items-center justify-center overflow-hidden relative mx-auto" style={{ maxWidth: '420px', minHeight: '320px' }}>
              <img
                src={product.images[selectedImage]}
                alt={product.name + ' ' + (selectedImage + 1)}
                className="w-auto h-auto max-h-[320px] sm:max-h-[400px] object-contain rounded-xl transition-transform duration-500 shadow-lg"
                style={{ background: "#f8fafc", maxWidth: '400px', maxHeight: '400px', margin: '0 auto' }}
              />
              {/* Botões de navegação */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full w-9 h-9 flex items-center justify-center shadow-lg border-2 border-white hover:bg-success transition-colors duration-200"
                style={{ fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
                onClick={() => setSelectedImage(selectedImage === 0 ? product.images.length - 1 : selectedImage - 1)}
                aria-label="Imagem anterior"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full w-9 h-9 flex items-center justify-center shadow-lg border-2 border-white hover:bg-success transition-colors duration-200"
                style={{ fontSize: '1.5rem', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
                onClick={() => setSelectedImage(selectedImage === product.images.length - 1 ? 0 : selectedImage + 1)}
                aria-label="Próxima imagem"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18"></polyline></svg>
              </button>
              {/* Bolinhas indicadoras */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {product.images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-4 h-4 rounded-full ${selectedImage === idx ? 'bg-primary' : 'bg-muted-foreground/40'} border-2 border-primary transition-all shadow-md`}
                    onClick={() => setSelectedImage(idx)}
                    aria-label={`Selecionar imagem ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            {/* Badges de confiança */}
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center gap-2 p-3 bg-secondary rounded-lg text-center">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-xs font-medium">Compra Segura</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 bg-secondary rounded-lg text-center">
                <Truck className="w-5 h-5 text-primary" />
                <span className="text-xs font-medium">Frete Grátis</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 bg-secondary rounded-lg text-center">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-xs font-medium">Garantia de 12 meses</span>
              </div>
            </div>
          </div>

          {/* Informações do produto */}
          <div className="space-y-6 animate-slide-up">
            {/* Badge e Status */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-2.5 py-0.5 text-xs font-semibold">
                Site Oficial de Vendas
              </span>
              {product.isNew && (
                <span className="inline-flex items-center rounded-full border border-success text-success px-2.5 py-0.5 text-xs font-semibold">
                  Novo
                </span>
              )}
              <span className="text-sm text-muted-foreground">
                {product.stock} unidades vendidas
              </span>
            </div>

            {/* Título */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {product.name}
            </h1>

            {/* Avaliações */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[hsl(var(--rating-star))] text-[hsl(var(--rating-star))]"
                  />
                ))}
              </div>
              <span className="font-semibold">{product.rating}</span>
              <span className="text-muted-foreground">
                ({product.reviewCount} Avaliações)
              </span>
            </div>

            {/* Preço */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-sm text-[hsl(var(--price-original))] line-through">
                  DE R$ {(product.originalPrice * quantity).toFixed(2).replace('.', ',')}
                </span>
                <span className="inline-flex items-center rounded-full bg-success text-success-foreground text-sm font-bold px-2.5 py-0.5">
                  -{product.discount}%
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-bold text-[hsl(var(--price-discount))]">
                  R$ {(product.price * quantity).toFixed(2).replace('.', ',')}
                </span>
              </div>

              <p className="text-sm text-muted-foreground">
                em até 12x de <span className="font-semibold text-foreground">R$ {((product.price * quantity) / 12).toFixed(2).replace('.', ',')}</span>
              </p>

              <div className="inline-block bg-success/10 text-success px-3 py-1 rounded-md text-sm font-medium">
                R$ {(product.price * quantity).toFixed(2).replace('.', ',')} de desconto
              </div>
            </div>

            {/* Quantidade */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Quantidade:</label>
              <div className="flex items-center gap-3">
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleDecrement}
                    className="h-10 w-10"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleIncrement}
                    className="h-10 w-10"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">
                  (máximo 10 unidades)
                </span>
              </div>
            </div>

            {/* Botões de ação */}
            <div className="space-y-3 pt-4">
                <Button variant="cta" size="xl" className="w-full" onClick={redirectToCheckout}>
                  COMPRAR AGORA
                </Button>
                <Button variant="cta-outline" size="lg" className="w-full" onClick={redirectToCheckout}>
                  ADICIONAR AO CARRINHO
                </Button>
            </div>

            {/* Informações de entrega */}
            <div className="space-y-3 pt-4 border-t">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-success">Frete Grátis ⚡ FULL</p>
                  <p className="text-sm text-muted-foreground">
                    Enviado pelos Correios
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <RotateCcw className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Devolução grátis</p>
                  <p className="text-sm text-muted-foreground">
                    Até 7 dias a partir do recebimento
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
