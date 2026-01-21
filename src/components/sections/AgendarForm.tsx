"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { buildWhatsappLink, buildWhatsappMessage } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Toast } from "@/components/ui/toast";

const schema = z.object({
  nome: z.string().min(2, "Informe seu nome"),
  whatsapp: z.string().min(10, "Informe um WhatsApp válido"),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  cidade: z.string().min(2, "Informe a cidade/estado"),
  empresa: z.string().min(1, "Selecione uma opção"),
  imoveis: z.string().min(1, "Informe a quantidade"),
  inventario: z.string().min(1, "Selecione uma opção"),
  objetivo: z.string().min(3, "Informe seu objetivo"),
  urgencia: z.string().min(1, "Selecione a urgência"),
  descricao: z.string().min(5, "Escreva um breve resumo")
});

type FormData = z.infer<typeof schema>;

const defaultValues: FormData = {
  nome: "",
  whatsapp: "",
  email: "",
  cidade: "",
  empresa: "",
  imoveis: "",
  inventario: "",
  objetivo: "",
  urgencia: "",
  descricao: ""
};

function formatWhatsApp(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  const parts = [digits.slice(0, 2), digits.slice(2, 7), digits.slice(7, 11)].filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return `(${parts[0]}`;
  if (parts.length === 2) return `(${parts[0]}) ${parts[1]}`;
  return `(${parts[0]}) ${parts[1]}-${parts[2]}`;
}

export function AgendarForm() {
  const [toastVisible, setToastVisible] = useState(false);
  const [leadSummary, setLeadSummary] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues });

  const whatsappValue = watch("whatsapp");

  const handleWhatsappChange = (value: string) => {
    const formatted = formatWhatsApp(value);
    setValue("whatsapp", formatted, { shouldValidate: true });
  };

  const onSubmit = (data: FormData) => {
    const message = buildWhatsappMessage({
      objetivo: data.objetivo,
      imoveis: data.imoveis,
      empresa: data.empresa === "sim" ? "tenho empresa" : "não tenho empresa",
      urgencia: data.urgencia,
      cidade: data.cidade,
      descricao: data.descricao
    });

    const url = buildWhatsappLink(message);
    setLeadSummary(message);
    setWhatsappLink(url);
    setToastVisible(true);
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => setToastVisible(false), 3500);
  };

  const copySummary = async () => {
    if (!leadSummary) return;
    await navigator.clipboard.writeText(leadSummary);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  const summaryFields = useMemo(
    () => [
      { label: "Nome", value: watch("nome") },
      { label: "WhatsApp", value: whatsappValue },
      { label: "Email", value: watch("email") },
      { label: "Cidade/Estado", value: watch("cidade") },
      { label: "Tem empresa", value: watch("empresa") },
      { label: "Imóveis", value: watch("imoveis") },
      { label: "Inventário em andamento", value: watch("inventario") },
      { label: "Objetivo", value: watch("objetivo") },
      { label: "Urgência", value: watch("urgencia") }
    ],
    [watch, whatsappValue]
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <Toast message="Recebido! Agora vamos para o WhatsApp." visible={toastVisible} />
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Input placeholder="Nome" {...register("nome")} />
            {errors.nome && <p className="mt-1 text-xs text-red-500">{errors.nome.message}</p>}
          </div>
          <div>
            <Input
              placeholder="WhatsApp"
              value={whatsappValue}
              onChange={(event) => handleWhatsappChange(event.target.value)}
            />
            {errors.whatsapp && (
              <p className="mt-1 text-xs text-red-500">{errors.whatsapp.message}</p>
            )}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Input placeholder="Email (opcional)" type="email" {...register("email")} />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <Input placeholder="Cidade/Estado" {...register("cidade")} />
            {errors.cidade && <p className="mt-1 text-xs text-red-500">{errors.cidade.message}</p>}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <Select {...register("empresa")}>
              <option value="">Tem empresa?</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </Select>
            {errors.empresa && <p className="mt-1 text-xs text-red-500">{errors.empresa.message}</p>}
          </div>
          <div>
            <Select {...register("imoveis")}>
              <option value="">Quantos imóveis?</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4 ou mais</option>
            </Select>
            {errors.imoveis && <p className="mt-1 text-xs text-red-500">{errors.imoveis.message}</p>}
          </div>
          <div>
            <Select {...register("inventario")}>
              <option value="">Inventário em andamento?</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
              <option value="nao-sei">Não sei</option>
            </Select>
            {errors.inventario && (
              <p className="mt-1 text-xs text-red-500">{errors.inventario.message}</p>
            )}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Input placeholder="Objetivo principal" {...register("objetivo")} />
            {errors.objetivo && (
              <p className="mt-1 text-xs text-red-500">{errors.objetivo.message}</p>
            )}
          </div>
          <div>
            <Select {...register("urgencia")}>
              <option value="">Urgência</option>
              <option value="imediata">Imediata</option>
              <option value="30-dias">Até 30 dias</option>
              <option value="90-dias">Até 90 dias</option>
              <option value="planejamento">Sem pressa, mas preciso organizar</option>
            </Select>
            {errors.urgencia && <p className="mt-1 text-xs text-red-500">{errors.urgencia.message}</p>}
          </div>
        </div>
        <div>
          <Textarea placeholder="Descrição breve do cenário" {...register("descricao")} />
          {errors.descricao && <p className="mt-1 text-xs text-red-500">{errors.descricao.message}</p>}
        </div>
        <Button type="submit" size="lg">
          Enviar e falar no WhatsApp
        </Button>
        <p className="text-xs text-navy/60">
          Conteúdo informativo. Resultados variam conforme o caso. Sem promessa de resultado.
        </p>
      </form>
      <div className="space-y-6">
        <div className="rounded-2xl border border-navy/10 bg-light p-6">
          <h2 className="text-lg font-semibold text-navy">Resumo do lead</h2>
          <p className="mt-2 text-sm text-navy/70">
            Confirme suas informações. Após enviar, o WhatsApp será aberto automaticamente.
          </p>
          <div className="mt-4 space-y-2 text-sm text-navy/70">
            {summaryFields.map((item) => (
              <p key={item.label}>
                <span className="font-semibold text-navy">{item.label}:</span> {item.value || "—"}
              </p>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-navy/10 bg-white p-6">
          <h3 className="text-sm font-semibold text-navy">Mensagem gerada</h3>
          <p className="mt-2 text-xs text-navy/60">Copie se preferir enviar manualmente.</p>
          <div className="mt-3 rounded-xl border border-navy/10 bg-light p-3 text-xs text-navy/70">
            {leadSummary || "A mensagem aparecerá aqui após o envio."}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button type="button" variant="secondary" onClick={copySummary} disabled={!leadSummary}>
              Copiar resumo
            </Button>
            {whatsappLink && (
              <Button asChild variant="outline">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  Abrir WhatsApp
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
