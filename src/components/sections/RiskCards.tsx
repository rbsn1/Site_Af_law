import { AlertTriangle, Hourglass, Users } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const risks = [
  {
    title: "Inventário longo e custoso",
    description: "Sem planejamento, o patrimônio pode ficar travado e o processo se estender.",
    icon: Hourglass
  },
  {
    title: "Conflitos entre herdeiros",
    description: "Conflitos familiares são mais comuns do que parece quando regras não estão claras.",
    icon: Users
  },
  {
    title: "Patrimônio travado / desorganizado",
    description: "Documentos e decisões soltas aumentam riscos e custos futuros.",
    icon: AlertTriangle
  }
];

export function RiskCards() {
  return (
    <section className="section-padding bg-light">
      <div className="container-page space-y-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">O custo de não planejar</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy">Sem planejamento, o patrimônio pode ficar travado.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {risks.map((risk) => (
            <Card key={risk.title} className="space-y-4">
              <risk.icon className="h-8 w-8 text-gold" />
              <div>
                <h3 className="text-lg font-semibold text-navy">{risk.title}</h3>
                <p className="text-sm text-navy/70">{risk.description}</p>
              </div>
            </Card>
          ))}
        </div>
        <div>
          <Button asChild>
            <a href="/agendar">Quer entender seu risco? Agende a avaliação.</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
