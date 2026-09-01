import { Bike, Sailboat, Utensils } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppButton } from "@/components/whatsapp-button";

const data = [
  {
    icon: Sailboat,
    title: "Passeio ao pÃ´r do sol",
    copy: "Uma tarde no mar com horizonte aberto e parada para mergulho.",
  },
  {
    icon: Bike,
    title: "Caminhos da regiÃ£o",
    copy: "Roteiros leves de bicicleta entre praia, vila e natureza.",
  },
  {
    icon: Utensils,
    title: "Sabores locais",
    copy: "Nossa seleÃ§Ã£o de restaurantes e pequenos produtores para conhecer.",
  },
];

export function LocalExperiences() {
  return (
    <section className="bg-[#ebe5d8] px-[clamp(24px,9vw,140px)] py-25 max-md:py-18">
      <Reveal>
        <div className="mx-auto mb-12 max-w-185 text-center">
          <p className="mb-5 text-[10px] font-extrabold tracking-[.28em] text-[#587d6c]">
            VIVA O DESTINO
          </p>
          <h2 className="font-heading text-[clamp(50px,5.7vw,78px)] leading-[.88] tracking-[-.035em]">
            Tem sempre algo bonito
            <br />
            <em>para descobrir.</em>
          </h2>
          <p className="mt-6 text-[13px] text-[#687a72]">
            Conte com nossa equipe para montar um roteiro no seu ritmo.
          </p>
        </div>
        <div className="grid grid-cols-3 border-y border-primary/15 max-md:grid-cols-1">
          {data.map(({ icon: Icon, title, copy }, i) => (
            <article
              key={title}
              className="relative border-r border-primary/15 px-9 py-10 last:border-r-0 max-md:border-r-0 max-md:border-b max-md:px-5 max-md:py-8"
            >
              <span className="absolute top-5 right-6 font-heading text-2xl text-[#9b9e91]">
                0{i + 1}
              </span>
              <Icon
                size={28}
                strokeWidth={1.35}
                className="mb-6 text-secondary"
              />
              <h3 className="mb-3 font-heading text-2xl">{title}</h3>
              <p className="m-0 text-xs leading-6 text-[#66776f]">{copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-9 flex justify-center">
          <WhatsAppButton label="Quero dicas para o meu roteiro" />
        </div>
      </Reveal>
    </section>
  );
}
