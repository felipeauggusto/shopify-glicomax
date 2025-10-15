// EDITE AQUI OS DADOS DO PRODUTO
// Para alterar o produto, modifique os valores abaixo

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  images: string[];
  rating: number;
  reviewCount: number;
  isNew: boolean;
  stock: number;
  features: string[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export const product: Product = {
  id: "1",
  name: "Kit 2 GlicoMax Medidor de Glicose a Laser e Oxímetro",
  description: "Portátil, Seguro e Prático - Monitor de glicose e oxímetro digital de última geração para monitoramento preciso da sua saúde.",
  price: 187.00,
  originalPrice: 374.00,
  discount: 50,
  images: [
    "img/glicomax1.webp",
    "img/glicomax2.webp",
    "img/glicomax3.webp",
    "img/glicomax4.webp",
    "img/glicomax5.webp",
  ],
  rating: 4.9,
  reviewCount: 467,
  isNew: true,
  stock: 1541,
  features: [
    "Medição rápida e precisa de glicose",
    "Oxímetro digital integrado",
    "Display LED de fácil leitura",
    "Portátil e leve",
    "Bateria de longa duração",
    "Certificado ANVISA",
    "Ideal para uso doméstico",
    "Fácil de usar - sem necessidade de calibração",
  ],
  specifications: [
    { label: "Marca", value: "GlicoMax" },
    { label: "Modelo", value: "GM-2000" },
    { label: "Tipo", value: "Medidor de Glicose + Oxímetro" },
    { label: "Display", value: "LED Digital" },
    { label: "Bateria", value: "2x AAA (incluídas)" },
    { label: "Garantia", value: "12 meses" },
    { label: "Certificação", value: "ANVISA" },
  ],
};

export const testimonials = [
  {
    id: "8",
    name: "Patrícia Gomes",
    avatar: "PG",
    rating: 5,
    comment: "Simplesmente perfeito! Recomendo para toda família. Ótimo custo-benefício.",
    date: "Há 6 dias",
  },
  {
    id: "9",
    name: "Eduardo Martins",
    avatar: "EM",
    rating: 5,
    comment: "Produto inovador, fácil de usar e entrega rápida. Muito satisfeito!",
    date: "Há 8 dias",
  },
  {
    id: "1",
    name: "Maria Silva",
    avatar: "MS",
    rating: 5,
    comment: "Produto excelente! Muito preciso e fácil de usar. Recomendo!",
    date: "Há 2 dias",
  },
  {
    id: "2",
    name: "João Santos",
    avatar: "JS",
    rating: 5,
    comment: "Chegou rápido e bem embalado. Qualidade excepcional!",
    date: "Há 1 semana",
  },
  {
    id: "3",
    name: "Ana Costa",
    avatar: "AC",
    rating: 4,
    comment: "Muito bom, só achei o manual um pouco confuso.",
    date: "Há 2 semanas",
  },
  {
    id: "4",
    name: "Carlos Pereira",
    avatar: "CP",
    rating: 5,
    comment: "Superou minhas expectativas! Recomendo para todos que precisam monitorar a saúde.",
    date: "Há 3 dias",
  },
  {
    id: "5",
    name: "Fernanda Lima",
    avatar: "FL",
    rating: 5,
    comment: "Atendimento excelente e produto de alta qualidade. Voltarei a comprar!",
    date: "Há 5 dias",
  },
  {
    id: "6",
    name: "Roberto Alves",
    avatar: "RA",
    rating: 5,
    comment: "Muito prático e eficiente. Chegou antes do prazo!",
    date: "Há 1 dia",
  },
  {
    id: "7",
    name: "Juliana Souza",
    avatar: "JS",
    rating: 5,
    comment: "Produto maravilhoso, fácil de usar e muito preciso. Recomendo demais!",
    date: "Há 4 dias",
  },
];

export const faqs = [
  {
    question: "Como funciona o medidor de glicose?",
    answer: "O medidor utiliza tecnologia a laser não invasiva para medir os níveis de glicose de forma rápida e precisa. Basta posicionar o dedo no sensor e aguardar alguns segundos.",
  },
  {
    question: "Precisa de receita médica para comprar?",
    answer: "Não, o produto pode ser adquirido sem receita médica. No entanto, sempre recomendamos consultar um profissional de saúde para orientações sobre o uso.",
  },
  {
    question: "Qual é o prazo de entrega?",
    answer: "O prazo de entrega varia de acordo com sua região. Em média, o produto chega em 7 a 15 dias úteis para todo o Brasil. Oferecemos frete grátis para todo território nacional!",
  },
  {
    question: "O produto tem garantia?",
    answer: "Sim! Oferecemos 12 meses de garantia do fabricante contra defeitos de fabricação. Além disso, você tem 7 dias para devolução gratuita caso não fique satisfeito.",
  },
  {
    question: "Como faço para rastrear meu pedido?",
    answer: "Após a confirmação do pagamento, você receberá um código de rastreamento por email. Você também pode rastrear seu pedido diretamente no nosso site através da opção 'Rastrear Pedidos'.",
  },
];
