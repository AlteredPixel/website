import { createFileRoute } from "@tanstack/react-router";
import { PixelField } from "@/components/PixelField";
import logoAsset from "@/assets/altered-pixel-logo.png.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Altered Pixel — L'IA qui travaille pour vous" },
      {
        name: "description",
        content:
          "Logiciels sur-mesure boostés à l'IA, déploiement & formation IA en entreprise, infogérance de votre parc informatique. Basés en France.",
      },
    ],
  }),
});

function Home() {
  return (
    <div className="min-h-screen bg-encre text-papier">
      <Nav />
      <Hero />
      <Proof />
      <Services />
      <Approach />
      <Manifesto />
      <Contact />
      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-encre/80 border-b border-hairline">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Altered Pixel" className="h-6 w-auto brightness-0 invert opacity-95" />
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-brume">
          <a href="#services" className="hover:text-papier transition-colors">Services</a>
          <a href="#approche" className="hover:text-papier transition-colors">Approche</a>
          <a href="#manifeste" className="hover:text-papier transition-colors">Manifeste</a>
          <a href="#contact" className="hover:text-papier transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-medium text-encre bg-cyan px-4 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
        >
          Parler à un humain
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10 pt-20 pb-32 lg:pt-32 lg:pb-40 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 ap-rise">
          <p className="eyebrow mb-8">L'IA qui travaille pour vous · Édition 2026</p>
          <h1 className="font-display font-bold text-[52px] leading-[1.02] sm:text-[68px] lg:text-[86px] tracking-[-0.02em] text-papier">
            On code.<br />
            On installe.<br />
            <span className="text-cyan">On forme.</span>
          </h1>
          <p className="mt-10 max-w-[46ch] text-lg lg:text-xl leading-relaxed text-brume">
            Altered Pixel construit des logiciels sur-mesure boostés à l'IA, déploie
            les outils de dernière génération dans vos équipes et maintient votre
            parc informatique — d'un même geste, sans jargon.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-cyan text-encre font-medium px-6 py-4 rounded-sm hover:opacity-90 transition-opacity"
            >
              Lancer un projet <span aria-hidden>→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 text-papier border border-hairline px-6 py-4 rounded-sm hover:border-cyan/60 transition-colors"
            >
              Voir nos services
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative ap-rise" style={{ animationDelay: "120ms" }}>
          <div className="relative aspect-square">
            <PixelField
              cols={11}
              rows={11}
              lit={[8, 3]}
              seed={42}
              className="absolute inset-0 w-full h-full"
              ariaLabel="Trame pixel altéré — signature Altered Pixel"
            />
          </div>
          <div className="mt-6 flex items-start gap-3 text-xs text-brume">
            <span className="mt-[6px] inline-block w-2 h-2 bg-cyan" />
            <p className="max-w-[36ch]">
              Un seul pixel altéré par composition. Rarement centré. Toujours
              intentionnel — comme le code qu'on écrit.
            </p>
          </div>
        </div>
      </div>
      <PixelDivider />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Proof strip                                                         */
/* ------------------------------------------------------------------ */

function Proof() {
  const items = [
    { k: "100%", v: "Code livré, documenté, à vous." },
    { k: "48h", v: "Délai de première réponse, garanti." },
    { k: "0", v: "Frais cachés. Devis clair, forfait ou régie." },
    { k: "FR", v: "Équipe, hébergement, données. Basés en France." },
  ];
  return (
    <section className="bg-trame-2 border-y border-hairline">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10 py-10 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
        {items.map((it) => (
          <div key={it.k} className="flex items-baseline gap-4">
            <span className="font-display font-bold text-3xl lg:text-4xl text-cyan tabular-nums">
              {it.k}
            </span>
            <span className="text-sm text-brume leading-snug">{it.v}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

function Services() {
  const services = [
    {
      n: "01",
      lit: [6, 1] as [number, number],
      seed: 11,
      title: "Logiciels sur-mesure, boostés à l'IA",
      desc:
        "Web apps, back-offices, agents, automatisations. On conçoit, on développe et on met en production des produits qui font gagner du temps réel à vos équipes — LLMs, RAG, vision, orchestration : les briques IA sont intégrées là où elles rendent service, pas là où elles font joli.",
      bullets: ["Discovery en 2 semaines", "Livraisons hebdomadaires", "Code source à vous"],
    },
    {
      n: "02",
      lit: [7, 2] as [number, number],
      seed: 27,
      title: "IA en entreprise · déploiement & formation",
      desc:
        "On installe les outils IA de dernière génération (Copilot, Claude, ChatGPT Enterprise, agents internes) dans vos équipes, on définit la gouvernance, on forme les métiers — de la direction au terrain. Un cadre clair, des cas d'usage mesurables, une adoption qui tient.",
      bullets: ["Cadrage & gouvernance", "Formations sur cas d'usage réels", "Suivi 3 / 6 / 12 mois"],
    },
    {
      n: "03",
      lit: [5, 3] as [number, number],
      seed: 63,
      title: "Parc informatique · installation & maintenance",
      desc:
        "Postes, réseau, serveurs, sauvegardes, MDM, sécurité. On déploie, on documente, on infogère. Un interlocuteur unique, un SLA clair, aucune facture surprise. Vous appelez, ça répond — vous ne pensez plus à l'IT.",
      bullets: ["Audit initial offert", "Supervision 24/7", "Interlocuteur dédié"],
    },
  ];

  return (
    <section id="services" className="py-28 lg:py-40">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-20">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-6">Nos services · Trois disciplines, une équipe</p>
            <h2 className="font-display font-bold text-4xl lg:text-6xl tracking-[-0.02em] leading-[1.05]">
              Une équipe qui code, qui déploie<br />
              et qui reste <span className="text-cyan">quand ça compte</span>.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-brume text-base leading-relaxed">
              Trois métiers, un seul point de contact. Pas d'agence-monde, pas de
              sous-traitance opaque : les gens qui vendent sont ceux qui livrent.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.n} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  n,
  lit,
  seed,
  title,
  desc,
  bullets,
}: {
  n: string;
  lit: [number, number];
  seed: number;
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <article className="group relative flex flex-col bg-trame-2 border border-hairline p-8 lg:p-10 hover:border-cyan/50 transition-colors">
      <div className="flex items-start justify-between mb-8">
        <span className="eyebrow">Service · {n}</span>
        <div className="w-20 h-20 -mr-1 -mt-1 opacity-90">
          <PixelField cols={9} rows={9} lit={lit} seed={seed} cell={12} gap={5} className="w-full h-full" />
        </div>
      </div>
      <h3 className="font-display font-bold text-2xl lg:text-[28px] leading-[1.15] text-papier mb-5">
        {title}
      </h3>
      <p className="text-brume leading-relaxed mb-8">{desc}</p>
      <ul className="mt-auto space-y-2.5 pt-6 border-t border-hairline">
        {bullets.map((b) => (
          <li key={b} className="flex items-center gap-3 text-sm text-papier/90">
            <span className="w-1.5 h-1.5 bg-cyan shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Approche                                                            */
/* ------------------------------------------------------------------ */

function Approach() {
  const steps = [
    {
      t: "Écouter",
      d: "Un atelier, deux heures. On comprend le métier, la contrainte, le calendrier. Pas de deck de vente.",
    },
    {
      t: "Cadrer",
      d: "Périmètre net, budget net, calendrier net. Vous savez ce que vous achetez avant de signer.",
    },
    {
      t: "Livrer",
      d: "Sprints courts, démo hebdo, production incrémentale. Vous voyez le produit grandir en temps réel.",
    },
    {
      t: "Rester",
      d: "Supervision, évolutions, formation continue. On ne disparaît pas au go-live — on commence.",
    },
  ];

  return (
    <section id="approche" className="relative py-28 lg:py-40 bg-trame-2 border-y border-hairline">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-6">Notre approche</p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em]">
              Quatre gestes.<br />
              <span className="text-cyan">Zéro théâtre.</span>
            </h2>
            <p className="mt-8 text-brume leading-relaxed max-w-[38ch]">
              Une méthode dépouillée, la même depuis le premier projet. Elle tient
              tenu parce qu'elle ne triche pas — et parce qu'on la répète.
            </p>
          </div>

          <ol className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-hairline">
            {steps.map((s, i) => (
              <li
                key={s.t}
                className="relative bg-trame-2 p-8 lg:p-10 flex flex-col gap-6 min-h-[240px]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-cyan text-sm tabular-nums">
                    0{i + 1} / 04
                  </span>
                  <div className="w-20 h-4">
                    <PixelField cols={4} rows={1} lit={[i, 0]} cell={12} gap={5} seed={3} className="w-full h-full" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-3xl text-papier">{s.t}</h3>
                <p className="text-brume leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Manifeste                                                            */
/* ------------------------------------------------------------------ */

function Manifesto() {
  return (
    <section id="manifeste" className="py-28 lg:py-40">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <p className="eyebrow mb-8">Manifeste</p>
        <blockquote className="font-display font-bold text-3xl lg:text-5xl leading-[1.15] tracking-[-0.015em] text-papier">
          « L'IA n'est pas un produit. C'est un <span className="text-cyan">outil</span> —
          entre les mains d'une équipe qui sait coder, qui sait déployer, et
          qui sait revenir demain. Le reste est de la mise en scène. »
        </blockquote>
        <p className="mt-10 text-brume">— L'équipe Altered Pixel</p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

function Contact() {
  return (
    <section id="contact" className="relative bg-papier text-encre">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10 py-28 lg:py-40 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-6" style={{ color: "var(--marque)" }}>Prendre contact</p>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.05] tracking-[-0.02em]">
            Un projet, un doute, une question ?<br />
            <span style={{ color: "var(--marque)" }}>Écrivez, on répond en 48h.</span>
          </h2>
          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed" style={{ color: "#3B5675" }}>
            Discovery offert d'une heure, sans engagement. On vous dit franchement
            si votre besoin relève de nous — ou pas.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-xl">
            <a
              href="mailto:contact@alteredpixel.fr"
              className="group flex flex-col gap-1 p-6 border border-encre/10 hover:border-encre/40 transition-colors"
            >
              <span className="text-xs uppercase tracking-[0.22em]" style={{ color: "var(--marque)" }}>Email</span>
              <span className="font-display font-bold text-xl">contact@alteredpixel.fr</span>
            </a>
            <a
              href="https://alteredpixel.fr"
              className="group flex flex-col gap-1 p-6 border border-encre/10 hover:border-encre/40 transition-colors"
            >
              <span className="text-xs uppercase tracking-[0.22em]" style={{ color: "var(--marque)" }}>Web</span>
              <span className="font-display font-bold text-xl">alteredpixel.fr</span>
            </a>
          </div>

          <a
            href="mailto:contact@alteredpixel.fr?subject=Discovery%20Altered%20Pixel"
            className="mt-12 inline-flex items-center gap-3 text-papier font-medium px-7 py-4 rounded-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "var(--marque)" }}
          >
            Réserver la discovery <span aria-hidden>→</span>
          </a>
        </div>

        <div className="lg:col-span-5">
          <div className="aspect-square">
            <PixelField
              cols={9}
              rows={9}
              lit={[6, 5]}
              seed={91}
              light
              className="w-full h-full"
              ariaLabel="Trame Altered Pixel — variante papier"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Divider                                                             */
/* ------------------------------------------------------------------ */

function PixelDivider() {
  return (
    <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
      <div className="h-6 w-full">
        <PixelField cols={40} rows={1} lit={[27, 0]} cell={12} gap={5} seed={17} className="w-full h-full" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="bg-encre border-t border-hairline">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10 py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <img src={logoAsset.url} alt="Altered Pixel" className="h-6 w-auto brightness-0 invert opacity-95 mb-6" />
          <p className="text-brume max-w-[42ch] leading-relaxed">
            Logiciels sur-mesure boostés à l'IA, déploiement & formation IA en
            entreprise, infogérance de votre parc. Basés en France.
          </p>
        </div>
        <div className="lg:col-span-4 grid grid-cols-2 gap-8 text-sm">
          <div>
            <p className="eyebrow mb-4">Explorer</p>
            <ul className="space-y-2 text-brume">
              <li><a href="#services" className="hover:text-papier">Services</a></li>
              <li><a href="#approche" className="hover:text-papier">Approche</a></li>
              <li><a href="#manifeste" className="hover:text-papier">Manifeste</a></li>
              <li><a href="#contact" className="hover:text-papier">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Contact</p>
            <ul className="space-y-2 text-brume">
              <li><a href="mailto:contact@alteredpixel.fr" className="hover:text-papier">contact@alteredpixel.fr</a></li>
              <li>alteredpixel.fr</li>
              <li>France</li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-3 flex lg:justify-end items-start">
          <div className="w-32 h-32">
            <PixelField cols={7} rows={7} lit={[5, 4]} seed={101} cell={14} gap={6} className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-brume">
          <p>© {new Date().getFullYear()} Altered Pixel. Tous droits réservés.</p>
          <p className="tabular-nums">v1 · Édition 2026 · Made in France</p>
        </div>
      </div>
    </footer>
  );
}
