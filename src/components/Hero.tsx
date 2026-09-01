import { WhatsAppButton } from "./WhatsAppButton";
export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">BEM-VINDO AO SEU REFÚGIO</p>
        <h1>
          Onde o tempo
          <br />
          <em>desacelera.</em>
        </h1>
        <p className="hero-copy">
          Entre o verde e o azul, um lugar para respirar fundo, sentir-se em
          casa e viver dias inesquecíveis.
        </p>
        <div className="hero-actions">
          <WhatsAppButton label="Quero reservar" light />
          <a href="#acomodacoes" className="text-link">
            Conhecer os espaços ↓
          </a>
        </div>
      </div>
      <div className="availability">
        <span>● Atendimento online</span>
        <strong>Todos os dias, 8h às 22h</strong>
      </div>
    </section>
  );
}
