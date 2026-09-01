import { Car, MapPin, Navigation, Plane } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Location() {
  return (
    <section
      id="localizacao"
      className="bg-[#f7f3e9] px-[clamp(24px,9vw,140px)] py-25 max-md:py-18"
    >
      <Reveal className="grid grid-cols-[.9fr_1.2fr] items-center gap-[8vw] max-md:grid-cols-1">
        <div>
          <p className="mb-5 text-[10px] font-extrabold tracking-[.28em] text-[#587d6c]">
            FÁCIL DE CHEGAR, DIFÍCIL DE IR EMBORA
          </p>
          <h2 className="font-serif text-[clamp(50px,5.7vw,78px)] leading-[.88] tracking-[-.035em]">
            No coração da
            <br />
            <em>Praia do Encanto.</em>
          </h2>
          <p className="my-7 max-w-120 text-[13px] leading-6 text-[#65776f]">
            Estamos em uma rua tranquila, próximos à praia, restaurantes e aos
            melhores passeios da região.
          </p>
          <address className="flex gap-3 border-y border-[#18392f]/15 py-5 text-xs leading-5 not-italic">
            <MapPin size={20} className="shrink-0 text-[#e56d3d]" />
            <span>
              Rua do Sossego, 128
              <br />
              <strong>Praia do Encanto — Brasil</strong>
            </span>
          </address>
          <div className="my-5 flex gap-6 max-md:flex-col max-md:gap-2">
            {[
              [Car, "5 min do centro"],
              [Plane, "45 min do aeroporto"],
            ].map(([Icon, text]) => {
              const I = Icon as typeof Car;
              return (
                <span
                  key={String(text)}
                  className="flex items-center gap-2 text-[10px]"
                >
                  <I size={16} />
                  {String(text)}
                </span>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-2.5 max-md:flex-col">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Praia+do+Encanto+Brasil"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[#18392f] px-4 py-3 text-[11px] font-extrabold"
            >
              <Navigation size={16} />
              Abrir rota no Google Maps
            </a>
            <WhatsAppButton label="Preciso de ajuda para chegar" />
          </div>
        </div>
        <div className="relative h-135 bg-[#d5d9d1] max-md:mt-8 max-md:h-100">
          <iframe
            title="Mapa interativo da localização do MelosHotel"
            src="https://www.google.com/maps?q=Praia%20do%20Encanto%20Brasil&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-full w-full border-0 saturate-75 contrast-95"
          />
          <span className="absolute bottom-5 left-5 flex items-center gap-2 bg-[#18392f] px-4 py-3 text-[11px] text-white shadow-xl">
            <MapPin size={14} fill="currentColor" />
            MelosHotel
          </span>
        </div>
      </Reveal>
    </section>
  );
}
