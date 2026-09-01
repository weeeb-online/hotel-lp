import { ArrowUpRight } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer className="grid grid-cols-[1.2fr_1fr_1fr] gap-14 bg-[#102d26] px-[clamp(24px,9vw,140px)] pt-17 pb-7 text-[#dce4e0] max-md:grid-cols-1 max-md:gap-9">
      <div className="flex flex-col items-start leading-none">
        <span className="font-serif text-[44px] tracking-[.16em]">MELOS</span>
        <small className="mt-2 ml-1 text-[8px] tracking-[.5em]">HOTEL</small>
      </div>
      <div>
        <small className="text-[9px] tracking-[.2em] text-[#8da49a]">
          VENHA NOS VISITAR
        </small>
        <p className="my-3 text-xs leading-6 text-[#c0cec8]">
          Rua do Sossego, 128
          <br />
          Praia do Encanto — Brasil
        </p>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-[11px] underline"
        >
          Como chegar <ArrowUpRight size={13} />
        </a>
      </div>
      <div>
        <small className="text-[9px] tracking-[.2em] text-[#8da49a]">
          FALE COM A GENTE
        </small>
        <p className="my-3 text-xs leading-6 text-[#c0cec8]">
          contato@meloshotel.com.br
          <br />
          +55 (11) 99999-9999
        </p>
        <WhatsAppButton label="Chamar no WhatsApp" light />
      </div>
      <p className="col-span-full mt-6 border-t border-white/15 pt-6 text-[9px] text-[#c0cec8]">
        © 2026 MelosHotel · Feito para dias leves.
      </p>
    </footer>
  );
}
