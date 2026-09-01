import { Bike, Sailboat, Utensils } from "lucide-react";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

const experiences = [
  { icon: Sailboat, title: "Passeio ao pôr do sol", copy: "Uma tarde no mar com horizonte aberto e parada para mergulho." },
  { icon: Bike, title: "Caminhos da região", copy: "Roteiros leves de bicicleta entre praia, vila e natureza." },
  { icon: Utensils, title: "Sabores locais", copy: "Nossa seleção de restaurantes e pequenos produtores para conhecer." },
];

export function LocalExperiences() {
  return <section className="section local-experiences"><Reveal><div className="center-heading"><p className="eyebrow green">VIVA O DESTINO</p><h2>Tem sempre algo bonito<br/><em>para descobrir.</em></h2><p>Conte com nossa equipe para montar um roteiro no seu ritmo.</p></div><div className="experience-cards">{experiences.map(({icon:Icon,title,copy}, index)=><article key={title}><span>0{index+1}</span><Icon size={28} strokeWidth={1.35} aria-hidden="true"/><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="center-action"><WhatsAppButton label="Quero dicas para o meu roteiro" /></div></Reveal></section>;
}
