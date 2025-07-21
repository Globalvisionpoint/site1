import { PricingCard } from "@/components/PricingCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from 'next';
import { aiPoweredSeoOptimization } from '@/ai/flows/seo-optimizer';

const pageContent = `
Servicii de promovare online la Digital-Online.ro. Prețuri fixe, fără costuri ascunse.
Pachet Start (€109/lună): Ideal pentru afaceri la început de drum. 1 platformă, 1 campanie, setare pixel, optimizare săptămânală.
Pachet Business (€139/lună): Ideal pentru afaceri care vor să crească. 2 platforme, până la 3 campanii, retargeting.
Pachet Pro (€179/lună): Ideal pentru scalare. Toate cele 3 platforme (Google, Meta, TikTok), până la 6 campanii, funnel complet.
Taxe unice de setup: Setup cont & pixel - 49€, Setup complet + GA4 + conversii - 99€.
`;

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await aiPoweredSeoOptimization({ pageContent, pageTitle: 'Servicii de Promovare Online' });
    return {
      title: seoData.title,
      description: seoData.description,
    };
  } catch (e) {
    console.error('Error generating metadata for Promovare Online page:', e);
    return {
      title: 'Servicii Promovare Online (Google, Meta) | Digital-Online.ro',
      description: 'Pachete de marketing online și promovare pe Google, Meta (Facebook, Instagram) și TikTok. Prețuri fixe, fără comision la buget. Adu-ți clienți noi rapid!',
    };
  }
}

const marketingPackages = [
  {
    title: "PACHET START",
    price: "109 €",
    priceSuffix: "lună",
    description: "Pentru afaceri la început de drum.",
    features: [
      "1 platformă (Google, Meta sau TikTok)",
      "1 campanie activă",
      "Setare pixel de tracking",
      "Optimizare săptămânală",
      "Raport lunar simplu",
    ],
    ctaText: "Începe Acum",
    ctaLink: "/contact?pachet=promo-start",
  },
  {
    title: "PACHET BUSINESS",
    price: "139 €",
    priceSuffix: "lună",
    description: "Pentru afaceri care vor să crească.",
    features: [
      "2 platforme la alegere",
      "Până la 3 campanii active",
      "Implementare Retargeting",
      "Optimizări & Recomandări strategice",
      "Raport lunar detaliat",
    ],
    ctaText: "Alege Business",
    ctaLink: "/contact?pachet=promo-business",
    recommended: true,
  },
  {
    title: "PACHET PRO",
    price: "179 €",
    priceSuffix: "lună",
    description: "Pentru scalare și dominare pe piață.",
    features: [
      "Toate cele 3 platforme (Google, Meta, TikTok)",
      "Până la 6 campanii active",
      "Funnel complet (A/B testing, lookalike)",
      "Strategie avansată și consultanță",
      "Call lunar de strategie",
    ],
    ctaText: "Devino Pro",
    ctaLink: "/contact?pachet=promo-pro",
  },
];

export default function PromovareOnlinePage() {
  return (
    <div className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-white">
            Adu-ți Clienți pe Site. <span className="text-primary">Promovare Eficientă cu Prețuri Fixe.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Ne ocupăm de strategie, setare și optimizare. Tu plătești bugetul de reclamă direct platformei (Google, Meta, TikTok), fără comisioane ascunse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketingPackages.map((pkg) => (
            <PricingCard key={pkg.title} {...pkg} idealFor={pkg.description} />
          ))}
        </div>

        <div className="mt-20">
            <Card className="bg-secondary/50 border-border/50">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-headline text-white">Setup Inițial (Plată Unică)</CardTitle>
                    <CardDescription>Pentru conturile noi de reclame, se adaugă o taxă unică pentru configurarea corectă a fundației.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="max-w-md mx-auto space-y-4">
                        <div className="flex justify-between items-center text-lg">
                            <span>Setup cont & pixel</span>
                            <span className="font-bold text-primary">49 €</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center text-lg">
                            <span>Setup complet + GA4 + conversii</span>
                            <span className="font-bold text-primary">99 €</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center text-lg">
                            <span>Instalare pixel Google / Meta/TikTok</span>
                            <span className="flex flex-col items-end">
                                <span className="font-bold text-primary">39 €</span>
                                <span className="text-sm text-primary">/ platformă</span>
                            </span>
                        </div>
                        <Separator />
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
