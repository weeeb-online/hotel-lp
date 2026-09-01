import { Coffee, HeartHandshake, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
const items = [{icon:MapPin,title:"Localização privilegiada",copy:"A poucos passos da praia e perto de tudo."},{icon:Coffee,title:"Café da manhã incluso",copy:"Sabores frescos para começar bem o dia."},{icon:HeartHandshake,title:"Hospitalidade de verdade",copy:"Cuidado em cada detalhe da sua estadia."}];
export function Highlights(){return <Reveal className="highlights">{items.map(({icon:Icon,title,copy})=><article key={title}><i><Icon size={27} strokeWidth={1.4} aria-hidden="true" /></i><div><h3>{title}</h3><p>{copy}</p></div></article>)}</Reveal>}
