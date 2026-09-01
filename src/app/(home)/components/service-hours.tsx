import { Reveal } from "@/components/reveal";
import { WhatsAppButton } from "@/components/whatsapp-button";

const hours = [
  ["RecepÃ§Ã£o", "24 horas"],
  ["WhatsApp & Reservas", "Todos os dias Â· 8h Ã s 22h"],
  ["CafÃ© da manhÃ£", "7h Ã s 10h30"],
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
          <h2 className="font-heading text-[clamp(52px,6vw,82px)] leading-[.85] tracking-[-.035em]">
            Conte com a gente,
            <br />
            <em>do inÃ­cio ao fim.</em>
          </h2>
          <p className="mt-8 max-w-120 text-[13px] leading-6 text-[#62766d]">
            Nossa equipe estÃ¡ pronta para tirar dÃºvidas, ajudar com reservas e
            cuidar dos detalhes da sua chegada.
          </p>
        </div>
        <div className="pt-6">
          {hours.map(([label, time]) => (
            <p
              key={label}
              className="m-0 flex justify-between gap-6 border-b border-primary/15 py-4 text-xs"
            >
              <span className="text-[#687a72]">{label}</span>
              <strong className="text-right">{time}</strong>
            </p>
          ))}
          <div className="mt-7">
            <WhatsAppButton label="Tirar uma dÃºvida agora" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
