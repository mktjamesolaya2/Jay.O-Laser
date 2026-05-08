import heroImg from "@/assets/Design sem nome (1).png";
import logoJayo from "@/assets/logo-jayo.png";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-celestial">
      {/* DESKTOP: hero image with overlaid magazine-style text */}
      <div className="hidden md:block relative w-full">
        <img
          src={heroImg}
          alt="Jay.O Laser — A tecnologia da remoção de pigmentos em suas mãos"
          className="block h-auto w-full"
          fetchPriority="high"
        />

        <div className="pointer-events-none absolute left-0 top-[10%] z-10 w-[46%] max-w-[760px] select-none text-center">
          <h1 className="m-0">
            <img
              src={logoJayo}
              alt="Jay.O Laser"
              className="block mx-auto max-w-[260px] h-auto -ml-48"
              fetchPriority="high"
            />
          </h1>
          <p
            className="-ml-48 mt-5 font-['Lora'] text-[clamp(0.95rem,1.4vw,19px)] font-medium leading-snug text-[#6b4a28]"
            style={{
              textShadow:
                "0 1px 2px rgba(255, 248, 230, 0.85), 0 0 8px rgba(255, 248, 230, 0.6)",
            }}
          >
            A tecnologia da remoção
            <br />
            de pigmentos em suas mãos
          </p>

          <div className="pointer-events-auto -ml-48 mt-6 flex justify-center">
            <CTAButton className="px-8 py-4 text-[13px] tracking-[0.14em]">
              Quero meu laser Jay.O
            </CTAButton>
          </div>
        </div>
      </div>

      {/* MOBILE: full-screen hero — text content top, full hero image anchored at bottom */}
      <div className="md:hidden flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col justify-center items-center text-center px-6 pt-8 pb-4">
          <img
            src={logoJayo}
            alt="Jay.O Laser"
            className="block mx-auto w-[65%] max-w-[240px] h-auto"
            fetchPriority="high"
          />

          <p className="mt-5 font-['Cormorant_Garamond'] text-2xl font-medium leading-tight text-[#3a2516]">
            A tecnologia da remoção
            <br />
            de pigmentos em suas mãos
          </p>

          <p className="mt-3 font-['Lora'] text-xs text-[#5a4030] leading-relaxed max-w-xs mx-auto">
            Agora ficou mais fácil adquirir seu equipamento a laser com a alta
            qualidade Jay.O de produtos para Micropigmentação.
          </p>

          <div className="mt-6 w-full max-w-sm mx-auto">
            <CTAButton className="w-full justify-center py-3.5 text-sm tracking-[0.14em]">
              Quero meu laser Jay.O
            </CTAButton>
          </div>
        </div>

        <img
          src={heroImg}
          alt="Jay.O Laser — A tecnologia da remoção de pigmentos em suas mãos"
          className="block w-full h-auto"
          loading="lazy"
        />
      </div>
    </section>
  );
}
