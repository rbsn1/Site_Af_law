import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Materiais",
  description: "Materiais gratuitos para organizar documentação e preparar sua avaliação patrimonial."
};

const materials = [
  {
    id: "checklist",
    title: "Checklist de Documentos",
    description: "Organize tudo antes da avaliação patrimonial.",
    cta: "Quero o Checklist"
  },
  {
    id: "guia",
    title: "Guia rápido de planejamento",
    description: "Visão geral do processo e próximos passos possíveis.",
    cta: "Quero o Guia"
  }
];

export default function MateriaisPage() {
  return (
    <section className="section-padding">
      <div className="container-page space-y-10">
        <div>
          <h1 className="text-4xl font-semibold text-navy">Materiais gratuitos</h1>
          <p className="mt-3 text-sm text-navy/70">
            Conteúdo informativo para apoiar decisões e organizar documentos.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {materials.map((material) => (
            <Card key={material.id} id={material.id} className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-navy">{material.title}</h2>
                <p className="mt-2 text-sm text-navy/70">{material.description}</p>
              </div>
              <Button>{material.cta}</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
