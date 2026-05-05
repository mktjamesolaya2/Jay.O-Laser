import { GraduationCap, Users, Wrench } from "lucide-react";
import { CTAButton } from "./CTAButton";

export function Bonus() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.95_0.04_230)_0%,oklch(0.97_0.012_85)_45%,oklch(0.92_0.03_80)_100%)]" />
      <div className="absolute inset-0 opacity-[0.07] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><path fill=%22%23a07a32%22 d=%22M0 0h120v1H0zM0 60h120v1H0z%22/></svg>')]" />

      <div className="relative container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full border border-gold/60 bg-background/60 backdrop-blur px-4 py-1.5 text-[11px] tracking-[0.3em] uppercase text-gold">
            Bônus exclusivo
          </span>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] text-foreground">
            Ao adquirir o Jayo Laser,<br /> você também recebe sua{" "}
            <span className="text-gradient-gold italic">Imersão de 3 Dias</span>
          </h2>
          <div className="divider-gold w-40 mx-auto mt-8" />
        </div>

        <div className="mt-12 mx-auto max-w-3xl rounded-3xl border border-gold/30 bg-card/80 backdrop-blur-sm p-10 md:p-14 shadow-elegant relative">
          <div className="absolute -top-px left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground text-center italic">
            “São 3 dias de imersão, para que você domine as técnicas e protocolos de
            clareamento e remoção de Pigmentos, e aprenda como criar soluções para
            micropigmentação e tatuagens indesejadas com aparelhos mais modernos à sua
            disposição, e com a supervisão e auxílio de profissionais referência no assunto.”
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: GraduationCap, t: "Técnica", d: "Domínio dos protocolos de clareamento e remoção." },
            { icon: Wrench, t: "Prática", d: "Aplicação real com aparelhos modernos e supervisionada." },
            { icon: Users, t: "Supervisão", d: "Acompanhamento de profissionais referência no assunto." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 text-center">
              <Icon className="h-7 w-7 text-gold mx-auto" strokeWidth={1.4} />
              <h3 className="mt-4 font-serif text-xl text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton variant="outline">Garantir máquina + imersão</CTAButton>
        </div>
      </div>
    </section>
  );
}
