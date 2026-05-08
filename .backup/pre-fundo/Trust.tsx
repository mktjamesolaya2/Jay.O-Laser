import { BadgeCheck, Cpu, Briefcase, ShieldCheck, Award, Sparkles } from "lucide-react";

const cards = [
  { icon: Cpu, title: "Tecnologia Q-Switched", desc: "Padrão clínico para fragmentação precisa de pigmentos." },
  { icon: Briefcase, title: "Apenas 17 quilos", desc: "Portabilidade real para clínicas, estúdios e atendimentos premium." },
  { icon: Sparkles, title: "Construção premium", desc: "Acabamento escultural digno de exposição em qualquer ambiente." },
  { icon: Award, title: "Garantia estendida", desc: "Cobertura ampliada para tranquilidade na operação diária." },
  { icon: BadgeCheck, title: "Registro Anvisa", desc: "Equipamento regularizado e pronto para uso profissional." },
  { icon: ShieldCheck, title: "Segurança biológica", desc: "Pulsos em nanossegundos com performance estável e confiável." },
];

export function Trust() {
  return (
    <section className="py-24 md:py-32 bg-gradient-marble">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gold">Autoridade & Confiança</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-foreground leading-tight">
            Construído para a profissional que entrega excelência
          </h2>
          <div className="divider-gold w-32 mx-auto mt-6" />
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gold/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                </div>
                <h3 className="font-semibold text-foreground">{title}</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
