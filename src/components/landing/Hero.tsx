import heroImg from "@/assets/Design sem nome (1).png";
import heroMobile from "@/assets/Hero_mobile2.png";
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

      {/* MOBILE: full-screen vertical hero, text overlaid on sky portion */}
      <div className="md:hidden relative w-full min-h-screen">
        <img
          src={heroMobile}
          alt="Jay.O Laser — A tecnologia da remoção de pigmentos em suas mãos"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />

        <div className="relative z-10 flex flex-col items-center px-6 pt-[7vh] text-center">
          <img
            src={logoJayo}
            alt="Jay.O Laser"
            className="block w-[60%] max-w-[220px] h-auto"
          />

          <p className="mt-3 font-['Cormorant_Garamond'] text-xl font-semibold leading-tight text-[#3a2516]">
            A tecnologia da remoção
            <br />
            de pigmentos em suas mãos
          </p>

          <p className="mt-2 font-['Lora'] text-[11px] text-[#3a2516] leading-snug max-w-[280px]">
            Agora ficou mais fácil adquirir seu equipamento a laser com a alta
            qualidade Jay.O de produtos para Micropigmentação.
          </p>

          <div className="mt-4 w-full max-w-[280px]">
            <CTAButton className="w-full justify-center py-3 text-[12px] tracking-[0.14em]">
              Quero meu laser Jay.O
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
