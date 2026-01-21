export type Segment = {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
};

export const segments: Segment[] = [
  {
    slug: "familias",
    title: "Famílias com patrimônio",
    description:
      "Para famílias que desejam organizar imóveis, participações e regras de sucessão com segurança.",
    bullets: [
      "Evitar conflitos entre herdeiros",
      "Organizar documentos e regras",
      "Planejar a sucessão com clareza"
    ]
  },
  {
    slug: "empresarios",
    title: "Empresários e sócios",
    description:
      "Para empresários que buscam continuidade, governança e previsibilidade na sucessão.",
    bullets: [
      "Definir sucessores e regras",
      "Proteger patrimônio empresarial",
      "Planejar transição com segurança"
    ]
  }
];
