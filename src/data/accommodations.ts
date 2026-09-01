export type Accommodation = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  guests: number;
  size: string;
  bed: string;
  price: string;
  images: string[];
  amenities: string[];
  highlights: string[];
};

export const accommodations: Accommodation[] = [
  {
    slug: "suite-jardim",
    name: "Suíte Jardim",
    eyebrow: "CALMA E PRIVACIDADE",
    summary:
      "Luz natural, texturas acolhedoras e uma varanda reservada diante do jardim.",
    description:
      "Pensada para quem busca silêncio e contato com a natureza, a Suíte Jardim combina materiais naturais, tons suaves e tudo o que é essencial para dias tranquilos. A varanda privativa é o lugar perfeito para começar a manhã sem pressa.",
    guests: 2,
    size: "28 m²",
    bed: "Cama queen",
    price: "A partir de R$ 620",
    images: [
      "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2022/06/White-Goose-boutique-hotel-in-Berawa-Canggu-Bali-Indonesia-768x549.jpeg",
      "https://framerusercontent.com/images/kZJQV2l5CNnkQSLCMBSQNen4.webp?scale-down-to=1024",
      "https://images.trvl-media.com/lodging/98000000/97730000/97726300/97726283/c0e3d013.jpg?impolicy=resizecrop&ra=fill&rh=575&rw=575",
    ],
    amenities: [
      "Ar-condicionado",
      "Wi-Fi rápido",
      "Smart TV",
      "Frigobar",
      "Chuveiro amplo",
      "Varanda privativa",
    ],
    highlights: [
      "Vista para o jardim",
      "Café da manhã incluso",
      "Enxoval premium",
    ],
  },
  {
    slug: "suite-piscina",
    name: "Suíte Piscina",
    eyebrow: "MERGULHE NO SEU RITMO",
    summary:
      "Uma suíte ampla com acesso direto à piscina e integração entre dentro e fora.",
    description:
      "A Suíte Piscina foi criada para viver o hotel com liberdade. As portas de vidro se abrem para a água e deixam a brisa entrar, enquanto o interior espaçoso oferece conforto para descansar, ler ou simplesmente não fazer nada.",
    guests: 2,
    size: "34 m²",
    bed: "Cama king",
    price: "A partir de R$ 790",
    images: [
      "https://www.momondo.com.br/himg/61/3f/33/expedia_group-7219544-147504362-782688.jpg",
      "https://theasiacollective.com/wp-content/uploads/2017/11/Room3-1-of-24-e1511181466533.jpg",
      "https://images.trvl-media.com/lodging/10000000/9230000/9227300/9227252/7cc8fffd.jpg?impolicy=resizecrop&ra=fill&rh=575&rw=575",
    ],
    amenities: [
      "Acesso à piscina",
      "Ar-condicionado",
      "Wi-Fi rápido",
      "Smart TV",
      "Frigobar",
      "Roupões",
    ],
    highlights: ["Cama king", "Deck particular", "Café da manhã incluso"],
  },
  {
    slug: "suite-familia",
    name: "Suíte Família",
    eyebrow: "ESPAÇO PARA ESTAR JUNTO",
    summary:
      "Conforto para compartilhar a viagem, com ambientes amplos e flexíveis.",
    description:
      "Um espaço acolhedor para famílias que desejam estar perto sem abrir mão do conforto. A configuração flexível acomoda adultos e crianças, com área de apoio, varanda e acesso fácil às áreas comuns do hotel.",
    guests: 4,
    size: "42 m²",
    bed: "1 queen + 2 solteiros",
    price: "A partir de R$ 940",
    images: [
      "https://cdn.sanity.io/images/nxpteyfv/goguides/03ed763d390f57a4515189e6ed60e929f9a570cb-1400x933.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/723652655.webp?k=b8cc0d247fbba345a5677ffcaab9471bc0df44f14d8038ad62f972bfcb390348&o=",
      "https://natouralist.de/storage/lodges/cross-bali-breakers/37176/cross-bali-breakers.jpg",
    ],
    amenities: [
      "Ar-condicionado",
      "Wi-Fi rápido",
      "Smart TV",
      "Frigobar",
      "Berço sob consulta",
      "Varanda",
    ],
    highlights: [
      "Até 4 hóspedes",
      "Ambientes integrados",
      "Café da manhã incluso",
    ],
  },
  {
    slug: "bangalo-encanto",
    name: "Bangalô Encanto",
    eyebrow: "NOSSO REFÚGIO MAIS EXCLUSIVO",
    summary:
      "Privacidade, piscina particular e uma experiência inteira só para você.",
    description:
      "O Bangalô Encanto é a acomodação mais reservada do MelosHotel. Cercado pelo verde, reúne quarto, sala, deck e piscina privativa em uma atmosfera íntima — ideal para celebrações e viagens a dois.",
    guests: 2,
    size: "58 m²",
    bed: "Cama king",
    price: "A partir de R$ 1.180",
    images: [
      "https://images.trvl-media.com/lodging/111000000/110820000/110814100/110814001/a327b28b.jpg",
      "https://www.travelersjoy.com/blog/honeymoon_plunge_pools-9.png",
      "https://images.trvl-media.com/lodging/10000000/9230000/9227300/9227252/7cc8fffd.jpg?impolicy=resizecrop&ra=fill&rh=575&rw=575",
    ],
    amenities: [
      "Piscina privativa",
      "Banheira",
      "Ar-condicionado",
      "Wi-Fi rápido",
      "Smart TV",
      "Máquina de café",
    ],
    highlights: [
      "Máxima privacidade",
      "Deck exclusivo",
      "Mimos de boas-vindas",
    ],
  },
];

export function getAccommodation(slug: string) {
  return accommodations.find((item) => item.slug === slug);
}
