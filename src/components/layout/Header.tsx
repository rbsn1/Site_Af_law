import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Serviços", href: "/servicos" },
  { label: "Para quem é", href: "/para-quem-e" },
  { label: "Conteúdos", href: "/conteudos" },
  { label: "Materiais", href: "/materiais" },
  { label: "Sobre", href: "/sobre" }
];

export function Header() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-navy/10 bg-white/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-navy">
          {siteConfig.officeName}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-navy/70 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-navy">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild className="hidden lg:inline-flex">
            <Link href="/agendar">Agendar Avaliação</Link>
          </Button>
          <Button asChild size="sm" className="lg:hidden">
            <Link href="/agendar">Agendar</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
