"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
export function Header() { const [open, setOpen] = useState(false); return <header className="header"><a className="brand" href="#inicio" aria-label="MelosHotel, início"><span>MELOS</span><small>HOTEL</small></a><button className="menu" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button><nav className={open ? "open" : ""} onClick={() => setOpen(false)}><a href="#acomodacoes">Acomodações</a><a href="#experiencia">Experiência</a><a href="#localizacao">Localização</a><WhatsAppButton label="Reservar agora" /></nav></header>; }
