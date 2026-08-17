import React, { useState, useEffect } from "react";
import { X, ArrowRight, Armchair as Chair, Package, UtensilsCrossed, Cpu, ShieldCheck } from "lucide-react";

export type ProductCategory = {
  key: string;
  title: string;
  description: string;
  image: string;
  cta: string;
};

interface Props {
  categories: ProductCategory[];
  onSelectCategory?: (key: string) => void;
  onEnterEcommerce?: () => void;
  onBackToSite?: () => void;
}

const CATEGORY_META: Record<string, { icon: React.ReactNode; specTag: string }> = {
  informatica: {
    icon: <Cpu className="w-8 h-8 text-text" />,
    specTag: "Informatica & Reti",
  },
  arredo: {
    icon: <Chair className="w-8 h-8 text-text" />,
    specTag: "Arredo Direzionale",
  },
  alimentare: {
    icon: <UtensilsCrossed className="w-8 h-8 text-text" />,
    specTag: "Impiantistica Horeca",
  },
  ufficio: {
    icon: <Package className="w-8 h-8 text-text" />,
    specTag: "Consumabili Ufficio",
  },
};

const CategoryLanding: React.FC<Props> = ({
  categories,
  onSelectCategory,
  onEnterEcommerce,
  onBackToSite,
}) => {
  const [mounted, setMounted] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleSelect = (key: string) => {
    setSelected(key);
    onSelectCategory?.(key);
  };

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
              B2B <span className="font-helvetica-regular font-normal text-text-2">GROUP</span>
            </span>
          </div>
        </div>
        <div className="text-xs text-text-3 font-mono tracking-widest uppercase">
          CATALOGO B2B v4.2
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div
            className={`text-center mb-16 transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            <h1 className="font-helvetica-light text-4xl md:text-5xl lg:text-6xl font-light text-text tracking-tighter mb-4 leading-tight">
              Catalogo Soluzioni <span className="font-helvetica-regular text-text underline decoration-primary/40 underline-offset-8">Aziendali</span>
            </h1>
            <p className="font-helvetica-regular text-text-2 max-w-2xl mx-auto text-base tracking-tight leading-relaxed">
              Seleziona una divisione operativa per accedere al listino completo, richiedere quotazioni riservate o generare il capitolato d'acquisto.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => {
              const isSelected = selected === cat.key;
              const meta = CATEGORY_META[cat.key] || CATEGORY_META["informatica"];
              return (
                <button
                  key={cat.key}
                  onClick={() => handleSelect(cat.key)}
                  className={`group relative flex flex-col h-full text-left rounded-2xl overflow-hidden border transition-all duration-300 ${
                    isSelected ? "border-primary bg-surface-2 shadow-professional-lg" : "border-border bg-surface-2/60 hover:border-border-hover hover:bg-surface-2 shadow-professional"
                  }`}
                >
                  {/* Visual block with photo and vector fallback */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-surface-3 via-surface-2 to-surface flex flex-col justify-between p-5 border-b border-border overflow-hidden">
                    {cat.image ? (
                      <>
                        <img
                          src={cat.image}
                          alt={cat.title}
                          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-2/95 via-surface-2/50 to-transparent pointer-events-none" />
                      </>
                    ) : null}
                    <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full border border-border/40 pointer-events-none group-hover:border-primary/30 transition-colors" />
                    <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-30 transition-opacity z-10">
                      {meta.icon}
                    </div>
                    <div className="flex justify-end items-start z-10">
                      <span className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                    </div>

                    <div className="z-10 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-surface/95 backdrop-blur-md border border-border flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/50 transition-colors">
                        {meta.icon}
                      </div>
                      <div>
                        <span className="text-xs font-helvetica-regular text-primary uppercase block font-semibold">
                          {meta.specTag}
                        </span>
                        <span className="text-xs font-helvetica-regular text-text-3">Prodotti Certificati</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-helvetica-light text-2xl font-light text-text tracking-tighter mb-2 group-hover:text-primary transition-colors">
                        {cat.title}
                      </h3>
                      <p className="font-helvetica-regular text-sm text-text-2 leading-relaxed mb-6 line-clamp-3 tracking-tight">
                        {cat.description}
                      </p>
                    </div>

                    {onEnterEcommerce && (
                      <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelect(cat.key);
                            onEnterEcommerce();
                          }}
                          className="inline-flex items-center gap-2 text-text font-helvetica-regular font-normal text-xs uppercase tracking-wider cursor-pointer group-hover:text-primary transition-all"
                        >
                          {cat.cta}
                          <ArrowRight className="w-3.5 h-3.5 text-primary transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-16 bg-surface-2 border border-border rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-primary shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-helvetica-light text-lg font-light text-text tracking-tight">Serve una fornitura su capitolato speciale?</h4>
                <p className="font-helvetica-regular text-xs text-text-2 tracking-tight">I nostri Service Manager elaborano offerte personalizzate su gara o accordi quadro aziendali.</p>
              </div>
            </div>
            {onEnterEcommerce && (
              <button
                onClick={onEnterEcommerce}
                className="bg-primary text-white px-6 py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase hover:bg-primary-hover shadow-md transition-all shrink-0"
              >
                Accedi al Portale Ordini
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CategoryLanding;

