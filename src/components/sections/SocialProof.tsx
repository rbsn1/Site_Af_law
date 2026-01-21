import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Cliente — A.F.",
    quote: "Atendimento estratégico e direto. Agora temos um plano claro para os próximos passos."
  },
  {
    name: "Cliente — M.R.",
    quote: "Organização patrimonial sem improviso. A avaliação trouxe segurança para nossa família."
  },
  {
    name: "Cliente — J.S.",
    quote: "Processo claro em etapas, com comunicação transparente e foco em prevenção."
  }
];

export function SocialProof() {
  return (
    <section className="section-padding bg-light">
      <div className="container-page space-y-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Prova social</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy">Atendimento estratégico e personalizado</h2>
          <p className="mt-2 text-sm text-navy/60">
            Depoimentos ilustrativos; substitua por reais quando tiver permissão.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="space-y-4">
              <p className="text-sm text-navy/70">“{item.quote}”</p>
              <p className="text-sm font-semibold text-navy">{item.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
