import fundoVantagens from "@/assets/Fundo2.png";

const specs = [
  {
    stat: "1064nm",
    label: "Pigmentos Escuros",
    desc: "Comprimento de onda otimizado para remoção profunda em tons escuros, com penetração precisa e segura.",
  },
  {
    stat: "532nm",
    label: "Pigmentos Claros",
    desc: "Frequência ideal para clareamento e tons claros, atuando com sensibilidade clínica e máxima eficácia.",
  },
  {
    stat: "Q-Switched",
    label: "Tecnologia Premium",
    desc: "Pulsos em nanossegundos garantem segurança biológica e fragmentação precisa do pigmento.",
  },
  {
    stat: "Portátil",
    label: "Compacto & Leve",
    desc: "Equipamento sofisticado e fácil de transportar — ideal para clínicas, atendimentos e aluguel.",
  },
];

export function Benefits() {
  return (
    <section className="relative py-24 md:py-36 min-h-[700px] md:min-h-[850px] overflow-hidden">
      <img
        src={fundoVantagens}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[85%_top] md:object-top"
        loading="lazy"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 md:h-20 bg-gradient-to-b from-background to-transparent z-[5]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 md:h-40 bg-gradient-to-t from-background to-transparent z-[5]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-[5]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-[5]" />

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-3/5 md:w-1/2 z-[6]"
        style={{
          background:
            "linear-gradient(to right, rgba(244, 238, 221, 0.88) 0%, rgba(244, 238, 221, 0.6) 45%, rgba(244, 238, 221, 0.15) 80%, transparent 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="font-['Cinzel'] text-xs md:text-sm tracking-[0.4em] uppercase text-gold-deep mb-5">
            Tecnologia que eleva resultados
          </p>

          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl text-[#3a2516] leading-[1.05]">
            Principais Vantagens
            <br />
            <span className="italic text-gold-deep">Jayo Laser</span>
          </h2>

          <div className="divider-gold w-32 mt-6" />

          <p className="mt-8 font-['Lora'] text-base md:text-lg text-[#5a4030] leading-relaxed max-w-2xl">
            Tecnologia adaptativa que entrega precisão absoluta em cada
            protocolo — o Jay.O combina dois comprimentos de onda em um único
            equipamento compacto, projetado para profissionais que exigem
            excelência clínica.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {specs.map(({ stat, label, desc }) => (
              <article
                key={stat}
                className="group relative rounded-xl border border-gold/20 bg-card/85 backdrop-blur-sm p-6 md:p-7 transition-all duration-300 hover:border-gold/45 hover:bg-card/95 hover:-translate-y-0.5"
              >
                <span className="absolute top-4 left-4 w-2 h-2 bg-gold-deep" />

                <div className="pl-6 md:pl-7">
                  <div className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-[#3a2516] leading-none">
                    {stat}
                  </div>

                  <div className="mt-2 font-['Cinzel'] text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold-deep">
                    {label}
                  </div>

                  <p className="mt-3 font-['Lora'] text-sm text-[#5a4030] leading-relaxed">
                    {desc}
                  </p>
                </div>

                <span className="absolute bottom-4 right-4 h-px w-8 bg-gradient-to-r from-transparent to-gold/50" />
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
