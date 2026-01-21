import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Informações sobre coleta e uso de dados pessoais."
};

export default function PrivacidadePage() {
  return (
    <section className="section-padding">
      <div className="container-page space-y-6">
        <h1 className="text-4xl font-semibold text-navy">Política de Privacidade</h1>
        <p className="text-sm text-navy/70">
          Conteúdo informativo. Descreva aqui como dados pessoais são coletados, usados e armazenados.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-navy/70">
          <li>Coletamos apenas dados necessários para contato e atendimento.</li>
          <li>Dados são usados para responder solicitações e fornecer informações solicitadas.</li>
          <li>Você pode solicitar atualização ou exclusão dos dados a qualquer momento.</li>
        </ul>
      </div>
    </section>
  );
}
