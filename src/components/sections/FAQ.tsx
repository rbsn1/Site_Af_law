import Link from "next/link";

import { faqs } from "@/data/faqs";
import { Button } from "@/components/ui/button";

export function FAQ() {
  return (
    <section className="section-padding bg-light">
      <div className="container-page space-y-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy">Perguntas frequentes</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-navy/10 bg-white p-6 text-navy"
            >
              <summary className="cursor-pointer text-base font-semibold">{faq.question}</summary>
              <p className="mt-3 text-sm text-navy/70">{faq.answer}</p>
            </details>
          ))}
        </div>
        <div>
          <Button asChild size="lg">
            <Link href="/agendar">Agende sua Avaliação Patrimonial</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
