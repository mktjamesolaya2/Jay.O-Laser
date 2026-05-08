import certificado from "@/assets/certi.png";
import darkBg from "@/assets/dark.png";

export function Closing() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#0a0705" }}
    >
      {/* Greek dark backdrop — subtle, blends with the dark gradient */}
      <img
        src={darkBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.4 }}
        loading="lazy"
      />
      {/* Dark overlay to deepen blend */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(10, 7, 5, 0.4) 0%, rgba(10, 7, 5, 0.7) 100%)",
        }}
      />

      {/* Top fade — seamless join with Earnings dark above */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 md:h-48 z-[5]"
        style={{
          background:
            "linear-gradient(to bottom, #0a0705 0%, #0a0705 30%, transparent 100%)",
        }}
      />

      {/* Bottom fade — transitions back to cream for footer */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 md:h-24 z-[5]"
        style={{
          background:
            "linear-gradient(to top, var(--background) 0%, transparent 100%)",
        }}
      />

      {/* Spotlight glow behind the certificate */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184, 150, 86, 0.18) 0%, rgba(184, 150, 86, 0.06) 40%, transparent 70%)",
        }}
      />

      {/* Decorative gold particles in dark void */}
      <span className="pointer-events-none absolute top-[15%] left-[12%] w-1 h-1 rounded-full bg-[#DCC9A8]/45 blur-[0.5px]" />
      <span className="pointer-events-none absolute top-[28%] left-[6%] w-[3px] h-[3px] rounded-full bg-[#B89656]/55" />
      <span className="pointer-events-none absolute top-[68%] left-[10%] w-1 h-1 rounded-full bg-[#DCC9A8]/40 blur-[0.5px]" />
      <span className="pointer-events-none absolute top-[20%] right-[8%] w-[3px] h-[3px] rounded-full bg-[#B89656]/55" />
      <span className="pointer-events-none absolute top-[55%] right-[12%] w-1 h-1 rounded-full bg-[#DCC9A8]/45 blur-[0.5px]" />
      <span className="pointer-events-none absolute top-[80%] right-[6%] w-[2px] h-[2px] rounded-full bg-[#B89656]/50" />
      <span className="pointer-events-none absolute top-[42%] left-[18%] w-[2px] h-[2px] rounded-full bg-[#DCC9A8]/40" />
      <span className="pointer-events-none absolute top-[88%] left-[40%] w-1 h-1 rounded-full bg-[#B89656]/45 blur-[0.5px]" />

      <div className="relative z-10 container mx-auto max-w-5xl px-6">
        {/* Certificate centered as the sole hero piece */}
        <div className="flex justify-center">
          <div
            className="relative"
            style={{
              filter:
                "drop-shadow(0 28px 50px rgba(0, 0, 0, 0.55)) drop-shadow(0 10px 22px rgba(184, 150, 86, 0.25))",
            }}
          >
            <img
              src={certificado}
              alt="Certificado de qualidade e procedência — Jayo Laser"
              className="block w-full max-w-md md:max-w-lg h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
