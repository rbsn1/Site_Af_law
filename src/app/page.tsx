import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { RiskCards } from "@/components/sections/RiskCards";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Steps } from "@/components/sections/Steps";
import { Segments } from "@/components/sections/Segments";
import { SocialProof } from "@/components/sections/SocialProof";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Planejamento Sucessório e Holdings",
  description:
    "Planejamento sucessório e holdings para proteger patrimônio, reduzir riscos e evitar conflitos familiares."
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <RiskCards />
      <ServicesGrid />
      <Steps />
      <Segments />
      <SocialProof />
      <LeadMagnet />
      <FAQ />
      <FinalCTA />
    </>
  );
}
