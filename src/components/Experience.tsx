import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";
export function Experience() {
  return (
    <section id="experiencia" className="experience">
      <div className="experience-image" />
      <Reveal className="experience-copy">
        <p className="eyebrow">MAIS QUE UMA ESTADIA</p>
        <h2>
          Pequenos cuidados.
          <br />
          <em>Grandes memórias.</em>
        </h2>
        <p>
          Da chegada ao último café, nossa equipe cuida para que tudo flua no
          seu ritmo. Dicas locais, carinho nos detalhes e a liberdade de
          simplesmente aproveitar.
        </p>
        <ul>
          <li>✓ Recepção atenciosa e personalizada</li>
          <li>✓ Dicas de passeios e experiências locais</li>
          <li>✓ Wi-Fi rápido em todos os ambientes</li>
        </ul>
        <WhatsAppButton label="Planejar minha estadia" light />
      </Reveal>
    </section>
  );
}
