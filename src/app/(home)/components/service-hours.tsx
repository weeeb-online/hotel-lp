import { Reveal } from "@/components/reveal";
import { WhatsAppButton } from "@/components/whatsapp-button";

const hours = [
  ["Recepção", "24 horas"],
  ["WhatsApp & Reservas", "Todos os dias · 8h às 22h"],
  ["Café da manhã", "7h às 10h30"],
];

export function ServiceHours() {
  return (
    <section
      id="horarios"
      className="bg-[#f4f0e6] px-[clamp(24px,9vw,140px)] py-25 max-md:py-18"
    >
      <Reveal className="grid grid-cols-2 gap-[10vw] max-md:grid-cols-1">
        <div>
          <p className="mb-5 text-[10px] font-extrabold tracking-[.28em] text-[#587d6c]">
            ESTAMOS POR AQUI
          </p>
          <h2 className="font-serif text-[clamp(52px,6vw,82px)] leading-[.85] tracking-[-.035em]">
            Conte com a gente,
            <br />
            <em>do início ao fim.</em>
          </h2>
          <p className="mt-8 max-w-120 text-[13px] leading-6 text-[#62766d]">
            Nossa equipe está pronta para tirar dúvidas, ajudar com reservas e
            cuidar dos detalhes da sua chegada.
          </p>
        </div>
        <div className="pt-6">
          {hours.map(([label, time]) => (
            <p
              key={label}
              className="m-0 flex justify-between gap-6 border-b border-[#18392f]/15 py-4 text-xs"
            >
              <span className="text-[#687a72]">{label}</span>
              <strong className="text-right">{time}</strong>
            </p>
          ))}
          <div className="mt-7">
            <WhatsAppButton label="Tirar uma dúvida agora" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
