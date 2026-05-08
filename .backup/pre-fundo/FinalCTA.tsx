import machineImg from "@/assets/jayo-machine.png";
import { CTAButton } from "./CTAButton";

export function FinalCTA() {
  return (
    <section id="cta" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-celestial" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.11_80/0.18),transparent_60%)]" />
      {/* Soft architectural arches */}
      <svg
        aria-hidden
        className="absolute inset-x-0 top-10 mx-auto opacity-20"
        width="900"
        height="300"
        viewBox="0 0 900 300"
        fill="none"
      >
        <path d="M50 300 V120 a100 100 0 0 1 200 0 V300" stroke="oklch(0.6 0.12 70)" strokeWidth="1" />
        <path d="M350 300 V120 a100 100 0 0 1 200 0 V300" stroke="oklch(0.6 0.12 70)" strokeWidth="1" />
        <path d="M650 300 V120 a100 100 0 0 1 200 0 V300" stroke="oklch(0.6 0.12 70)" strokeWidth="1" />
      </svg>

      <div className="relative container mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-gold">Sua ascensão começa aqui</p>
        <h2 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] text-foreground">
          Eleve sua prática ao <br />
          <span className="text-gradient-gold italic">patamar dos deuses</span>
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground">
          Tecnologia Q-Switched, presença escultural e a Imersão de 3 dias incluída.
          O instrumento de domínio que sua autoridade profissional merece.
        </p>

        <div className="mt-12 relative mx-auto w-full max-w-md">
          <img
            src={machineImg}
            alt="Jayo Laser"
            className="w-full h-auto animate-float drop-shadow-2xl"
            loading="lazy"
          />
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton>Quero meu Jayo Laser</CTAButton>
          <span className="text-sm text-muted-foreground">+ Imersão de 3 dias inclusa</span>
        </div>
      </div>
    </section>
  );
}
