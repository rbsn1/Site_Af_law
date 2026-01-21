import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LeadMagnet() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <div className="rounded-3xl border border-navy/10 bg-navy px-8 py-12 text-white md:px-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Checklist estratégico</p>
              <h2 className="text-3xl font-semibold">
                Receba o Checklist de Documentos e chegue na avaliação com tudo organizado
              </h2>
              <p className="text-sm text-white/75">
                Conteúdo informativo. Resultados variam conforme o caso. Sem promessa de resultado.
              </p>
            </div>
            <form className="space-y-4">
              <Input placeholder="Seu nome" name="name" required />
              <Input placeholder="WhatsApp" name="whatsapp" required />
              <Input placeholder="Email (opcional)" name="email" type="email" />
              <Button type="submit" className="w-full">
                Quero o Checklist
              </Button>
              <p className="text-xs text-white/60">Conteúdo informativo • Sem promessa de resultado.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
