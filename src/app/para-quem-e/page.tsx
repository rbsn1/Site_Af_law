import type { Metadata } from "next";
import Link from "next/link";

import { segments } from "@/data/segments";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Para quem é",
  description: "Descubra se o planejamento sucessório ou a holding faz sentido para seu cenário."
};

export default function ParaQuemEPage() {
  return (
    <section className="section-padding">
      <div className="container-page space-y-10">
        <div>
          <h1 className="text-4xl font-semibold text-navy">Para quem é</h1>
          <p className="mt-3 text-sm text-navy/70">
            Avalie rapidamente se o planejamento patrimonial atende ao seu cenário atual.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {segments.map((segment) => (
            <Card key={segment.slug} className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-navy">{segment.title}</h2>
                <p className="mt-2 text-sm text-navy/70">{segment.description}</p>
              </div>
              <Button asChild variant="secondary" className="w-fit">
                <Link href={`/para-quem-e/${segment.slug}`}>Ver se é seu caso</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
