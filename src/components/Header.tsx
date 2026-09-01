"use client";
import { useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <a className="brand" href="#inicio" aria-label="MelosHotel, início">
        <span>MELOS</span>
        <small>HOTEL</small>
      </a>
      <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menu"
      >
        {open ? "×" : "☰"}
      </button>
      <nav className={open ? "open" : ""} onClick={() => setOpen(false)}>
        <a href="#acomodacoes">Acomodações</a>
        <a href="#experiencia">Experiência</a>
        <a href="#horarios">Atendimento</a>
        <WhatsAppButton label="Reservar agora" />
      </nav>
    </header>
  );
}
