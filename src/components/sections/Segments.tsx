import Link from "next/link";

import { segments } from "@/data/segments";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const extras = [
  "Segundo casamento / herdeiros menores",
  "Quem quer evitar conflitos e custos futuros"
];

export function Segments() {
  return (
    <section className="section-padding">
      <div className="container-page space-y-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Para quem é</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy">Identifique seu cenário rapidamente</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {segments.map((segment) => (
            <Card key={segment.slug} className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-navy">{segment.title}</h3>
                <p className="text-sm text-navy/70">{segment.description}</p>
              </div>
              <Button asChild variant="secondary" className="w-fit">
                <Link href={`/para-quem-e/${segment.slug}`}>Ver se é seu caso</Link>
              </Button>
            </Card>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {extras.map((item) => (
            <div key={item} className="rounded-2xl border border-navy/10 bg-white p-6">
              <p className="text-sm font-semibold text-navy">{item}</p>
              <p className="mt-2 text-sm text-navy/60">Diagnóstico específico pode reduzir riscos e conflitos.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
