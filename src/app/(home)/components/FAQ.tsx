import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppButton } from "@/components/whatsapp-button";
const qs = [
  [
    "Qual Ã© o horÃ¡rio de check-in e check-out?",
    "O check-in comeÃ§a Ã s 14h e o check-out pode ser feito atÃ© Ã s 11h. Se precisar de outro horÃ¡rio, fale com nossa equipe.",
  ],
  [
    "O cafÃ© da manhÃ£ estÃ¡ incluso?",
    "Sim. Servimos diariamente das 7h Ã s 10h30, com opÃ§Ãµes frescas, frutas e preparos locais.",
  ],
  [
    "O hotel aceita crianÃ§as e animais?",
    "Recebemos famÃ­lias com carinho. Para animais de estimaÃ§Ã£o, consulte previamente a disponibilidade e as condiÃ§Ãµes.",
  ],
  [
    "Como confirmo uma reserva?",
    "Envie suas datas pelo WhatsApp. Nossa equipe verifica a disponibilidade e orienta sobre a confirmaÃ§Ã£o.",
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
          <h2 className="font-heading text-[clamp(50px,5.7vw,78px)] leading-[.88] tracking-[-.035em]">
            DÃºvidas
            <br />
            <em>frequentes.</em>
          </h2>
          <p className="mt-6 text-xs">NÃ£o encontrou sua resposta?</p>
          <WhatsAppButton label="Perguntar pelo WhatsApp" />
        </div>
        <div className="max-md:mt-5">
          {qs.map(([q, a], i) => (
            <details
              key={q}
              className={`group border-t border-primary/15 py-5 ${i === qs.length - 1 ? "border-b" : ""}`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-heading text-[22px] [&::-webkit-details-marker]:hidden">
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
