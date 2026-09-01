import { Coffee, HeartHandshake, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";

const items = [
  {
    icon: MapPin,
    title: "Localização privilegiada",
    copy: "A poucos passos da praia e perto de tudo.",
  },
  {
    icon: Coffee,
    title: "Café da manhã incluso",
    copy: "Sabores frescos para começar bem o dia.",
  },
  {
    icon: HeartHandshake,
    title: "Hospitalidade de verdade",
    copy: "Cuidado em cada detalhe da sua estadia.",
  },
];

export function Highlights() {
  return (
    <Reveal className="mx-auto grid max-w-295 grid-cols-3 gap-9 px-8 py-11 max-md:grid-cols-1 max-md:px-6 max-md:py-9">
      {items.map(({ icon: Icon, title, copy }, i) => (
        <article
          key={title}
          className={`flex gap-4 pr-5 ${i < 2 ? "border-r border-primary/15 max-md:border-r-0 max-md:border-b max-md:pb-5" : ""}`}
        >
          <Icon size={27} strokeWidth={1.4} />
          <div>
            <h3 className="mb-1.5 text-xs font-bold">{title}</h3>
            <p className="m-0 text-[11px] leading-4 text-[#63776f]">{copy}</p>
          </div>
        </article>
      ))}
    </Reveal>
  );
}
