import { Reveal } from "@/components/reveal";

const photos = [
  {
    src: "/images/photos/quarto-3.png",
    alt: "Quarto do hotel",
  },
  {
    src: "/images/photos/recepcao-1.png",
    alt: "Área de recepção e café do hotel",
  },
  {
    src: "/images/photos/recepcao-2.png",
    alt: "Espaço de convivência do hotel",
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
            <h2 className="font-heading text-[clamp(50px,5.7vw,78px)] leading-[.88] tracking-[-.035em]">
              Detalhes que convidam
              <br />
              <em>a ficar.</em>
            </h2>
          </div>
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
