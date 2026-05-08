import { Landmark, Users } from "lucide-react";
import certificado from "@/assets/cert2.png";
import { CTAButton } from "./CTAButton";

export function BonusDetails() {
  return (
    <section className="relative py-12 md:py-20 bg-background overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[60%]"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(184, 150, 86, 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/3 w-72 h-72 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(184, 150, 86, 0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 w-72 h-72 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(184, 150, 86, 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center mb-10 md:mb-14">
          <span className="text-gold/70 text-base leading-none select-none mb-4">◆</span>

          <h3 className="font-['Cormorant_Garamond'] text-3xl md:text-5xl text-[#3a2516] leading-tight text-center max-w-4xl">
            Adquirindo o Jay.O Laser você leva o curso completo{" "}
            <span className="italic text-gold-deep">JAY REMOVE</span> por James Olaya.
          </h3>
        </div>

        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-start">
          <div className="flex flex-col gap-0">
            <div className="space-y-6 font-['Lora'] text-sm md:text-base leading-relaxed text-[#5a4030] text-justify">
              <div className="flex gap-4 md:gap-5">
                <div className="grid place-items-center shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full border border-gold/40 bg-background/60 mt-0.5">
                  <Landmark className="h-5 w-5 text-gold" strokeWidth={1.4} />
                </div>
                <p>
                  São{" "}
                  <strong className="font-semibold text-[#3a2516]">
                    3 dias de imersão
                  </strong>
                  , para que você domine as técnicas e protocolos de clareamento
                  e remoção de Pigmentos, e aprenda como criar soluções para
                  micropigmentação e tatuagens indesejadas com aparelhos mais
                  modernos à sua disposição, e com a supervisão e auxílio de
                  profissionais referência no assunto.
                </p>
              </div>

              <div className="flex gap-4 md:gap-5">
                <div className="grid place-items-center shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full border border-gold/40 bg-background/60 mt-0.5">
                  <Users className="h-5 w-5 text-gold" strokeWidth={1.4} />
                </div>
                <p>
                  Pensando em você cliente parceiro, queremos que realmente
                  empreenda no segmento da remoção e execute com perfeição a
                  técnica de remoção de pigmentos e tatuagem, por isso, na
                  compra do seu Jay.O Laser você receberá o curso mais completo
                  de remoção por quem realmente entende no mercado.
                </p>
              </div>
            </div>

            <img
              src={certificado}
              alt="Certificado de Participação JAY REMOVE"
              className="w-full max-w-xs h-auto mx-auto -mt-16 md:-mt-20"
              style={{
                filter:
                  "drop-shadow(0 18px 28px rgba(58, 37, 22, 0.18)) drop-shadow(0 6px 14px rgba(184, 150, 86, 0.15))",
              }}
              loading="lazy"
            />
          </div>

          <div
            className="relative aspect-video rounded-2xl overflow-hidden border border-gold/30 bg-card"
            style={{
              boxShadow:
                "0 25px 50px -12px rgba(58, 37, 22, 0.25), 0 0 0 1px rgba(184, 150, 86, 0.1)",
            }}
          >
            <div
              className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(184, 150, 86, 0.15) 0%, transparent 70%)",
              }}
            />
            <iframe
              src="https://www.youtube.com/embed/KEegeT5zRA0"
              title="Curso JAY REMOVE — James Olaya"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <p className="-mt-16 md:-mt-20 text-center font-['Cormorant_Garamond'] text-xs md:text-sm tracking-[0.3em] uppercase text-[#3a2516] max-w-3xl mx-auto">
          Torne-se um profissional em Remoção com o{" "}
          <span className="italic text-gold-deep">Jay.O Laser</span>.
        </p>

        {/* Final CTA — leads to ContactCTA at the bottom */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <CTAButton>Quero meu laser Jay.O</CTAButton>
        </div>
      </div>
    </section>
  );
}
