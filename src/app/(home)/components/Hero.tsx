import { ArrowDown, Circle } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex h-[min(760px,100vh)] min-h-160 items-center bg-[url('https://cdn.sanity.io/images/nxpteyfv/goguides/03ed763d390f57a4515189e6ed60e929f9a570cb-1400x933.jpg')] bg-cover bg-center px-[clamp(24px,9vw,140px)] pt-27 pb-15 text-white max-md:min-h-170 max-md:items-start max-md:pt-30"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,35,28,.78),rgba(10,35,28,.12)),linear-gradient(0deg,rgba(10,35,28,.35),transparent_55%)]" />
      <div className="relative z-1 max-w-180">
        <p className="mb-5 text-[10px] font-extrabold tracking-[.28em]">
          BEM-VINDO AO SEU REFÚGIO
        </p>
        <h1 className="mb-10 font-serif text-[clamp(68px,8.4vw,126px)] leading-[.72] font-medium tracking-[-.035em] max-md:mt-14 max-md:text-[64px]">
          Onde o tempo
          <br />
          <em className="ml-[.55em] font-normal max-md:ml-0">desacelera.</em>
        </h1>
        <p className="max-w-120 text-base leading-7 text-white/85">
          Entre o verde e o azul, um lugar para respirar fundo, sentir-se em
          casa e viver dias inesquecíveis.
        </p>
        <div className="mt-8 flex items-center gap-7 max-md:flex-col max-md:items-start">
          <WhatsAppButton label="Quero reservar" light />
          <a
            href="#acomodacoes"
            className="inline-flex items-center gap-2 border-b border-white/55 pb-1 text-xs font-bold"
          >
            Conhecer os espaços <ArrowDown size={14} />
          </a>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 flex w-85 flex-col gap-1 bg-[#f4f0e6] px-8 py-5 text-[#18392f] max-md:w-4/5">
        <span className="flex items-center gap-1.5 text-[10px] text-[#56856f]">
          <Circle size={7} fill="currentColor" /> Atendimento online
        </span>
        <strong className="text-xs">Todos os dias, 8h às 22h</strong>
      </div>
    </section>
  );
}
