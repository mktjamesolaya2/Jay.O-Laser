import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { HeroBadges } from "@/components/landing/HeroBadges";
import { Description } from "@/components/landing/Description";
import { Marquee } from "@/components/landing/Marquee";
import { Benefits } from "@/components/landing/Benefits";
import { Bonus } from "@/components/landing/Bonus";
import { Trust } from "@/components/landing/Trust";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jayo Laser — Tecnologia Q-Switched de Remoção de Pigmentos" },
      {
        name: "description",
        content:
          "Jayo Laser: máquina premium de remoção de pigmentos, micropigmentação e tatuagens com tecnologia Q-Switched. Inclui imersão de 3 dias.",
      },
      { property: "og:title", content: "Jayo Laser — Remoção de Pigmentos Premium" },
      {
        property: "og:description",
        content:
          "Equipamento profissional Q-Switched com imersão de 3 dias inclusa. Eleve sua autoridade clínica.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <HeroBadges />
      <Description />
      <Marquee />
      <Benefits />
      <Bonus />
      <Trust />
      <FAQ />
      <FinalCTA />
      <footer className="py-10 text-center text-xs tracking-widest uppercase text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Jayo Laser — Todos os direitos reservados
      </footer>
    </main>
  );
}
