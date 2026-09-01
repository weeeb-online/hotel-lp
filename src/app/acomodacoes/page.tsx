import type { Metadata } from "next";
import { ArrowRight, Maximize2, Users } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { accommodations } from "@/data/accommodations";
import { RoomCarousel } from "./[slug]/components/RoomCarousel";
import { AccommodationsHero } from "./components/AccommodationsHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Acomodações | MelosHotel",
  description: "Conheça todas as suítes e bangalôs do MelosHotel.",
};

export default function AccommodationsPage() {
  return (
    <main>
      <AccommodationsHero />
      <section className="bg-[#f4f0e6] px-[clamp(24px,7vw,110px)] py-25">
        <div className="mx-auto mb-16 max-w-175 text-center">
          <p className="mb-5 text-[10px] font-extrabold tracking-[.28em] text-[#587d6c]">
            TODAS AS ACOMODAÇÕES
          </p>
          <h2 className="font-serif text-[clamp(48px,6vw,76px)] leading-[.88] text-[#18392f]">
            Encontre o seu
            <br />
            <em>lugar preferido.</em>
          </h2>
        </div>
        <div className="mx-auto max-w-330 space-y-8">
          {accommodations.map((room, index) => (
            <article
              key={room.slug}
              className="grid min-h-130 grid-cols-2 bg-white max-md:grid-cols-1"
            >
              <div className={index % 2 ? "md:order-2" : ""}>
                <RoomCarousel
                  images={room.images}
                  name={room.name}
                  priority={index === 0}
                />
              </div>
              <div
                className={`flex flex-col items-start justify-center px-[clamp(32px,6vw,90px)] py-16 ${index % 2 ? "md:order-1" : ""}`}
              >
                <p className="mb-4 text-[9px] font-extrabold tracking-[.24em] text-[#e56d3d]">
                  {room.eyebrow}
                </p>
                <h2 className="mb-5 font-serif text-[clamp(42px,5vw,64px)] leading-none text-[#18392f]">
                  {room.name}
                </h2>
                <p className="max-w-120 text-[13px] leading-7 text-[#62766d]">
                  {room.summary}
                </p>
                <div className="my-7 flex flex-wrap gap-5 border-y border-[#18392f]/15 py-4 text-[11px] text-[#52675e]">
                  <span className="flex items-center gap-2">
                    <Users size={15} />
                    {room.guests} hóspedes
                  </span>
                  <span className="flex items-center gap-2">
                    <Maximize2 size={15} />
                    {room.size}
                  </span>
                  <strong>{room.bed}</strong>
                </div>
                <strong className="mb-6 text-xs text-[#18392f]">
                  {room.price}{" "}
                  <span className="font-normal text-[#6b7c74]">/ noite</span>
                </strong>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/acomodacoes/${room.slug}`}
                    className="inline-flex items-center gap-2 border border-[#18392f] px-5 py-3.5 text-xs font-extrabold text-[#18392f]"
                  >
                    Ver detalhes <ArrowRight size={15} />
                  </Link>
                  <WhatsAppButton label="Consultar datas" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
