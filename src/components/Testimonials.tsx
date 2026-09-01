import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  { text: "A sensação é de estar longe de tudo, mas com cada detalhe cuidado. Voltamos para casa realmente descansados.", name: "Marina & Caio", origin: "São Paulo" },
  { text: "O quarto, o café e principalmente a equipe fizeram a viagem ser ainda mais especial. Já queremos voltar.", name: "Ana Luiza", origin: "Belo Horizonte" },
];

export function Testimonials() {
  return <section className="testimonials"><Reveal><div className="testimonial-title"><Quote size={34} strokeWidth={1.2} aria-hidden="true"/><p className="eyebrow">HISTÓRIAS DE QUEM JÁ VEIO</p><h2>Dias leves.<br/><em>Lembranças bonitas.</em></h2></div><div className="review-list">{reviews.map((review)=><blockquote key={review.name}><div className="stars" aria-label="5 de 5 estrelas">{[1,2,3,4,5].map(star=><Star key={star} size={13} fill="currentColor" aria-hidden="true"/>)}</div><p>“{review.text}”</p><footer><strong>{review.name}</strong><span>{review.origin}</span></footer></blockquote>)}</div></Reveal></section>;
}
