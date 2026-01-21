import type { Metadata } from "next";

import { AgendarForm } from "@/components/sections/AgendarForm";

export const metadata: Metadata = {
  title: "Agendar Avaliação",
  description:
    "Agende uma avaliação patrimonial estratégica e receba um diagnóstico inicial sobre seu cenário."
};

export default function AgendarPage() {
  return (
    <section className="section-padding">
      <div className="container-page space-y-8">
        <div>
          <h1 className="text-4xl font-semibold text-navy">Agendar avaliação patrimonial</h1>
          <p className="mt-3 text-sm text-navy/70">
            Preencha a triagem. Após enviar, você será direcionado ao WhatsApp para confirmar o atendimento.
          </p>
        </div>
        <AgendarForm />
      </div>
    </section>
  );
}
