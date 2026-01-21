import { siteConfig } from "@/config/site";

type LeadData = {
  objetivo: string;
  imoveis: string;
  empresa: string;
  urgencia: string;
  cidade: string;
  descricao: string;
};

export function buildWhatsappMessage(data: LeadData) {
  return `Olá, Dra. ${siteConfig.lawyerName}. Quero agendar uma avaliação patrimonial. Meu objetivo é: ${data.objetivo}. Tenho ${data.imoveis} imóveis e ${data.empresa}. Urgência: ${data.urgencia}. Cidade: ${data.cidade}. Resumo: ${data.descricao}.`;
}

export function buildWhatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
