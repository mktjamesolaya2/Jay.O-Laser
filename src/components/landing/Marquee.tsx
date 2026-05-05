import p1 from "@/assets/proc-1.jpg";
import p2 from "@/assets/proc-2.jpg";
import p3 from "@/assets/proc-3.jpg";
import p4 from "@/assets/proc-4.jpg";
import p5 from "@/assets/proc-5.jpg";
import p6 from "@/assets/proc-6.jpg";
import machine from "@/assets/jayo-machine.png";

const items = [
  { src: p1, label: "Remoção facial", h: "tall" },
  { src: p2, label: "Aplicação clínica", h: "wide" },
  { src: p3, label: "Tatuagem indesejada", h: "tall" },
  { src: machine, label: "Jayo Laser", h: "wide", contain: true },
  { src: p4, label: "Ambiente premium", h: "wide" },
  { src: p5, label: "Micropigmentação", h: "tall" },
  { src: p6, label: "Resultado visível", h: "wide" },
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <section className="py-16 md:py-24 bg-gradient-marble overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 mb-10 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-gold">Aplicações</p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-foreground">
          Uma galeria viva de transformações
        </h2>
      </div>

      <div className="marquee-container relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-6 w-max animate-marquee">
          {loop.map((it, i) => (
            <figure
              key={i}
              className={`relative shrink-0 rounded-xl overflow-hidden shadow-soft border border-border/60 bg-card ${
                it.h === "tall" ? "w-[260px] h-[360px]" : "w-[440px] h-[360px]"
              }`}
            >
              <img
                src={it.src}
                alt={it.label}
                className={`w-full h-full ${it.contain ? "object-contain p-6 bg-marble" : "object-cover"}`}
                loading="lazy"
              />
              <figcaption className="absolute bottom-0 inset-x-0 p-3 text-xs tracking-wider uppercase text-white bg-gradient-to-t from-black/60 to-transparent">
                {it.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
