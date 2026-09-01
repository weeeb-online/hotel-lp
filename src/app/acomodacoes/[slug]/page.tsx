import {
  ArrowLeft,
  Bath,
  Coffee,
  Maximize2,
  Snowflake,
  Tv,
  Users,
  Wifi,
} from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { accommodations, getAccommodation } from "@/data/accommodations";
import { RoomCarousel } from "./components/room-carousel";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return accommodations.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const room = getAccommodation((await params).slug);
  return room
    ? { title: `${room.name} | MelosHotel`, description: room.summary }
    : { title: "Acomodação | MelosHotel" };
}

const amenityIcons = [Snowflake, Wifi, Tv, Coffee, Bath, Maximize2];

export default async function AccommodationDetail({ params }: Props) {
  const room = getAccommodation((await params).slug);
  if (!room) notFound();
  return (
    <main>
      <section
        className="relative flex min-h-140 items-end bg-cover bg-center px-[clamp(24px,9vw,140px)] pb-16 pt-32 text-white"
        style={{ backgroundImage: `url('${room.images[0]}')` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,35,28,.75),rgba(10,35,28,.08)_70%)]" />
        <div className="relative z-1 w-full">
          <Link
            href="/acomodacoes"
            className="mb-10 inline-flex items-center gap-2 text-xs font-bold"
          >
            <ArrowLeft size={15} />
            Todas as acomodações
          </Link>
          <p className="mb-4 text-[10px] font-extrabold tracking-[.28em]">
            {room.eyebrow}
          </p>
          <div className="flex items-end justify-between gap-8 max-md:block">
            <h1 className="font-heading text-[clamp(68px,9vw,118px)] leading-[.78] tracking-[-.04em]">
              {room.name}
            </h1>
            <strong className="mb-2 text-sm max-md:mt-6 max-md:block">
              {room.price}{" "}
              <span className="font-normal text-white/70">/ noite</span>
            </strong>
          </div>
        </div>
      </section>
      <section className="bg-[#f4f0e6] px-[clamp(24px,9vw,140px)] py-25">
        <div className="mx-auto grid max-w-310 grid-cols-[1.15fr_.85fr] gap-[10vw] max-md:grid-cols-1">
          <div>
            <p className="mb-5 text-[10px] font-extrabold tracking-[.28em] text-[#587d6c]">
              SOBRE ESTE ESPAÇO
            </p>
            <h2 className="mb-8 font-heading text-[clamp(46px,5vw,68px)] leading-[.9] text-primary">
              Um convite para
              <br />
              <em>desacelerar.</em>
            </h2>
            <p className="text-[15px] leading-8 text-[#61746b]">
              {room.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-7 border-y border-primary/15 py-6 text-xs">
              <span className="flex items-center gap-2">
                <Users size={17} />
                {room.guests} hóspedes
              </span>
              <span className="flex items-center gap-2">
                <Maximize2 size={17} />
                {room.size}
              </span>
              <strong>{room.bed}</strong>
            </div>
          </div>
          <aside className="bg-white p-9 shadow-[0_20px_60px_rgba(24,57,47,.08)]">
            <p className="text-[9px] font-extrabold tracking-[.22em] text-secondary">
              RESERVE DIRETO CONOSCO
            </p>
            <h3 className="my-4 font-heading text-[36px] leading-tight text-primary">
              Sua próxima pausa começa aqui.
            </h3>
            <p className="mb-7 text-xs leading-6 text-[#64766f]">
              Consulte datas, valores e condições especiais com nossa equipe.
            </p>
            <WhatsAppButton label="Consultar disponibilidade" />
            <small className="mt-5 block text-[10px] text-[#78877f]">
              Resposta diária, das 8h às 22h.
            </small>
          </aside>
        </div>
      </section>
      <section className="bg-[#ebe5d8] px-[clamp(24px,7vw,110px)] py-25">
        <div className="mx-auto max-w-330">
          <div className="mb-10 flex items-end justify-between max-md:block">
            <div>
              <p className="mb-5 text-[10px] font-extrabold tracking-[.28em] text-[#587d6c]">
                VEJA CADA DETALHE
              </p>
              <h2 className="font-heading text-[clamp(48px,6vw,76px)] leading-[.88] text-primary">
                Por dentro da
                <br />
                <em>{room.name}.</em>
              </h2>
            </div>
            <p className="max-w-85 text-xs leading-6 text-[#65776f] max-md:mt-6">
              Navegue pelas imagens e imagine seus próximos dias por aqui.
            </p>
          </div>
          <div className="h-[min(70vw,700px)] min-h-115">
            <RoomCarousel images={room.images} name={room.name} />
          </div>
        </div>
      </section>
      <section className="bg-primary px-[clamp(24px,9vw,140px)] py-25 text-white">
        <div className="mx-auto grid max-w-300 grid-cols-2 gap-[10vw] max-md:grid-cols-1">
          <div>
            <p className="mb-5 text-[10px] font-extrabold tracking-[.28em] text-[#9db6ab]">
              TUDO PARA O SEU CONFORTO
            </p>
            <h2 className="font-heading text-[clamp(48px,6vw,74px)] leading-[.88]">
              Comodidades
              <br />
              <em>incluídas.</em>
            </h2>
            <ul className="mt-10 grid grid-cols-2 gap-px bg-white/15">
              {room.amenities.map((item, i) => {
                const Icon = amenityIcons[i % amenityIcons.length];
                return (
                  <li
                    key={item}
                    className="flex items-center gap-3 bg-primary p-5 text-xs"
                  >
                    <Icon size={18} className="text-[#e9946f]" />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="self-end border-t border-white/20 pt-8">
            <p className="mb-6 text-[10px] font-extrabold tracking-[.2em] text-[#9db6ab]">
              DESTAQUES DESTA ACOMODAÇÃO
            </p>
            {room.highlights.map((item, i) => (
              <p
                key={item}
                className="flex items-center gap-5 border-b border-white/15 py-5 font-heading text-2xl"
              >
                <span className="text-sm text-[#e9946f]">0{i + 1}</span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#c97850] px-6 py-25 text-center text-white">
        <p className="mb-5 text-[10px] font-extrabold tracking-[.28em]">
          PRONTO PARA RESERVAR?
        </p>
        <h2 className="mx-auto mb-8 max-w-210 font-heading text-[clamp(54px,7vw,90px)] leading-[.84]">
          A {room.name} espera por você.
        </h2>
        <div className="flex justify-center">
          <WhatsAppButton label="Quero reservar esta acomodação" light />
        </div>
      </section>
    </main>
  );
}
