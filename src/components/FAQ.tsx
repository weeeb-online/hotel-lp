import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

const questions = [
  ["Qual é o horário de check-in e check-out?", "O check-in começa às 14h e o check-out pode ser feito até às 11h. Se precisar de outro horário, fale com nossa equipe."],
  ["O café da manhã está incluso?", "Sim. Servimos diariamente das 7h às 10h30, com opções frescas, frutas e preparos locais."],
  ["O hotel aceita crianças e animais?", "Recebemos famílias com carinho. Para animais de estimação, consulte previamente a disponibilidade e as condições."],
  ["Como confirmo uma reserva?", "Envie suas datas pelo WhatsApp. Nossa equipe verifica a disponibilidade e orienta sobre a confirmação."],
];

export function FAQ() {
  return <section className="section faq"><Reveal><div className="faq-intro"><p className="eyebrow green">ANTES DE FAZER AS MALAS</p><h2>Dúvidas<br/><em>frequentes.</em></h2><p>Não encontrou sua resposta?</p><WhatsAppButton label="Perguntar pelo WhatsApp"/></div><div className="faq-list">{questions.map(([question,answer])=><details key={question}><summary>{question}<ChevronDown size={18} aria-hidden="true"/></summary><p>{answer}</p></details>)}</div></Reveal></section>;
}
