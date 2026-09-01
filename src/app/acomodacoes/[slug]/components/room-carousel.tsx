"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type Props = {
  images: string[];
  name: string;
  priority?: boolean;
};

export function RoomCarousel({ images, name, priority = false }: Props) {
  const [index, setIndex] = useState(0);
  const move = (step: number) =>
    setIndex((i) => (i + step + images.length) % images.length);
  return (
    <div className="relative h-full min-h-110 overflow-hidden bg-[#d8d4ca] max-md:min-h-85">
      <div
        className="flex h-full transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((image, i) => (
          <div key={image} className="relative h-full min-w-full">
            <Image
              src={image}
              alt={`${name} — foto ${i + 1}`}
              fill
              priority={priority && i === 0}
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute right-5 bottom-5 flex gap-1">
        <button
          onClick={() => move(-1)}
          aria-label="Foto anterior"
          className="grid size-11 place-items-center bg-white text-[#18392f] transition hover:bg-[#f4f0e6]"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => move(1)}
          aria-label="Próxima foto"
          className="grid size-11 place-items-center bg-white text-[#18392f] transition hover:bg-[#f4f0e6]"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      <span className="absolute bottom-6 left-6 bg-[#18392f]/85 px-3 py-2 text-[10px] font-bold tracking-[.12em] text-white">
        {String(index + 1).padStart(2, "0")} /{" "}
        {String(images.length).padStart(2, "0")}
      </span>
    </div>
  );
}
