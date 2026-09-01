import { Reveal } from "./Reveal";
const items = [
  [
    "⌂",
    "Localização privilegiada",
    "A poucos passos da praia e perto de tudo.",
  ],
  ["☀", "Café da manhã incluso", "Sabores frescos para começar bem o dia."],
  ["♧", "Hospitalidade de verdade", "Cuidado em cada detalhe da sua estadia."],
];
export function Highlights() {
  return (
    <Reveal className="highlights">
      {items.map(([icon, title, copy]) => (
        <article key={title}>
          <i>{icon}</i>
          <div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        </article>
      ))}
    </Reveal>
  );
}
