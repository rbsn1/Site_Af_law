export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "planejamento-sucessorio",
    title: "Planejamento Sucessório",
    summary: "Regras claras para proteger bens e reduzir conflitos.",
    description:
      "Planejamento sucessório com foco em segurança jurídica, prevenção de conflitos e organização do patrimônio familiar.",
    bullets: [
      "Definição de regras patrimoniais e familiares",
      "Organização documental e cenários futuros",
      "Estratégia executável, com clareza para os herdeiros"
    ]
  },
  {
    slug: "holding-familiar",
    title: "Holding Familiar / Patrimonial",
    summary: "Governança e organização quando fizer sentido estratégico.",
    description:
      "Estruturação de holdings familiares para dar previsibilidade, governança e proteção patrimonial alinhada ao perfil da família.",
    bullets: [
      "Mapeamento de patrimônio e estrutura societária",
      "Regras de gestão e sucessão definidas",
      "Proteção e continuidade das decisões familiares"
    ]
  },
  {
    slug: "holding-imobiliaria",
    title: "Holding Imobiliária",
    summary: "Gestão de imóveis, renda e sucessão organizada.",
    description:
      "Estratégia para organização de imóveis e renda, com foco em eficiência na gestão e transição sucessória.",
    bullets: [
      "Centralização da gestão imobiliária",
      "Previsibilidade na distribuição de rendas",
      "Documentação e contratos organizados"
    ]
  },
  {
    slug: "sucessao-empresarial",
    title: "Sucessão Empresarial",
    summary: "Continuidade e regras societárias claras.",
    description:
      "Planejamento para continuidade empresarial, alinhando decisões societárias, herdeiros e gestores.",
    bullets: [
      "Definição de papéis e responsabilidades",
      "Regras societárias e governança",
      "Transição segura entre gerações"
    ]
  },
  {
    slug: "regularizacao-documental",
    title: "Regularização Documental",
    summary: "Organização preventiva para evitar travas futuras.",
    description:
      "Revisão e regularização de documentos para evitar travas, conflitos e custos desnecessários no futuro.",
    bullets: [
      "Levantamento e revisão documental",
      "Correção de inconsistências",
      "Base sólida para próximos passos"
    ]
  }
];
