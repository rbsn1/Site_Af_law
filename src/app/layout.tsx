import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsappFloatingButton } from "@/components/layout/WhatsappFloatingButton";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Planejamento Sucessório e Holdings | Silva Advocacia Patrimonial",
    template: "%s | Silva Advocacia Patrimonial"
  },
  description:
    "Planejamento sucessório, holdings e organização patrimonial com atendimento estratégico para famílias e empresários.",
  metadataBase: new URL("https://www.exemplo.com"),
  openGraph: {
    title: "Planejamento Sucessório e Holdings",
    description:
      "Proteja patrimônio e evite conflitos familiares com planejamento sucessório e holdings bem estruturadas.",
    url: "https://www.exemplo.com",
    siteName: "Silva Advocacia Patrimonial",
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsappFloatingButton />
      </body>
    </html>
  );
}
