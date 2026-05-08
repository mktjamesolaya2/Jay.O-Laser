import { ChevronDown, Check, Search } from "lucide-react";
import { useMemo, useState } from "react";

const items = [
  "Jay.O Laser",
  "Curso Jay Remove",
  "Certificado Internacional",
  "Certificado de Licenciado",
  "Comunidade de Educação Continuada",
];

const faqs = [
  {
    q: "Para quais tipos de procedimento o Jayo Laser é indicado?",
    a: "Clareamento e remoção de pigmentos, correção de micropigmentação (sobrancelhas, lábios, eyeliner) e remoção de tatuagens indesejadas, com protocolos personalizáveis.",
  },
  {
    q: "O equipamento é fácil de transportar e integrar à rotina?",
    a: "Sim. Com apenas 17 quilos e construção compacta, o Jayo Laser foi pensado para profissionais que atuam em mais de um espaço sem abrir mão da apresentação premium.",
  },
  {
    q: "A compra inclui algum suporte educacional?",
    a: "Sim. Toda aquisição inclui a Imersão de 3 dias com profissionais referência, para que você domine técnicas e protocolos antes mesmo de iniciar os atendimentos.",
  },
  {
    q: "Como funciona a imersão de 3 dias?",
    a: "Três dias de prática supervisionada, dominando técnicas e protocolos de clareamento, remoção de pigmentos, micropigmentação e tatuagens, com aparelhos modernos à disposição.",
  },
  {
    q: "O Jayo Laser é indicado para quem deseja ampliar portfólio?",
    a: "Absolutamente. É a porta de entrada para um novo patamar de serviços premium, aumentando ticket médio e percepção de autoridade da sua marca.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Pagamento facilitado com entrada e até 36 parcelas diretamente com a fábrica, sem intermediários.",
  },
];

export function ContactCTA() {
  const [search, setSearch] = useState("");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [faqOpen, setFaqOpen] = useState(false);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return faqs;
    return faqs.filter(
      (f) =>
        f.q.toLowerCase().includes(term) || f.a.toLowerCase().includes(term)
    );
  }, [search]);

  return (
    <section
      id="cta"
      className="relative py-8 md:py-10 bg-background overflow-hidden"
    >
      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 md:h-16 bg-gradient-to-b from-background to-transparent z-[5]" />

      {/* Decorative warm orbs */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(220, 201, 168, 0.28) 0%, transparent 75%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184, 150, 86, 0.18) 0%, transparent 75%)",
        }}
      />

      <div className="relative container mx-auto max-w-2xl px-6">
        {/* Header */}
        <div className="text-center mb-4 md:mb-5">
          <h2 className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-[#3a2516] leading-tight">
            Solicite o seu{" "}
            <span className="italic text-gold-deep">Agora</span>
          </h2>
        </div>

        {/* Two-column layout: card + FAQ side by side */}
        <div className="grid md:grid-cols-2 gap-3 md:gap-4 items-start">
          {/* ─── ContactCTA card (left) ─── */}
          <div
            className="relative rounded-xl border border-gold/30 bg-[#F8F4EA] p-4"
            style={{
              boxShadow:
                "0 10px 24px -12px rgba(58, 37, 22, 0.18), 0 2px 6px -2px rgba(184, 150, 86, 0.10)",
            }}
          >
            <p className="font-['Lora'] text-[11px] md:text-xs text-[#5a4030] mb-3 leading-relaxed">
              Pagamento facilitado com{" "}
              <strong className="font-semibold text-[#3a2516]">
                entrada + 36 parcelas
              </strong>{" "}
              diretamente com a fábrica.
            </p>

            <ul className="space-y-1.5 mb-4">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-['Lora'] text-[11px] md:text-xs text-[#3a2516]"
                >
                  <span className="grid place-items-center shrink-0 w-3 h-3 rounded-full bg-gold/15 text-gold-deep">
                    <Check className="w-2 h-2" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://api.whatsapp.com/send/?phone=5519996559721&text=Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+JAY.O+Laser%2C+venho+da+LP.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2 rounded-lg text-[10px] tracking-[0.16em] uppercase font-medium transition-all duration-300 bg-[linear-gradient(135deg,#b8956a_0%,#8a6a48_50%,#6b4d2e_100%)] text-white shadow-glow hover:shadow-elegant hover:-translate-y-0.5"
            >
              Entrar em contato
            </a>
          </div>

          {/* ─── Collapsible FAQ (right) ─── */}
          <div>
            <button
              type="button"
              onClick={() => setFaqOpen(!faqOpen)}
              aria-expanded={faqOpen}
              className="w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-full border border-gold/40 bg-background/60 hover:bg-background hover:border-gold-deep/70 transition-all duration-200"
            >
              <span className="font-['Cinzel'] text-[10px] md:text-xs tracking-[0.32em] uppercase text-gold-deep">
                Dúvidas Frequentes
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-gold-deep transition-transform duration-300 ${
                  faqOpen ? "rotate-180" : ""
                }`}
                strokeWidth={2.2}
              />
            </button>

            {/* Expandable FAQ panel */}
            <div
              className={`grid transition-all duration-500 ease-out ${
                faqOpen
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0 mt-0"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className="rounded-2xl border border-gold/25 bg-[#F8F4EA] p-5 md:p-6"
                  style={{
                    boxShadow:
                      "0 12px 32px -16px rgba(58, 37, 22, 0.12)",
                  }}
                >
                  {/* Search bar */}
                  <div className="relative mb-4">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gold-deep/70 pointer-events-none" />
                    <input
                      type="search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Pesquise sua dúvida..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gold/30 bg-background/70 font-['Lora'] text-sm text-[#3a2516] placeholder:text-[#6b4a28]/60 focus:outline-none focus:border-gold-deep focus:bg-background transition-colors"
                    />
                  </div>

                  {/* Accordion */}
                  <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1 -mr-1">
                    {filtered.length === 0 ? (
                      <p className="text-center font-['Lora'] italic text-sm text-[#6b4a28] py-6">
                        Nenhuma dúvida encontrada para "{search}".
                      </p>
                    ) : (
                      filtered.map((f, i) => {
                        const isOpen = openIdx === i;
                        return (
                          <div
                            key={f.q}
                            className="border border-gold/20 rounded-xl bg-background/50 overflow-hidden transition-colors hover:border-gold/40"
                          >
                            <button
                              type="button"
                              onClick={() =>
                                setOpenIdx(isOpen ? null : i)
                              }
                              className="w-full flex items-center justify-between gap-3 text-left px-3.5 py-3"
                              aria-expanded={isOpen}
                            >
                              <span className="font-['Cormorant_Garamond'] text-sm md:text-base text-[#3a2516] leading-snug">
                                {f.q}
                              </span>
                              <ChevronDown
                                className={`shrink-0 w-3.5 h-3.5 text-gold-deep transition-transform duration-300 ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                                strokeWidth={2}
                              />
                            </button>
                            <div
                              className={`grid transition-all duration-300 ease-out ${
                                isOpen
                                  ? "grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0"
                              }`}
                            >
                              <div className="overflow-hidden">
                                <p className="px-3.5 pb-3 font-['Lora'] text-xs md:text-sm text-[#5a4030] leading-relaxed">
                                  {f.a}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
