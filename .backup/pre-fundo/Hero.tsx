import heroImg from "@/assets/Design sem nome (1).png";
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

        <div className="pointer-events-none absolute left-0 top-[10%] z-10 w-[46%] max-w-[760px] select-none text-center">
          <h1
            className="-ml-48 font-['Cinzel'] text-[clamp(2.4rem,7.5vw,6.5rem)] font-normal uppercase leading-[1] tracking-[0.06em]"
            style={{
              backgroundImage: [
                "radial-gradient(ellipse 35% 30% at 18% 22%, rgba(28, 16, 6, 0.85) 0%, transparent 60%)",
                "radial-gradient(ellipse 30% 25% at 72% 38%, rgba(20, 10, 4, 0.8) 0%, transparent 55%)",
                "radial-gradient(ellipse 28% 22% at 45% 78%, rgba(35, 20, 8, 0.75) 0%, transparent 60%)",
                "radial-gradient(ellipse 20% 18% at 88% 70%, rgba(15, 8, 3, 0.85) 0%, transparent 55%)",
                "radial-gradient(ellipse 22% 20% at 28% 60%, rgba(180, 145, 95, 0.55) 0%, transparent 60%)",
                "radial-gradient(ellipse 18% 16% at 62% 18%, rgba(200, 165, 110, 0.5) 0%, transparent 55%)",
                "linear-gradient(165deg, #a8845a 0%, #6b4a28 40%, #3a2410 70%, #5a3a1c 100%)",
              ].join(", "),
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 2px 4px rgba(20, 12, 4, 0.55))",
            }}
          >
            Jay.O
          </h1>
          <div
            className="-mt-1 -ml-48 font-['Cinzel'] text-[clamp(1.25rem,3.6vw,3rem)] font-normal uppercase tracking-[0.3em] pl-[0.3em]"
            style={{
              backgroundImage: [
                "radial-gradient(ellipse 25% 50% at 20% 50%, rgba(10, 5, 2, 0.95) 0%, transparent 60%)",
                "radial-gradient(ellipse 22% 45% at 65% 50%, rgba(220, 180, 125, 0.7) 0%, transparent 60%)",
                "radial-gradient(ellipse 20% 40% at 88% 50%, rgba(15, 8, 3, 0.95) 0%, transparent 55%)",
                "linear-gradient(165deg, #b58a55 0%, #4a3018 50%, #1a0e04 100%)",
              ].join(", "),
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 1px 3px rgba(20, 12, 4, 0.5))",
            }}
          >
            Laser
          </div>
          <p
            className="-ml-48 mt-6 font-['Lora'] text-[clamp(0.8rem,1.4vw,19px)] font-medium leading-snug text-[#6b4a28]"
            style={{
              textShadow:
                "0 1px 2px rgba(255, 248, 230, 0.85), 0 0 8px rgba(255, 248, 230, 0.6)",
            }}
          >
            A tecnologia da remoção
            <br />
            de pigmentos em suas mãos
          </p>

          <div className="pointer-events-auto -ml-48 mt-6">
            <CTAButton className="px-6 py-3 text-[11px] tracking-[0.08em] sm:px-8 sm:py-4 sm:text-[13px] sm:tracking-[0.14em]">
              Quero meu laser Jay.O
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
