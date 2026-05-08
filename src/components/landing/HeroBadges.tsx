import { Star } from "lucide-react";

const badges = [
  ["Apenas", "17 Quilos"],
  ["Tecnologia", "Q-Switched"],
  ["Garantia", "Estendida"],
  ["Registro", "Anvisa"],
];

export function HeroBadges() {
  return (
    <section className="relative z-10 flow-root pb-0">
      <div className="container mx-auto -mt-16 md:-mt-[110px] max-w-6xl px-3 md:px-6">
        <div className="grid grid-cols-4 gap-2 md:gap-6">
          {badges.map(([line1, line2]) => (
            <div
              key={`${line1}-${line2}`}
              className="group flex cursor-pointer flex-col items-center gap-1.5 md:gap-3 rounded-xl md:rounded-2xl border border-white/50 bg-white/35 px-1 py-3 md:px-4 md:py-7 shadow-soft backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.03] hover:border-gold/50 hover:bg-white/60 hover:shadow-elegant active:translate-y-0 active:scale-100 active:shadow-soft active:duration-100"
            >
              <Star
                className="h-3 w-3 md:h-6 md:w-6 fill-current text-gold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[10deg]"
                strokeWidth={1.4}
              />
              <p className="text-center font-['Cormorant_Garamond'] text-[clamp(0.62rem,1.7vw,1.5rem)] font-medium leading-tight text-[#3a2516] transition-colors group-hover:text-[#1f1208]">
                {line1}
                <br />
                {line2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
