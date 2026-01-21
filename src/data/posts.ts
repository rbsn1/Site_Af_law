export type Post = {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  slug: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Como evitar conflitos no inventário",
    category: "Planejamento",
    excerpt: "Planejamento sucessório reduz riscos e organiza decisões familiares com antecedência.",
    slug: "evitar-conflitos-inventario"
  },
  {
    id: 2,
    title: "Holding familiar: quando faz sentido",
    category: "Holdings",
    excerpt: "Entenda quando a holding familiar pode organizar governança e patrimônio.",
    slug: "holding-familiar-quando-faz-sentido"
  },
  {
    id: 3,
    title: "Documentos essenciais para começar",
    category: "Documentação",
    excerpt: "Veja o que preparar antes da avaliação patrimonial.",
    slug: "documentos-essenciais"
  },
  {
    id: 4,
    title: "Sucessão empresarial sem improviso",
    category: "Empresas",
    excerpt: "Regras claras ajudam a continuidade e evitam conflitos societários.",
    slug: "sucessao-empresarial-sem-improviso"
  }
];
