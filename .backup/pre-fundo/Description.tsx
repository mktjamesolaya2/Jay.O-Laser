import { Star, SlidersVertical, Gauge } from "lucide-react";
import pilastraImg from "@/assets/Pilastra_semfundo.png";

const features = [
  {
    icon: Star,
    title: "Tecnologia Q-Switched",
    desc: "Pulsos de alta energia controlados para fragmentação precisa de pigmentos.",
  },
  {
    icon: SlidersVertical,
    title: "Sistema Totalmente Aberto",
    desc: "Controle absoluto sobre frequência e potência para protocolos personalizados.",
  },
  {
    icon: Gauge,
    title: "Pulsos Nanossegundos",
    desc: "Segurança biológica superior com resultados visíveis desde a primeira sessão.",
  },
];

export function Description() {
  return (
    <section className="relative bg-background pt-6 pb-2 md:pt-10 md:pb-4">
      <div className="container mx-auto max-w-[1325px] px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-6">
          <div className="max-w-xl">
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.1] text-[#3a2516]">
              Por que o Jayo Laser é o melhor para Remoção?
            </h2>

            <p className="mt-6 font-['Lora'] text-[clamp(0.95rem,1.15vw,1.05rem)] leading-relaxed text-[#5a4030]">
              Uma revolução 3D portátil com tecnologia Q-Switched de ponta.
              Sistema aberto para ajuste total de parâmetros e pulsos em
              nanossegundos para precisão absoluta.
            </p>

            <ul className="mt-8 space-y-5">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <li key={f.title} className="flex items-start gap-3">
                    <Icon
                      className="mt-1 h-6 w-6 flex-shrink-0 text-gold"
                      strokeWidth={1.6}
                      fill={f.icon === Star ? "currentColor" : "none"}
                    />
                    <div>
                      <p className="font-['Cormorant_Garamond'] text-lg font-semibold leading-tight text-[#3a2516]">
                        {f.title}
                      </p>
                      <p className="mt-1 font-['Lora'] text-sm leading-relaxed text-[#6b4a28]">
                        {f.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative flex items-start justify-center">
            <img
              src={pilastraImg}
              alt="Jayo Laser sobre pilastra grega — máquina premium de remoção de pigmentos"
              className="block h-auto w-full max-w-md mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
