import { WhatsAppButton } from "./WhatsAppButton";
export function Footer() {
  return (
    <footer>
      <div className="brand footer-brand">
        <span>MELOS</span>
        <small>HOTEL</small>
      </div>
      <div>
        <small>VENHA NOS VISITAR</small>
        <p>
          Rua do Sossego, 128
          <br />
          Praia do Encanto — Brasil
        </p>
        <a href="https://maps.google.com" target="_blank" rel="noreferrer">
          Como chegar ↗
        </a>
      </div>
      <div>
        <small>FALE COM A GENTE</small>
        <p>
          contato@meloshotel.com.br
          <br />
          +55 (11) 99999-9999
        </p>
        <WhatsAppButton label="Chamar no WhatsApp" light />
      </div>
      <p className="copyright">© 2026 MelosHotel · Feito para dias leves.</p>
    </footer>
  );
}
