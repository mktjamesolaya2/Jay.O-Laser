import heroImg from "@/assets/Design sem nome (1).png";
import logoJayo from "@/assets/logo-jayo.png";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-celestial">
      <div className="relative w-full">
        <img
          src={heroImg}
          alt="Jay.O Laser — A tecnologia da remoção de pigmentos em suas mãos"
          className="block h-auto w-full"
          fetchPriority="high"
        />

        <div className="pointer-events-none absolute left-0 top-[5%] md:top-[10%] z-10 w-full pl-5 pr-4 md:px-0 md:w-[46%] md:max-w-[760px] select-none text-left md:text-center">
          <h1 className="m-0">
            <img
              src={logoJayo}
              alt="Jay.O Laser"
              className="block mx-0 md:mx-auto w-[44%] max-w-[150px] md:max-w-[260px] h-auto"
              fetchPriority="high"
            />
          </h1>
          <p
            className="mt-3 md:mt-5 font-['Lora'] text-[clamp(0.7rem,1.4vw,19px)] font-medium leading-snug text-[#6b4a28]"
            style={{
              textShadow:
                "0 1px 2px rgba(255, 248, 230, 0.85), 0 0 8px rgba(255, 248, 230, 0.6)",
            }}
          >
            A tecnologia da remoção
            <br />
            de pigmentos em suas mãos
          </p>

          <div className="pointer-events-auto mt-3 md:mt-6 flex justify-start md:justify-center">
            <CTAButton className="px-3 py-1.5 text-[8px] tracking-[0.08em] sm:px-8 sm:py-4 sm:text-[13px] sm:tracking-[0.14em]">
              Quero meu laser Jay.O
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
