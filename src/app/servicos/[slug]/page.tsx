import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) {
    return { title: "Serviço não encontrado" };
  }
  return {
    title: service.title,
    description: service.description
  };
}

export default function ServicePage({ params }: PageProps) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) {
    notFound();
  }

  return (
    <section className="section-padding">
      <div className="container-page space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Serviço</p>
          <h1 className="text-4xl font-semibold text-navy">{service.title}</h1>
          <p className="text-base text-navy/70">{service.description}</p>
          <Button asChild size="lg">
            <Link href="/agendar">Agendar Avaliação</Link>
          </Button>
        </div>
        <Card className="space-y-4">
          <h2 className="text-xl font-semibold text-navy">O que você pode esperar</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-navy/70">
            {service.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </Card>
        <div className="rounded-2xl border border-navy/10 bg-light p-6 text-sm text-navy/70">
          Conteúdo informativo. Resultados variam conforme o caso. Sem promessa de resultado.
        </div>
      </div>
    </section>
  );
}
