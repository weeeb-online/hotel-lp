import Link from "next/link";
import { ArrowLeft, BedDouble, Compass } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function NotFound() {
  return (
    <main>
      <section className="relative flex min-h-190 items-center overflow-hidden bg-primary px-[clamp(24px,9vw,140px)] pt-28 pb-20 text-white">
        <div className="absolute inset-y-0 right-0 w-[52%] bg-[url('https://images.trvl-media.com/lodging/111000000/110820000/110814100/110814001/a327b28b.jpg')] bg-cover bg-center opacity-55 max-md:w-full max-md:opacity-25" />
        <div className="absolute inset-0 bg-linear-to-r from-primary from-35% via-primary/70 via-66% to-primary/10 max-md:bg-primary/65" />

        <div className="relative z-1 max-w-180">
          <div className="mb-7 flex items-center gap-4">
            <span className="font-heading text-[clamp(90px,14vw,180px)] leading-none text-[#e9946f]">
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
            PARECE QUE VOCÃŠ SAIU DA ROTA
          </p>
          <h1 className="font-heading text-[clamp(54px,7vw,88px)] leading-[.84] tracking-[-.04em]">
            Este caminho nÃ£o leva
            <br />
            <em>ao MelosHotel.</em>
          </h1>
          <p className="my-8 max-w-125text-[13px] leading-7 text-white/70">
            A pÃ¡gina que vocÃª procura nÃ£o existe ou mudou de endereÃ§o. Mas seu
            prÃ³ximo descanso continua bem perto.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white px-5 py-3.5 text-xs font-extrabold text-primary transition hover:-translate-y-0.5"
            >
              <ArrowLeft size={16} aria-hidden="true" /> Voltar ao inÃ­cio
            </Link>
            <Link
              href="/acomodacoes"
              className="inline-flex items-center gap-2 border border-white/50 px-5 py-3.5 text-xs font-extrabold text-white transition hover:bg-white/10"
            >
              <BedDouble size={16} aria-hidden="true" /> Ver acomodaÃ§Ãµes
            </Link>
            <WhatsAppButton label="Pedir ajuda" />
          </div>
        </div>

        <span className="absolute right-8 bottom-8 z-1 text-[9px] tracking-[.2em] text-white/50 max-md:hidden">
          RESPIRE Â· VOCÃŠ ESTÃ QUASE LÃ
        </span>
      </section>
    </main>
  );
}
