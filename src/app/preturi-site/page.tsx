import { PricingCard } from "@/components/PricingCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prețuri Creare Site | Site Ieftin de la 149€ | Digital-Online',
  description: 'Vezi prețurile noastre fixe pentru creare site. Pachet de la 149€, plată unică. Fără abonament sau costuri ascunse. Alege pachetul potrivit afacerii tale!',
  alternates: {
    canonical: "/preturi-site",
  },
};

const websitePackages = [
  {
    title: "PACHET STANDARD",
    price: "149 €",
    priceSuffix: "plată unică",
    description: "Site pentru afacerea ta, modern și eficient.",
    features: [
      "Până la 5 secțiuni / pagini",
      "Design responsive",
      "Tehnologie Next.js",
      "Livrare în format ZIP",
      "Conectare domeniu gratuită",
      "Optimizat SEO tehnic",
      "Găzduire și stocare gratuită",
    ],
    ctaText: "Comandă Acum",
    ctaLink: "/contact?pachet=standard",
  },
  {
    title: "PACHET CUSTOM",
    price: "249 €",
    priceSuffix: "plată unică",
    description: "Site creat 100% după viziunea ta.",
    features: [
      "Totul de la Standard",
      "Design 100% personalizat",
      "Până la 8 pagini/secțiuni",
      "Galerie foto/video interactivă",
      "SEO tehnic avansat",
      "Performanță 90-100 garantată",
      "Sistem de recenzii sau testimoniale integrat",
    ],
    ctaText: "Alege Pachetul Custom",
    ctaLink: "/contact?pachet=custom",
    recommended: true,
  },
  {
    title: 'PACHET AVANSAT',
    price: "349 €",
    priceSuffix: "plată unică",
    description: "Pachetul complet pentru afaceri care vor mai mult.",
    features: [
      "Totul de la Custom",
      "Texte optimizate sau scrise de la zero",
      "Generare de imagini pentru site",
      "Realizare logo personalizat",
      "Securitate web avansată inclusă",
      "Peste 8 pagini/secțiuni incluse",
      "Integrare Chat WhatsApp",
    ],
    ctaText: "Vreau Pachetul Complet",
    ctaLink: "/contact?pachet=avansat",
  },
];

const addons = [
    { name: "Integrare Chat AI cu GPT sau Gemini", price: "49€" },
    { name: "Integrare WhatsApp Business", price: "29€" },
    { name: "SEO profesional pentru site-uri existente", price: "89€" },
    { name: "Configurare Securitate Site", price: "29€" }
]

export default function PacheteSitePage() {
  return (
    <div className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-white">
            Creează-ți Prezența Online. <span className="text-primary">100% Fără Costuri Lunare.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Alege pachetul potrivit pentru afacerea ta. Toate pachetele includ livrarea completă a site-ului și proprietate 100%.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websitePackages.map((pkg, idx) => {
            const isAvansat = pkg.title === "PACHET AVANSAT";
            const isStandard = idx === 0;
            const isCustom = pkg.title === "PACHET CUSTOM";
            return (
              <PricingCard
                key={pkg.title}
                {...pkg}
                className={
                  "shadow-lg transition-colors " +
                  (isAvansat
                    ? "border-4 border-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/10"
                    : isStandard
                      ? "border-[1.5px] border-red-500 hover:border-[#25D366] hover:bg-[#25D366]/10"
                      : isCustom
                        ? "border-2 border-primary hover:border-[#25D366] hover:bg-[#25D366]/10"
                        : "border-4 border-primary hover:border-[#25D366] hover:bg-[#25D366]/10")
                }
                ctaClassName={isAvansat ? "bg-[#25D366] text-primary-foreground hover:bg-[#1da851]" : ""}
              />
            );
          })}
        </div>
        <div className="text-center my-8">
          <a href="/portofoliu" className="inline-block text-lg font-bold text-primary hover:underline">Vezi exemple de site-uri realizate de noi în portofoliu.</a>
        </div>
        
        <div className="mt-20">
            <Card className="bg-secondary/50 border-border/50">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-headline text-white">Servicii Suplimentare & Integrări</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-3xl mx-auto">
                        {addons.map(addon => (
                            <li key={addon.name} className="flex justify-between border-b border-dashed border-border pb-2">
                                <span className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary"/>{addon.name}</span>
                                <span className="font-bold">{addon.price}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
        {/* Extra servicii pret negociabil */}
        <div className="mt-8">
            <Card className="bg-secondary/50 border-border/50">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-headline text-white">Extra servicii sau pentru site-uri existente</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-lg text-white mb-2">
                        Oferim servicii suplimentare precum <span className="font-bold text-primary">editare</span>, <span className="font-bold text-primary">reconfigurare</span>, <span className="font-bold text-primary">integrare</span> sau <span className="font-bold text-primary">optimizare</span> pentru site-uri deja existente.
                    </p>
                    <p className="text-center text-base text-muted-foreground mb-2">
                        Fiecare proiect este unic, iar prețul se stabilește în funcție de complexitate și cerințe.
                    </p>
                    <p className="text-center text-lg font-bold text-primary">
                        Contactează-ne pentru o ofertă personalizată și consultanță gratuită!
                    </p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
