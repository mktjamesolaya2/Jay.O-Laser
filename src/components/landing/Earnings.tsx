import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import zeus from "@/assets/zeus.jpg";

const SESSION_VALUE = 250;
const SUPPLIES = 15;
const WORKING_DAYS = 22;
const MIN_PATIENTS = 1;
const MAX_PATIENTS = 20;

const presets = [
  { label: "Conservador", value: 5 },
  { label: "Moderado", value: 10 },
  { label: "Agressivo", value: 15 },
];

const formatCurrency = (n: number) =>
  `R$ ${n.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const clamp = (n: number) =>
  Math.min(MAX_PATIENTS, Math.max(MIN_PATIENTS, n));

export function Earnings() {
  const [patients, setPatients] = useState(15);
  const [inputValue, setInputValue] = useState("15");

  const profitPerClient = SESSION_VALUE - SUPPLIES;
  const profitPerDay = profitPerClient * patients;
  const monthlyRevenue = profitPerDay * WORKING_DAYS;

  const maxRevenue = profitPerClient * MAX_PATIENTS * WORKING_DAYS;
  const revenueProgress = (monthlyRevenue / maxRevenue) * 100;

  const sliderProgress =
    ((patients - MIN_PATIENTS) / (MAX_PATIENTS - MIN_PATIENTS)) * 100;

  const update = (n: number) => {
    const clamped = clamp(n);
    setPatients(clamped);
    setInputValue(String(clamped));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setInputValue(raw);
    const parsed = Number(raw);
    if (!Number.isNaN(parsed) && raw !== "") {
      setPatients(clamp(parsed));
    }
  };

  const handleInputBlur = () => {
    const parsed = Number(inputValue);
    if (Number.isNaN(parsed) || inputValue === "") {
      setInputValue(String(patients));
    } else {
      const clamped = clamp(parsed);
      setPatients(clamped);
      setInputValue(String(clamped));
    }
  };

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #1a1410 0%, #100c08 50%, #0a0705 100%)",
      }}
    >
      {/* Top fade — blends with cream section above */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 md:h-16 bg-gradient-to-b from-background to-transparent z-[5]" />
      {/* Bottom dark anchor — guarantees seamless join with Closing below */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 z-[6]"
        style={{
          background:
            "linear-gradient(to top, #0a0705 0%, #0a0705 50%, transparent 100%)",
        }}
      />

      {/* Big glowing gold orbs on sides */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184, 150, 86, 0.18) 0%, rgba(184, 150, 86, 0.05) 50%, transparent 75%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184, 150, 86, 0.16) 0%, rgba(184, 150, 86, 0.04) 50%, transparent 75%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-24 w-72 h-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(220, 201, 168, 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-1/3 -left-24 w-72 h-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(220, 201, 168, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Gold sparkle particles */}
      <span className="pointer-events-none absolute top-[12%] left-[8%] w-1 h-1 rounded-full bg-[#DCC9A8]/60 blur-[0.5px]" />
      <span className="pointer-events-none absolute top-[22%] left-[15%] w-[3px] h-[3px] rounded-full bg-[#B89656]/50" />
      <span className="pointer-events-none absolute top-[60%] left-[5%] w-1 h-1 rounded-full bg-[#DCC9A8]/45 blur-[0.5px]" />
      <span className="pointer-events-none absolute top-[82%] left-[12%] w-[2px] h-[2px] rounded-full bg-[#B89656]/55" />
      <span className="pointer-events-none absolute top-[18%] right-[10%] w-[3px] h-[3px] rounded-full bg-[#DCC9A8]/55" />
      <span className="pointer-events-none absolute top-[40%] right-[5%] w-1 h-1 rounded-full bg-[#B89656]/50 blur-[0.5px]" />
      <span className="pointer-events-none absolute top-[68%] right-[14%] w-[2px] h-[2px] rounded-full bg-[#DCC9A8]/50" />
      <span className="pointer-events-none absolute top-[88%] right-[7%] w-1 h-1 rounded-full bg-[#B89656]/45 blur-[0.5px]" />

      {/* Zeus — mobile: visible top-left figure; desktop: side fade */}
      <img
        src={zeus}
        alt=""
        className="md:hidden pointer-events-none absolute top-16 -left-6 h-56 sm:h-64 w-auto z-[4] opacity-60"
        style={{
          mixBlendMode: "lighten",
          maskImage:
            "linear-gradient(to right, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 55%, transparent 100%)",
        }}
        loading="lazy"
      />
      <img
        src={zeus}
        alt=""
        className="hidden md:block pointer-events-none absolute top-0 bottom-0 -left-16 h-full w-auto z-[4]"
        style={{
          objectFit: "contain",
          objectPosition: "left center",
          opacity: 0.45,
          maskImage:
            "linear-gradient(to right, black 0%, black 18%, rgba(0,0,0,0.5) 45%, transparent 75%), linear-gradient(to bottom, transparent 0%, black 16%, black 84%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 18%, rgba(0,0,0,0.5) 45%, transparent 75%), linear-gradient(to bottom, transparent 0%, black 16%, black 84%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
          mixBlendMode: "lighten",
        }}
        loading="lazy"
      />

      <div className="relative container mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[#B89656] text-sm leading-none select-none">
              ◆
            </span>
            <p className="font-['Cinzel'] text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#DCC9A8]">
              Calcule aqui o seu faturamento
            </p>
            <span className="text-[#B89656] text-sm leading-none select-none">
              ◆
            </span>
          </div>
        </div>

        {/* Main calculator card — dark premium */}
        <div
          className="relative rounded-3xl p-5 md:p-12"
          style={{
            background:
              "linear-gradient(160deg, #15100c 0%, #0d0a07 60%, #0a0705 100%)",
            border: "1px solid rgba(184, 150, 86, 0.25)",
            boxShadow:
              "0 24px 60px -20px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(184, 150, 86, 0.08), 0 0 80px -20px rgba(184, 150, 86, 0.18)",
          }}
        >
          {/* Subtle inner top highlight */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(184, 150, 86, 0.3) 50%, transparent 100%)",
            }}
          />

          {/* Hero metric — Faturamento mensal */}
          <div className="text-center">
            <p className="font-['Cinzel'] text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#B89656] mb-3">
              Faturamento mensal estimado
            </p>
            <div
              className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl md:text-7xl font-semibold leading-none tabular-nums"
              style={{
                background:
                  "linear-gradient(135deg, #DCC9A8 0%, #B89656 50%, #DCC9A8 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 24px rgba(184, 150, 86, 0.18))",
              }}
            >
              {formatCurrency(monthlyRevenue)}
            </div>
            <p className="mt-3 font-['Lora'] italic text-xs md:text-sm text-[#DCC9A8]/65">
              base em {WORKING_DAYS} dias trabalhados/mês
            </p>
          </div>

          {/* Visual revenue bar */}
          <div className="mt-8 md:mt-10">
            <div
              className="relative h-2 rounded-full overflow-hidden"
              style={{ background: "rgba(220, 201, 168, 0.08)" }}
            >
              <div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  width: `${revenueProgress}%`,
                  background:
                    "linear-gradient(90deg, #8a6a48 0%, #B89656 50%, #DCC9A8 100%)",
                  transition: "width 120ms linear",
                  boxShadow: "0 0 12px rgba(184, 150, 86, 0.5)",
                }}
              />
            </div>
          </div>

          {/* Patient count control */}
          <div className="mt-10 md:mt-12">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
              <div>
                <p className="font-['Cinzel'] text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#B89656]">
                  Pacientes por dia
                </p>
                <p className="mt-1 font-['Lora'] italic text-[11px] md:text-xs text-[#DCC9A8]/55">
                  Arraste, use as setas ou digite o número
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => update(patients - 1)}
                  disabled={patients <= MIN_PATIENTS}
                  aria-label="Diminuir pacientes"
                  className="grid place-items-center w-9 h-9 rounded-full border border-[#B89656]/40 bg-white/[0.03] text-[#DCC9A8] transition-all duration-150 hover:border-[#B89656] hover:bg-[#B89656]/15 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  <Minus className="w-4 h-4" strokeWidth={1.8} />
                </button>

                <input
                  type="number"
                  min={MIN_PATIENTS}
                  max={MAX_PATIENTS}
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  aria-label="Número de pacientes por dia"
                  className="earnings-input w-20 text-center font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold leading-none tabular-nums bg-transparent border-b focus:outline-none transition-colors"
                  style={{
                    color: "#DCC9A8",
                    borderColor: "rgba(184, 150, 86, 0.3)",
                  }}
                />

                <button
                  type="button"
                  onClick={() => update(patients + 1)}
                  disabled={patients >= MAX_PATIENTS}
                  aria-label="Aumentar pacientes"
                  className="grid place-items-center w-9 h-9 rounded-full border border-[#B89656]/40 bg-white/[0.03] text-[#DCC9A8] transition-all duration-150 hover:border-[#B89656] hover:bg-[#B89656]/15 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  <Plus className="w-4 h-4" strokeWidth={1.8} />
                </button>
              </div>
            </div>

            {/* Slider */}
            <div className="relative h-7 flex items-center">
              <div
                className="absolute inset-x-0 h-2 rounded-full"
                style={{ background: "rgba(220, 201, 168, 0.08)" }}
              />
              <div
                className="absolute left-0 h-2 rounded-full pointer-events-none"
                style={{
                  width: `${sliderProgress}%`,
                  background:
                    "linear-gradient(90deg, #B89656 0%, #DCC9A8 100%)",
                  boxShadow: "0 0 14px rgba(184, 150, 86, 0.55)",
                }}
              />
              <input
                type="range"
                min={MIN_PATIENTS}
                max={MAX_PATIENTS}
                value={patients}
                onChange={(e) => update(Number(e.target.value))}
                className="earnings-slider absolute inset-0 w-full"
                aria-label="Pacientes por dia"
              />
            </div>

            <div className="mt-2 flex justify-between text-[10px] font-['Cinzel'] tracking-[0.2em] uppercase text-[#DCC9A8]/40">
              <span>{MIN_PATIENTS}</span>
              <span>{MAX_PATIENTS}</span>
            </div>
          </div>

          {/* Preset buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {presets.map((p) => (
              <button
                key={p.value}
                type="button"
                onClick={() => update(p.value)}
                className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-200 ${
                  patients === p.value
                    ? "border-[#DCC9A8] bg-[#B89656] text-[#0d0a07]"
                    : "border-[#B89656]/35 bg-white/[0.03] text-[#DCC9A8] hover:border-[#B89656] hover:bg-[#B89656]/15"
                }`}
              >
                <span className="font-['Cinzel'] text-[10px] tracking-[0.25em] uppercase">
                  {p.label}
                </span>
                <span className="font-['Cormorant_Garamond'] font-semibold text-sm">
                  {p.value}
                </span>
              </button>
            ))}
          </div>

          {/* Breakdown — small metrics row */}
          <div
            className="mt-10 md:mt-12 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4"
            style={{ borderTop: "1px solid rgba(184, 150, 86, 0.15)" }}
          >
            {[
              { label: "Valor da Sessão", value: formatCurrency(SESSION_VALUE) },
              { label: "Insumos", value: formatCurrency(SUPPLIES) },
              { label: "Lucro / Cliente", value: formatCurrency(profitPerClient) },
              { label: "Lucro / Dia", value: formatCurrency(profitPerDay) },
            ].map((m) => (
              <div key={m.label} className="text-center">
                <p className="font-['Cinzel'] text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-[#B89656]/80 mb-2">
                  {m.label}
                </p>
                <p className="font-['Cormorant_Garamond'] text-lg md:text-xl font-semibold text-[#DCC9A8] tabular-nums">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center font-['Lora'] italic text-xs md:text-sm text-[#DCC9A8]/55 max-w-3xl mx-auto">
          <span className="font-semibold not-italic text-[#DCC9A8]/85">
            Obs:
          </span>{" "}
          cálculo estimado — com o Jay.O Laser você pode atender até{" "}
          {MAX_PATIENTS} clientes por dia.
        </p>
      </div>
    </section>
  );
}
