import { ArrowUpRight, MessageCircle } from "lucide-react";

type Props = {
  label?: string;
  light?: boolean;
};

const whatsapp =
  "https://wa.me/5511999999999?text=Ola%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20MelosHotel.";

export function WhatsAppButton({
  label = "Falar no WhatsApp",
  light = false,
}: Props) {
  return (
    <a
      className={`inline-flex w-max items-center justify-center gap-2.5 rounded-[3px] px-5 py-3.5 text-xs font-bold transition hover:-translate-y-0.5 hover:brightness-105 ${light ? "bg-white text-primary" : "bg-secondary text-white"}`}
      href={whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label} (abre em nova aba)`}
    >
      <MessageCircle size={16} strokeWidth={1.8} aria-hidden="true" />
      {label}
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}
