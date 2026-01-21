import Link from "next/link";

import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <div className="rounded-3xl border border-navy/10 bg-white p-10 text-center shadow-card">
          <h2 className="text-3xl font-semibold text-navy">
            Está pronto para organizar seu patrimônio com segurança?
          </h2>
          <p className="mt-3 text-sm text-navy/70">
            Avaliação patrimonial estratégica para entender riscos, prioridades e próximos passos.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/agendar">Agendar Avaliação</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/materiais#checklist">Baixar Checklist</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
