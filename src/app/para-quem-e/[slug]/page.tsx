import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { segments } from "@/data/segments";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return segments.map((segment) => ({ slug: segment.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const segment = segments.find((item) => item.slug === params.slug);
  if (!segment) {
    return { title: "Segmento não encontrado" };
  }
  return {
    title: segment.title,
    description: segment.description
  };
}

export default function SegmentPage({ params }: PageProps) {
  const segment = segments.find((item) => item.slug === params.slug);
  if (!segment) {
    notFound();
  }

  return (
    <section className="section-padding">
      <div className="container-page space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Para quem é</p>
          <h1 className="text-4xl font-semibold text-navy">{segment.title}</h1>
          <p className="text-base text-navy/70">{segment.description}</p>
        </div>
        <Card className="space-y-4">
          <h2 className="text-xl font-semibold text-navy">Sinais de que faz sentido</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-navy/70">
            {segment.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </Card>
        <Button asChild size="lg">
          <Link href="/agendar">Quero uma avaliação</Link>
        </Button>
      </div>
    </section>
  );
}
