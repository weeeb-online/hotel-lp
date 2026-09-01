import { Leaf } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function AboutStory() {
  return (
    <section className="bg-[#f4f0e6] px-[clamp(24px,9vw,140px)] py-30 max-md:py-20">
      <Reveal className="grid grid-cols-[.8fr_1.2fr] gap-[10vw] max-md:grid-cols-1">
        <div>
          <p className="mb-5 text-[10px] font-extrabold tracking-[.28em] text-[#587d6c]">
            COMO TUDO COMEÃ‡OU
          </p>
          <h2 className="font-heading text-[clamp(52px,6vw,82px)] leading-[.88] tracking-[-.035em]">
            Feito para
            <br />
            <em>acolher.</em>
          </h2>
        </div>
        <div className="max-w-170">
          <Leaf size={30} strokeWidth={1.3} className="mb-8 text-secondary" />
          <p className="font-heading text-[clamp(26px,3vw,38px)] leading-tight text-primary">
            O MelosHotel nasceu de uma ideia simples: criar um lugar onde cada
            pessoa pudesse diminuir o ritmo e se sentir verdadeiramente
            bem-vinda.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-8 border-t border-primary/15 pt-8 text-[13px] leading-7 text-[#61746b] max-md:grid-cols-1">
            <p>
              Transformamos uma casa prÃ³xima ao mar em um refÃºgio de poucos
              quartos, preservando o jardim, a luz natural e a relaÃ§Ã£o tranquila
              com a vizinhanÃ§a.
            </p>
            <p>
              Desde entÃ£o, recebemos cada hÃ³spede como recebemos amigos: com
              atenÃ§Ã£o, boas conversas e liberdade para viver os dias no prÃ³prio
              ritmo.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
