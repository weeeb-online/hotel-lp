"use client";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";
const spaces = [
  {
    name: "Suíte Jardim",
    type: "ACOMODAÇÃO",
    desc: "Silêncio, luz natural e uma varanda particular para o jardim.",
    meta: "2 hóspedes · Cama queen · 28 m²",
    img: "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2022/06/White-Goose-boutique-hotel-in-Berawa-Canggu-Bali-Indonesia-768x549.jpeg",
  },
  {
    name: "Suíte Piscina",
    type: "ACOMODAÇÃO",
    desc: "Conforto amplo com acesso direto à piscina e muito frescor.",
    meta: "2 hóspedes · Cama king · 34 m²",
    img: "https://www.momondo.com.br/himg/61/3f/33/expedia_group-7219544-147504362-782688.jpg",
  },
  {
    name: "Piscina & Solário",
    type: "LAZER",
    desc: "Um convite para alternar mergulhos, sol e sombra sem olhar o relógio.",
    meta: "Toalhas · Espreguiçadeiras · Bar",
    img: "https://images.trvl-media.com/lodging/111000000/110820000/110814100/110814001/a327b28b.jpg",
  },
  {
    name: "Café & Lounge",
    type: "CONVIVÊNCIA",
    desc: "Ambiente arejado para cafés tranquilos, encontros e pequenas pausas.",
    meta: "Café da manhã · Wi-Fi · Jardim",
    img: "https://cdn.sanity.io/images/nxpteyfv/goguides/03ed763d390f57a4515189e6ed60e929f9a570cb-1400x933.jpg",
  },
];
export function Spaces() {
  const [active, setActive] = useState(0);
  const s = spaces[active];
  return (
    <section id="acomodacoes" className="section spaces">
      <Reveal>
        <p className="eyebrow green">CONHEÇA CADA CANTO</p>
        <div className="section-heading">
          <h2>
            Seu espaço para
            <br />
            <em>sentir-se bem.</em>
          </h2>
          <p>
            Todos os ambientes, em um passeio simples. Escolha abaixo e
            descubra.
          </p>
        </div>
        <div className="space-tabs" role="tablist">
          {spaces.map((x, i) => (
            <button
              key={x.name}
              className={i === active ? "active" : ""}
              onClick={() => setActive(i)}
            >
              {x.name}
            </button>
          ))}
        </div>
        <div className="space-card">
          <div
            className="space-image"
            style={{ backgroundImage: `url('${s.img}')` }}
          />
          <div className="space-info">
            <small>{s.type}</small>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
            <span>{s.meta}</span>
            <WhatsAppButton label="Quero saber mais" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
