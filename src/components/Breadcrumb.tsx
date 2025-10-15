// src/components/Breadcrumb.tsx - VERSÃO FINAL OTIMIZADA PARA MOBILE

import { ChevronRight } from "lucide-react";
import { product } from "@/data/product";

const Breadcrumb = () => {
  return (
    <div>
      {/* 1. Barra de Gradiente */}
      <div className="h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-teal-500" />

      {/* 2. Trilha de Navegação */}
      <nav className="bg-slate-50">
        <div className="container mx-auto px-4 py-3">
          {/* 
            ALTERAÇÕES PRINCIPAIS:
            - text-xs: Fonte menor para o componente inteiro.
            - flex-nowrap: Impede a quebra de linha.
            - Nome do produto responsivo: Curto no mobile, completo no desktop.
          */}
          <ol className="flex items-center gap-2 text-xs text-muted-foreground flex-nowrap">
            {/* "Página inicial" */}
            <li>
              <span>Página inicial</span>
            </li>
            
            {/* "Todos os produtos" - Visível apenas em telas maiores */}
            <li className="hidden sm:flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
              <span>Todos os produtos</span>
            </li>

            {/* Separador final */}
            <li>
              <ChevronRight className="h-4 w-4" />
            </li>

            {/* Nome do produto (agora responsivo) */}
            <li className="font-medium text-teal-700 truncate" aria-current="page">
              {/* Nome curto para mobile */}
              <span className="block sm:hidden">GlicoMax</span>
              {/* Nome completo para telas maiores */}
              <span className="hidden sm:block">{product.name}</span>
            </li>
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default Breadcrumb;