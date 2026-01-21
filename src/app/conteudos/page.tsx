import type { Metadata } from "next";

import { ConteudosClient } from "@/components/sections/ConteudosClient";

export const metadata: Metadata = {
  title: "Conteúdos",
  description: "Conteúdos informativos sobre planejamento sucessório, holdings e organização patrimonial."
};

export default function ConteudosPage() {
  return (
    <section className="section-padding">
      <div className="container-page space-y-10">
        <div>
          <h1 className="text-4xl font-semibold text-navy">Conteúdos</h1>
          <p className="mt-3 text-sm text-navy/70">
            Conteúdo informativo para orientar decisões sobre patrimônio e sucessão.
          </p>
        </div>
        <ConteudosClient />
      </div>
    </section>
  );
}
