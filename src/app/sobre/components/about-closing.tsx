import { Reveal } from "@/components/reveal";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function AboutClosing() {
  return (
    <section className="bg-[#c97850] px-6 py-25 text-center text-white">
      <Reveal className="mx-auto flex max-w-210 flex-col items-center">
        <p className="mb-5 text-[10px] font-extrabold tracking-[.28em]">
          SUA HISTÓRIA PODE COMEÇAR AQUI
        </p>
        <h2 className="font-heading text-[clamp(58px,7vw,94px)] leading-[.82] tracking-[-.04em]">
          Venha viver dias
          <br />
          <em>no seu ritmo.</em>
        </h2>
        <p className="my-8 max-w-130 text-[13px] leading-6 text-white/80">
          Será um prazer receber você e cuidar de cada detalhe da sua próxima
          pausa.
        </p>
        <WhatsAppButton label="Planejar minha estadia" light />
      </Reveal>
    </section>
  );
}
