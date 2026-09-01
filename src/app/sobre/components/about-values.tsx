import { HandHeart, Sprout, SunMedium } from "lucide-react";
import { Reveal } from "@/components/reveal";

const values = [
  {
    icon: HandHeart,
    title: "Cuidado genuíno",
    text: "Prestamos atenção ao que faz diferença para cada hóspede, sem roteiros prontos.",
  },
  {
    icon: Sprout,
    title: "Leveza consciente",
    text: "Escolhas locais, menos desperdício e respeito pela natureza ao nosso redor.",
  },
  {
    icon: SunMedium,
    title: "Beleza simples",
    text: "Ambientes acolhedores, materiais naturais e tudo o que é essencial para descansar.",
  },
];

export function AboutValues() {
  return (
    <section className="bg-primary px-[clamp(24px,9vw,140px)] py-25 text-white max-md:py-20">
      <Reveal>
        <div className="mb-14 flex items-end justify-between max-md:block">
          <div>
            <p className="mb-5 text-[10px] font-extrabold tracking-[.28em] text-[#9ab4a8]">
              O QUE NOS GUIA
            </p>
            <h2 className="font-heading text-[clamp(52px,6vw,82px)] leading-[.88] tracking-[-.035em]">
              Nossa forma de
              <br />
              <em>receber.</em>
            </h2>
          </div>
          <p className="max-w-85 text-[13px] leading-6 text-white/65 max-md:mt-7">
            Mais do que serviços, cultivamos uma maneira atenta, leve e próxima
            de cuidar.
          </p>
        </div>
        <div className="grid grid-cols-3 border-y border-white/15 max-md:grid-cols-1">
          {values.map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              className={`px-9 py-12 max-md:px-0 ${i < 2 ? "border-r border-white/15 max-md:border-r-0 max-md:border-b" : ""}`}
            >
              <Icon
                size={31}
                strokeWidth={1.3}
                className="mb-8 text-[#e9946f]"
              />
              <h3 className="mb-4 font-heading text-[30px]">{title}</h3>
              <p className="m-0 text-xs leading-6 text-white/65">{text}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
