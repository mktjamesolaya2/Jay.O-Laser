import { Crown, Sparkles, Layers, ShieldCheck, TrendingUp } from "lucide-react";
import machineImg from "@/assets/jayo-machine.png";
import { CTAButton } from "./CTAButton";

const items = [
  { icon: Crown, title: "Autoridade no atendimento", desc: "Apresente um equipamento que comunica sofisticação antes mesmo da primeira aplicação." },
  { icon: Sparkles, title: "Precisão para protocolos", desc: "Personalize cada sessão com controle total de frequência, potência e pulso." },
  { icon: Layers, title: "Versatilidade total", desc: "Clareamento, remoção de pigmentos, micropigmentação e tatuagens indesejadas." },
  { icon: TrendingUp, title: "Mais valor por serviço", desc: "Eleve seu ticket médio com uma tecnologia que justifica investimento premium." },
  { icon: ShieldCheck, title: "Segurança e confiança", desc: "Pulsos em nanossegundos garantem segurança biológica e resultados consistentes." },
];

export function Benefits() {
  return (
    <section className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gold">Diferenciais</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-foreground leading-tight">
            Por que escolher o Jayo Laser
          </h2>
          <div className="divider-gold w-32 mx-auto mt-6" />
          <p className="mt-6 text-muted-foreground">
            Mais que tecnologia — um instrumento de domínio para a profissional que entrega
            resultados clínicos com presença escultural.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-12 gap-6">
          <article className="md:col-span-7 relative rounded-2xl overflow-hidden border border-border bg-gradient-marble shadow-elegant p-10 flex flex-col justify-between min-h-[420px]">
            <div>
              <Crown className="h-8 w-8 text-gold" strokeWidth={1.4} />
              <h3 className="mt-6 font-serif text-3xl md:text-4xl leading-tight">
                Um artefato de excelência <em className="not-italic text-gradient-gold">na sua bancada</em>
              </h3>
              <p className="mt-5 text-muted-foreground max-w-md">
                Design escultural, presença monumental e desempenho clínico de ponta. O Jayo Laser
                eleva a experiência do seu cliente desde o primeiro olhar.
              </p>
            </div>
            <img
              src={machineImg}
              alt=""
              aria-hidden
              className="absolute -right-12 -bottom-10 w-[55%] opacity-90 pointer-events-none select-none"
            />
          </article>

          <div className="md:col-span-5 grid gap-6">
            {items.slice(0, 2).map(({ icon: Icon, title, desc }) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
                <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>

          {items.slice(2).map(({ icon: Icon, title, desc }) => (
            <article key={title} className="md:col-span-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
              <Icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
              <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <CTAButton>Quero meu Jayo Laser</CTAButton>
        </div>
      </div>
    </section>
  );
}
