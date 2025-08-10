import { PricingCard } from "@/components/PricingCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Promovare Online (Google, Meta, TikTok)',
  description: 'Administrăm campanii Google, Facebook și TikTok Ads. Prețuri fixe, optimizări și raportare. Scalează-ți afacerea!',
  alternates: {
    canonical: "/promovare-online",
  },
};

const marketingPackages = [
  {
    title: "PACHET START",
    price: "59 €",
    priceSuffix: "lună",
    description: "Pentru afaceri la început de drum.",
    features: [
      "1 platformă (Google, Meta sau TikTok)",
      "1 campanie activă",
      "Copywriting pentru reclamă (text + titlu)",
      "Optimizare săptămânală",
      "Raport lunar simplu",
    ],
    ctaText: "Începe Acum",
    ctaLink: "/contact?pachet=promo-start",
  },
  {
    title: "PACHET BUSINESS",
    price: "99 €",
    priceSuffix: "lună",
    description: "Pentru afaceri care vor să crească.",
    features: [
      "2 platforme la alegere (Google, Meta sau TikTok)",
      "Până la 3 campanii active",
      "Copywriting pentru reclamă (text + titlu)",
      "Optimizări & Recomandări strategice",
      "Raport lunar detaliat",
    ],
    ctaText: "Alege Business",
    ctaLink: "/contact?pachet=promo-business",
    recommended: true,
  },
  {
    title: "PACHET PRO",
    price: "159 €",
    priceSuffix: "lună",
    description: "Pentru scalare și dominare pe piață.",
    features: [
      "Toate cele 3 platforme (Google, Meta, TikTok)",
      "Până la 6 campanii active",
      "Copywriting pentru reclamă (text + titlu)",
      "Optimizări & Recomandări strategice avansate",
      "Grafică pentru promovare",
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
          {marketingPackages.map((pkg, idx) => {
            const isPro = pkg.title === "PACHET PRO";
            const isStart = idx === 0;
            const isBusiness = pkg.title === "PACHET BUSINESS";
            return (
              <PricingCard
                key={pkg.title}
                {...pkg}
                idealFor={pkg.description}
                className={
                  "transition-all duration-300 ease-in-out " +
                  (isPro
                    ? "shadow-[0_0_10px_#25D366] hover:shadow-[0_0_20px_#25D366] hover:bg-[#25D366]/10"
                    : isStart
                      ? "shadow-[0_0_10px_rgb(239,68,68)] hover:shadow-[0_0_20px_rgb(239,68,68)] hover:bg-red-500/10"
                      : isBusiness
                        ? "shadow-[0_0_10px_hsl(var(--primary))] hover:shadow-[0_0_20px_hsl(var(--primary))] hover:bg-primary/10"
                        : "")
                }
                ctaClassName={isPro ? "bg-[#25D366] text-primary-foreground hover:bg-[#1da851]" : ""}
              />
            );
          })}
        </div>

        <div className="mt-20">
            <Card className="bg-secondary/50 border-border/50">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-body text-white">Setup Inițial (Plată Unică)</CardTitle>
                    <CardDescription>Pentru conturile noi de reclame, se adaugă o taxă unică pentru configurarea corectă a fundației.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="max-w-md mx-auto space-y-4">
                        <div className="flex justify-between items-center text-lg">
                            <span>Setup cont & pixel</span>
                            <span className="font-bold text-primary w-32 text-right">49 €</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center text-lg">
                            <span>Instalare pixel Google / Meta/TikTok</span>
                            <span className="font-bold text-primary w-32 text-right">39 € / platformă</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center text-lg">
                            <span>Setup complet tracking & conturi (GA4 + Meta + Google Ads + TikTok Ads)</span>
                            <span className="font-bold text-primary w-32 text-right">99 €</span>
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
