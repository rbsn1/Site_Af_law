import Link from "next/link";

import { services } from "@/data/services";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ServicesGrid() {
  return (
    <section className="section-padding">
      <div className="container-page space-y-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Como eu posso te ajudar</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy">
            Estratégias para proteger patrimônio e reduzir riscos futuros.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.slug} className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.summary}</CardDescription>
              </CardHeader>
              <Button asChild variant="secondary" className="w-fit">
                <Link href={`/servicos/${service.slug}`}>Ver como funciona</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
