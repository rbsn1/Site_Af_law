import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="gradient-hero pt-28 text-white">
      <div className="container-page section-padding">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Planejamento patrimonial estratégico
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Planejamento Sucessório e Holdings para proteger seu patrimônio e evitar conflitos familiares.
          </h1>
          <p className="text-lg text-white/80">
            Para famílias e empresários que desejam organizar bens com segurança, previsibilidade e tranquilidade.
          </p>
          <ul className="text-sm text-white/80">
            <li>• Evite travas e desgaste futuro • Organize regras e documentos • Estruture um plano executável</li>
          </ul>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/agendar">Agendar Avaliação</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white">
              <Link href="/materiais#checklist">Baixar Checklist</Link>
            </Button>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm text-white/80">
            Atuação focada • Atendimento estratégico • Confidencialidade e LGPD
          </div>
        </div>
      </div>
    </section>
  );
}
