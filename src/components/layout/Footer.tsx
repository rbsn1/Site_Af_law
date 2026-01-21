import Link from "next/link";

import { siteConfig } from "@/config/site";

const legalLinks = [
  { label: "Privacidade", href: "/privacidade" },
  { label: "Termos", href: "/termos" },
  { label: "Cookies", href: "/cookies" }
];

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-light">
      <div className="container-page flex flex-col gap-8 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold text-navy">{siteConfig.officeName}</p>
            <p className="text-sm text-navy/70">{siteConfig.address}</p>
            <p className="text-sm text-navy/70">{siteConfig.email}</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-navy/70">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-navy">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-2 text-xs text-navy/60">
          <p>Conteúdo informativo. Atendimento sob agendamento. Conforme normas da OAB.</p>
          <p>Resultados variam conforme o caso. Sem promessa de resultado.</p>
        </div>
      </div>
    </footer>
  );
}
