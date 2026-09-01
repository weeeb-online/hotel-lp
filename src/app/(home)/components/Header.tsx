"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute z-10 flex h-20 w-full items-center justify-between border-b border-white/25 px-[clamp(22px,5vw,76px)] text-white max-md:h-17">
      <a
        href="#inicio"
        aria-label="MelosHotel, início"
        className="flex flex-col items-center leading-none"
      >
        <span className="font-serif text-[28px] tracking-[.16em]">MELOS</span>
        <small className="mt-1.5 ml-1 text-[8px] tracking-[.5em]">HOTEL</small>
      </a>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="hidden border-0 bg-transparent text-white max-md:block"
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        onClick={() => setOpen(false)}
        className={`${open ? "max-md:flex" : "max-md:hidden"} flex items-center gap-8 text-[13px] max-md:absolute max-md:top-17 max-md:right-0 max-md:left-0 max-md:flex-col max-md:items-stretch max-md:bg-[#18392f] max-md:p-6`}
      >
        <a href="#acomodacoes" className="opacity-90">
          Acomodações
        </a>
        <a href="#experiencia" className="opacity-90">
          Experiência
        </a>
        <a href="#localizacao" className="opacity-90">
          Localização
        </a>
        <WhatsAppButton label="Reservar agora" />
      </nav>
    </header>
  );
}
