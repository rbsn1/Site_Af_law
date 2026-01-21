import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Informações sobre o uso de cookies no site."
};

export default function CookiesPage() {
  return (
    <section className="section-padding">
      <div className="container-page space-y-6">
        <h1 className="text-4xl font-semibold text-navy">Cookies</h1>
        <p className="text-sm text-navy/70">
          Este site pode usar cookies para melhorar a experiência e analisar navegação. Ajuste conforme sua política.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-navy/70">
          <li>Cookies essenciais para funcionamento do site.</li>
          <li>Cookies analíticos apenas se habilitados pelo usuário.</li>
        </ul>
      </div>
    </section>
  );
}
