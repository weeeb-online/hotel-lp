import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="grid min-h-160 grid-cols-2 bg-[#18392f] text-white max-md:grid-cols-1"
    >
      <div className="min-h-95 bg-[url('https://images.trvl-media.com/lodging/10000000/9230000/9227300/9227252/7cc8fffd.jpg?impolicy=resizecrop&ra=fill&rh=575&rw=575')] bg-cover bg-center" />
      <Reveal className="self-center px-[clamp(34px,7vw,110px)] py-25 max-md:px-6 max-md:py-18">
        <p className="mb-5 text-[10px] font-extrabold tracking-[.28em]">
          MAIS QUE UMA ESTADIA
        </p>
        <h2 className="mb-7 font-serif text-[clamp(52px,5.6vw,78px)] leading-[.87] tracking-[-.035em]">
          Pequenos cuidados.
          <br />
          <em>Grandes memórias.</em>
        </h2>
        <p className="max-w-130 text-[13px] leading-6 text-[#cfdbd6]">
          Da chegada ao último café, nossa equipe cuida para que tudo flua no
          seu ritmo. Dicas locais, carinho nos detalhes e a liberdade de
          simplesmente aproveitar.
        </p>
        <ul className="my-6 list-none border-t border-white/20 py-4 text-xs leading-8">
          {[
            "Recepção atenciosa e personalizada",
            "Dicas de passeios e experiências locais",
            "Wi-Fi rápido em todos os ambientes",
          ].map((x) => (
            <li key={x} className="flex items-center gap-2">
              <Check size={14} className="text-[#93b4a5]" />
              {x}
            </li>
          ))}
        </ul>
        <WhatsAppButton label="Planejar minha estadia" light />
      </Reveal>
    </section>
  );
}
