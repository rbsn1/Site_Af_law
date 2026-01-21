import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos e condições de uso do site."
};

export default function TermosPage() {
  return (
    <section className="section-padding">
      <div className="container-page space-y-6">
        <h1 className="text-4xl font-semibold text-navy">Termos de Uso</h1>
        <p className="text-sm text-navy/70">
          Conteúdo informativo. Sem promessa de resultado. O uso deste site não cria relação
          advogado-cliente automática.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-navy/70">
          <li>As informações são meramente informativas.</li>
          <li>Não há garantia de resultado em qualquer serviço.</li>
          <li>Contato e atendimento dependem de agendamento.</li>
        </ul>
      </div>
    </section>
  );
}
