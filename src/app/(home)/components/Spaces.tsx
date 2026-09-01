"use client";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { WhatsAppButton } from "@/components/whatsapp-button";

const spaces = [
  {
    name: "SuÃ­te Jardim",
    type: "ACOMODAÃ‡ÃƒO",
    desc: "SilÃªncio, luz natural e uma varanda particular para o jardim.",
    meta: "2 hÃ³spedes Â· Cama queen Â· 28 mÂ²",
    img: "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2022/06/White-Goose-boutique-hotel-in-Berawa-Canggu-Bali-Indonesia-768x549.jpeg",
  },
  {
    name: "SuÃ­te Piscina",
    type: "ACOMODAÃ‡ÃƒO",
    desc: "Conforto amplo com acesso direto Ã  piscina e muito frescor.",
    meta: "2 hÃ³spedes Â· Cama king Â· 34 mÂ²",
    img: "https://www.momondo.com.br/himg/61/3f/33/expedia_group-7219544-147504362-782688.jpg",
  },
  {
    name: "Piscina & SolÃ¡rio",
    type: "LAZER",
    desc: "Um convite para alternar mergulhos, sol e sombra sem olhar o relÃ³gio.",
    meta: "Toalhas Â· EspreguiÃ§adeiras Â· Bar",
    img: "https://images.trvl-media.com/lodging/111000000/110820000/110814100/110814001/a327b28b.jpg",
  },
  {
    name: "CafÃ© & Lounge",
    type: "CONVIVÃŠNCIA",
    desc: "Ambiente arejado para cafÃ©s tranquilos, encontros e pequenas pausas.",
    meta: "CafÃ© da manhÃ£ Â· Wi-Fi Â· Jardim",
    img: "https://cdn.sanity.io/images/nxpteyfv/goguides/03ed763d390f57a4515189e6ed60e929f9a570cb-1400x933.jpg",
  },
];

export function Spaces() {
  const [a, setA] = useState(0),
    s = spaces[a];
  return (
    <section
      id="acomodacoes"
      className="bg-[#eeeadf] px-[clamp(24px,9vw,140px)] py-25 max-md:py-18"
    >
      <Reveal>
        <p className="mb-5 text-[10px] font-extrabold tracking-[.28em] text-[#587d6c]">
          CONHEÃ‡A CADA CANTO
        </p>
        <div className="mb-12 flex items-end justify-between max-md:block">
          <h2 className="m-0 font-heading text-[clamp(52px,6vw,82px)] leading-[.85] tracking-[-.035em]">
            Seu espaÃ§o para
            <br />
            <em>sentir-se bem.</em>
          </h2>
          <p className="max-w-85 text-[13px] leading-6 text-[#62766d] max-md:mt-6">
            Todos os ambientes, em um passeio simples. Escolha abaixo e
            descubra.
          </p>
        </div>
        <div
          role="tablist"
          className="flex overflow-x-auto border-b border-primary/15"
        >
          {spaces.map((x, i) => (
            <button
              key={x.name}
              onClick={() => setA(i)}
              className={`shrink-0 border-0 border-b-2 bg-transparent px-6 py-4 text-[11px] first:pl-0 ${i === a ? "border-secondary font-extrabold text-primary" : "border-transparent text-[#71817a]"}`}
            >
              {x.name}
            </button>
          ))}
        </div>
        <div className="mt-7 grid min-h-100 grid-cols-[1.65fr_1fr] bg-white max-md:grid-cols-1">
          <div
            className="min-h-70 bg-cover bg-center"
            style={{ backgroundImage: `url('${s.img}')` }}
          />
          <div className="flex flex-col items-start justify-center px-12 py-14 max-md:px-7 max-md:py-10">
            <small className="text-[9px] font-extrabold tracking-[.2em] text-secondary">
              {s.type}
            </small>
            <h3 className="my-4 font-heading text-[43px]">{s.name}</h3>
            <p className="text-[13px] leading-6 text-[#64766f]">{s.desc}</p>
            <span className="mb-6 w-full border-t border-primary/15 pt-4 text-[10px] text-[#65766f]">
              {s.meta}
            </span>
            <WhatsAppButton label="Quero saber mais" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
