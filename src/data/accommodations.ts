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
    slug: "suite-casal",
    name: "Suíte Casal",
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
      "/images/photos/quarto-1.png",
      "/images/photos/quarto-2.png",
      "/images/photos/quarto-3.png",
      "/images/photos/quarto-4.png",
      "/images/photos/quarto-5.png",
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
];

export function getAccommodation(slug: string) {
  return accommodations.find((item) => item.slug === slug);
}
