import type { Metadata } from "next";

import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Atuação focada em planejamento sucessório e holdings com atendimento estratégico."
};

export default function SobrePage() {
  return (
    <section className="section-padding">
      <div className="container-page space-y-10">
        <div>
          <h1 className="text-4xl font-semibold text-navy">Sobre a atuação</h1>
          <p className="mt-3 text-sm text-navy/70">
            Atendimento estratégico, confidencial e orientado para decisões seguras em patrimônio e sucessão.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="space-y-4">
            <h2 className="text-xl font-semibold text-navy">{siteConfig.lawyerName}</h2>
            <p className="text-sm text-navy/70">
              Advogada focada em planejamento sucessório, holdings e organização patrimonial para famílias e empresários.
            </p>
            <p className="text-sm text-navy/70">
              Atendimento estratégico e personalizado, com processo claro e comunicação direta.
            </p>
          </Card>
          <Card className="space-y-4">
            <h2 className="text-xl font-semibold text-navy">Diferenciais</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-navy/70">
              <li>Atuação focada em patrimônio e sucessão</li>
              <li>Diagnóstico inicial claro e sem promessas</li>
              <li>Processo em etapas com previsibilidade</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
