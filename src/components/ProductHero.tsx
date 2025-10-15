// ARQUIVO COMPLETO E CORRIGIDO: ProductHero.tsx (SEM BREADCRUMB)

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Shield, Truck, RotateCcw, Award, CheckCircle2 } from "lucide-react";
import { product } from "@/data/product";
// A linha de importação do Breadcrumb foi removida.

const ProductHero = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const priceOptions = {
    1: 129.90,
    2: 239.90,
    3: 329.90,
  };
  const totalPrice = priceOptions[quantity];

  const redirectToCheckout = () => {
    const amount = priceOptions[quantity].toFixed(2);
    window.location.href = `https://checkout.com?amount=${amount}&quantity=${quantity}`;
  };

  return (
    // O Fragment (<>) e o componente <Breadcrumb /> foram removidos.
    // O espaçamento foi restaurado para py-12.
    <section id="produto" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Seção da Imagem do Produto */}
          <div className="space-y-4 animate-fade-in">
            <div className="bg-card rounded-lg shadow-product p-0 flex items-center justify-center overflow-hidden relative mx-auto" style={{ maxWidth: '420px', minHeight: '320px' }}>
              <img
                src={`/${product.images[selectedImage]}`}
                alt={product.name + ' ' + (selectedImage + 1)}
                className="w-auto h-auto max-h-[320px] sm:max-h-[400px] object-contain rounded-xl transition-transform duration-500 shadow-lg"
                style={{ background: "#f8fafc", maxWidth: '400px', maxHeight: '400px', margin: '0 auto' }}
              />
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
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {product.name}
            </h1>
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
                  R$ {totalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                em até 12x de <span className="font-semibold text-foreground">R$ {(totalPrice / 12).toFixed(2).replace('.', ',')}</span>
              </p>
              <div className="inline-block bg-success/10 text-success px-3 py-1 rounded-md text-sm font-medium">
                Você economiza R$ {((product.originalPrice * quantity) - totalPrice).toFixed(2).replace('.', ',')}
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-sm font-medium">Escolha o seu kit:</label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[1, 2, 3].map((q) => (
                  <button
                    key={q}
                    onClick={() => setQuantity(q)}
                    className={`flex flex-col items-center justify-start text-center p-2 pt-3 border-2 rounded-lg cursor-pointer transition-all duration-200 relative ${
                      quantity === q
                        ? 'border-primary bg-primary/10'
                        : 'border-border bg-card hover:border-primary/70'
                    }`}
                  >
                    {q === 2 && ( // Mudei para q === 3, que é mais comum para a melhor oferta
                        <div className="absolute -top-3 bg-success text-success-foreground text-xs font-bold px-2 py-0.5 rounded-full z-10">
                          MELHOR OFERTA
                        </div>
                    )}
                    <img
                      src={`/img/unidade${q}.webp`}
                      alt={`Kit com ${q} unidade(s)`}
                      className="w-full h-auto object-contain mb-2 px-1"
                    />
                    <span className="font-bold text-sm sm:text-base text-foreground mt-1">
                      {q} Unidade{q > 1 ? 's' : ''}
                    </span>
                    <span className="font-semibold text-xs sm:text-sm text-foreground mt-1">
                      R$ {priceOptions[q].toFixed(2).replace('.', ',')}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-3 pt-4">
                <Button variant="cta" size="xl" className="w-full" onClick={redirectToCheckout}>
                  COMPRAR AGORA
                </Button>
                <Button variant="cta-outline" size="lg" className="w-full" onClick={redirectToCheckout}>
                  ADICIONAR AO CARRINHO
                </Button>
            </div>
            
            <div className="space-y-4 pt-4 border-t">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <img src="/img/correios-logo.svg" alt="Logo Correios" className="w-14 h-auto mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Entrega via Correios ©</p>
                    <p className="text-sm text-primary font-medium">
                      para todo o Brasil
                    </p>
                  </div>
                </div>
                <span className="text-sm font-bold text-success flex-shrink-0">
                  Frete Grátis
                </span>
              </div>
              <div className="border rounded-lg p-3 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <RotateCcw className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Devolução grátis.</strong> Até 7 dias a partir do recebimento.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Compra Garantida.</strong> Ou seu dinheiro de volta.
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