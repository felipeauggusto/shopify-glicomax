import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [cartCount] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Banner de frete grátis */}
      <div className="bg-gradient-hero text-primary-foreground py-2 text-center text-sm font-medium">
        🎉 FRETE GRÁTIS PARA TODO BRASIL
      </div>

      {/* Header principal */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-8 h-8" />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold">VAREJO</span>
                <span className="text-lg font-bold">SHOP</span>
              </div>
            </div>

            {/* Navegação desktop */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#produto" className="hover:opacity-80 transition-opacity">
                Produtos da Loja
              </a>
              <a href="#rastrear" className="hover:opacity-80 transition-opacity">
                Rastrear Pedidos
              </a>
              <a href="#sobre" className="hover:opacity-80 transition-opacity">
                Sobre Nós
              </a>
              <a href="#contato" className="hover:opacity-80 transition-opacity">
                Contatos
              </a>
            </nav>

            {/* Ações */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hidden md:flex text-primary-foreground hover:bg-primary-foreground/10">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex text-primary-foreground hover:bg-primary-foreground/10">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative text-primary-foreground hover:bg-primary-foreground/10">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-success text-success-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground hover:bg-primary-foreground/10">
                  <Menu className="w-5 h-5" onClick={() => setMenuOpen(!menuOpen)} />
              </Button>
            </div>
          </div>
        </div>
      </header>
        {/* Menu mobile */}
        {menuOpen && (
          <nav className="fixed inset-0 bg-primary text-primary-foreground flex flex-col items-center justify-center gap-8 z-[999]">
            <button className="absolute top-6 right-6 text-2xl" onClick={() => setMenuOpen(false)}>
              &#10005;
            </button>
            <a href="#produto" className="text-xl font-bold" onClick={() => setMenuOpen(false)}>Produtos da Loja</a>
            <a href="#rastrear" className="text-xl font-bold" onClick={() => setMenuOpen(false)}>Rastrear Pedidos</a>
            <a href="#sobre" className="text-xl font-bold" onClick={() => setMenuOpen(false)}>Sobre Nós</a>
            <a href="#contato" className="text-xl font-bold" onClick={() => setMenuOpen(false)}>Contatos</a>
          </nav>
        )}
    </>
  );
};

export default Header;
