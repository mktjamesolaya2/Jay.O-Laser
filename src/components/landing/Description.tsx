import machineImg from "@/assets/jayo-machine.png";
import { Star, Activity, Gauge } from "lucide-react";

export function Description() {
  return (
    <section className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="animate-fade-up">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground">
            Por que o Jayo Laser é o<br /> melhor para Remoção?
          </h2>
          <div className="mt-6 h-px w-24 bg-gold" />
          <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Uma revolução 3D portátil com tecnologia Q-Switched de ponta. Sistema aberto
            para ajuste total de parâmetros e pulsos em nanossegundos para precisão absoluta.
          </p>

          <ul className="mt-10 space-y-7">
            <li className="flex gap-4">
              <Star className="h-6 w-6 text-gold shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-semibold text-foreground">Tecnologia Q-Switched</h3>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                  Pulsos de alta energia concentrada para fragmentação precisa de pigmentos.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Activity className="h-6 w-6 text-gold shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-semibold text-foreground">Sistema Totalmente Aberto</h3>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                  Controle absoluto sobre frequência e potência para protocolos personalizados.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Gauge className="h-6 w-6 text-gold shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-semibold text-foreground">Pulsos Nanosegundos</h3>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                  Segurança biológica superior com resultados visíveis desde a primeira sessão.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="relative">
          <img
            src={machineImg}
            alt="Jayo Laser sobre coluna de mármore"
            className="w-full h-auto animate-float"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
