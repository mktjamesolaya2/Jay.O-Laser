import descImg from "@/assets/description-jayo.png";

export function Description() {
  return (
    <section className="relative bg-background">
      <img
        src={descImg}
        alt="Por que o Jayo Laser é o melhor para Remoção — Tecnologia Q-Switched, Sistema Aberto, Pulsos Nanosegundos"
        className="w-full h-auto block"
        loading="lazy"
      />
    </section>
  );
}
