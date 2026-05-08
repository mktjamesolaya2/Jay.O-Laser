import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import p1 from "@/assets/IMG_3385.jpg";
import p2 from "@/assets/IMG_3507.jpg";
import p3 from "@/assets/IMG_3530.jpg";
import p4 from "@/assets/IMG_3717.jpg";
import p5 from "@/assets/IMG_3805.jpg";
import p6 from "@/assets/IMG_3927.jpg";
import p7 from "@/assets/IMG_4054.jpg";
import p8 from "@/assets/IMG_4055.jpg";
import p9 from "@/assets/IMG_4087.jpg";
import p10 from "@/assets/IMG_4106.jpg";

const items = [
  { src: p1, label: "Remoção facial", h: "tall" },
  { src: p2, label: "Aplicação clínica", h: "wide" },
  { src: p3, label: "Tatuagem indesejada", h: "tall" },
  { src: p4, label: "Ambiente premium", h: "wide" },
  { src: p5, label: "Micropigmentação", h: "tall" },
  { src: p6, label: "Resultado visível", h: "wide" },
  { src: p7, label: "Tratamento a laser", h: "tall" },
  { src: p8, label: "Pele renovada", h: "wide" },
  { src: p9, label: "Sessão personalizada", h: "tall" },
  { src: p10, label: "Tecnologia avançada", h: "wide" },
];

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const arrowAnimatingRef = useRef(false);
  const [paused, setPaused] = useState(false);
  const loop = [...items, ...items];

  useEffect(() => {
    if (paused) return;
    const el = trackRef.current;
    if (!el) return;

    const speed = 0.6;

    const tick = () => {
      if (!arrowAnimatingRef.current) {
        const half = el.scrollWidth / 2;
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
        el.scrollLeft += speed;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [paused]);

  const handleArrow = (
    e: React.MouseEvent<HTMLButtonElement>,
    dir: "left" | "right"
  ) => {
    e.stopPropagation();
    const el = trackRef.current;
    if (!el) return;
    arrowAnimatingRef.current = true;
    el.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    window.setTimeout(() => {
      arrowAnimatingRef.current = false;
    }, 600);
  };

  const toggleTrack = () => {
    setPaused((p) => !p);
  };

  return (
    <section className="py-8 md:py-12 bg-gradient-marble overflow-hidden">
      <div className="marquee-container relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

        <button
          type="button"
          onClick={(e) => handleArrow(e, "left")}
          aria-label="Anterior"
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 text-foreground/70 hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          onClick={(e) => handleArrow(e, "right")}
          aria-label="Próximo"
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 text-foreground/70 hover:text-foreground transition-colors"
        >
          <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
        </button>

        <div
          ref={trackRef}
          onClick={toggleTrack}
          className="marquee-track flex gap-2 overflow-x-auto cursor-pointer select-none"
        >
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
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
