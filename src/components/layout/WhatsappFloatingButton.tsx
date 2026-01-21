import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { siteLinks } from "@/config/site";

export function WhatsappFloatingButton() {
  return (
    <Link
      href={siteLinks.whatsapp}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy shadow-lg transition hover:scale-105"
      aria-label="Abrir WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
}
