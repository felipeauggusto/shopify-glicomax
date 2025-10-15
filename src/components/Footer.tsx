import { ShoppingCart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo e descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-8 h-8" />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold">VAREJO</span>
                <span className="text-lg font-bold">SHOP</span>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Sua loja online de confiança. Produtos de qualidade com os melhores preços.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#produto" className="opacity-80 hover:opacity-100 transition-opacity">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#rastrear" className="opacity-80 hover:opacity-100 transition-opacity">
                  Rastrear Pedido
                </a>
              </li>
              <li>
                <a href="#sobre" className="opacity-80 hover:opacity-100 transition-opacity">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#faq" className="opacity-80 hover:opacity-100 transition-opacity">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h3 className="font-bold mb-4">Atendimento</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-80">
                <Phone className="w-4 h-4" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Mail className="w-4 h-4" />
                <span>contato@varejoshop.com</span>
              </li>
              <li className="flex items-start gap-2 opacity-80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h3 className="font-bold mb-4">Siga-nos</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>© 2024 Varejo Shop. Todos os direitos reservados.</p>
          <p className="mt-2">
            CNPJ: 00.000.000/0001-00 | Razão Social: Varejo Shop Ltda.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
