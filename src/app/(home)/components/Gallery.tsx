import { Camera } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const photos = [
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/723652655.webp?k=b8cc0d247fbba345a5677ffcaab9471bc0df44f14d8038ad62f972bfcb390348&o=",
    alt: "Suíte iluminada com acesso à piscina",
  },
  {
    src: "https://framerusercontent.com/images/kZJQV2l5CNnkQSLCMBSQNen4.webp?scale-down-to=1024",
    alt: "Área de descanso integrada ao jardim",
  },
  {
    src: "https://theasiacollective.com/wp-content/uploads/2017/11/Room3-1-of-24-e1511181466533.jpg",
    alt: "Piscina cercada por vegetação tropical",
  },
];

export function Gallery() {
  return (
    <section className="bg-[#f7f3e9] px-[clamp(24px,9vw,140px)] py-25 max-md:py-18">
      <Reveal>
        <div className="mb-10 flex items-end justify-between max-md:block">
          <div>
            <p className="mb-5 text-[10px] font-extrabold tracking-[.28em] text-[#587d6c]">
              UM OLHAR MAIS DE PERTO
            </p>
            <h2 className="font-serif text-[clamp(50px,5.7vw,78px)] leading-[.88] tracking-[-.035em]">
              Detalhes que convidam
              <br />
              <em>a ficar.</em>
            </h2>
          </div>
          <p className="flex max-w-75 items-start gap-3 text-xs leading-6 text-[#687a72] max-md:mt-6">
            <Camera size={18} />
            Luz natural, texturas acolhedoras e natureza sempre por perto.
          </p>
        </div>
        <div className="grid grid-cols-[1.55fr_1fr] grid-rows-[210px_210px] gap-3.5 max-md:grid-cols-2 max-md:grid-rows-[300px_170px]">
          {photos.map((p, i) => (
            <figure
              key={p.src}
              role="img"
              aria-label={p.alt}
              style={{ backgroundImage: `url('${p.src}')` }}
              className={`m-0 min-h-50 bg-cover bg-center ${i === 0 ? "row-span-2 max-md:col-span-2 max-md:row-span-1" : ""}`}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
