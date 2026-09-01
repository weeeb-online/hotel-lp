import { ArrowUpRight, MessageCircle } from "lucide-react";
const whatsapp = "https://wa.me/5511999999999?text=Ola%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20MelosHotel.";
export function WhatsAppButton({ label = "Falar no WhatsApp", light = false }: { label?: string; light?: boolean }) {
  return <a className={`whatsapp-button ${light ? "light" : ""}`} href={whatsapp} target="_blank" rel="noreferrer" aria-label={`${label} (abre em nova aba)`}><MessageCircle size={16} strokeWidth={1.8} aria-hidden="true" />{label}<ArrowUpRight size={15} aria-hidden="true" /></a>;
}
