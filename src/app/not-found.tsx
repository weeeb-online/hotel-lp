import Link from "next/link";
import { ArrowLeft, BedDouble, Compass } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function NotFound() {
  return (
    <main>
      <section className="relative flex min-h-190 items-center overflow-hidden bg-[#18392f] px-[clamp(24px,9vw,140px)] pt-28 pb-20 text-white">
        <div className="absolute inset-y-0 right-0 w-[52%] bg-[url('https://images.trvl-media.com/lodging/111000000/110820000/110814100/110814001/a327b28b.jpg')] bg-cover bg-center opacity-55 max-md:w-full max-md:opacity-25" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#18392f_35%,rgba(24,57,47,.72)_66%,rgba(24,57,47,.12))] max-md:bg-[#18392f]/65" />

        <div className="relative z-1 max-w-180">
          <div className="mb-7 flex items-center gap-4">
            <span className="font-serif text-[clamp(90px,14vw,180px)] leading-none text-[#e9946f]">
              404
            </span>
            <Compass
              size={38}
              strokeWidth={1.1}
              className="text-white/70"
              aria-hidden="true"
            />
          </div>
          <p className="mb-5 text-[10px] font-extrabold tracking-[.28em] text-[#a9c1b6]">
            PARECE QUE VOCÊ SAIU DA ROTA
          </p>
          <h1 className="font-serif text-[clamp(54px,7vw,88px)] leading-[.84] tracking-[-.04em]">
            Este caminho não leva
            <br />
            <em>ao MelosHotel.</em>
          </h1>
          <p className="my-8 max-w-125text-[13px] leading-7 text-white/70">
            A página que você procura não existe ou mudou de endereço. Mas seu
            próximo descanso continua bem perto.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white px-5 py-3.5 text-xs font-extrabold text-[#18392f] transition hover:-translate-y-0.5"
            >
              <ArrowLeft size={16} aria-hidden="true" /> Voltar ao início
            </Link>
            <Link
              href="/acomodacoes"
              className="inline-flex items-center gap-2 border border-white/50 px-5 py-3.5 text-xs font-extrabold text-white transition hover:bg-white/10"
            >
              <BedDouble size={16} aria-hidden="true" /> Ver acomodações
            </Link>
            <WhatsAppButton label="Pedir ajuda" />
          </div>
        </div>

        <span className="absolute right-8 bottom-8 z-1 text-[9px] tracking-[.2em] text-white/50 max-md:hidden">
          RESPIRE · VOCÊ ESTÁ QUASE LÁ
        </span>
      </section>
    </main>
  );
}
