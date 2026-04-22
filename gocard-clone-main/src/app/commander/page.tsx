"use client";

import Link from "next/link";
import { useMemo, useState, type ChangeEvent } from "react";

export default function CommanderPage() {
  const [cardName, setCardName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [showName, setShowName] = useState(true);
  const [showJob, setShowJob] = useState(true);
  const [showCompany, setShowCompany] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const [fitLogo, setFitLogo] = useState(false);
  const [cardColor, setCardColor] = useState<"noir" | "blanc" | "or">("noir");
  const [logoFileName, setLogoFileName] = useState("");

  const previewName = useMemo(() => cardName || "VOTRE NOM", [cardName]);
  const previewJobTitle = useMemo(() => jobTitle || "VOTRE POSTE", [jobTitle]);
  const previewCompany = useMemo(() => companyName || "VOTRE ENTREPRISE", [companyName]);

  const handleLogoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setLogoFileName(selectedFile ? selectedFile.name : "");
  };

  const cardToneClass =
    cardColor === "blanc"
      ? "from-[#d7dbe3] via-[#f3f5f8] to-[#c8ced8] text-[#15171d]"
      : cardColor === "or"
      ? "from-[#6d5514] via-[#af8f34] to-[#7f6420] text-[#fff8dd]"
      : "from-[#111216] via-[#161821] to-[#0f1015] text-white";

  return (
    <div className="min-h-screen bg-[#08090d] text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0b0c10]/85 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://mygocard.ma/assets/logo-GOCard-White-HZCokBTL.png"
              alt="GoCard"
              className="h-7 w-auto"
            />
          </Link>
          <div className="hidden items-center gap-8 text-sm font-semibold text-white/75 md:flex">
            <Link href="/#how-it-works" className="hover:text-white">Comment ca marche</Link>
            <Link href="/#reviews" className="hover:text-white">Avis</Link>
            <Link href="/#pricing" className="hover:text-white">Tarifs</Link>
            <Link href="/#faq" className="hover:text-white">FAQ</Link>
          </div>
          <Link
            href="/#contact"
            className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold transition-colors hover:bg-white/10"
          >
            Contactez-nous
          </Link>
        </nav>
      </header>

      <main className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-10 lg:grid-cols-2 lg:py-16">
        <section className="order-1 flex items-start">
          <div className={`relative w-full rounded-[2rem] border border-white/10 bg-gradient-to-br p-8 shadow-2xl ${cardToneClass}`}>
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.18),transparent_45%)]" />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_35%,rgba(255,255,255,0.06),transparent_70%)]" />

            <div className="relative flex min-h-[260px] flex-col justify-between md:min-h-[300px]">
              <div className="flex justify-center">
                <span className="text-5xl font-black tracking-tight opacity-80">GOCARD</span>
              </div>
              <div className="space-y-1">
                {showName && <p className="text-2xl font-bold uppercase tracking-wide">{previewName}</p>}
                {showJob && <p className="text-sm uppercase tracking-[0.25em] opacity-80">{previewJobTitle}</p>}
                {showCompany && <p className="text-xs uppercase tracking-[0.2em] opacity-70">{previewCompany}</p>}
              </div>
            </div>
          </div>
        </section>

        <section className="order-2">
          <div className="rounded-3xl border border-white/10 bg-[#0f1118] p-6 shadow-2xl md:p-8">
            <h1 className="font-heading text-3xl font-bold">Personnalisez votre carte</h1>
            <p className="mt-2 text-sm text-white/60">
              La carte NFC intelligente la plus premium au monde. Touchez une fois pour partager toute votre identite professionnelle.
            </p>

            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span>Nom sur la carte : <span className="text-red-400">*</span></span>
                  <label className="flex items-center gap-2 text-white/85">
                    <input type="checkbox" checked={showName} onChange={(e) => setShowName(e.target.checked)} />
                    <span>Afficher</span>
                  </label>
                </div>
                <input
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="Votre nom"
                  className="w-full rounded-lg border border-white/15 bg-[#08090d] px-3 py-2.5 text-sm text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span>Poste : <span className="text-red-400">*</span></span>
                  <label className="flex items-center gap-2 text-white/85">
                    <input type="checkbox" checked={showJob} onChange={(e) => setShowJob(e.target.checked)} />
                    <span>Afficher</span>
                  </label>
                </div>
                <input
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="Votre poste"
                  className="w-full rounded-lg border border-white/15 bg-[#08090d] px-3 py-2.5 text-sm text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span>Nom d&apos;entreprise :</span>
                  <label className="flex items-center gap-2 text-white/85">
                    <input type="checkbox" checked={showCompany} onChange={(e) => setShowCompany(e.target.checked)} />
                    <span>Afficher</span>
                  </label>
                </div>
                <input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Votre entreprise"
                  className="w-full rounded-lg border border-white/15 bg-[#08090d] px-3 py-2.5 text-sm text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span>Logo : <span className="text-red-400">*</span></span>
                  <label className="flex items-center gap-2 text-white/85">
                    <input type="checkbox" checked={showLogo} onChange={(e) => setShowLogo(e.target.checked)} />
                    <span>Afficher</span>
                  </label>
                </div>
                <label className="block cursor-pointer rounded-lg border border-dashed border-white/20 bg-gradient-to-b from-white/5 to-white/[0.02] px-4 py-7 text-center">
                  <input type="file" className="hidden" accept=".png,.jpg,.jpeg,.webp,.svg" onChange={handleLogoUpload} />
                  <p className="text-sm font-semibold text-white/90">Deposez votre logo ou parcourez</p>
                  <p className="mt-1 text-xs text-white/40">PNG, WEBP ou JPG (fond retire auto)</p>
                  {logoFileName && <p className="mt-2 text-xs text-emerald-300">{logoFileName}</p>}
                </label>
              </div>

              <div className="flex items-center justify-between text-sm font-semibold">
                <span>Adapter automatiquement le logo a la carte</span>
                <button
                  type="button"
                  onClick={() => setFitLogo((prev) => !prev)}
                  className={`relative h-6 w-11 rounded-full transition ${fitLogo ? "bg-white" : "bg-white/20"}`}
                  aria-pressed={fitLogo}
                >
                  <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-[#0f1118] transition ${
                      fitLogo ? "left-6" : "left-1"
                    }`}
                  />
                </button>
              </div>

              <div className="space-y-2">
                <span className="text-sm font-semibold">Couleur de la carte :</span>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setCardColor("noir")}
                    className={`rounded-xl border p-3 text-center ${cardColor === "noir" ? "border-white" : "border-white/25"}`}
                  >
                    <div className="mx-auto h-8 w-8 rounded-md border border-white/20 bg-[#020305]" />
                    <p className="mt-1 text-xs font-bold">NOIR</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCardColor("blanc")}
                    className={`rounded-xl border p-3 text-center ${cardColor === "blanc" ? "border-white" : "border-white/25"}`}
                  >
                    <div className="mx-auto h-8 w-8 rounded-md border border-neutral-300 bg-white" />
                    <p className="mt-1 text-xs font-bold">BLANC</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCardColor("or")}
                    className={`rounded-xl border p-3 text-center ${cardColor === "or" ? "border-white" : "border-white/25"}`}
                  >
                    <div className="mx-auto h-8 w-8 rounded-md border border-yellow-200/60 bg-[#d4af37]" />
                    <p className="mt-1 text-xs font-bold">OR</p>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="mt-3 w-full rounded-full bg-[#e6e8ee] px-4 py-3 font-bold text-[#171a20] transition hover:bg-white"
              >
                Continuer vers les details
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
