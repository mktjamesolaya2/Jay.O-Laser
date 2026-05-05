import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    q: "Como solicitar atendimento comercial?",
    a: "Basta clicar em qualquer botão de CTA da página. Um especialista entrará em contato para apresentar condições, prazos e detalhes da imersão inclusa.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold">Dúvidas frequentes</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-foreground">
            Tudo o que você precisa saber
          </h2>
          <div className="divider-gold w-32 mx-auto mt-6" />
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border bg-card rounded-xl px-5 shadow-soft"
            >
              <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
