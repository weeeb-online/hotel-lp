const whatsapp =
  "https://wa.me/5511999999999?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20MelosHotel.";
export function WhatsAppButton({
  label = "Falar no WhatsApp",
  light = false,
}: {
  label?: string;
  light?: boolean;
}) {
  return (
    <a
      className={`whatsapp-button ${light ? "light" : ""}`}
      href={whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label} (abre em nova aba)`}
    >
      <span>◉</span>
      {label}
      <b>↗</b>
    </a>
  );
}
