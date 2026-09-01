import { ArrowDown } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative flex min-h-170 items-end bg-[url('https://images.trvl-media.com/lodging/98000000/97730000/97726300/97726283/c0e3d013.jpg?impolicy=resizecrop&ra=fill&rh=575&rw=575')] bg-cover bg-center px-[clamp(24px,9vw,140px)] pt-32 pb-20 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,43,34,.82),rgba(11,43,34,.1)),linear-gradient(0deg,rgba(11,43,34,.55),transparent_65%)]" />
      <div className="relative z-1 max-w-210">
        <p className="mb-5 text-[10px] font-extrabold tracking-[.28em]">
          NOSSA HISTÃ“RIA
        </p>
        <h1 className="font-heading text-[clamp(68px,9vw,126px)] leading-[.76] tracking-[-.04em]">
          Um hotel com
          <br />
          <em className="ml-[.5em] max-md:ml-0">alma de casa.</em>
        </h1>
        <div className="mt-12 flex items-center gap-3 text-xs font-bold">
          <ArrowDown size={16} />
          ConheÃ§a o MelosHotel
        </div>
      </div>
    </section>
  );
}
