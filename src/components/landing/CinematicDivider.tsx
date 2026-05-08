import { useEffect, useRef, useState } from "react";

export function CinematicDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-[#111111]"
    >
      {/* Camada de profundidade — gradiente vertical sutil */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0c0c0c 0%, #151515 50%, #0c0c0c 100%)",
        }}
      />

      {/* Halo dourado central — bem suave */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 80% at center, rgba(184, 150, 86, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Partículas douradas dispersas */}
      <span className="pointer-events-none absolute top-[22%] left-[14%] w-1 h-1 rounded-full bg-[#B89656]/40 blur-[0.5px]" />
      <span className="pointer-events-none absolute top-[38%] right-[22%] w-[3px] h-[3px] rounded-full bg-[#DCC9A8]/45" />
      <span className="pointer-events-none absolute top-[68%] left-[28%] w-1 h-1 rounded-full bg-[#B89656]/30 blur-[0.5px]" />
      <span className="pointer-events-none absolute top-[58%] right-[12%] w-[2px] h-[2px] rounded-full bg-[#DCC9A8]/40" />
      <span className="pointer-events-none absolute top-[28%] right-[42%] w-[2px] h-[2px] rounded-full bg-[#B89656]/55" />
      <span className="pointer-events-none absolute top-[75%] left-[42%] w-[2px] h-[2px] rounded-full bg-[#DCC9A8]/35" />
      <span className="pointer-events-none absolute top-[15%] right-[8%] w-[2px] h-[2px] rounded-full bg-[#B89656]/40 blur-[0.5px]" />

      {/* Fade superior — funde com o creme da página */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 md:h-16 bg-gradient-to-b from-background to-transparent z-[5]" />

      {/* Fade inferior — funde com o creme da página */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 md:h-16 bg-gradient-to-t from-background to-transparent z-[5]" />

      {/* Conteúdo central */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center py-20 md:py-24 px-6 text-center transition-all duration-[1100ms] ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        {/* Diamante dourado — ornamento superior */}
        <div
          className={`mb-5 md:mb-6 transition-opacity duration-1000 ease-out ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span
            className="text-[#B89656] text-base md:text-lg leading-none select-none inline-block"
            style={{
              filter:
                "drop-shadow(0 0 10px rgba(184, 150, 86, 0.45)) drop-shadow(0 0 18px rgba(184, 150, 86, 0.2))",
            }}
          >
            ◆
          </span>
        </div>

        {/* Headline */}
        <h3
          className="font-['Cormorant_Garamond'] text-base md:text-3xl uppercase tracking-[0.22em] md:tracking-[0.42em] font-semibold text-[#DCC9A8]"
          style={{
            textShadow: "0 0 32px rgba(184, 150, 86, 0.18)",
          }}
        >
          Precisão Esculpida em Luz
        </h3>

        {/* Linha dourada expandindo */}
        <div
          className={`mt-6 md:mt-8 h-px bg-gradient-to-r from-transparent via-[#B89656] to-transparent transition-all ease-out ${
            visible
              ? "w-32 md:w-56 opacity-100 duration-[1400ms]"
              : "w-0 opacity-0 duration-200"
          }`}
        />
      </div>
    </section>
  );
}
