import { Camera } from "lucide-react";
import { Reveal } from "./Reveal";

const photos = [
  { className: "gallery-main", src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/723652655.webp?k=b8cc0d247fbba345a5677ffcaab9471bc0df44f14d8038ad62f972bfcb390348&o=", alt: "Suíte iluminada com acesso à piscina" },
  { src: "https://framerusercontent.com/images/kZJQV2l5CNnkQSLCMBSQNen4.webp?scale-down-to=1024", alt: "Área de descanso integrada ao jardim" },
  { src: "https://theasiacollective.com/wp-content/uploads/2017/11/Room3-1-of-24-e1511181466533.jpg", alt: "Piscina cercada por vegetação tropical" },
];

export function Gallery() {
  return <section className="section gallery"><Reveal><div className="gallery-heading"><div><p className="eyebrow green">UM OLHAR MAIS DE PERTO</p><h2>Detalhes que convidam<br/><em>a ficar.</em></h2></div><p><Camera size={18} aria-hidden="true" /> Luz natural, texturas acolhedoras e natureza sempre por perto.</p></div><div className="gallery-grid">{photos.map((photo) => <figure key={photo.src} className={photo.className || ""} style={{backgroundImage:`url('${photo.src}')`}} role="img" aria-label={photo.alt} />)}</div></Reveal></section>;
}
