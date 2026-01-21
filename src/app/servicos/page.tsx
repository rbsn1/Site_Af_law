import type { Metadata } from "next";
import Link from "next/link";

import { services } from "@/data/services";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça os serviços de planejamento sucessório, holdings e organização patrimonial."
};

export default function ServicosPage() {
  return (
    <section className="section-padding">
      <div className="container-page space-y-10">
        <div>
          <h1 className="text-4xl font-semibold text-navy">Serviços estratégicos</h1>
          <p className="mt-3 text-sm text-navy/70">
            Atuação focada em planejamento sucessório, holdings e organização documental com segurança jurídica.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.slug} className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-navy">{service.title}</h2>
                <p className="mt-2 text-sm text-navy/70">{service.summary}</p>
              </div>
              <Button asChild variant="secondary" className="w-fit">
                <Link href={`/servicos/${service.slug}`}>Ver detalhes</Link>
              </Button>
            </Card>
          ))}
        </div>
        <div className="rounded-2xl border border-navy/10 bg-light p-6 text-sm text-navy/70">
          Conteúdo informativo. Resultados variam conforme o caso. Sem promessa de resultado.
        </div>
      </div>
    </section>
  );
}
