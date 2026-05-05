import heroImg from "@/assets/hero-jayo.png";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-celestial">
      <div className="relative">
        <img
          src={heroImg}
          alt="Jay.O Laser — A tecnologia da remoção de pigmentos em suas mãos"
          className="w-full h-auto block"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
