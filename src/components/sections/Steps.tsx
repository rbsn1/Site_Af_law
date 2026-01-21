import { Badge } from "@/components/ui/badge";

const steps = [
  {
    title: "Diagnóstico do cenário",
    description: "Objetivos, riscos e prioridades para entender seu ponto de partida."
  },
  {
    title: "Estratégia personalizada",
    description: "Opções claras com recomendação alinhada ao seu perfil."
  },
  {
    title: "Implementação com segurança",
    description: "Execução acompanhada para transformar o plano em realidade."
  }
];

export function Steps() {
  return (
    <section className="section-padding bg-light">
      <div className="container-page space-y-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Como funciona</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy">Processo claro em 3 etapas</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-navy/10 bg-white p-6">
              <Badge variant="gold">Etapa {index + 1}</Badge>
              <h3 className="mt-4 text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm text-navy/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
