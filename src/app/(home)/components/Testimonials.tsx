import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";

const reviews = [
  {
    text: "A sensação é de estar longe de tudo, mas com cada detalhe cuidado. Voltamos para casa realmente descansados.",
    name: "Marina & Caio",
    origin: "São Paulo",
  },
  {
    text: "O quarto, o café e principalmente a equipe fizeram a viagem ser ainda mais especial. Já queremos voltar.",
    name: "Ana Luiza",
    origin: "Belo Horizonte",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#c97850] px-[clamp(24px,9vw,140px)] py-25 text-white max-md:py-18">
      <Reveal className="grid grid-cols-[.85fr_1.35fr] items-center gap-[9vw] max-md:grid-cols-1">
        <div>
          <Quote size={34} strokeWidth={1.2} />
          <p className="mt-6 mb-5 text-[10px] font-extrabold tracking-[.28em]">
            HISTÓRIAS DE QUEM JÁ VEIO
          </p>
          <h2 className="font-serif text-[clamp(50px,5.7vw,78px)] leading-[.88] tracking-[-.035em]">
            Dias leves.
            <br />
            <em>Lembranças bonitas.</em>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          {reviews.map((r) => (
            <blockquote
              key={r.name}
              className="m-0 border-t border-white/45 pt-6"
            >
              <div aria-label="5 de 5 estrelas" className="flex gap-1">
                {[1, 2, 3, 4, 5].map((x) => (
                  <Star key={x} size={13} fill="currentColor" />
                ))}
              </div>
              <p className="my-5 font-serif text-2xl leading-[1.35]">
                “{r.text}”
              </p>
              <div className="flex flex-col gap-1">
                <strong className="text-[11px]">{r.name}</strong>
                <span className="text-[9px] opacity-75">{r.origin}</span>
              </div>
            </blockquote>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
