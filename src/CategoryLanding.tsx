import React, { useState, useEffect } from "react";
import { X, ArrowRight, Armchair as Chair, Package, UtensilsCrossed, Cpu, ShieldCheck, Sparkles } from "lucide-react";

export type ProductCategory = {
  key: string;
  title: string;
  description: string;
  image: string;
  cta: string;
  tag?: string;
  badge?: string;
};

interface Props {
  categories?: ProductCategory[];
  onSelectCategory?: (key: string) => void;
  onEnterEcommerce?: () => void;
  onBackToSite?: () => void;
  isSection?: boolean;
}

const DEFAULT_CATEGORIES: ProductCategory[] = [
  {
    key: "informatica",
    title: "Informatica e Reti",
    description: "Computer, workstation, server e apparati di rete per la massima efficienza aziendale.",
    image: "/images/technical-8792188_640_2.jpg",
    cta: "Esplora informatica",
    tag: "Tecnologia & Sistemi",
    badge: "Disponibilità immediata"
  },
  {
    key: "arredo",
    title: "Arredo per Ufficio",
    description: "Scrivanie operative, sedute ergonomiche certificate e pareti per reception e uffici.",
    image: "/images/arredo-ufficio.jpg",
    cta: "Esplora arredi",
    tag: "Ergonomia & Design",
    badge: "Norma UNI EN 1335"
  },
  {
    key: "alimentare",
    title: "Ristorazione & Bar",
    description: "Forni professionali, banchi refrigerati in acciaio inox e cucine industriali certificate.",
    image: "/images/3094495_banco-vendita-gastronomia-degustazione-arredo-negozio-industriale-vetrina-refrigerata.jpg",
    cta: "Esplora ristorazione",
    tag: "Cucine & Laboratori",
    badge: "Acciaio Inox HACCP"
  },
  {
    key: "ufficio",
    title: "Forniture & Cancelleria",
    description: "Carta per fotocopie, toner originali, archivio e consumabili quotidiani di qualità.",
    image: "/images/forniture-e-materiali.jpg",
    cta: "Esplora forniture",
    tag: "Consumabili & Carta",
    badge: "Consegna rapida"
  },
];

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  informatica: <Cpu className="w-5 h-5" />,
  arredo: <Chair className="w-5 h-5" />,
  alimentare: <UtensilsCrossed className="w-5 h-5" />,
  ufficio: <Package className="w-5 h-5" />,
};

const CategoryLanding: React.FC<Props> = ({
  categories = DEFAULT_CATEGORIES,
  onSelectCategory,
  onEnterEcommerce,
  onBackToSite,
  isSection = false,
}) => {
  const [mounted, setMounted] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 40);
    return () => clearTimeout(t);
  }, []);

  const handleSelect = (key: string) => {
    setSelected(key);
    onSelectCategory?.(key);
  };

  const cats = categories.length > 0 ? categories : DEFAULT_CATEGORIES;

  const content = (
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      {/* Header text with refined typography */}
      <div
        className={`text-center mb-12 md:mb-16 transition-all duration-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <h2 className="font-helvetica-light text-3xl sm:text-4xl lg:text-5xl font-light text-text tracking-tighter mb-4 leading-tight">
          Soluzioni complete per il tuo <span className="font-helvetica-regular text-text marker-underline">ambiente di lavoro</span>
        </h2>
        <p className="font-helvetica-regular text-text-2 max-w-2xl mx-auto text-base tracking-tight leading-relaxed">
          Seleziona un settore per consultare il catalogo completo, richiedere quotazioni su misura o procedere direttamente con l'ordine.
        </p>
      </div>

      {/* Grid of category cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cats.map((cat) => {
          const isSelected = selected === cat.key;
          const icon = CATEGORY_ICONS[cat.key] || <Package className="w-4 h-4" />;
          return (
            <div
              key={cat.key}
              onClick={() => {
                handleSelect(cat.key);
                if (onEnterEcommerce) {
                  onEnterEcommerce();
                }
              }}
              className={`group relative h-[470px] sm:h-[490px] rounded-[28px] overflow-hidden flex flex-col justify-between p-6 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border ${
                isSelected
                  ? "border-primary ring-2 ring-primary/40 scale-[1.02]"
                  : "border-black/5 hover:border-black/10 hover:scale-[1.01]"
              }`}
            >
              {/* Full-bleed background image */}
              <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-400">
                    {icon}
                  </div>
                )}
                {/* Smooth dark gradient overlay from bottom to top */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 via-50% to-black/20" />
              </div>

              {/* Bottom Card Content with Title, Description, Meta Pills, and White Pill Button */}
              <div className="relative z-10 mt-auto pt-4">
                <h3 className="font-helvetica-regular text-2xl font-bold text-white tracking-tight mb-1.5 leading-snug drop-shadow-sm group-hover:text-white transition-colors">
                  {cat.title}
                </h3>
                
                <p className="font-helvetica-regular text-xs sm:text-[13px] text-white/80 leading-relaxed line-clamp-2 mb-3.5 font-normal">
                  {cat.description}
                </p>

                {/* Meta pill badges similar to reference */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white/90">
                    <Sparkles className="w-3 h-3 text-accent" />
                    <span>Garanzia B2B</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white/90">
                    <span>Catalogo 2026</span>
                  </span>
                </div>

                {/* Prominent White Pill Button (Reserve now style) */}
                <button
                  type="button"
                  className="w-full bg-white text-zinc-950 font-semibold py-3.5 px-4 rounded-full text-center text-sm shadow-md group-hover:bg-zinc-100 group-hover:shadow-lg transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <span>{cat.cta}</span>
                  <ArrowRight className="w-4 h-4 text-zinc-950 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reassurance Banner */}
      <div className="mt-12 bg-white border border-border rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-professional-sm">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-helvetica-regular text-base font-medium text-text tracking-tight">
              Hai bisogno di una fornitura speciale o di volumi consistenti?
            </h4>
            <p className="font-helvetica-regular text-xs text-text-2 mt-0.5">
              I nostri consulenti dedicati preparano offerte personalizzate e piani di fornitura mirati entro 24 ore.
            </p>
          </div>
        </div>
        {onEnterEcommerce && (
          <button
            onClick={onEnterEcommerce}
            className="bg-primary text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-primary-hover active:scale-[0.98] shadow-md hover:shadow-lg transition-all shrink-0 flex items-center gap-2 group"
          >
            <span>Accedi al catalogo ordini</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        )}
      </div>
    </div>
  );

  if (isSection) {
    return (
      <section id="servizi" className="py-16 md:py-24 bg-white relative">
        {content}
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-surface text-text flex flex-col font-sans selection:bg-primary/20">
      <header className="h-16 shrink-0 flex items-center justify-between px-5 md:px-8 border-b border-border bg-surface/90 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          {onBackToSite && (
            <button
              onClick={onBackToSite}
              className="w-9 h-9 flex items-center justify-center rounded-xl text-text-2 hover:text-text hover:bg-surface-2 border border-border transition-all"
              aria-label="Torna al sito"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="font-helvetica-light text-xl font-light tracking-tighter text-text">
              B2B <span className="font-helvetica-regular font-normal text-text-3">GROUP</span>
            </span>
          </div>
        </div>
        <div className="text-xs text-text-3 font-mono tracking-wider uppercase">
          CATALOGO FORNITURE AZIENDALI
        </div>
      </header>

      <main className="flex-1 overflow-y-auto py-12 md:py-16">
        {content}
      </main>
    </div>
  );
};

export default CategoryLanding;
