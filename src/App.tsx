import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Armchair as Chair,
  Laptop,
  FileText,
  Mail,
  MapPin,
  Phone,
  Menu,
  X,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Calendar,
  Search,
  ShoppingCart,
  ChevronLeft,
  Package,
  FileDown,
  Minus,
  Plus,
  Cpu,
  Printer,
  Mouse,
  Monitor,
  UtensilsCrossed,
  ShieldCheck,
  Check
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import CategoryLanding, { ProductCategory } from "./CategoryLanding";
import WhatsAppWidget from "./WhatsAppWidget";

function cx(...classes: (string | false | undefined)[]) { return classes.filter(Boolean).join(' '); }

// Header with Helvetica Neue typography and monochrome style
const Header = ({ onEcommerce }: { onEcommerce?: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: 'Servizi', hash: 'servizi' },
    { label: 'Capitolato', hash: 'capitolato' },
    { label: 'Processo', hash: 'processo' },
    { label: 'Risultati', hash: 'risultati' },
    { label: 'Catalogo', hash: 'catalogo' },
  ];
  const scroll = (h: string) => { document.getElementById(h)?.scrollIntoView({ behavior: 'smooth' }); };
  return (
    <header className="fixed w-full top-0 z-50 bg-surface/95 backdrop-blur-xl border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="font-helvetica-light text-xl font-light tracking-tighter text-text">
                B2B <span className="font-helvetica-regular font-normal text-text-3">GROUP</span>
              </span>
            </div>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-surface-2 border border-border text-[9px] font-mono tracking-widest text-text-3 uppercase">
              ENTERPRISE B2B
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.hash}
                onClick={() => scroll(item.hash)}
                className="px-3.5 py-1.5 text-xs font-helvetica-regular font-normal uppercase tracking-wider text-text-2 hover:text-text rounded-lg hover:bg-surface-2 transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll('contatti')}
              className="px-4 py-2 text-xs font-helvetica-regular font-normal uppercase tracking-wider text-text-2 hover:text-text rounded-lg hover:bg-surface-2 transition-all"
            >
              Contatti
            </button>
            <button
              onClick={onEcommerce}
              className="bg-primary text-white px-5 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase shadow-md hover:bg-primary-hover transition-all flex items-center gap-2"
            >
              <ShoppingCart className="w-4 h-4 text-white" /> Catalogo Ordini
            </button>
          </div>
          <button className="md:hidden p-2 text-text-2 hover:bg-surface-2 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border pt-3">
            <div className="flex flex-col gap-1">
              {navItems.concat([{ label: 'Contatti', hash: 'contatti' }]).map(item => (
                <button
                  key={item.hash}
                  onClick={() => { scroll(item.hash); setIsMenuOpen(false); }}
                  className="text-left px-4 py-2.5 text-xs font-helvetica-regular uppercase tracking-wider text-text-2 hover:text-text hover:bg-surface-2 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => { onEcommerce?.(); setIsMenuOpen(false); }}
                className="mt-2 bg-primary text-white px-5 py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-md hover:bg-primary-hover"
              >
                <ShoppingCart className="w-4 h-4 text-white" /> Catalogo Ordini
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Clean Hero Section with Helvetica Typography
const HeroSection = ({ onEcommerce }: { onEcommerce?: () => void }) => {
  const scroll = (h: string) => { document.getElementById(h)?.scrollIntoView({ behavior: 'smooth' }); };
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-surface relative overflow-hidden">
      {/* Subtle ambient glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-helvetica-light text-4xl sm:text-5xl lg:text-6xl font-light text-text leading-[1.06] tracking-tighter mb-6">
            Infrastrutture e forniture direzionali per <span className="font-helvetica-regular font-normal text-text marker-underline">aziende che scalano</span>.
          </h1>
          <p className="font-helvetica-regular text-text-2 text-base md:text-lg leading-relaxed tracking-tight mb-8 max-w-2xl mx-auto">
            Fornitore unico certificato per infrastrutture IT, arredo operativo ergonomico, impiantistica alimentare Horeca e consumabili corporate. Zero intermediari, SLA garantiti.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={() => scroll('contatti')}
              className="bg-primary text-white px-8 py-4 rounded-full text-xs font-mono font-bold tracking-wider uppercase shadow-professional hover:bg-primary-hover transition-all flex items-center justify-center gap-2 group hover:scale-105 duration-200"
            >
              Inizia Progetto <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onEcommerce}
              className="bg-surface-2/80 text-text border border-border/80 px-8 py-4 rounded-full text-xs font-mono font-bold tracking-wider uppercase hover:bg-surface-3 transition-all flex items-center justify-center gap-2 hover:scale-105 duration-200"
            >
              Esplora Catalogo Prodotti
            </button>
          </div>

          {/* Micro Stats Banner */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/60 max-w-3xl mx-auto">
            <div className="relative group">
              <p className="font-helvetica-bold text-4xl sm:text-5xl text-primary font-bold tracking-tight">500+</p>
              <p className="font-helvetica-regular text-xs text-text-2 tracking-tight uppercase font-medium mt-1">Aziende Partner</p>
            </div>
            <div className="relative group">
              <p className="font-helvetica-bold text-4xl sm:text-5xl text-text font-bold tracking-tight">24-48h</p>
              <p className="font-helvetica-regular text-xs text-text-2 tracking-tight uppercase font-medium mt-1">SLA Magazzino</p>
            </div>
            <div className="relative group">
              <p className="font-helvetica-bold text-4xl sm:text-5xl text-primary font-bold tracking-tight">100%</p>
              <p className="font-helvetica-regular text-xs text-text-2 tracking-tight uppercase font-medium mt-1">ISO/CE Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Partner Scrolling Marquee with Monochrome Logos
const TrustedBy = () => {
  const partnerLogos = [
    { name: "Epson", src: "/images/fornitori/Epson_logo.svg" },
    { name: "Fellowes", src: "/images/fornitori/Fellowes_Brands_logo.svg" },
    { name: "Herman Miller", src: "/images/fornitori/HermanMiller_logo.svg" },
    { name: "Intel", src: "/images/fornitori/Intel_logo.svg" },
    { name: "Lenovo", src: "/images/fornitori/Lenovo_logo.svg" },
    { name: "Logitech", src: "/images/fornitori/Logitech_logo.svg" },
    { name: "Vitra", src: "/images/fornitori/Logo_vitra.svg" },
    { name: "Microsoft", src: "/images/fornitori/Microsoft_logo.svg" },
  ];

  return (
    <section id="partner" className="py-10 md:py-14 bg-surface relative overflow-hidden border-y border-slate-100">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

      <div className="flex w-max partner-marquee-track">
        <div className="flex items-center gap-12 md:gap-16 lg:gap-20 shrink-0 pr-12 md:pr-16 lg:pr-20">
          {partnerLogos.map((logo, i) => (
            <div key={`track1-${i}`} className="shrink-0 flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 lg:h-11 max-w-[140px] md:max-w-[180px] w-auto object-contain grayscale opacity-55 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-12 md:gap-16 lg:gap-20 shrink-0 pr-12 md:pr-16 lg:pr-20" aria-hidden="true">
          {partnerLogos.map((logo, i) => (
            <div key={`track2-${i}`} className="shrink-0 flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 lg:h-11 max-w-[140px] md:max-w-[180px] w-auto object-contain grayscale opacity-55 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section - Organic Floating Engineering Stage (No Rigid Box Enclosures)
const FeaturesSection = () => {
  const features = [
    {
      icon: Cpu,
      title: "Audit Infrastrutturale e Consulenza IT",
      desc: "Analisi tecnica preliminare dei sistemi operativi e dei colli di bottiglia aziendali. Identifichiamo ridondanze hardware, costi superflui e fabbisogni di scalabilità.",
      checklist: [
        "Audit di sicurezza e vulnerability assessment",
        "Analisi costi TCO (Total Cost of Ownership)",
        "Mappatura dei fabbisogni hardware & licensing",
        "Report strategico con ROI stimato"
      ],
      vectorGraphic: (
        <div className="space-y-5 p-2">
          <div className="flex justify-between items-center pb-3 border-b border-primary/30">
            <span className="font-helvetica-regular text-xs text-text uppercase tracking-wider font-medium">Diagnostica System Audit</span>
            <span className="font-mono text-xs text-primary font-medium">STATUS: OK</span>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1.5">
                <span className="font-helvetica-regular text-xs text-text-2">Hardware Efficiency Rate</span>
                <span className="font-helvetica-bold text-2xl text-primary font-semibold">94.8%</span>
              </div>
              <div className="w-full bg-surface-3 h-2.5 rounded-full overflow-hidden p-0.5 border border-border">
                <div className="bg-primary h-full rounded-full w-[94.8%] transition-all duration-1000" />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1.5">
                <span className="font-helvetica-regular text-xs text-text-2">Network Latency Index</span>
                <span className="font-helvetica-bold text-2xl text-text font-semibold">1.2ms</span>
              </div>
              <div className="w-full bg-surface-3 h-2.5 rounded-full overflow-hidden p-0.5 border border-border">
                <div className="bg-text-2 h-full rounded-full w-[88%]" />
              </div>
            </div>
          </div>
          <div className="pt-3 border-t border-border/80 flex items-center justify-between">
            <span className="font-mono text-xs text-primary font-medium">Pronti per migrazione enterprise</span>
            <span className="font-mono text-[10px] text-text-3">NO DOWNTIME</span>
          </div>
        </div>
      ),
      reverse: false
    },
    {
      icon: Chair,
      title: "Progettazione Space Planning & Ergonomia",
      desc: "Sviluppo di layout 3D per ambienti direzionali e operativi conformi alle normative UNI EN-1335. Integrazione fra arredo ad alto comfort, passaggi cavi e fonoassorbimento acustico.",
      checklist: [
        "Render 3D fotorealistici e planimetrie quotate",
        "Selezione arredi con certificazione ergonomica",
        "Piani acustici integrati per open-space",
        "Customizzazione finiture e colori corporate"
      ],
      vectorGraphic: (
        <div className="space-y-5 p-2">
          <div className="flex justify-between items-center pb-3 border-b border-primary/30">
            <span className="font-helvetica-regular text-xs text-text uppercase tracking-wider font-medium">CAD Space Schematic</span>
            <span className="font-mono text-xs text-primary font-medium">Norma EN-1335</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-surface/90 border border-border text-center">
              <span className="font-mono text-[10px] text-text-3 block uppercase">CAPACITÀ POSTAZIONI</span>
              <span className="font-helvetica-bold text-3xl text-text font-semibold block mt-1">250+</span>
              <span className="font-mono text-xs text-primary block mt-1">postazioni operative</span>
            </div>
            <div className="p-4 rounded-2xl bg-surface/90 border border-primary/30 text-center">
              <span className="font-mono text-[10px] text-text-3 block uppercase">ISOLAMENTO ACUSTICO</span>
              <span className="font-helvetica-bold text-3xl text-primary font-semibold block mt-1">-34 dB</span>
              <span className="font-mono text-xs text-text-2 block mt-1">fonoassorbimento OK</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-2 pt-2 border-t border-border/80">
            <CheckCircle className="w-4 h-4 text-primary shrink-0" />
            <span className="font-helvetica-regular">Parametri ergonomici approvati dai nostri ingegneri posturali.</span>
          </div>
        </div>
      ),
      reverse: true
    },
    {
      icon: Shield,
      title: "Deploy, Installazione & Assistenza H24",
      desc: "Installazione in loco effettuata da tecnici specializzati con piano zero-downtime. Collaudo delle apparecchiature IT e macchinari Horeca con assistenza continua post-vendita.",
      checklist: [
        "Messa in opera e cablaggio strutturato",
        "Collaudo impianti e configurazione apparati",
        "Formazione del personale aziendale",
        "SLA di intervento garantito in 2 ore"
      ],
      vectorGraphic: (
        <div className="space-y-5 p-2">
          <div className="flex justify-between items-center pb-3 border-b border-primary/30">
            <span className="font-helvetica-regular text-xs text-text uppercase tracking-wider font-medium">Logistics & SLA Matrix</span>
            <span className="font-mono text-xs text-primary font-medium">SLA H24</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-surface/80 rounded-2xl border border-border">
              <span className="font-helvetica-regular text-xs text-text-2">Tempo d'Intervento sul Posto:</span>
              <span className="font-helvetica-bold text-xl text-primary font-semibold">&lt; 120 Minuti</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-surface/80 rounded-2xl border border-border">
              <span className="font-helvetica-regular text-xs text-text-2">Magazzino Ricambi B2B:</span>
              <span className="font-mono text-xs text-primary font-medium">100% Disponibile</span>
            </div>
          </div>
          <div className="pt-2 flex items-center justify-between text-xs font-mono text-text-3">
            <span>COPERTURA: Nazionale</span>
            <span className="font-mono text-xs text-primary font-medium">100% OPERATIVO</span>
          </div>
        </div>
      ),
      reverse: false
    }
  ];

  return (
    <section id="servizi" className="py-20 md:py-28 bg-surface border-b border-border relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-helvetica-light text-3xl md:text-4xl lg:text-5xl font-light text-text tracking-tighter mb-4 leading-tight">
            Metodologia ingegneristica <span className="font-helvetica-regular text-text marker-underline">senza sorprese</span>.
          </h2>
          <p className="font-helvetica-regular text-text-2 max-w-2xl mx-auto text-base tracking-tight leading-relaxed">
            Dalla diagnosi iniziale alla consegna chiavi in mano, seguiamo protocolli stringenti per assicurare tempistiche e budget pattuiti.
          </p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {features.map((f, idx) => (
            <div key={idx} className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className={cx('lg:col-span-6 space-y-6', f.reverse && 'lg:order-2')}>
                <h3 className="font-helvetica-light text-2xl md:text-3xl font-light text-text tracking-tighter">
                  {f.title}
                </h3>
                <p className="font-helvetica-regular text-text-2 text-sm md:text-base leading-relaxed tracking-tight">
                  {f.desc}
                </p>
                <ul className="space-y-3 pt-2">
                  {f.checklist.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs md:text-sm font-helvetica-regular text-text-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Organic Stage Graphic Frame */}
              <div className={cx('lg:col-span-6', f.reverse && 'lg:order-1')}>
                <div className="relative p-6 sm:p-8 bg-surface-2/60 backdrop-blur-md rounded-3xl border border-primary/20 shadow-xl overflow-hidden hover:scale-[1.01] transition-transform duration-300">
                  <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-border/80">
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shadow-inner">
                      <f.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-helvetica-light text-sm font-light text-text tracking-tight uppercase">{f.title}</h4>
                      <p className="font-mono text-xs text-primary font-medium">Scheda Tecnica Verificata</p>
                    </div>
                  </div>
                  {f.vectorGraphic}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// NEW SECTION: Interactive B2B Quote & Capitolato Estimator Widget (Organic Studio Canvas)
const CapitolatoEstimator = ({ onAddToCart }: { onAddToCart: (item: Product) => void }) => {
  const [settore, setSettore] = useState<'it' | 'arredo' | 'horeca' | 'ufficio'>('it');
  const [dipendenti, setDipendenti] = useState<number>(25);
  const [sla, setSla] = useState<'standard' | 'executive' | 'critical'>('executive');

  // Interactive estimates logic
  const basePricePerPerson = {
    it: 450,
    arredo: 620,
    horeca: 980,
    ufficio: 120,
  };

  const slaMultiplier = {
    standard: 1.0,
    executive: 1.15,
    critical: 1.35,
  };

  const stimaTotale = Math.round(dipendenti * basePricePerPerson[settore] * slaMultiplier[sla]);

  const generateCapitolatoProduct = (): Product => {
    const names = {
      it: `Capitolato IT & Cloud (${dipendenti} postazioni, SLA ${sla.toUpperCase()})`,
      arredo: `Capitolato Arredo Direzionale (${dipendenti} postazioni, SLA ${sla.toUpperCase()})`,
      horeca: `Capitolato Impiantistica Horeca (${dipendenti} coperti/unità, SLA ${sla.toUpperCase()})`,
      ufficio: `Capitolato Forniture Ufficio (${dipendenti} operatori, SLA ${sla.toUpperCase()})`,
    };
    const images: Record<string, string> = {
      it: 'acer_desktop_aspire_xc_1780_intel®_core_i5_13400_1_8_ghz_uhd_graphics_ram_16_gb_512_gb_ssd',
      arredo: 'composizione_derby_office',
      horeca: 'banco_pizza_completo_3_porte',
      ufficio: 'fabriano_copy_2_performance_carta_a4_per_fotocopie_e_stampe_80_g_m²_bianco_risma_500_fogli',
    };
    return {
      id: `capitolato-${settore}-${dipendenti}-${sla}`,
      nome: names[settore],
      prezzo: stimaTotale,
      immagine: images[settore] || 'composizione_derby_office',
    };
  };

  return (
    <section id="capitolato" className="py-20 md:py-28 bg-surface-2 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-helvetica-light text-3xl md:text-4xl lg:text-5xl font-light text-text tracking-tighter mb-4 leading-tight">
            Calcola l'investimento per la <span className="font-helvetica-regular text-text marker-underline">tua azienda</span>.
          </h2>
          <p className="font-helvetica-regular text-text-2 max-w-2xl mx-auto text-base tracking-tight leading-relaxed">
            Seleziona la dimensione dell'organico e il livello di servizio desiderato per ottenere una stima immediata sul capitolato forniture.
          </p>
        </div>

        {/* Organic Studio Canvas - No Enclosing Rigid Box */}
        <div className="relative p-6 md:p-10 bg-surface/80 backdrop-blur-md rounded-3xl border border-primary/20 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Sector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-text-3 mb-3">
                  1. SELEZIONA DIVISIONE FORNITURA
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'it', label: 'Informatica IT', icon: Cpu },
                    { id: 'arredo', label: 'Arredo Ufficio', icon: Chair },
                    { id: 'horeca', label: 'Horeca & Cibo', icon: UtensilsCrossed },
                    { id: 'ufficio', label: 'Forniture Office', icon: Package },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSettore(s.id as 'it' | 'arredo' | 'horeca' | 'ufficio')}
                      className={`p-4 rounded-full border text-left transition-all flex items-center gap-2.5 ${
                        settore === s.id
                          ? 'border-primary bg-primary/10 text-text ring-2 ring-primary/40 shadow-md scale-105'
                          : 'border-border/80 bg-surface-2/60 text-text-2 hover:border-primary/40'
                      }`}
                    >
                      <s.icon className={`w-4 h-4 shrink-0 ${settore === s.id ? 'text-primary' : 'text-text-3'}`} />
                      <span className="font-helvetica-regular text-xs font-medium block truncate">{s.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Scale */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-mono uppercase tracking-widest text-text-3">
                    2. DIMENSIONE ORGANICO / POSTAZIONI:
                  </label>
                  <span className="font-marker text-2xl text-primary">{dipendenti} Postazioni</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={dipendenti}
                  onChange={(e) => setDipendenti(parseInt(e.target.value))}
                  className="w-full accent-primary bg-surface-3 h-3 rounded-full cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-text-3 mt-2">
                  <span>5 Units (Startup)</span>
                  <span>100 Units (Mid-size)</span>
                  <span>500 Units (Enterprise)</span>
                </div>
              </div>

              {/* Step 3: SLA */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-text-3 mb-3">
                  3. LIVELLO ASSISTENZA & GARANZIA (SLA)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'standard', title: 'Standard 24h', desc: 'Sostituzione 24-48h' },
                    { id: 'executive', title: 'Executive 8h', desc: 'Intervento in 8 ore' },
                    { id: 'critical', title: 'Mission Critical 2h', desc: 'Presidio H24 dedicato' },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setSla(tier.id as 'standard' | 'executive' | 'critical')}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        sla === tier.id
                          ? 'border-primary bg-primary/10 text-text ring-2 ring-primary/40 shadow-md'
                          : 'border-border/80 bg-surface-2/60 text-text-2 hover:border-primary/40'
                      }`}
                    >
                      <span className="font-helvetica-regular text-xs font-bold block mb-0.5">{tier.title}</span>
                      <span className="font-mono text-[9px] text-text-3 block">{tier.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Calculation Output Canvas */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-surface-2/80 border border-primary/30 relative overflow-hidden shadow-2xl">
              <div className="absolute -top-3 -right-3 bg-primary text-white font-marker text-xs px-4 py-1.5 rounded-full uppercase stamp-tag font-bold shadow-lg animate-bounce">
                ISTANTANEO ★
              </div>
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-border/80 mb-6">
                  <span className="font-helvetica-bold text-xs text-text-2 uppercase tracking-widest font-bold">RIEPILOGO ESTIMATORE</span>
                  <span className="font-helvetica-regular text-sm text-primary font-bold">
                    Stima #B2B-EST
                  </span>
                </div>

                <div className="space-y-3.5 mb-8">
                  <div className="flex justify-between text-xs">
                    <span className="text-text-2">Settore Scelto:</span>
                    <span className="text-text font-helvetica-regular uppercase font-bold">{settore}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-text-2">Capienza Postazioni:</span>
                    <span className="text-text font-helvetica-regular font-bold">{dipendenti} Unità</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-text-2">Livello SLA:</span>
                    <span className="text-text font-helvetica-regular uppercase font-bold">{sla}</span>
                  </div>
                  <div className="flex justify-between text-xs pt-3 border-t border-border/80">
                    <span className="text-text-2">Costo medio per postazione:</span>
                    <span className="text-primary font-helvetica-bold font-bold text-sm">
                      € {Math.round(stimaTotale / dipendenti).toLocaleString('it-IT')} / unit
                    </span>
                  </div>
                </div>

                <div className="relative p-5 rounded-2xl bg-surface border border-primary/40 mb-6 text-center">
                  <span className="font-helvetica-regular text-xs uppercase tracking-wider text-text-3 font-semibold block mb-1">
                    Importo Totale Stimato:
                  </span>
                  <p className="font-helvetica-bold text-4xl sm:text-5xl text-primary tracking-tight font-bold">
                    {stimaTotale.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
                  </p>
                  <span className="text-[10px] text-text-3 font-mono block mt-2">IVA Esclusa • Capitolato completo forniture</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => onAddToCart(generateCapitolatoProduct())}
                  className="w-full bg-primary text-white py-4 rounded-full text-xs font-mono font-bold tracking-wider uppercase hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-xl hover:scale-105 duration-200"
                >
                  <ShoppingCart className="w-4 h-4 text-white" /> Aggiungi Capitolato al Carrello
                </button>
                <p className="text-[10px] text-center text-text-3 font-mono">
                  *Preventivo indicativo non vincolante. Un nostro manager definirà le specifiche esatte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Process Timeline Component - Connected Organic Wave (No Box Cards)
const ProcessTimeline = () => {
  const steps = [
    { num: "01", title: "Consulenza e Audit", desc: "Mappatura dettagliata del fabbisogno aziendale con valutazione tecnica preliminare.", icon: Search },
    { num: "02", title: "Space & Tech Design", desc: "Sviluppo plano-volumetrico e selezione apparati hardware su misura.", icon: FileText },
    { num: "03", title: "Deploy e Collaudo", desc: "Installazione sul campo effettuata da tecnici specializzati in tempi concordati.", icon: Zap },
    { num: "04", title: "SLA & Manutenzione", desc: "Presidio continuativo post-vendita con magazzino ricambi sempre pronto.", icon: Shield },
  ];
  return (
    <section id="processo" className="py-20 md:py-28 bg-surface border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-helvetica-light text-3xl md:text-4xl lg:text-5xl font-light text-text tracking-tighter mb-4">
            Come lavoriamo <span className="font-helvetica-regular text-text marker-underline">insieme</span>
          </h2>
          <p className="font-helvetica-regular text-text-2 max-w-xl mx-auto text-base tracking-tight">
            Un iter snello e trasparente con referenti dedicati ad ogni singola commessa.
          </p>
        </div>

        {/* Connected Organic Stream */}
        <div className="relative grid md:grid-cols-4 gap-8 pt-4">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-16 left-10 right-10 h-0.5 border-t-2 border-dashed border-primary/40 pointer-events-none z-0" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 text-center space-y-4 group">
              <div className="w-16 h-16 rounded-full bg-surface-2 border-2 border-primary flex items-center justify-center text-primary mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-7 h-7" />
              </div>
              <span className="font-marker text-3xl text-primary block tracking-wider">STEP {step.num}</span>
              <h3 className="font-helvetica-light text-xl font-light text-text tracking-tight">{step.title}</h3>
              <p className="font-helvetica-regular text-xs text-text-2 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              <span className="font-mono text-xs text-primary block font-medium">★ Fase verificata</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section Component - Giant Expressive Typography Statement Badges (No Box Enclosures)
const StatsSection = () => {
  const stats = [
    { value: "500+", label: "Aziende Clienti Servite", note: "★ Accreditati su tutto il territorio nazionale", icon: Laptop },
    { value: "15 Anni", label: "Esperienza nel Settore", note: "Dal 2011 partner unico per forniture", icon: Calendar },
    { value: "99.8%", label: "Uptime Hardware Garantito", note: "⚡ Zero tempi morti aziendali", icon: Shield },
    { value: "2 Ore", label: "Tempo Medio Risposta SLA", note: "★ Presidio H24 dedicato", icon: Zap },
  ];
  return (
    <section id="risultati" className="py-20 md:py-32 bg-surface-2 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-helvetica-light text-3xl md:text-4xl lg:text-5xl font-light text-text tracking-tighter mb-4">
            I numeri della nostra <span className="font-helvetica-regular text-text marker-underline">affidabilità</span>
          </h2>
          <p className="font-helvetica-regular text-text-2 max-w-xl mx-auto text-base tracking-tight">
            Dati trasparenti che confermano l'eccellenza operativa di B2B Group.
          </p>
        </div>

        {/* Giant Expressive Statement Grid - Zero Rigid Card Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative text-center group">
              {/* Radial Ambient Blur */}
              <div className="w-32 h-32 bg-primary/10 rounded-full blur-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

              <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-4 text-primary shadow-inner group-hover:scale-110 transition-transform">
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="font-marker text-5xl lg:text-7xl text-primary tracking-wider mb-2 animate-pulse-glow">
                {stat.value}
              </div>
              <div className="font-helvetica-regular text-sm text-text font-medium tracking-tight uppercase mb-2">
                {stat.label}
              </div>
              <span className="font-mono text-xs text-primary font-medium block">
                {stat.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Compliance and Engineering Matrix - Organic Floating Shields
const ComplianceSection = () => {
  const certs = [
    { title: "ISO/IEC 27001", badge: "CYBERSECURITY", desc: "Standard globale per la sicurezza delle informazioni e gestione dati enterprise." },
    { title: "UNI EN 1335", badge: "ERGONOMIA", desc: "Certificazione di ergonomia e sicurezza posturale per arredi direzionali ed operativi." },
    { title: "ISO 9001:2015", badge: "QUALITÀ SERVIZIO", desc: "Sistema di gestione della qualità per processi di fornitura e supporto post-vendita." },
    { title: "CE & HACCP HORECA", badge: "CONFORMITÀ CIBO", desc: "Standard normativi europei per impianti di cottura, refrigerazione e sanificazione." },
  ];

  return (
    <section className="py-20 bg-surface border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-helvetica-light text-3xl md:text-4xl font-light text-text tracking-tighter mb-4">
            Massima conformità ai <span className="font-helvetica-regular text-text marker-underline">standard europei</span>
          </h2>
          <p className="font-helvetica-regular text-text-2 max-w-xl mx-auto text-base tracking-tight">
            Tutti gli impianti, arredi e soluzioni IT rispettano i più elevati parametri normativi della Comunità Europea.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <div key={i} className="p-6 rounded-3xl bg-surface-2/80 border border-primary/20 flex flex-col justify-between hover:border-primary transition-all shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-marker text-primary bg-primary/20 border border-primary/40 px-3 py-1 rounded-full uppercase font-bold">
                    {c.badge}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-helvetica-light text-xl font-light text-text tracking-tight mb-2">{c.title}</h3>
                <p className="font-helvetica-regular text-xs text-text-2 leading-relaxed tracking-tight">{c.desc}</p>
              </div>
              <span className="font-mono text-xs text-primary mt-4 block font-medium">★ Conforme UE</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Image-Free Division Catalog Cards Section - Asymmetric Organic Division Canvas
const CatalogoSettori = ({ onNavigateToEcommerce }: { onNavigateToEcommerce?: () => void }) => {
  const cataloghi = [
    {
      title: "Informatica & Networking Enterprise",
      code: "DIV-IT",
      itemsCount: "480+ Apparati",
      desc: "Server rack, Workstation ad alte prestazioni, Notebook aziendali, Firewall e periferiche professionali.",
      icon: Cpu,
      meta: ["Intel Core i5/i7/i9", "SSD NVMe Gen4", "Wi-Fi 6E & 10GbE"]
    },
    {
      title: "Arredo Direzionale & Operativo",
      code: "DIV-AR",
      itemsCount: "320+ Modelli",
      desc: "Scrivanie regolabili in altezza, sedute ergonomiche EN-1335, pareti divisorie e moduli reception.",
      icon: Chair,
      meta: ["Ergonomia Certificata", "Space Planning 3D", "Legni & Metalli Premium"]
    },
    {
      title: "Attrezzature Horeca & Ristorazione",
      code: "DIV-HO",
      itemsCount: "210+ Impianti",
      desc: "Forni industriali, banchi frigoriferi refrigerati, macchine per gelato, fry-top e cuocipasta acciai inossidabili.",
      icon: UtensilsCrossed,
      meta: ["Acciaio Inox AISI 304", "Classe Energetica A+++", "HACCP Approved"]
    },
  ];

  return (
    <section id="catalogo" className="py-20 md:py-28 bg-surface-2 border-b border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-helvetica-light text-3xl md:text-4xl lg:text-5xl font-light text-text tracking-tighter mb-4">
            Divisioni operative <span className="font-helvetica-regular text-text marker-underline">disponibili</span>
          </h2>
          <p className="font-helvetica-regular text-text-2 max-w-xl mx-auto text-base tracking-tight">
            Accedi direttamente al listino prezzi e componi il tuo ordine aziendale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cataloghi.map((cat, idx) => (
            <div
              key={idx}
              className="group bg-surface/90 border border-primary/20 rounded-3xl p-8 flex flex-col justify-between hover:border-primary transition-all cursor-pointer shadow-xl hover:scale-105 duration-300"
              onClick={onNavigateToEcommerce}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <cat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-right">
                    <span className="font-helvetica-bold text-xl text-primary font-semibold block">{cat.itemsCount}</span>
                  </div>
                </div>

                <h3 className="font-helvetica-light text-2xl font-light text-text tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="font-helvetica-regular text-xs text-text-2 leading-relaxed mb-6 tracking-tight">
                  {cat.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.meta.map((m, i) => (
                    <span key={i} className="text-[10px] font-mono text-text-2 bg-surface-2 border border-border/80 px-2.5 py-1 rounded-full">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border/80 flex items-center justify-between">
                <span className="font-mono text-xs text-primary font-bold uppercase tracking-wider group-hover:underline">
                  Esplora Divisione →
                </span>
                <span className="font-mono text-xs text-primary">In pronta consegna</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section - Organic Fluid Accordion
const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-surface-2/80 border border-primary/20 rounded-2xl transition-all duration-300 hover:border-primary/50">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
        <span className="font-helvetica-regular text-base font-normal text-text tracking-tight">{q}</span>
        <ChevronLeft className={`w-5 h-5 text-primary transition-transform duration-300 ${open ? '-rotate-90' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 pb-5 pt-1 border-t border-border/60">
          <p className="font-helvetica-regular text-text-2 text-xs leading-relaxed tracking-tight">{a}</p>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const items = [
    { q: "Quali garanzie offrite sulle forniture IT ed arredi?", a: "Tutti i prodotti godono di garanzia ufficiale enterprise fino a 36 mesi con sostituzione anticipata in caso di guasto." },
    { q: "Come funziona la fatturazione elettronica e gli accordi quadro?", a: "Emettiamo fatturazione elettronica con pagamento dilazionato per aziende con partita IVA ed enti accreditati." },
    { q: "Quali sono i tempi medi di spedizione sul territorio nazionale?", a: "I beni a magazzino vengono spediti entro 24-48 ore. Capitolati su misura o arredi personalizzati richiedono 7-15 giorni." },
    { q: "È possibile integrare il vostro catalogo nei nostri sistemi procurement?", a: "Sì, supportiamo l'integrazione dati in formato JSON, CSV o flussi EDI per piattaforme aziendali di e-procurement." },
  ];
  return (
    <section className="py-20 md:py-28 bg-surface border-b border-border relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-helvetica-light text-3xl md:text-4xl lg:text-5xl font-light text-text tracking-tighter mb-4">
            Chiarezza e trasparenza <span className="font-helvetica-regular text-text marker-underline">operativa</span>
          </h2>
          <p className="font-helvetica-regular text-text-2 text-base tracking-tight">Risposte dirette alle principali esigenze dei nostri partner B2B.</p>
        </div>
        <div className="space-y-4">
          {items.map((it, i) => (
            <FaqItem key={i} q={it.q} a={it.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section - Fluid Organic Studio Banner
const CTASection = () => {
  return (
    <section id="contatti" className="py-20 md:py-32 bg-surface-2 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="p-10 md:p-20 text-center rounded-3xl bg-surface/90 border border-primary/30 shadow-2xl relative">
          <div className="w-48 h-48 bg-primary/10 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <h2 className="font-helvetica-light text-3xl md:text-5xl lg:text-6xl font-light text-text tracking-tighter mb-6 leading-tight">
            Hai una richiesta di <span className="font-helvetica-regular text-text marker-underline">capitolato aziendale</span>?
          </h2>
          <p className="font-helvetica-regular text-text-2 max-w-2xl mx-auto text-base md:text-lg mb-10 tracking-tight leading-relaxed">
            Un Service Manager dedicato risponderà con un'offerta economica personalizzata in meno di 24 ore.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center relative z-10">
            <a
              href="mailto:info@b2b-group.it"
              className="bg-primary text-white px-10 py-4 rounded-full text-xs font-mono font-bold tracking-wider uppercase hover:bg-primary-hover transition-all inline-flex items-center justify-center gap-2 shadow-xl hover:scale-105 duration-200"
            >
              <Mail className="w-4 h-4 text-white" /> Scrivici una Mail
            </a>
            <a
              href="https://wa.me/393393508878"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-2 text-text border border-primary/40 px-10 py-4 rounded-full text-xs font-mono font-bold tracking-wider uppercase hover:border-primary transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:scale-105 duration-200"
            >
              <Phone className="w-4 h-4 text-primary" /> WhatsApp Diretta H24
            </a>
          </div>
          <span className="font-mono text-xs text-primary block mt-8 font-medium">
            ★ Risposta entro 24 ore lavorative
          </span>
        </div>
      </div>
    </section>
  );
};

// Contact Info Footer Banner - Asymmetric Organic Floating Pills
const ContactInfoSection = () => {
  const items = [
    { icon: MapPin, title: "Sede Operativa", text: "Via Nazionale delle Puglie 7, Casalnuovo di Napoli (NA)" },
    { icon: Phone, title: "Telefono & Supporto", text: "+39 339 350 8878 • Presidio Tecnico H24" },
    { icon: MapPin, title: "Sede Legale", text: "Via San Lazzaro 55, Frignano (CE)" },
    { icon: Calendar, title: "Orari Operativi", text: "Lun-Ven: 08:00-18:00, Sab: 09:00-13:00" },
  ];
  return (
    <section className="py-14 bg-surface border-b border-border relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-surface-2/80 border border-primary/20 rounded-2xl p-5 flex items-start gap-4 shadow-lg hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 bg-primary/20 border border-primary/40 rounded-xl flex items-center justify-center shrink-0 text-primary">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-helvetica-light text-base font-light text-text tracking-tight mb-1">{item.title}</h4>
                <p className="font-helvetica-regular text-xs text-text-2 leading-relaxed tracking-tight">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Clean Monochrome Footer
const Footer = () => {
  return (
    <footer className="bg-surface pt-14 pb-8 text-text-2 font-sans">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 border-b border-border pb-12 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="font-helvetica-light text-2xl font-light tracking-tighter text-text">
                B2B <span className="font-helvetica-regular font-normal text-text-3">GROUP</span>
              </span>
            </div>
            <p className="font-helvetica-regular text-xs text-text-3 leading-relaxed max-w-sm tracking-tight mb-4">
              Infrastruttura globale, fornitura hardware enterprise, arredo direzionale ed impianti alimentari per la scalabilità del tuo business.
            </p>
            <p className="font-mono text-[10px] text-text-4">P.IVA 09292831210 • REG. IMPRESE CASERTA</p>
          </div>
          <div>
            <h4 className="font-mono text-xs font-bold text-text mb-4 uppercase tracking-wider">DIVISIONI</h4>
            <ul className="space-y-2.5 text-xs font-helvetica-regular text-text-3">
              <li className="hover:text-text transition-colors cursor-pointer">Informatica & Cloud Core</li>
              <li className="hover:text-text transition-colors cursor-pointer">Arredo Operativo EN-1335</li>
              <li className="hover:text-text transition-colors cursor-pointer">Impianti Horeca & Cibo</li>
              <li className="hover:text-text transition-colors cursor-pointer">Forniture Consumabili Office</li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs font-bold text-text mb-4 uppercase tracking-wider">CONTATTI</h4>
            <ul className="space-y-2.5 text-xs font-helvetica-regular text-text-3">
              <li><a href="mailto:info@b2b-group.it" className="hover:text-primary transition-colors">info@b2b-group.it</a></li>
              <li><a href="tel:+393393508878" className="hover:text-primary transition-colors">+39 339 350 8878</a></li>
              <li>Casalnuovo di Napoli (NA)</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-text-3 font-mono gap-4">
          <p>&copy; {new Date().getFullYear()} B2B GROUP SRLS. TUTTI I DIRITTI RISERVATI.</p>
          <div className="flex gap-6 text-[11px]">
            <span className="hover:text-text transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-text transition-colors cursor-pointer">Note Legali</span>
            <span className="hover:text-text transition-colors cursor-pointer">Certificazioni ISO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Vector Product Image Placeholder Component (Graceful Fallback)
const VectorProductBadge = ({ nome, catalogo }: { nome: string; catalogo: string }) => {
  const nameLower = nome.toLowerCase();

  let IconComponent = Package;
  let subTag = "EQUIPMENT";

  if (nameLower.includes("notebook") || nameLower.includes("laptop") || nameLower.includes("macbook")) {
    IconComponent = Laptop;
    subTag = "PORTABILE";
  } else if (nameLower.includes("desktop") || nameLower.includes("imac") || nameLower.includes("mini pc") || nameLower.includes("veriton")) {
    IconComponent = Cpu;
    subTag = "STATION";
  } else if (nameLower.includes("stampante") || nameLower.includes("inkjet") || nameLower.includes("laser")) {
    IconComponent = Printer;
    subTag = "PRINTING";
  } else if (nameLower.includes("mouse") || nameLower.includes("tastiera")) {
    IconComponent = Mouse;
    subTag = "PERIFERICA";
  } else if (nameLower.includes("monitor") || nameLower.includes("display")) {
    IconComponent = Monitor;
    subTag = "DISPLAY 4K";
  } else if (catalogo === 'arredo' || nameLower.includes("sedia") || nameLower.includes("tavolo") || nameLower.includes("scrivania")) {
    IconComponent = Chair;
    subTag = "ARREDO";
  } else if (catalogo === 'alimentare' || nameLower.includes("forno") || nameLower.includes("friggitrice") || nameLower.includes("banco") || nameLower.includes("frigo")) {
    IconComponent = UtensilsCrossed;
    subTag = "HORECA TECH";
  }

  return (
    <div className="w-full h-full min-h-[140px] bg-gradient-to-br from-surface-3 via-surface-2 to-surface flex flex-col items-center justify-center p-4 relative overflow-hidden group">
      <div className="absolute top-2 left-2 text-[9px] font-mono text-text-3 bg-surface border border-border px-1.5 py-0.5 rounded">
        {subTag}
      </div>
      <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-text mb-2 shadow-inner group-hover:border-primary/50 transition-colors">
        <IconComponent className="w-6 h-6 text-text" />
      </div>
      <span className="text-[9px] font-mono tracking-widest text-text-3 uppercase text-center line-clamp-1">
        B2B SPEC {subTag}
      </span>
    </div>
  );
};

// Generates candidate URLs across ecommerce image directories and formats
const getCandidateImageUrls = (imageName: string | undefined, catalogo: string): string[] => {
  if (!imageName || !imageName.trim()) return [];
  const clean = imageName.trim();

  // If already absolute or relative path
  if (clean.startsWith('/') || clean.startsWith('http')) {
    return [clean];
  }

  const primaryFolder =
    catalogo === 'informatica' ? 'informatica'
    : catalogo === 'arredo' ? 'arredo'
    : catalogo === 'alimentare' ? 'impiantistica'
    : catalogo === 'ufficio' ? 'ufficio'
    : 'informatica';

  const folderOrder = [
    primaryFolder,
    ...(catalogo === 'alimentare' ? ['arredo'] : []),
    'informatica',
    'arredo',
    'impiantistica',
    'ufficio'
  ];
  const uniqueFolders = Array.from(new Set(folderOrder));

  const hasExt = /\.(webp|jfif|jpg|jpeg|png|svg)$/i.test(clean);
  const extensions = ['webp', 'jpg', 'png', 'jfif', 'jpeg'];

  const rawPaths: string[] = [];

  if (hasExt) {
    for (const f of uniqueFolders) {
      rawPaths.push(`/images/ecommerce/${f}/${clean}`);
    }
    rawPaths.push(`/images/ecommerce/${clean}`);
    rawPaths.push(`/images/${clean}`);
  } else {
    for (const f of uniqueFolders) {
      for (const ext of extensions) {
        rawPaths.push(`/images/ecommerce/${f}/${clean}.${ext}`);
      }
    }
    for (const ext of extensions) {
      rawPaths.push(`/images/ecommerce/${clean}.${ext}`);
      rawPaths.push(`/images/${clean}.${ext}`);
    }
  }

  const urls: string[] = [];
  for (const p of rawPaths) {
    if (!urls.includes(p)) urls.push(p);
    try {
      const encoded = encodeURI(p);
      if (encoded !== p && !urls.includes(encoded)) {
        urls.push(encoded);
      }
    } catch {
      // ignore
    }
  }

  return urls;
};

// Real Product Image with Multi-candidate Resolver and Fallback
const ProductImage = ({
  product,
  catalogo,
  className = '',
  aspectRatio = 'contain',
}: {
  product: Product;
  catalogo: string;
  className?: string;
  aspectRatio?: 'contain' | 'cover';
}) => {
  const candidates = useMemo(() => getCandidateImageUrls(product.immagine, catalogo), [product.immagine, catalogo]);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setCandidateIndex(0);
    setHasError(false);
    setLoaded(false);
  }, [product.immagine, catalogo]);

  const currentSrc = candidates[candidateIndex];

  if (!currentSrc || hasError || candidateIndex >= candidates.length) {
    return <VectorProductBadge nome={product.nome} catalogo={catalogo} />;
  }

  return (
    <div className={`w-full h-full min-h-[140px] bg-surface-3/50 flex items-center justify-center p-3 relative overflow-hidden group ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface-3/40">
          <div className="w-5 h-5 border-2 border-primary/40 border-t-primary rounded-full animate-spin" />
        </div>
      )}
      <img
        src={currentSrc}
        alt={product.nome}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (candidateIndex + 1 < candidates.length) {
            setCandidateIndex(prev => prev + 1);
          } else {
            setHasError(true);
          }
        }}
        className={`w-full h-full max-h-44 ${
          aspectRatio === 'cover' ? 'object-cover' : 'object-contain'
        } transition-all duration-300 group-hover:scale-105 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

interface Product {
  id: string;
  settore?: string;
  nome: string;
  prezzo: number;
  immagine: string;
}

interface CartItem {
  product: Product;
  qty: number;
}

interface RawCatalogItem {
  Prodotto?: string;
  Descrizione?: string;
  Prezzo?: string;
  Immagine?: string;
  nome?: string;
  prezzo?: string;
  immagine?: string;
  null?: string[];
  [key: string]: string | string[] | undefined;
}

const parsePrice = (priceStr: string | undefined): number => {
  if (!priceStr) return 0;
  const normalized = priceStr.replace(/,/g, '.');
  const parts = normalized.split('.');
  if (parts.length <= 1) return parseFloat(normalized) || 0;
  const integerPart = parts.slice(0, -1).join('');
  const decimalPart = parts[parts.length - 1];
  return parseFloat(integerPart + '.' + decimalPart) || 0;
};

const parseCatalogProduct = (item: RawCatalogItem): Product | null => {
  const nome = (item.Prodotto || item.nome || '') as string;
  const prezzoStr = (item.Prezzo || item.prezzo) as string | undefined;
  const immagine = (item.Immagine || item.immagine || '') as string;

  const prezzo = parsePrice(prezzoStr);
  if (!nome || prezzo <= 0) return null;
  return {
    id: nome + (immagine || Math.random().toString()),
    nome,
    prezzo,
    immagine
  };
};

const Toast = ({ message, onClose }: { message: string; onClose: () => void }) => {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  useEffect(() => {
    const t = setTimeout(() => onCloseRef.current(), 2200);
    return () => clearTimeout(t);
  }, [message]);
  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-surface-2 text-text border border-border px-6 py-3 rounded-xl shadow-professional-xl text-xs font-mono flex items-center gap-2">
      <CheckCircle className="w-4 h-4 text-primary" />
      {message}
    </div>
  );
};

// Header for Ecommerce Mode
const EcommerceHeader = ({
  onBack,
  search,
  onSearchChange,
  cartCount,
  onOpenCart,
}: {
  onBack: () => void;
  search: string;
  onSearchChange: (v: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}) => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-xl border-b border-border">
    <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center gap-3">
      <button
        onClick={onBack}
        className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl text-text-2 hover:text-text hover:bg-surface-2 border border-border transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-2 hidden md:flex shrink-0">
        <span className="w-2 h-2 rounded-full bg-primary" />
        <span className="font-helvetica-light text-lg font-light text-text">B2B <span className="text-text-3 font-normal">STORE</span></span>
      </div>

      <div className="flex-1 relative max-w-md mx-auto">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-3" />
        <input
          type="text"
          placeholder="Cerca apparato, arredo o codice..."
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-surface-2 border border-border rounded-xl text-xs font-helvetica-regular text-text placeholder:text-text-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
        />
      </div>

      <button
        onClick={onOpenCart}
        className="relative shrink-0 px-4 py-2 rounded-xl bg-primary text-white font-mono text-xs font-bold uppercase flex items-center gap-2 shadow-md hover:bg-primary-hover transition-all"
      >
        <ShoppingCart className="w-4 h-4 text-white" />
        <span className="hidden sm:inline">Carrello</span>
        {cartCount > 0 && (
          <span className="w-5 h-5 bg-white text-primary text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  </header>
);

const CategoryBar = ({
  categories,
  active,
  onSelect,
}: {
  categories: { key: string; label: string }[];
  active: string;
  onSelect: (key: string) => void;
}) => (
  <div className="sticky top-16 z-40 bg-surface/95 backdrop-blur-xl border-b border-border">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
        {categories.map(c => (
          <button
            key={c.key}
            onClick={() => onSelect(c.key)}
            className={`shrink-0 px-5 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all duration-200 border ${
              active === c.key
                ? 'bg-primary text-white border-primary shadow-sm'
                : 'bg-surface-2 text-text-3 border-border hover:text-text hover:bg-surface-3'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  </div>
);

// Product Card with Real Image Presentation and Fallback
const ProductCard = ({
  product,
  catalogo,
  onAdd,
}: {
  product: Product;
  catalogo: string;
  onAdd: (p: Product) => void;
}) => (
  <div className="group bg-surface-2 rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all flex flex-col sm:flex-row items-stretch shadow-professional">
    <div className="w-full sm:w-48 h-44 sm:h-auto shrink-0 border-b sm:border-b-0 sm:border-r border-border bg-surface-3/50 flex items-center justify-center overflow-hidden">
      <ProductImage product={product} catalogo={catalogo} />
    </div>

    <div className="flex-1 flex flex-col justify-between p-5 min-w-0">
      <div>
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-[9px] font-mono text-text-3 uppercase tracking-wider">
            SPECS CERTIFICATE • B2B
          </span>
          <span className="text-[9px] font-mono text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
            PRONTA CONSEGNA
          </span>
        </div>
        <h3 className="font-helvetica-light text-base md:text-lg font-light text-text leading-snug line-clamp-2 mb-2 group-hover:text-primary transition-colors tracking-tight">
          {product.nome}
        </h3>
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/60">
        <div>
          <span className="text-[9px] font-mono text-text-3 uppercase block">PREZZO NETTO IVA ESCL.</span>
          <p className="font-helvetica-light text-xl font-light text-primary tracking-tighter">
            {product.prezzo.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
          </p>
        </div>

        <button
          onClick={() => onAdd(product)}
          className="bg-primary text-white px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase hover:bg-primary-hover active:scale-[0.97] transition-all shadow-md flex items-center gap-1.5"
        >
          <Plus className="w-3.5 h-3.5 text-white" /> Aggiungi
        </button>
      </div>
    </div>
  </div>
);

const PAYMENT_METHODS = [
  { key: 'bonifico', label: 'Bonifico SEPA Anticipato / 30gg', desc: 'Coordinate IBAN inviate nel riepilogo PDF' },
  { key: 'carta', label: 'Carta Aziendale (Visa / Mastercard)', desc: 'Ricevuta fiscale immediata' },
  { key: 'assegno', label: 'Assegno Circolare / Ri.Ba.', desc: 'Per accordi quadro già stipulati' },
  { key: 'contanti', label: 'Contanti alla Consegna', desc: 'Entro i limiti di legge vigenti' },
];

const CartNotesAndPayment = ({
  notes,
  onNotesChange,
  paymentMethod,
  onPaymentChange,
  compact,
}: {
  notes: string;
  onNotesChange: (v: string) => void;
  paymentMethod: string;
  onPaymentChange: (v: string) => void;
  compact?: boolean;
}) => (
  <div className={`space-y-4 ${compact ? 'px-4 pb-3' : ''}`}>
    <div>
      <label className="block text-[10px] font-mono text-text-3 uppercase tracking-wider mb-1.5">
        NOTE PER L'ORDINE O RIFERIMENTI CIG/CUP
      </label>
      <textarea
        value={notes}
        onChange={e => onNotesChange(e.target.value)}
        placeholder="Inserire eventuali note di consegna, riferimenti ordine acquisto o P.IVA fatturazione..."
        rows={2}
        className="w-full px-3 py-2 bg-surface border border-border rounded-xl text-xs font-helvetica-regular text-text placeholder:text-text-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none"
      />
    </div>

    <div>
      <label className="block text-[10px] font-mono text-text-3 uppercase tracking-wider mb-2">
        METODO DI PAGAMENTO CONCORDATO
      </label>
      <div className="flex flex-col gap-2">
        {PAYMENT_METHODS.map(m => (
          <button
            key={m.key}
            onClick={() => onPaymentChange(m.key)}
            className={`flex items-start gap-3 w-full px-3 py-2.5 rounded-xl border text-left transition-all ${
              paymentMethod === m.key
                ? 'border-primary bg-primary/10 text-text ring-1 ring-primary/20'
                : 'border-border bg-surface text-text-2 hover:border-border-hover'
            }`}
          >
            <span className={`w-3.5 h-3.5 rounded-full border border-primary shrink-0 mt-0.5 flex items-center justify-center ${paymentMethod === m.key ? 'bg-primary' : 'bg-transparent'}`}>
              {paymentMethod === m.key && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
            </span>
            <div>
              <span className={`text-xs font-helvetica-regular font-bold block ${paymentMethod === m.key ? 'text-text' : 'text-text-2'}`}>
                {m.label}
              </span>
              <span className="text-[10px] font-mono text-text-3 block">{m.desc}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  </div>
);

const CartPanel = ({
  items,
  onRemove,
  onUpdateQty,
  onClear,
  notes,
  onNotesChange,
  paymentMethod,
  onPaymentChange,
  onCheckout,
  className,
}: {
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, qty: number) => void;
  onClear: () => void;
  notes: string;
  onNotesChange: (v: string) => void;
  paymentMethod: string;
  onPaymentChange: (v: string) => void;
  onCheckout: () => void;
  className?: string;
}) => {
  const totale = items.reduce((sum, ci) => sum + ci.product.prezzo * ci.qty, 0);

  return (
    <div className={`bg-surface-2 border border-border rounded-2xl shadow-professional flex flex-col ${className}`}>
      <div className="px-5 py-4 border-b border-border flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <ShoppingCart className="w-4 h-4 text-primary" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-text">CARRELLO CAPITOLATO</h2>
        </div>
        {items.length > 0 && (
          <span className="bg-primary text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-full">
            {items.reduce((s, ci) => s + ci.qty, 0)} ART.
          </span>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-3 space-y-4">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-12">
            <div className="w-12 h-12 bg-surface rounded-xl border border-border flex items-center justify-center mb-3">
              <ShoppingCart className="w-5 h-5 text-text-3" />
            </div>
            <p className="text-text-3 font-mono text-xs">Carrello per fornitura vuoto</p>
          </div>
        ) : (
          <>
            <ul className="space-y-2.5">
              {items.map(ci => (
                <li key={ci.product.id} className="flex items-center gap-3 p-3 bg-surface border border-border rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-surface-2 border border-border shrink-0 overflow-hidden flex items-center justify-center">
                    <ProductImage product={ci.product} catalogo="ecommerce" className="min-h-0 !p-1" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-helvetica-regular font-normal text-text truncate">{ci.product.nome}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs font-helvetica-light font-light text-primary">
                        {(ci.product.prezzo * ci.qty).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
                      </span>
                      <div className="flex items-center gap-1 bg-surface-2 border border-border rounded px-1.5 py-0.5">
                        <button onClick={() => onUpdateQty(ci.product.id, ci.qty - 1)} className="text-text-3 hover:text-text">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono w-4 text-center">{ci.qty}</span>
                        <button onClick={() => onUpdateQty(ci.product.id, ci.qty + 1)} className="text-text-3 hover:text-text">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => onRemove(ci.product.id)} className="text-text-3 hover:text-danger p-1">
                    <X className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>

            <CartNotesAndPayment
              notes={notes}
              onNotesChange={onNotesChange}
              paymentMethod={paymentMethod}
              onPaymentChange={onPaymentChange}
            />
          </>
        )}
      </div>

      {items.length > 0 && (
        <div className="px-5 py-4 border-t border-border shrink-0">
          <div className="flex justify-between items-center mb-3">
            <span className="text-text-3 font-mono text-xs">TOTALE STIMATO</span>
            <span className="text-lg font-helvetica-light font-light text-text">
              {totale.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
            </span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full bg-primary text-white py-3 rounded-xl font-mono text-xs font-bold uppercase hover:bg-primary-hover active:scale-[0.98] transition-all shadow-md"
          >
            Procedi all'Ordine & PDF
          </button>
          <button onClick={onClear} className="w-full mt-2 text-text-3 hover:text-danger text-[10px] font-mono uppercase text-center block">
            Svuota Carrello
          </button>
        </div>
      )}
    </div>
  );
};

const CartDrawer = ({
  open,
  onClose,
  items,
  onRemove,
  onUpdateQty,
  onClear,
  notes,
  onNotesChange,
  paymentMethod,
  onPaymentChange,
  onCheckout,
}: {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, qty: number) => void;
  onClear: () => void;
  notes: string;
  onNotesChange: (v: string) => void;
  paymentMethod: string;
  onPaymentChange: (v: string) => void;
  onCheckout: () => void;
}) => {
  const totale = items.reduce((sum, ci) => sum + ci.product.prezzo * ci.qty, 0);

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[min(100vw,400px)] bg-surface-2 border-l border-border shadow-professional-xl flex flex-col transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-5 py-4 border-b border-border flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4 text-primary" />
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-text">CARRELLO FORNITURA</h2>
          </div>
          <button onClick={onClose} className="p-1 text-text-3 hover:text-text">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-3 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-text-3 font-mono text-xs">Nessun prodotto nel carrello</p>
            </div>
          ) : (
            <>
              <ul className="space-y-2.5">
                {items.map(ci => (
                  <li key={ci.product.id} className="flex items-center justify-between p-3 bg-surface border border-border rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-surface-2 border border-border shrink-0 overflow-hidden flex items-center justify-center mr-3">
                      <ProductImage product={ci.product} catalogo="ecommerce" className="min-h-0 !p-1" />
                    </div>
                    <div className="min-w-0 flex-1 pr-2">
                      <p className="text-xs font-helvetica-regular text-text truncate">{ci.product.nome}</p>
                      <span className="text-xs font-helvetica-light text-primary">
                        {(ci.product.prezzo * ci.qty).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 border border-border rounded px-2 py-0.5">
                        <button onClick={() => onUpdateQty(ci.product.id, ci.qty - 1)}>-</button>
                        <span className="text-xs font-mono">{ci.qty}</span>
                        <button onClick={() => onUpdateQty(ci.product.id, ci.qty + 1)}>+</button>
                      </div>
                      <button onClick={() => onRemove(ci.product.id)} className="text-text-3 hover:text-danger">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <CartNotesAndPayment
                notes={notes}
                onNotesChange={onNotesChange}
                paymentMethod={paymentMethod}
                onPaymentChange={onPaymentChange}
                compact
              />
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-5 py-4 border-t border-border shrink-0">
            <div className="flex justify-between items-center mb-3">
              <span className="text-text-3 font-mono text-xs">TOTALE</span>
              <span className="text-lg font-helvetica-light text-text">
                {totale.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-primary text-white py-3 rounded-xl font-mono text-xs font-bold uppercase hover:bg-primary-hover active:scale-[0.98] transition-all shadow-md"
            >
              Procedi all'Ordine & PDF
            </button>
            <button onClick={onClear} className="w-full mt-2 text-text-3 hover:text-danger text-[10px] font-mono uppercase text-center block">
              Svuota Carrello
            </button>
          </div>
        )}
      </div>
    </>
  );
};

const generateOrderNumber = () => {
  const d = new Date();
  return `B2B-${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}-${String(Math.floor(Math.random() * 9000) + 1000)}`;
};

// Generate Clean Monochrome PDF with Petrol Green Accent Header Line
const generatePDF = async (items: CartItem[], notes: string, paymentMethod: string, orderNumber: string) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 20;

  // Header block with petrol green
  doc.setFillColor(18, 122, 114);
  doc.rect(0, 0, pageWidth, 42, 'F');

  // Accent Line
  doc.setFillColor(14, 97, 91);
  doc.rect(0, 42, pageWidth, 2, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('B2B GROUP SRLS', 20, y + 4);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(230, 245, 244);
  doc.text('Infrastrutture e Forniture Enterprise per Aziende', 20, y + 12);

  y = 56;
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text(`CAPITOLATO ORDINE: ${orderNumber}`, 20, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text(`Data Emissione: ${new Date().toLocaleDateString('it-IT')}`, 20, y + 6);

  const pm = PAYMENT_METHODS.find(m => m.key === paymentMethod);
  doc.text(`Metodo di Pagamento Concordato: ${pm?.label || paymentMethod}`, 20, y + 12);

  y += 24;
  doc.setFillColor(241, 245, 249);
  doc.rect(20, y, pageWidth - 40, 8, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  doc.text('Prodotto / Descrizione', 22, y + 5.5);
  doc.text('Qta', pageWidth - 80, y + 5.5);
  doc.text('Prezzo Unit.', pageWidth - 55, y + 5.5);
  doc.text('Totale Netto', pageWidth - 30, y + 5.5);

  y += 12;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);

  const totale = items.reduce((sum, ci) => sum + ci.product.prezzo * ci.qty, 0);

  items.forEach((ci, i) => {
    if (y > 260) {
      doc.addPage();
      y = 20;
    }
    if (i % 2 === 0) {
      doc.setFillColor(248, 250, 252);
      doc.rect(20, y - 4, pageWidth - 40, 8, 'F');
    }
    const name = ci.product.nome.length > 55 ? ci.product.nome.slice(0, 52) + '...' : ci.product.nome;
    doc.text(name, 22, y);
    doc.text(`${ci.qty}`, pageWidth - 78, y);
    doc.text(ci.product.prezzo.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' }), pageWidth - 55, y);
    doc.text((ci.product.prezzo * ci.qty).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' }), pageWidth - 30, y);
    y += 8;
  });

  y += 4;
  doc.setDrawColor(226, 232, 240);
  doc.line(20, y, pageWidth - 20, y);
  y += 8;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(18, 122, 114);
  doc.text('TOTALE STIMATO FORNITURA', 20, y);
  doc.text(totale.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' }), pageWidth - 55, y);

  if (notes.trim()) {
    y += 16;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(51, 65, 85);
    doc.text('Note ed Eventuali Riferimenti Aziendali:', 20, y);
    y += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);
    const lines = doc.splitTextToSize(notes, pageWidth - 40);
    doc.text(lines, 20, y);
    y += lines.length * 5;
  }

  y += 15;
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text('Documento generato automaticamente dal sistema B2B Group. P.IVA 09292831210', 20, y);
  doc.text('Inviare la copia firmata a info@b2b-group.it per la presa in carico immediata.', 20, y + 5);

  doc.save(`capitolato-b2b-group-${orderNumber}.pdf`);
};

// Order Report Page
const OrderReport = ({
  items,
  notes,
  paymentMethod,
  onBack,
}: {
  items: CartItem[];
  notes: string;
  paymentMethod: string;
  onBack: () => void;
}) => {
  const [orderNumber] = useState(generateOrderNumber);
  const totale = items.reduce((sum, ci) => sum + ci.product.prezzo * ci.qty, 0);
  const paymentLabel = PAYMENT_METHODS.find(m => m.key === paymentMethod)?.label || paymentMethod;
  const totalQty = items.reduce((s, ci) => s + ci.qty, 0);

  return (
    <div className="min-h-screen bg-surface font-sans">
      <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-xl border-b border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl text-text-2 hover:text-text hover:bg-surface-2 border border-border transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-helvetica-light text-lg font-light text-text">B2B <span className="text-text-3 font-normal">CAPITOLATO</span></span>
          </div>
          <span className="text-xs font-mono text-text-3">{totalQty} Articoli</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-6 py-10">
        <div className="bg-surface-2 rounded-2xl border border-border shadow-professional overflow-hidden mb-8">
          <div className="bg-surface border-b border-border px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-mono text-primary uppercase tracking-wider mb-1">CODICE CAPITOLATO</p>
              <p className="font-helvetica-light text-2xl font-light text-text">{orderNumber}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-mono text-text-3 uppercase tracking-wider mb-1">DATA EMISSIONE</p>
              <p className="font-mono text-xs text-text">{new Date().toLocaleDateString('it-IT')}</p>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-text-3 mb-4">DETTAGLIO FORNITURA</h3>
            <div className="divide-y divide-border border-b border-border pb-4 mb-4">
              {items.map((ci) => (
                <div key={ci.product.id} className="flex items-center justify-between py-3">
                  <div className="min-w-0 flex-1 pr-4">
                    <p className="text-sm font-helvetica-regular text-text truncate">{ci.product.nome}</p>
                    <p className="text-xs font-mono text-text-3 mt-0.5">Qta: {ci.qty}</p>
                  </div>
                  <p className="text-sm font-helvetica-light font-light text-primary shrink-0">
                    {(ci.product.prezzo * ci.qty).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="font-mono text-xs text-text-3">TOTALE PREVENTIVO STIMATO</span>
              <span className="font-helvetica-light text-3xl font-light text-text">
                {totale.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-surface-2 rounded-2xl border border-border p-6">
            <h4 className="text-xs font-mono text-text-3 uppercase tracking-wider mb-2">METODO DI PAGAMENTO</h4>
            <p className="font-helvetica-regular text-sm text-text font-bold mb-1">{paymentLabel}</p>
            <p className="font-mono text-[10px] text-text-3">Fatturazione elettronica standard e pagamenti concordati.</p>
          </div>
          {notes.trim() && (
            <div className="bg-surface-2 rounded-2xl border border-border p-6">
              <h4 className="text-xs font-mono text-text-3 uppercase tracking-wider mb-2">NOTE AZIENDALI</h4>
              <p className="font-helvetica-regular text-xs text-text-2 leading-relaxed whitespace-pre-wrap">{notes}</p>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => generatePDF(items, notes, paymentMethod, orderNumber)}
            className="flex-1 bg-primary text-white py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider hover:bg-primary-hover active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-professional"
          >
            <FileDown className="w-4 h-4 text-white" /> Scarica Capitolato PDF per Invio
          </button>
          <button
            onClick={onBack}
            className="flex-1 bg-surface-2 text-text border border-border py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider hover:bg-surface-3 transition-all text-center"
          >
            Torna al Catalogo Prodotti
          </button>
        </div>
      </main>
    </div>
  );
};

// Main Ecommerce Storefront Page
const EcommercePage = ({ onBack, cart, setCart }: { onBack: () => void; cart: CartItem[]; setCart: React.Dispatch<React.SetStateAction<CartItem[]>> }) => {
  const [prodotti, setProdotti] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [catalogo, setCatalogo] = useState('informatica');
  const [showFan, setShowFan] = useState(true);
  const [fanFadeOut, setFanFadeOut] = useState(false);
  const [search, setSearch] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('bonifico');
  const [showReport, setShowReport] = useState(false);

  const categoryConfig = [
    { key: 'informatica', label: 'Informatica IT' },
    { key: 'arredo', label: 'Arredi Ufficio' },
    { key: 'alimentare', label: 'Horeca & Cibo' },
    { key: 'ufficio', label: 'Forniture Office' },
  ];

  const categories: ProductCategory[] = [
    { key: 'informatica', title: 'Informatica & Networking', description: 'Notebook, workstation desktop, server rack, networking e licenze software enterprise.', image: '/images/ecommerce/informatica/acer_desktop_gaming_predator_orion_3000_po3_intel®_core_i7_14700f_2_1_ghz_geforce_rtx™_4060_ram_16_gb_1024_gb_ssd.webp', cta: 'Esplora Hardware' },
    { key: 'arredo', title: 'Arredamento Direzionale', description: 'Scrivanie operative regolabili, sedute ergonomiche EN-1335, space planning 3D.', image: '/images/arredo-ufficio.jpg', cta: 'Esplora Arredi' },
    { key: 'alimentare', title: 'Impiantistica Horeca', description: 'Attrezzature da cucina, banchi refrigerati, forni industriali e automazione food.', image: '/images/3094495_banco-vendita-gastronomia-degustazione-arredo-negozio-industriale-vetrina-refrigerata.jpg', cta: 'Esplora Impianti' },
    { key: 'ufficio', title: 'Forniture & Consumabili', description: 'Risme di carta, toners, cancelleria e materiale consumabile aziendale.', image: '/images/forniture-e-materiali.jpg', cta: 'Esplora Forniture' },
  ];

  useEffect(() => {
    if (showFan) return;
    setLoading(true);
    let file = '';
    if (catalogo === 'alimentare') file = '/cataloghi/catalogo_ecommerce_b2b_alimentare.json';
    else if (catalogo === 'informatica') file = '/cataloghi/INFORMATICA.json';
    else if (catalogo === 'arredo') file = '/cataloghi/ARREDO.json';
    else if (catalogo === 'ufficio') file = '/cataloghi/UFFICIO.json';

    fetch(file)
      .then(res => res.json())
      .then((response: { data?: RawCatalogItem[] } | RawCatalogItem[]) => {
        const dataArray = Array.isArray(response) ? response : (response.data ?? []);
        const parsed = dataArray
          .map(item => parseCatalogProduct(item))
          .filter((p): p is Product => p !== null);
        setProdotti(parsed);
        setLoading(false);
      })
      .catch(() => {
        setProdotti([]);
        setLoading(false);
      });
  }, [catalogo, showFan]);

  useEffect(() => {
    setSearch('');
  }, [catalogo]);

  if (showReport) {
    return (
      <OrderReport
        items={cart}
        notes={notes}
        paymentMethod={paymentMethod}
        onBack={() => setShowReport(false)}
      />
    );
  }

  if (showFan) {
    return (
      <div className={`transition-opacity duration-500 ${fanFadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <CategoryLanding
          categories={categories}
          onSelectCategory={key => setCatalogo(key)}
          onEnterEcommerce={() => {
            setFanFadeOut(true);
            setTimeout(() => {
              setShowFan(false);
              setFanFadeOut(false);
            }, 400);
          }}
          onBackToSite={() => {
            setFanFadeOut(true);
            setTimeout(() => {
              onBack();
              setFanFadeOut(false);
            }, 400);
          }}
        />
      </div>
    );
  }

  const aggiungiAlCarrello = (prodotto: Product) => {
    setCart(prev => {
      const existing = prev.find(ci => ci.product.id === prodotto.id);
      if (existing) return prev.map(ci => ci.product.id === prodotto.id ? { ...ci, qty: ci.qty + 1 } : ci);
      return [...prev, { product: prodotto, qty: 1 }];
    });
    setToast(`${prodotto.nome.slice(0, 35)}${prodotto.nome.length > 35 ? '...' : ''} aggiunto`);
  };

  const rimuoviDalCarrello = (id: string) => {
    setCart(prev => prev.filter(ci => ci.product.id !== id));
  };

  const aggiornaQty = (id: string, qty: number) => {
    if (qty <= 0) {
      setCart(prev => prev.filter(ci => ci.product.id !== id));
    } else {
      setCart(prev => prev.map(ci => ci.product.id === id ? { ...ci, qty } : ci));
    }
  };

  const filteredProdotti = prodotti.filter(p => {
    if (!p || !p.nome || p.prezzo <= 0) return false;
    if (!search.trim()) return true;
    return p.nome.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-surface font-sans text-text">
      <EcommerceHeader
        onBack={onBack}
        search={search}
        onSearchChange={setSearch}
        cartCount={cart.reduce((s, ci) => s + ci.qty, 0)}
        onOpenCart={() => setShowCart(true)}
      />
      <CategoryBar categories={categoryConfig} active={catalogo} onSelect={setCatalogo} />

      <div className="pt-32 pb-24 md:pb-16 px-4 md:px-6 max-w-7xl mx-auto flex gap-8">
        <main className="flex-1 min-w-0">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-28">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4" />
              <p className="font-mono text-xs text-text-3 uppercase tracking-wider">CARICAMENTO CATALOGO IN CORSO...</p>
            </div>
          ) : filteredProdotti.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-28 text-center">
              <div className="w-16 h-16 bg-surface-2 border border-border rounded-2xl flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-text-3" />
              </div>
              <p className="font-helvetica-light text-lg font-light text-text mb-1">
                {search ? 'Nessun apparato trovato' : 'Catalogo in fase di aggiornamento'}
              </p>
              <p className="font-helvetica-regular text-xs text-text-3">
                {search ? "Prova a cercare con un altro termine o codice" : "Seleziona un'altra divisione dal menu in alto"}
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-border">
                <p className="font-mono text-xs text-text-3 uppercase">
                  DIVISIONE {catalogo.toUpperCase()} • {filteredProdotti.length} PRODOTTI CERTIFICATI
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {filteredProdotti.map(prodotto => (
                  <ProductCard
                    key={prodotto.id}
                    product={prodotto}
                    catalogo={catalogo}
                    onAdd={aggiungiAlCarrello}
                  />
                ))}
              </div>
            </>
          )}
        </main>

        <aside className="hidden md:block w-[360px] shrink-0">
          <div className="sticky top-32">
            <CartPanel
              items={cart}
              onRemove={rimuoviDalCarrello}
              onUpdateQty={aggiornaQty}
              onClear={() => setCart([])}
              notes={notes}
              onNotesChange={setNotes}
              paymentMethod={paymentMethod}
              onPaymentChange={setPaymentMethod}
              onCheckout={() => setShowReport(true)}
              className="max-h-[calc(100vh-10rem)]"
            />
          </div>
        </aside>
      </div>

      <div className="md:hidden">
        <CartDrawer
          open={showCart}
          onClose={() => setShowCart(false)}
          items={cart}
          onRemove={rimuoviDalCarrello}
          onUpdateQty={aggiornaQty}
          onClear={() => setCart([])}
          notes={notes}
          onNotesChange={setNotes}
          paymentMethod={paymentMethod}
          onPaymentChange={setPaymentMethod}
          onCheckout={() => { setShowCart(false); setShowReport(true); }}
        />
      </div>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
};

// Main App Container
const App = () => {
  const [showEcommerce, setShowEcommerce] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCartFromEstimator = (item: Product) => {
    setCart(prev => {
      const existing = prev.find(ci => ci.product.id === item.id);
      if (existing) return prev.map(ci => ci.product.id === item.id ? { ...ci, qty: ci.qty + 1 } : ci);
      return [...prev, { product: item, qty: 1 }];
    });
    setShowEcommerce(true);
  };

  if (showEcommerce) {
    return (
      <>
        <EcommercePage
          onBack={() => setShowEcommerce(false)}
          cart={cart}
          setCart={setCart}
        />
        <WhatsAppWidget />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-surface font-sans text-text selection:bg-primary/20">
      <Header onEcommerce={() => setShowEcommerce(true)} />
      <HeroSection onEcommerce={() => setShowEcommerce(true)} />
      <TrustedBy />
      <FeaturesSection />
      <CapitolatoEstimator onAddToCart={handleAddToCartFromEstimator} />
      <ComplianceSection />
      <ProcessTimeline />
      <StatsSection />
      <CatalogoSettori onNavigateToEcommerce={() => setShowEcommerce(true)} />
      <FaqSection />
      <CTASection />
      <ContactInfoSection />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default App;
