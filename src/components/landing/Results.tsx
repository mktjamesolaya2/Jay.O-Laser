import { Fragment, useEffect, useState } from "react";

import case1 from "@/assets/remocoes-2.jpg";
import case2 from "@/assets/remocoes-4.jpg";
import case3 from "@/assets/remocoes-2.png";
import case4 from "@/assets/remocoes-1.png";
import case5 from "@/assets/remocoes-1.jpg";
import case6 from "@/assets/remocoes-5.jpg";
import { CTAButton } from "./CTAButton";

const cases = [
  {
    image: case1,
    title: "Remoção de tatuagem facial",
    region: "Sobrancelha direita",
    showBadge: true,
    objectPosition: "center",
  },
  {
    image: case2,
    title: "Micropigmentação labial",
    region: "Lábio superior",
    showBadge: true,
    objectPosition: "center",
  },
  {
    image: case3,
    title: "Remoção de tatuagem",
    region: "Antebraço",
    showBadge: false,
    objectPosition: "50% 22%",
  },
  {
    image: case4,
    title: "Remoção de manchas",
    region: "Bochecha",
    showBadge: false,
    objectPosition: "50% 65%",
  },
  {
    image: case5,
    title: "Remoção de tatuagem",
    region: "Pescoço",
    showBadge: true,
    objectPosition: "center",
  },
  {
    image: case6,
    title: "Remoção de tatuagem facial",
    region: "Sobrancelha esquerda",
    showBadge: true,
    objectPosition: "center",
  },
];

export function Results() {
  const [active, setActive] = useState(0);
  const current = cases[active];

  // Auto-rotate cases every 2.5s; resets timer when user clicks a number manually
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % cases.length);
    }, 2500);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 15% 35%, rgba(220, 201, 168, 0.32) 0%, transparent 55%), radial-gradient(ellipse at 85% 65%, rgba(220, 201, 168, 0.28) 0%, transparent 55%), oklch(0.97 0.008 85)",
      }}
    >
      {/* Top fade — blends seamlessly with section above */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 md:h-32 bg-gradient-to-b from-background to-transparent z-[5]" />
      {/* Bottom fade — blends with section below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent z-[5]" />

      {/* Warm marble veining suggestion in center area */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/4 bottom-1/4 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(184, 150, 86, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Decorative gold orbs filling the sides — warmer and bigger */}
      <div
        className="pointer-events-none absolute -top-32 -left-40 w-[480px] h-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184, 150, 86, 0.22) 0%, rgba(184, 150, 86, 0.08) 45%, transparent 75%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -left-32 w-80 h-80 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(220, 201, 168, 0.30) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-40 w-[480px] h-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184, 150, 86, 0.22) 0%, rgba(184, 150, 86, 0.08) 45%, transparent 75%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-32 w-80 h-80 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(220, 201, 168, 0.28) 0%, transparent 70%)",
        }}
      />

      {/* Floating gold particles on sides */}
      <span className="pointer-events-none absolute top-[18%] left-[6%] w-1.5 h-1.5 rounded-full bg-gold/55 blur-[0.5px]" />
      <span className="pointer-events-none absolute top-[45%] left-[3%] w-1 h-1 rounded-full bg-gold/50" />
      <span className="pointer-events-none absolute top-[72%] left-[7%] w-1.5 h-1.5 rounded-full bg-gold/45 blur-[0.5px]" />
      <span className="pointer-events-none absolute top-[28%] right-[5%] w-1 h-1 rounded-full bg-gold/55" />
      <span className="pointer-events-none absolute top-[60%] right-[8%] w-1.5 h-1.5 rounded-full bg-gold/50 blur-[0.5px]" />
      <span className="pointer-events-none absolute top-[88%] right-[4%] w-1 h-1 rounded-full bg-gold/45" />

      <div className="relative container mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Gold ornament divider */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-5 md:mb-6">
            <div className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent via-gold/30 to-gold/60" />
            <span className="text-gold text-xs md:text-sm leading-none select-none">
              ◆
            </span>
            <div className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent via-gold/30 to-gold/60" />
          </div>

          {/* Title */}
          <h2 className="font-['Cinzel'] text-xs md:text-sm tracking-[0.42em] uppercase text-gold-deep">
            Resultados Reais{" "}
            <span className="text-gold/60 mx-1">·</span> Principais Aplicações
          </h2>
        </div>

        {/* Featured case card */}
        <div
          className="grid md:grid-cols-[1.5fr_1fr] gap-8 md:gap-12 items-center bg-[#F8F4EA] rounded-3xl border border-gold/25 p-6 md:p-10"
          style={{
            boxShadow:
              "0 12px 40px -16px rgba(58, 37, 22, 0.15), 0 2px 8px -2px rgba(184, 150, 86, 0.08)",
          }}
        >
          {/* Image (before/after combined) */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card">
            <img
              key={`img-${active}`}
              src={current.image}
              alt={`Antes e depois — ${current.title}`}
              className="absolute inset-0 w-full h-full object-cover animate-case-reveal"
              style={{ objectPosition: current.objectPosition }}
              loading="lazy"
            />
            {/* Gold shine sweep across image on transition */}
            <div
              key={`shine-${active}`}
              aria-hidden
              className="pointer-events-none absolute inset-0 overflow-hidden"
            >
              <div
                className="absolute top-0 bottom-0 -left-1/2 w-1/3 animate-case-shine"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255, 245, 215, 0.35) 50%, transparent 100%)",
                  filter: "blur(8px)",
                }}
              />
            </div>
            {/* Badge "Antes & Depois" */}
            {current.showBadge && (
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-background/85 backdrop-blur-sm border border-gold/30 z-10">
                <span className="font-['Cinzel'] text-[10px] tracking-[0.3em] uppercase text-gold-deep">
                  Antes & Depois
                </span>
              </div>
            )}
          </div>

          {/* Metadata column */}
          <div
            key={`meta-${active}`}
            className="relative flex flex-col gap-5 min-h-[280px] animate-case-text"
          >
            {/* Watermark number — SVG auto-fits the column */}
            <svg
              aria-hidden
              className="pointer-events-none absolute inset-0 w-full h-full z-0"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 100 100"
            >
              <text
                x="50"
                y="52"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="Cormorant Garamond, serif"
                fontStyle="italic"
                fontWeight="600"
                fontSize="92"
                fill="rgba(184, 150, 86, 0.08)"
              >
                {String(active + 1).padStart(2, "0")}
              </text>
            </svg>

            <div className="relative z-10">
              <p className="font-['Cinzel'] text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold-deep mb-2">
                Caso {String(active + 1).padStart(2, "0")}
              </p>
              <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-[#3a2516] leading-tight">
                {current.title}
              </h3>
            </div>

            <div className="relative z-10 h-px w-16 bg-gradient-to-r from-gold to-transparent" />

            <p className="relative z-10 flex items-baseline gap-3 font-['Lora'] text-sm">
              <span className="shrink-0 font-['Cinzel'] uppercase tracking-[0.25em] text-[10px] text-gold-deep">
                Região
              </span>
              <span className="text-gold/40 select-none">—</span>
              <span className="text-[#3a2516] font-medium">
                {current.region}
              </span>
            </p>
          </div>
        </div>

        {/* Numbered navigation: 01 — 02 — 03 — 04 */}
        <div className="flex items-center justify-center gap-5 md:gap-7 mt-10 md:mt-12">
          {cases.map((_, i) => (
            <Fragment key={i}>
              {i > 0 && (
                <span
                  aria-hidden
                  className="text-gold/30 select-none font-['Cormorant_Garamond'] text-base md:text-lg"
                >
                  —
                </span>
              )}
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Ver caso ${i + 1}`}
                className="relative font-['Cormorant_Garamond'] text-base md:text-lg leading-none transition-colors duration-300 pb-1"
              >
                <span
                  className={
                    active === i
                      ? "text-gold-deep font-semibold"
                      : "text-[#5a4030]/45 hover:text-[#5a4030]/75"
                  }
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`absolute -bottom-0.5 left-0 right-0 h-px bg-gold transition-all duration-500 ease-out ${
                    active === i ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            </Fragment>
          ))}
        </div>

        {/* Final CTA — leads to ContactCTA at the bottom */}
        <div className="mt-12 md:mt-14 flex justify-center">
          <CTAButton>Quero meu laser Jay.O</CTAButton>
        </div>
      </div>
    </section>
  );
}
