import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
const qs = [
  [
    "Qual é o horário de check-in e check-out?",
    "O check-in começa às 14h e o check-out pode ser feito até às 11h. Se precisar de outro horário, fale com nossa equipe.",
  ],
  [
    "O café da manhã está incluso?",
    "Sim. Servimos diariamente das 7h às 10h30, com opções frescas, frutas e preparos locais.",
  ],
  [
    "O hotel aceita crianças e animais?",
    "Recebemos famílias com carinho. Para animais de estimação, consulte previamente a disponibilidade e as condições.",
  ],
  [
    "Como confirmo uma reserva?",
    "Envie suas datas pelo WhatsApp. Nossa equipe verifica a disponibilidade e orienta sobre a confirmação.",
  ],
];
export function FAQ() {
  return (
    <section className="bg-[#ebe5d8] px-[clamp(24px,9vw,140px)] py-25 max-md:py-18">
      <Reveal className="grid grid-cols-[.7fr_1.3fr] gap-[10vw] max-md:grid-cols-1">
        <div>
          <p className="mb-5 text-[10px] font-extrabold tracking-[.28em] text-[#587d6c]">
            ANTES DE FAZER AS MALAS
          </p>
          <h2 className="font-serif text-[clamp(50px,5.7vw,78px)] leading-[.88] tracking-[-.035em]">
            Dúvidas
            <br />
            <em>frequentes.</em>
          </h2>
          <p className="mt-6 text-xs">Não encontrou sua resposta?</p>
          <WhatsAppButton label="Perguntar pelo WhatsApp" />
        </div>
        <div className="max-md:mt-5">
          {qs.map(([q, a], i) => (
            <details
              key={q}
              className={`group border-t border-[#18392f]/15 py-5 ${i === qs.length - 1 ? "border-b" : ""}`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-serif text-[22px] [&::-webkit-details-marker]:hidden">
                {q}
                <ChevronDown
                  size={18}
                  className="shrink-0 transition group-open:rotate-180"
                />
              </summary>
              <p className="mt-4 mr-8 max-w-155 text-xs leading-6 text-[#64766f]">
                {a}
              </p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
