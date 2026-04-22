import Link from "next/link";

export function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "190",
      oldPrice: "290",
      currency: "dh",
      cta: "Acheter Basic",
      features: [
        "Couleurs personnalisées - Noir, Blanc ou Argent",
        "Votre logo gravé au laser sur la carte",
        "Page de profil en marque blanche",
        "Activation double NFC + QR code",
        "Blocs sociaux et liens illimités",
        "Analyses avancées + capture de leads",
        "Production et livraison prioritaires",
      ],
      isPopular: false,
    },
    {
      name: "Personnalisee",
      price: "290",
      oldPrice: "370",
      currency: "dh",
      cta: "Personnalisez votre carte",
      features: [
        "Couleurs personnalisées - Noir, Blanc ou Argent",
        "Votre logo gravé au laser sur la carte",
        "Page de profil en marque blanche",
        "Activation double NFC + QR code",
        "Blocs sociaux et liens illimités",
        "Analyses avancées + capture de leads",
        "Production et livraison prioritaires",
      ],
      isPopular: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary/70 font-semibold tracking-wider uppercase text-sm font-inter">Tarifs</p>
          <h2 className="text-4xl md:text-5xl font-bold font-barlow text-white">Choisissez votre carte.</h2>
          <p className="text-neutral-400 font-inter max-w-2xl mx-auto">
            Paiement unique. Sans engagement. Profitez de votre GoCard à vie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <article
              key={index}
              className={`relative p-6 md:p-7 rounded-3xl flex flex-col border shadow-2xl ${
                plan.isPopular
                  ? "bg-gradient-to-b from-neutral-700/70 to-neutral-900 border-white/30"
                  : "bg-gradient-to-b from-neutral-700/60 to-neutral-900 border-white/20"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-neutral-800 px-4 py-1 text-xs font-bold tracking-wider text-white">
                  LE PLUS POPULAIRE
                </div>
              )}

              <div className="flex items-start justify-between gap-4">
                <h3 className="text-4xl font-black font-barlow text-white">{plan.name}</h3>
                <div className="text-right">
                  <p className="text-5xl font-black font-barlow text-white leading-none">
                    {plan.price}
                    <span className="text-3xl">{plan.currency}</span>
                  </p>
                  <span className="inline-block -mt-1 rounded bg-white px-2 py-0.5 text-sm font-bold text-black line-through">
                    {plan.oldPrice} {plan.currency}
                  </span>
                </div>
              </div>

              <div className="my-6 rounded-2xl border border-white/10 bg-[#0a0d13] p-5">
                <div className="mb-8 flex items-center justify-center">
                  <span className="text-5xl font-black tracking-tight text-white/15">Gocard</span>
                </div>
                <p className="text-xl font-bold tracking-wide text-white">VOTRE NOM</p>
                <p className="text-sm font-medium tracking-wider text-white/75">VOTRE FONCTION</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1 text-xs text-white/70">✦</span>
                    <span className="text-neutral-300 font-inter text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/commander"
                className={`block text-center w-full py-4 rounded-full font-bold text-2xl transition-colors ${
                  plan.isPopular
                    ? "bg-neutral-800 text-white border border-white/15 hover:bg-neutral-700"
                    : "bg-white text-black hover:bg-neutral-200"
                }`}
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
