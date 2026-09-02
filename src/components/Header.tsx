"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import Link from "next/link";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute z-10 flex h-20 w-full items-center justify-between border-b border-white/25 px-[clamp(22px,5vw,76px)] text-white max-md:h-17">
      <Link
        href="/"
        aria-label="MelosHotel, início"
        className="flex flex-col items-center leading-none"
      >
        <span className="font-heading text-[28px] tracking-[.16em]">MELOS</span>
        <small className="mt-1.5 ml-1 text-[8px] tracking-[.5em]">HOTEL</small>
      </Link>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="hidden border-0 bg-transparent text-white max-md:block"
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        onClick={() => setOpen(false)}
        className={`${open ? "max-md:flex" : "max-md:hidden"} flex items-center gap-8 text-[13px] max-md:absolute max-md:top-17 max-md:right-0 max-md:left-0 max-md:flex-col max-md:items-stretch max-md:bg-primary max-md:p-6`}
      >
        <Link href="/acomodacoes" className="opacity-90">
          Acomodações
        </Link>
        <Link href="/#localizacao" className="opacity-90">
          Localização
        </Link>
        <Link href="/sobre" className="opacity-90">
          Sobre
        </Link>
        <WhatsAppButton label="Reservar agora" />
      </nav>
    </header>
  );
}
