import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";
export function ServiceHours() {
  return (
    <section id="horarios" className="section hours">
      <Reveal>
        <div>
          <p className="eyebrow green">ESTAMOS POR AQUI</p>
          <h2>
            Conte com a gente,
            <br />
            <em>do início ao fim.</em>
          </h2>
          <p>
            Nossa equipe está pronta para tirar dúvidas, ajudar com reservas e
            cuidar dos detalhes da sua chegada.
          </p>
        </div>
        <div className="schedule">
          <p>
            <span>Recepção</span>
            <strong>24 horas</strong>
          </p>
          <p>
            <span>WhatsApp & Reservas</span>
            <strong>Todos os dias · 8h às 22h</strong>
          </p>
          <p>
            <span>Café da manhã</span>
            <strong>7h às 10h30</strong>
          </p>
          <WhatsAppButton label="Tirar uma dúvida agora" />
        </div>
      </Reveal>
    </section>
  );
}
