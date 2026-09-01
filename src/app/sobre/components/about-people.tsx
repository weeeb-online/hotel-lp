import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function AboutPeople() {
  return (
    <section className="grid grid-cols-2 bg-[#ebe5d8] max-md:grid-cols-1">
      <div className="min-h-160 bg-[url('https://www.travelersjoy.com/blog/honeymoon_plunge_pools-9.png')] bg-cover bg-center max-md:min-h-105" />
      <Reveal className="self-center px-[clamp(36px,8vw,120px)] py-24">
        <MessageCircle
          size={29}
          strokeWidth={1.3}
          className="mb-7 text-secondary"
        />
        <p className="mb-5 text-[10px] font-extrabold tracking-[.28em] text-[#587d6c]">
          PESSOAS CUIDANDO DE PESSOAS
        </p>
        <h2 className="font-heading text-[clamp(52px,6vw,78px)] leading-[.88] tracking-[-.035em]">
          Sempre por
          <br />
          <em>perto.</em>
        </h2>
        <p className="my-8 max-w-125 text-[13px] leading-7 text-[#61746b]">
          Somos uma equipe pequena e apaixonada pela regiÃ£o. Conhecemos os
          melhores caminhos, sabores escondidos e praias especiais. Conte com a
          gente para tornar sua estadia Ãºnica.
        </p>
        <WhatsAppButton label="Conversar com nossa equipe" />
      </Reveal>
    </section>
  );
}
