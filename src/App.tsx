import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Armchair as Chair,
  Laptop,
  Mail,
  MapPin,
  Phone,
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
  Check,
  Layers,
  Clock
} from 'lucide-react';
import CategoryLanding from "./CategoryLanding";
import WhatsAppWidget from "./WhatsAppWidget";

// Top Logo Header Component
const TopLogo = () => {
  return (
    <header className="w-full pt-10 pb-6 md:pt-14 md:pb-8 flex items-center justify-center bg-white">
      <img
        src="/images/logo/logodef.svg"
        alt="B2B Group Logo"
        className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto max-w-[85vw] object-contain drop-shadow-sm transition-transform duration-300 hover:scale-[1.02]"
      />
    </header>
  );
};

// Clean Hero Section in Professional Italian
const HeroSection = ({ onEcommerce }: { onEcommerce?: () => void }) => {
  const scroll = (h: string) => { document.getElementById(h)?.scrollIntoView({ behavior: 'smooth' }); };
  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-helvetica-light text-4xl sm:text-5xl lg:text-6xl font-light text-text leading-[1.1] tracking-tighter mb-6">
            Forniture e attrezzature professionali per <span className="font-helvetica-regular font-normal text-text marker-underline">aziende in crescita</span>.
          </h1>
          <p className="font-helvetica-regular text-text-2 text-base md:text-lg leading-relaxed tracking-tight mb-8 max-w-2xl mx-auto">
            Un unico interlocutore per informatica e reti aziendali, arredo per ufficio, attrezzature per la ristorazione e materiali di consumo. Consegne rapide, assistenza diretta e condizioni riservate alle imprese.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={() => scroll('contatti')}
              className="bg-primary text-white px-8 py-3.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:bg-primary-hover active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Richiedi informazioni</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onEcommerce}
              className="bg-white text-text border border-border px-8 py-3.5 rounded-full text-sm font-semibold hover:border-primary/40 hover:bg-surface-2 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Consulta il catalogo prodotti</span>
              <ArrowRight className="w-4 h-4 text-text-3 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </button>
          </div>

          {/* Micro Stats Banner in clear Italian */}
          <div className="grid grid-cols-3 gap-6 pt-4 max-w-3xl mx-auto">
            <div>
              <p className="font-helvetica-bold text-3xl sm:text-4xl text-primary font-bold tracking-tight">500+</p>
              <p className="font-helvetica-regular text-xs text-text-2 tracking-tight mt-1">Aziende servite</p>
            </div>
            <div>
              <p className="font-helvetica-bold text-3xl sm:text-4xl text-text font-bold tracking-tight">24-48h</p>
              <p className="font-helvetica-regular text-xs text-text-2 tracking-tight mt-1">Tempi di spedizione</p>
            </div>
            <div>
              <p className="font-helvetica-bold text-3xl sm:text-4xl text-primary font-bold tracking-tight">100%</p>
              <p className="font-helvetica-regular text-xs text-text-2 tracking-tight mt-1">Prodotti certificati</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Partner Scrolling Marquee
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
    <section id="partner" className="py-8 md:py-10 bg-white relative overflow-hidden">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex w-max partner-marquee-track">
        <div className="flex items-center gap-12 md:gap-16 lg:gap-20 shrink-0 pr-12 md:pr-16 lg:pr-20">
          {partnerLogos.map((logo, i) => (
            <div key={`track1-${i}`} className="shrink-0 flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-9 max-w-[140px] md:max-w-[170px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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
                className="h-8 md:h-9 max-w-[140px] md:max-w-[170px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Process Timeline Component in Clean Italian
const ProcessTimeline = () => {
  const steps = [
    { num: "01", title: "Ascolto e consulenza", desc: "Analizziamo le necessità operative della tua azienda per proporti le soluzioni più adatte e vantaggiose.", icon: Search },
    { num: "02", title: "Proposta su misura", desc: "Selezioniamo i prodotti migliori garantendo trasparenza sui costi e massima qualità costruttiva.", icon: Layers },
    { num: "03", title: "Consegna e installazione", desc: "I nostri tecnici specializzati curano la consegna, il montaggio e la configurazione nei tempi concordati.", icon: Zap },
    { num: "04", title: "Assistenza continua", desc: "Supporto post-vendita costante con ricambi sempre disponibili e risposte tempestive.", icon: Shield },
  ];
  return (
    <section id="processo" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-helvetica-light text-3xl md:text-4xl lg:text-5xl font-light text-text tracking-tighter mb-4">
            Come lavoriamo <span className="font-helvetica-regular text-text marker-underline">al tuo fianco</span>
          </h2>
          <p className="font-helvetica-regular text-text-2 max-w-xl mx-auto text-base tracking-tight">
            Un percorso semplice e trasparente, con un referente dedicato per ogni tua esigenza.
          </p>
        </div>

        {/* Connected Step Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-[24px] border border-border/80 p-6 flex flex-col justify-between hover:border-primary/50 hover:shadow-xl transition-all duration-300 shadow-professional-sm">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-accent bg-accent/15 px-3 py-1 rounded-full">
                    FASE {step.num}
                  </span>
                </div>
                <h3 className="font-helvetica-regular text-lg font-semibold text-text tracking-tight mb-2">{step.title}</h3>
                <p className="font-helvetica-regular text-xs text-text-2 leading-relaxed">{step.desc}</p>
              </div>
              <div className="pt-4 mt-5 border-t border-border/60 flex items-center gap-1.5 text-[11px] font-mono text-primary font-medium">
                <Check className="w-3.5 h-3.5" />
                <span>Garanzia di qualità</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Compliance Section in Clean Italian
const ComplianceSection = () => {
  const certs = [
    { title: "Sicurezza e protezione dati", badge: "ISO/IEC 27001", desc: "Sistemi informatici e apparati di rete conformi ai più rigorosi standard europei di riservatezza." },
    { title: "Ergonomia certificata", badge: "UNI EN 1335", desc: "Sedute e arredi testati per garantire salute posturale, comfort prolungato e sicurezza sul lavoro." },
    { title: "Qualità del servizio", badge: "ISO 9001:2015", desc: "Processi di fornitura, controllo qualità e assistenza post-vendita costantemente monitorati." },
    { title: "Norme igienico-sanitarie", badge: "CE & HACCP", desc: "Attrezzature di cottura, refrigerazione e lavaggio in acciaio inossidabile ad uso alimentare certificato." },
  ];

  return (
    <section id="certificazioni" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-helvetica-light text-3xl md:text-4xl font-light text-text tracking-tighter mb-4">
            Conformità e certificazioni <span className="font-helvetica-regular text-text marker-underline">europee</span>
          </h2>
          <p className="font-helvetica-regular text-text-2 max-w-xl mx-auto text-base tracking-tight">
            Tutti i prodotti e gli impianti rispettano le normative vigenti in materia di sicurezza, igiene ed ergonomia.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <div key={i} className="p-6 rounded-[24px] bg-white border border-border/80 flex flex-col justify-between hover:border-primary/50 hover:shadow-xl transition-all duration-300 shadow-professional-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    {c.badge}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-helvetica-regular text-base font-semibold text-text tracking-tight mb-2">{c.title}</h3>
                <p className="font-helvetica-regular text-xs text-text-2 leading-relaxed">{c.desc}</p>
              </div>
              <div className="pt-4 mt-5 border-t border-border/60 text-[11px] font-mono text-text-3">
                Conforme agli standard UE
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection = () => {
  const stats = [
    { value: "500+", label: "Aziende clienti servite", note: "Presenza su tutto il territorio nazionale", icon: Laptop },
    { value: "15 anni", label: "Di esperienza", note: "Partner unico per le forniture aziendali", icon: Calendar },
    { value: "99%", label: "Ordini consegnati nei tempi", note: "Puntualità ed efficienza logistica", icon: Clock },
    { value: "24h", label: "Tempo medio di risposta", note: "Assistenza tecnica e commerciale dedicata", icon: Zap },
  ];
  return (
    <section id="risultati" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-helvetica-light text-3xl md:text-4xl lg:text-5xl font-light text-text tracking-tighter mb-4">
            I numeri della nostra <span className="font-helvetica-regular text-text marker-underline">affidabilità</span>
          </h2>
          <p className="font-helvetica-regular text-text-2 max-w-xl mx-auto text-base tracking-tight">
            Dati concreti che testimoniano la qualità del nostro lavoro e la soddisfazione dei nostri clienti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-border text-center shadow-professional-sm hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 text-primary">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="font-helvetica-light text-4xl lg:text-5xl text-primary font-normal tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="font-helvetica-regular text-sm text-text font-medium tracking-tight mb-1">
                {stat.label}
              </div>
              <span className="font-helvetica-regular text-xs text-text-3 block">
                {stat.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-border transition-all duration-200 hover:border-primary/40 shadow-professional-sm">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
        <span className="font-helvetica-regular text-base font-normal text-text tracking-tight">{q}</span>
        <ChevronLeft className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${open ? '-rotate-90' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 pb-5 pt-1 border-t border-border/60">
          <p className="font-helvetica-regular text-text-2 text-xs leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const items = [
    {
      q: "Quali garanzie offrite sui prodotti informatici e sugli arredi?",
      a: "Tutti i prodotti dispongono della garanzia ufficiale del produttore fino a 36 mesi, con supporto tecnico diretto in caso di anomalie o necessità di sostituzione."
    },
    {
      q: "Come funzionano la fatturazione elettronica e i termini di pagamento?",
      a: "Emettiamo fatturazione elettronica standard. Per le aziende con partita IVA offriamo modalità di pagamento concordate, inclusi bonifici a scadenza e ricevute bancarie per ordini continuativi."
    },
    {
      q: "Quali sono i tempi medi di consegna sul territorio nazionale?",
      a: "I prodotti a magazzino vengono spediti entro 24-48 ore lavorative. Per arredi su misura o forniture complesse concordiamo tempistiche certe in fase di preventivo."
    },
    {
      q: "È possibile richiedere una quotazione personalizzata per volumi consistenti?",
      a: "Certamente. Il nostro ufficio commerciale elabora preventivi su misura con listini riservati in base alle quantità e alle esigenze specifiche dell'azienda."
    },
  ];
  return (
    <section id="faq" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-helvetica-light text-3xl md:text-4xl font-light text-text tracking-tighter mb-4">
            Domande <span className="font-helvetica-regular text-text marker-underline">frequenti</span>
          </h2>
          <p className="font-helvetica-regular text-text-2 text-base tracking-tight">Risposte chiare alle domande più comuni sulle forniture aziendali.</p>
        </div>
        <div className="space-y-3.5">
          {items.map((it, i) => (
            <FaqItem key={i} q={it.q} a={it.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section in Clean Italian
const CTASection = () => {
  return (
    <section id="contatti" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="p-8 sm:p-14 md:p-16 text-center rounded-3xl bg-white border border-border shadow-professional relative">
          <div className="w-48 h-48 bg-primary/10 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <h2 className="font-helvetica-light text-3xl sm:text-4xl md:text-5xl font-light text-text tracking-tighter mb-5 leading-tight">
            Vuoi maggiori informazioni o un <span className="font-helvetica-regular text-text marker-underline">preventivo personalizzato</span>?
          </h2>
          <p className="font-helvetica-regular text-text-2 max-w-2xl mx-auto text-base md:text-lg mb-8 tracking-tight leading-relaxed">
            Un nostro consulente commerciale ti risponderà con una proposta dettagliata entro 24 ore lavorative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href="mailto:info@b2b-group.it"
              className="bg-primary text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-primary-hover active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg group"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Scrivici un'email</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/393393508878"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-text border border-border px-8 py-3.5 rounded-full text-sm font-semibold hover:border-primary/40 hover:bg-surface-2 transition-all inline-flex items-center justify-center gap-2 group"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>Contattaci su WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-text-3 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </a>
          </div>
          <span className="font-mono text-xs text-text-3 block mt-6">
            Risposta entro 24 ore lavorative
          </span>
        </div>
      </div>
    </section>
  );
};

// Contact Info Section
const ContactInfoSection = () => {
  const items = [
    { icon: MapPin, title: "Sede operativa", text: "Via Nazionale delle Puglie 7, Casalnuovo di Napoli (NA)" },
    { icon: Phone, title: "Telefono e supporto", text: "+39 339 350 8878 • Assistenza telefonica" },
    { icon: MapPin, title: "Sede legale", text: "Via San Lazzaro 55, Frignano (CE)" },
    { icon: Calendar, title: "Orari di apertura", text: "Lun-Ven: 08:00-18:00, Sab: 09:00-13:00" },
  ];
  return (
    <section className="py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white border border-border rounded-2xl p-5 flex items-start gap-4 shadow-professional-sm">
              <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center shrink-0 text-primary">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-helvetica-regular text-sm font-medium text-text tracking-tight mb-1">{item.title}</h4>
                <p className="font-helvetica-regular text-xs text-text-2 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer in Clean Professional Italian
const Footer = () => {
  return (
    <footer className="bg-white pt-14 pb-8 text-text-2 font-sans">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 pb-12 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo/logodef.svg"
                alt="B2B Group"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="font-helvetica-regular text-xs text-text-3 leading-relaxed max-w-sm tracking-tight mb-4">
              Forniture per aziende, attrezzature professionali per la ristorazione, arredo per ufficio e materiale di consumo.
            </p>
            <p className="font-mono text-[11px] text-text-4">P.IVA 09292831210 • REGISTRO IMPRESE CASERTA</p>
          </div>
          <div>
            <h4 className="font-mono text-xs font-bold text-text mb-4 uppercase tracking-wider">SETTORI</h4>
            <ul className="space-y-2.5 text-xs font-helvetica-regular text-text-3">
              <li className="hover:text-text transition-colors cursor-pointer">Informatica e reti aziendali</li>
              <li className="hover:text-text transition-colors cursor-pointer">Arredo per ufficio e postazioni</li>
              <li className="hover:text-text transition-colors cursor-pointer">Attrezzature per ristorazione e bar</li>
              <li className="hover:text-text transition-colors cursor-pointer">Forniture per ufficio e cancelleria</li>
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
          <div className="flex gap-6">
            <span className="hover:text-text cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-text cursor-pointer transition-colors">Termini di Servizio</span>
            <span className="hover:text-text cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Vector Product Image Placeholder Component
const VectorProductBadge = ({ nome, catalogo }: { nome: string; catalogo: string }) => {
  const nameLower = nome.toLowerCase();

  let IconComponent = Package;
  let subTag = "PRODOTTO";

  if (nameLower.includes("notebook") || nameLower.includes("laptop") || nameLower.includes("macbook")) {
    IconComponent = Laptop;
    subTag = "PORTATILE";
  } else if (nameLower.includes("desktop") || nameLower.includes("imac") || nameLower.includes("mini pc") || nameLower.includes("veriton")) {
    IconComponent = Cpu;
    subTag = "COMPUTER";
  } else if (nameLower.includes("stampante") || nameLower.includes("inkjet") || nameLower.includes("laser")) {
    IconComponent = Printer;
    subTag = "STAMPANTE";
  } else if (nameLower.includes("mouse") || nameLower.includes("tastiera")) {
    IconComponent = Mouse;
    subTag = "ACCESSORIO";
  } else if (nameLower.includes("monitor") || nameLower.includes("display")) {
    IconComponent = Monitor;
    subTag = "SCHERMO";
  } else if (catalogo === 'arredo' || nameLower.includes("sedia") || nameLower.includes("tavolo") || nameLower.includes("scrivania")) {
    IconComponent = Chair;
    subTag = "ARREDO";
  } else if (catalogo === 'alimentare' || nameLower.includes("forno") || nameLower.includes("friggitrice") || nameLower.includes("banco") || nameLower.includes("frigo")) {
    IconComponent = UtensilsCrossed;
    subTag = "RISTORAZIONE";
  }

  return (
    <div className="w-full h-full min-h-[140px] bg-surface-2 flex flex-col items-center justify-center p-4 relative overflow-hidden group">
      <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-text mb-2 shadow-inner group-hover:border-primary/50 transition-colors">
        <IconComponent className="w-6 h-6 text-text" />
      </div>
      <span className="text-[10px] font-mono tracking-wider text-text-3 uppercase text-center line-clamp-1">
        {subTag}
      </span>
    </div>
  );
};

// Generates candidate URLs across ecommerce image directories and formats
const getCandidateImageUrls = (imageName: string | undefined, catalogo: string): string[] => {
  if (!imageName || !imageName.trim()) return [];
  const clean = imageName.trim();

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
    <div className={`w-full h-full min-h-[140px] bg-surface-2 flex items-center justify-center p-3 relative overflow-hidden group ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface-2">
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

export interface Product {
  id: string;
  settore?: string;
  nome: string;
  prezzo: number;
  immagine: string;
}

export interface CartItem {
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
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-surface text-text border border-border px-6 py-3 rounded-xl shadow-professional-xl text-xs font-mono flex items-center gap-2">
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
        aria-label="Torna indietro"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-2 hidden md:flex shrink-0">
        <img
          src="/images/logo/logodef.svg"
          alt="B2B Group"
          className="h-8 w-auto object-contain"
        />
      </div>

      <div className="flex-1 relative max-w-md mx-auto">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-3" />
        <input
          type="text"
          placeholder="Cerca prodotto, codice o marca..."
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-surface-2 border border-border rounded-xl text-xs font-helvetica-regular text-text placeholder:text-text-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
        />
      </div>

      <button
        onClick={onOpenCart}
        className="relative shrink-0 px-5 py-2.5 rounded-full bg-primary text-white text-xs font-semibold flex items-center gap-2 shadow-md hover:bg-primary-hover active:scale-[0.98] transition-all"
      >
        <ShoppingCart className="w-4 h-4 text-white" />
        <span className="hidden sm:inline">Carrello</span>
        {cartCount > 0 && (
          <span className="w-5 h-5 bg-accent text-text text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
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
      <div className="flex gap-2.5 py-3 overflow-x-auto scrollbar-hide">
        {categories.map(c => (
          <button
            key={c.key}
            onClick={() => onSelect(c.key)}
            className={`shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
              active === c.key
                ? 'bg-primary text-white border-primary shadow-sm'
                : 'bg-white text-text-2 border-border hover:text-text hover:bg-surface-2'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  </div>
);

// Product Card in Clean Italian
const ProductCard = ({
  product,
  catalogo,
  onAdd,
}: {
  product: Product;
  catalogo: string;
  onAdd: (p: Product) => void;
}) => (
  <div className="group bg-white rounded-[22px] border border-border/80 overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-stretch shadow-professional-sm">
    <div className="w-full sm:w-52 h-48 sm:h-auto shrink-0 border-b sm:border-b-0 sm:border-r border-border/60 bg-surface-2 flex items-center justify-center overflow-hidden">
      <ProductImage product={product} catalogo={catalogo} />
    </div>

    <div className="flex-1 flex flex-col justify-between p-5 min-w-0">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[10px] font-mono text-text-3 uppercase tracking-wider">
            FORNITURA AZIENDALE
          </span>
          <span className="text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
            Disponibile
          </span>
        </div>
        <h3 className="font-helvetica-regular text-base md:text-lg font-medium text-text leading-snug line-clamp-2 mb-2 group-hover:text-primary transition-colors tracking-tight">
          {product.nome}
        </h3>
      </div>

      <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-border/60">
        <div>
          <span className="text-[10px] font-mono text-text-3 uppercase block">Prezzo netto (IVA escl.)</span>
          <p className="font-helvetica-light text-xl font-light text-primary tracking-tight">
            {product.prezzo.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
          </p>
        </div>

        <button
          onClick={() => onAdd(product)}
          className="bg-primary text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-primary-hover active:scale-[0.97] transition-all shadow-md flex items-center gap-2 group"
        >
          <Plus className="w-3.5 h-3.5 text-white" />
          <span>Aggiungi</span>
        </button>
      </div>
    </div>
  </div>
);

const PAYMENT_METHODS = [
  { key: 'bonifico', label: 'Bonifico bancario anticipato o a scadenza', desc: 'Coordinate bancarie indicate nel riepilogo in PDF' },
  { key: 'carta', label: 'Carta di credito aziendale', desc: 'Fattura immediata' },
  { key: 'riba', label: 'Ricevuta bancaria (Ri.Ba.)', desc: 'Per accordi commerciali concordati' },
  { key: 'contrassegno', label: 'Pagamento alla consegna', desc: 'Nei limiti previsti dalla legge' },
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
      <label className="block text-[11px] font-mono text-text-3 uppercase tracking-wider mb-1.5">
        NOTE PER L'ORDINE O DATI DI FATTURAZIONE
      </label>
      <textarea
        value={notes}
        onChange={e => onNotesChange(e.target.value)}
        placeholder="Inserisci eventuali indicazioni di consegna, riferimenti ordine acquisto o Partita IVA..."
        rows={2}
        className="w-full px-3 py-2 bg-surface border border-border rounded-xl text-xs font-helvetica-regular text-text placeholder:text-text-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none"
      />
    </div>

    <div>
      <label className="block text-[11px] font-mono text-text-3 uppercase tracking-wider mb-2">
        MODALITÀ DI PAGAMENTO PREFERITA
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
    <div className={`bg-surface border border-border rounded-2xl shadow-professional flex flex-col ${className}`}>
      <div className="px-5 py-4 border-b border-border flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <ShoppingCart className="w-4 h-4 text-primary" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-text">CARRELLO FORNITURE</h2>
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
            <div className="w-12 h-12 bg-surface-2 rounded-xl border border-border flex items-center justify-center mb-3">
              <ShoppingCart className="w-5 h-5 text-text-3" />
            </div>
            <p className="text-text-3 font-mono text-xs">Il carrello è vuoto</p>
          </div>
        ) : (
          <>
            <ul className="space-y-2.5">
              {items.map(ci => (
                <li key={ci.product.id} className="flex items-center gap-3 p-3 bg-surface-2 border border-border rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-surface border border-border shrink-0 overflow-hidden flex items-center justify-center">
                    <ProductImage product={ci.product} catalogo="ecommerce" className="min-h-0 !p-1" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-helvetica-regular font-normal text-text truncate">{ci.product.nome}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs font-helvetica-light font-light text-primary">
                        {(ci.product.prezzo * ci.qty).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
                      </span>
                      <div className="flex items-center gap-1 bg-surface border border-border rounded px-1.5 py-0.5">
                        <button onClick={() => onUpdateQty(ci.product.id, ci.qty - 1)} className="text-text-3 hover:text-text" aria-label="Diminuisci quantità">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono w-4 text-center">{ci.qty}</span>
                        <button onClick={() => onUpdateQty(ci.product.id, ci.qty + 1)} className="text-text-3 hover:text-text" aria-label="Aumenta quantità">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => onRemove(ci.product.id)} className="text-text-3 hover:text-danger p-1" aria-label="Rimuovi prodotto">
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
            <span className="text-text-3 font-mono text-xs">TOTALE NETTO</span>
            <span className="text-lg font-helvetica-light font-light text-text">
              {totale.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
            </span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full bg-primary text-white py-3.5 px-6 rounded-full text-sm font-semibold hover:bg-primary-hover active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 group"
          >
            <span>Riepilogo ordine e scarica PDF</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button onClick={onClear} className="w-full mt-2.5 text-text-3 hover:text-danger text-xs font-medium text-center block transition-colors">
            Svuota carrello
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
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[min(100vw,400px)] bg-surface border-l border-border shadow-professional-xl flex flex-col transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-5 py-4 border-b border-border flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4 text-primary" />
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-text">CARRELLO FORNITURE</h2>
          </div>
          <button onClick={onClose} className="p-1 text-text-3 hover:text-text" aria-label="Chiudi carrello">
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
                  <li key={ci.product.id} className="flex items-center justify-between p-3 bg-surface-2 border border-border rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-surface border border-border shrink-0 overflow-hidden flex items-center justify-center mr-3">
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
              <span className="text-text-3 font-mono text-xs">TOTALE NETTO</span>
              <span className="text-lg font-helvetica-light text-text">
                {totale.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-primary text-white py-3.5 px-6 rounded-full text-sm font-semibold hover:bg-primary-hover active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Riepilogo ordine e scarica PDF</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={onClear} className="w-full mt-2.5 text-text-3 hover:text-danger text-xs font-medium text-center block transition-colors">
              Svuota carrello
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
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 20;

  // Header block with petrol green
  doc.setFillColor(16, 122, 114);
  doc.rect(0, 0, pageWidth, 42, 'F');

  // Accent Line (apricot)
  doc.setFillColor(246, 164, 50);
  doc.rect(0, 42, pageWidth, 2.5, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('B2B GROUP SRLS', 20, y + 4);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(235, 247, 246);
  doc.text('Forniture e Attrezzature Professionali per Aziende', 20, y + 12);

  y = 56;
  doc.setTextColor(17, 24, 39);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text(`RIEPILOGO PREVENTIVO FORNITURA: ${orderNumber}`, 20, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text(`Data di emissione: ${new Date().toLocaleDateString('it-IT')}`, 20, y + 6);

  const pm = PAYMENT_METHODS.find(m => m.key === paymentMethod);
  doc.text(`Modalita di pagamento: ${pm?.label || paymentMethod}`, 20, y + 12);

  y += 24;
  doc.setFillColor(243, 244, 246);
  doc.rect(20, y, pageWidth - 40, 8, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(55, 65, 81);
  doc.text('Descrizione prodotto', 22, y + 5.5);
  doc.text('Qta', pageWidth - 80, y + 5.5);
  doc.text('Prezzo unit.', pageWidth - 55, y + 5.5);
  doc.text('Totale netto', pageWidth - 30, y + 5.5);

  y += 12;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(31, 41, 55);

  const totale = items.reduce((sum, ci) => sum + ci.product.prezzo * ci.qty, 0);

  items.forEach((ci, i) => {
    if (y > 260) {
      doc.addPage();
      y = 20;
    }
    if (i % 2 === 0) {
      doc.setFillColor(249, 250, 251);
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
  doc.setDrawColor(229, 231, 235);
  doc.line(20, y, pageWidth - 20, y);
  y += 8;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(16, 122, 114);
  doc.text('TOTALE NETTO FORNITURA (IVA ESCLUSA)', 20, y);
  doc.text(totale.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' }), pageWidth - 55, y);

  if (notes.trim()) {
    y += 16;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(55, 65, 81);
    doc.text('Note e riferimenti aziendali:', 20, y);
    y += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(75, 85, 99);
    const lines = doc.splitTextToSize(notes, pageWidth - 40);
    doc.text(lines, 20, y);
    y += lines.length * 5;
  }

  y += 15;
  doc.setFontSize(8);
  doc.setTextColor(107, 114, 128);
  doc.text('Documento generato da B2B Group SRLS. P.IVA 09292831210', 20, y);
  doc.text('Per confermare la richiesta, inviare una copia a info@b2b-group.it.', 20, y + 5);

  doc.save(`preventivo-b2b-group-${orderNumber}.pdf`);
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
            aria-label="Torna al catalogo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-helvetica-light text-lg font-light text-text">B2B <span className="text-text-3 font-normal">PREVENTIVO</span></span>
          </div>
          <span className="text-xs font-mono text-text-3">{totalQty} Articoli</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-6 py-10">
        <div className="bg-surface rounded-2xl border border-border shadow-professional overflow-hidden mb-8">
          <div className="bg-surface-2 border-b border-border px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-mono text-primary uppercase tracking-wider mb-1">CODICE PREVENTIVO</p>
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
                    <p className="text-xs font-mono text-text-3 mt-0.5">Quantità: {ci.qty}</p>
                  </div>
                  <p className="text-sm font-helvetica-light font-light text-primary shrink-0">
                    {(ci.product.prezzo * ci.qty).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="font-mono text-xs text-text-3">TOTALE NETTO STIMATO</span>
              <span className="font-helvetica-light text-3xl font-light text-text">
                {totale.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-surface rounded-2xl border border-border p-6">
            <h4 className="text-xs font-mono text-text-3 uppercase tracking-wider mb-2">MODALITÀ DI PAGAMENTO</h4>
            <p className="font-helvetica-regular text-sm text-text font-bold mb-1">{paymentLabel}</p>
            <p className="font-mono text-[11px] text-text-3">Fatturazione elettronica standard e pagamenti concordati.</p>
          </div>
          {notes.trim() && (
            <div className="bg-surface rounded-2xl border border-border p-6">
              <h4 className="text-xs font-mono text-text-3 uppercase tracking-wider mb-2">NOTE AZIENDALI</h4>
              <p className="font-helvetica-regular text-xs text-text-2 leading-relaxed whitespace-pre-wrap">{notes}</p>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => generatePDF(items, notes, paymentMethod, orderNumber)}
            className="flex-1 bg-primary text-white py-3.5 px-6 rounded-full text-sm font-semibold hover:bg-primary-hover active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg group"
          >
            <FileDown className="w-4 h-4 text-white" />
            <span>Scarica preventivo in PDF</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={onBack}
            className="flex-1 bg-white text-text border border-border py-3.5 px-6 rounded-full text-sm font-semibold hover:border-primary/40 hover:bg-surface-2 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Torna al catalogo prodotti</span>
            <ArrowRight className="w-4 h-4 text-text-3 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </button>
        </div>
      </main>
    </div>
  );
};

// Main Ecommerce Storefront Page
const EcommercePage = ({
  onBack,
  cart,
  setCart,
  initialCategory,
}: {
  onBack: () => void;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  initialCategory?: string;
}) => {
  const [prodotti, setProdotti] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [catalogo, setCatalogo] = useState(initialCategory || 'informatica');
  const [search, setSearch] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('bonifico');
  const [showReport, setShowReport] = useState(false);

  const categoryConfig = [
    { key: 'informatica', label: 'Informatica e reti' },
    { key: 'arredo', label: 'Arredo ufficio' },
    { key: 'alimentare', label: 'Ristorazione e bar' },
    { key: 'ufficio', label: 'Forniture e cancelleria' },
  ];

  useEffect(() => {
    if (initialCategory) {
      setCatalogo(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
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
  }, [catalogo]);

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

  const aggiungiAlCarrello = (prodotto: Product) => {
    setCart(prev => {
      const existing = prev.find(ci => ci.product.id === prodotto.id);
      if (existing) return prev.map(ci => ci.product.id === prodotto.id ? { ...ci, qty: ci.qty + 1 } : ci);
      return [...prev, { product: prodotto, qty: 1 }];
    });
    setToast(`${prodotto.nome.slice(0, 35)}${prodotto.nome.length > 35 ? '...' : ''} aggiunto al carrello`);
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
              <p className="font-mono text-xs text-text-3 uppercase tracking-wider">Caricamento prodotti in corso...</p>
            </div>
          ) : filteredProdotti.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-28 text-center">
              <div className="w-16 h-16 bg-surface-2 border border-border rounded-2xl flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-text-3" />
              </div>
              <p className="font-helvetica-light text-lg font-light text-text mb-1">
                {search ? 'Nessun prodotto trovato' : 'Catalogo in fase di aggiornamento'}
              </p>
              <p className="font-helvetica-regular text-xs text-text-3">
                {search ? "Prova a cercare con un altro termine o codice" : "Seleziona un'altra categoria dal menu in alto"}
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-border">
                <p className="font-mono text-xs text-text-3 uppercase">
                  {categoryConfig.find(c => c.key === catalogo)?.label} • {filteredProdotti.length} PRODOTTI
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
  const [selectedCategory, setSelectedCategory] = useState<string>('informatica');
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleOpenEcommerceWithCategory = (catKey?: string) => {
    if (catKey) {
      setSelectedCategory(catKey);
    }
    setShowEcommerce(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showEcommerce) {
    return (
      <>
        <EcommercePage
          onBack={() => setShowEcommerce(false)}
          cart={cart}
          setCart={setCart}
          initialCategory={selectedCategory}
        />
        <WhatsAppWidget />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-surface font-sans text-text selection:bg-primary/20">
      <TopLogo />
      <HeroSection onEcommerce={() => handleOpenEcommerceWithCategory()} />
      <TrustedBy />

      {/* Redesigned CategoryLanding replacing old Features section */}
      <CategoryLanding
        isSection
        onSelectCategory={(key) => setSelectedCategory(key)}
        onEnterEcommerce={() => handleOpenEcommerceWithCategory(selectedCategory)}
      />

      <ComplianceSection />
      <ProcessTimeline />
      <StatsSection />
      <FaqSection />
      <CTASection />
      <ContactInfoSection />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default App;
