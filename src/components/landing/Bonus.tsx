import { Landmark } from "lucide-react";
import jayRemoveFull from "@/assets/Jay_removefull2.png";
import jaylaser from "@/assets/Jaylaser3.png.png";

export function Bonus() {
  return (
    <section className="relative py-24 md:py-32 min-h-[500px] md:min-h-[600px] overflow-hidden">
      <img
        src={jayRemoveFull}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      <img
        src={jaylaser}
        alt="Operador Jayo Laser revelando relevo grego"
        className="absolute inset-0 w-full h-full object-contain object-bottom translate-y-32 md:translate-y-48 scale-[1.2] z-[2] mix-blend-multiply"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 4%, black 92%, transparent 100%), linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 4%, black 92%, transparent 100%), linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
          filter: "sepia(0.04) saturate(1.05) contrast(1.18) brightness(1.12)",
        }}
        loading="lazy"
      />

      <div
        className="pointer-events-none absolute inset-0 z-[3] mix-blend-soft-light"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at center, rgba(184, 150, 86, 0.18) 0%, transparent 75%)",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 md:h-40 bg-gradient-to-b from-background to-transparent z-[5]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 md:h-40 bg-gradient-to-t from-background to-transparent z-[5]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-[5]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-[5]" />

      <div className="absolute top-6 md:top-10 inset-x-0 z-10 flex items-center justify-center gap-3 md:gap-4 px-6">
        <div className="hidden md:block h-px flex-1 max-w-[280px] bg-gradient-to-r from-transparent via-gold/30 to-gold/70" />
        <span className="hidden md:inline text-gold/70 text-sm leading-none select-none">◆</span>
        <div className="shrink-0 inline-flex items-center gap-2 md:gap-2.5 px-4 md:px-5 py-1.5 md:py-2 rounded-full border border-gold/40 bg-background/40 backdrop-blur-sm">
          <Landmark className="h-3.5 w-3.5 md:h-4 md:w-4 text-gold" strokeWidth={1.5} />
          <h2 className="font-['Cinzel'] text-[10px] md:text-sm tracking-[0.25em] md:tracking-[0.3em] text-gold uppercase">
            Compre e Ganhe
          </h2>
        </div>
        <span className="hidden md:inline text-gold/70 text-sm leading-none select-none">◆</span>
        <div className="hidden md:block h-px flex-1 max-w-[280px] bg-gradient-to-l from-transparent via-gold/30 to-gold/70" />
      </div>

    </section>
  );
}
