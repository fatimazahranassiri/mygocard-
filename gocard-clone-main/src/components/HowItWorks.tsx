export function HowItWorks() {
  const brands = [
    "APEX VENTURES",
    "CLOUDSYNC",
    "DIGITAL EDGE",
    "NEXGEN",
    "VELOCITY",
    "PRISMA LABS",
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#07090d]">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-wrap items-center justify-center gap-8 border-y border-white/10 py-5">
          {brands.map((brand) => (
            <span key={brand} className="text-xs font-extrabold tracking-wider text-white/45 md:text-sm">
              {brand}
            </span>
          ))}
        </div>

        <div className="text-center mb-16 space-y-4">
          <p className="text-white/70 font-semibold tracking-[0.25em] uppercase text-xs font-inter">Comment ca marche</p>
          <h2 className="text-4xl md:text-6xl font-bold font-barlow text-white">Voyez-le en action</h2>
          <p className="text-white/55 font-inter max-w-xl mx-auto leading-relaxed">
            La carte NFC intelligente la plus premium au monde. Touchez une seule fois et toute votre identite professionnelle s&apos;ouvre instantanement, sans application.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-8">
          <div className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#1b1f2b] via-[#1b1f2b] to-[#141929] p-3">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(110,130,255,0.17),transparent_45%)]" />
            <div className="relative min-h-[240px] overflow-hidden rounded-2xl md:min-h-[360px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_45%)]" />
              <div className="relative flex min-h-[240px] items-center justify-center md:min-h-[360px]">
                <span className="flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_0_40px_rgba(0,0,0,0.35)] transition group-hover:scale-105">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/35">
                    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              </div>
            </div>
            <p className="relative px-3 pb-2 pt-3 text-center text-xs text-white/50">
              Presentation visuelle de la marque
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="h-32 rounded-2xl border border-white/10 bg-gradient-to-r from-[#1b1f2b] to-[#141929]" />
            <div className="h-32 rounded-2xl border border-white/10 bg-gradient-to-r from-[#1b1f2b] to-[#141929]" />
            <div className="h-32 rounded-2xl border border-white/10 bg-gradient-to-r from-[#1b1f2b] to-[#141929]" />
          </div>
        </div>
      </div>
    </section>
  );
}
