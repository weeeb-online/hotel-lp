export function AccommodationsHero() {
  return (
    <section className="relative flex h-[min(760px,100vh)] min-h-160 items-end bg-[url('https://cf.bstatic.com/xdata/images/hotel/max1024x768/723652655.webp?k=b8cc0d247fbba345a5677ffcaab9471bc0df44f14d8038ad62f972bfcb390348&o=')] bg-cover bg-center px-[clamp(24px,9vw,140px)] pb-20 pt-32 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,35,28,.82),rgba(10,35,28,.08)),linear-gradient(0deg,rgba(10,35,28,.55),transparent_70%)]" />
      <div className="relative z-1 max-w-225">
        <p className="mb-5 text-[10px] font-extrabold tracking-[.28em]">
          ESCOLHA O SEU ESPAÇO
        </p>
        <h1 className="font-heading text-[clamp(66px,8vw,112px)] leading-[.78] tracking-[-.04em]">
          Acomodações para
          <br />
          <em className="ml-[.4em] max-md:ml-0">cada jeito de viajar.</em>
        </h1>
      </div>
    </section>
  );
}
