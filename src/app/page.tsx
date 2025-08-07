import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Landmark, Rocket, KeyRound } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Creare Site Web Profesional Fără Abonament | Web Design România',
  description: 'Agenție specializată în creare site-uri web moderne, rapide și fără abonament. Oferim web design profesional, prețuri transparente și livrare completă. Vezi portofoliul nostru!',
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative pt-16 sm:pt-20 pb-6 sm:pb-8 flex items-center justify-center min-h-[600px] overflow-hidden">
        <div className="container mx-auto px-4 z-10 relative flex flex-col items-center justify-center text-center gap-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline mb-2 tracking-tighter text-white max-w-3xl mx-auto">
            Site pentru afacerea ta, <span className="text-primary">fără abonament.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground mb-2">
            Plătești o singură dată, îl deții pe viață. Realizăm site-uri ultra-rapide și moderne, conectate gratuit la domeniu prin cloud — fără abonamente, fără costuri lunare. Primești și arhiva .zip, ca să îl poți publica oriunde vrei, oricând vrei.
          </p>
          <div className="bg-primary/10 border border-primary/20 rounded-lg px-6 py-4 max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-primary mb-1">💡 Prețurile cele mai mici de pe piață!</p>
            <p className="text-sm text-muted-foreground">Începând de la doar 149€ pentru un site complet. Compară cu alte agenții care cer 500-1000€+ pentru același serviciu.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-2">
            <Button asChild size="lg">
              <Link href="/preturi-site">Vezi Preturi Site</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/promovare-online">Servicii Marketing</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Spațiu gol între header și secțiunea cu gif-ul */}
      <div className="h-8 sm:h-12"></div>

      <section id="de-ce-noi" className="pt-4 sm:pt-6 pb-20 sm:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Te-ai săturat de costuri lunare și platforme complicate?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Uită de abonamente, mentenanță costisitoare și site-uri lente. Noi oferim alternativa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card border-border/50 hover:border-primary transition-colors duration-300 transform hover:-translate-y-1">
              <CardHeader className="items-center text-center">
                <Landmark className="w-12 h-12 mb-4 text-primary" />
                <CardTitle className="font-headline text-xl">Fără Costuri Ascunse</CardTitle>
                <CardDescription className="text-center">Prețul afișat este singurul preț pe care îl plătești. Fără abonament lunar pentru site. Simplu și transparent.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border/50 hover:border-primary transition-colors duration-300 transform hover:-translate-y-1">
              <CardHeader className="items-center text-center">
                <Rocket className="w-12 h-12 mb-4 text-primary" />
                <CardTitle className="font-headline text-xl">Performanță Garantată</CardTitle>
                <CardDescription className="text-center">Folosim tehnologii de top (Next.js) pentru a garanta un scor de 90-100 în Google PageSpeed. Site-ul tău se va încărca instant.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border/50 hover:border-primary transition-colors duration-300 transform hover:-translate-y-1">
              <CardHeader className="items-center text-center">
                <KeyRound className="w-12 h-12 mb-4 text-primary" />
                <CardTitle className="font-headline text-xl">Control Total</CardTitle>
                <CardDescription className="text-center">Primești site-ul complet într-un fișier ZIP. E 100% al tău. Îl poți modifica, găzdui oriunde și conecta la orice domeniu dorești.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border/50 hover:border-primary transition-colors duration-300 transform hover:-translate-y-1 border-primary/30">
              <CardHeader className="items-center text-center">
                <div className="w-12 h-12 mb-4 text-primary text-2xl">💰</div>
                <CardTitle className="font-headline text-xl">Prețuri Competitive</CardTitle>
                <CardDescription className="text-center">Cele mai mici prețuri de pe piață! Începând de la 149€ vs 500-1000€+ la alte agenții. Calitate premium, preț accesibil.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="cum-functioneaza" className="py-20 sm:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Procesul Nostru în 4 Pași Simpli</h2>
            <div className="bg-primary/10 border border-primary/20 rounded-lg px-6 py-4 max-w-3xl mx-auto mt-6">
              <p className="text-lg font-semibold text-primary mb-2">🎯 Economisește 70-80% față de alte agenții!</p>
              <p className="text-muted-foreground">În timp ce alte agenții cer 500-1000€+ pentru un site, noi oferim același serviciu de calitate premium de la doar 149€. Fără compromisuri la calitate!</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-[calc(50%+5mm)] left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block" aria-hidden="true"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-2xl mb-4 border-4 border-background">1</div>
                <h3 className="font-headline text-xl font-bold mb-2">Alegi Oferta</h3>
                <p className="text-muted-foreground">Selectezi oferta de site web care ți se potrivește cel mai bine.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-2xl mb-4 border-4 border-background">2</div>
                <h3 className="font-headline text-xl font-bold mb-2">Ne trimiți detaliile</h3>
                <p className="text-muted-foreground">Ne oferi textele, imaginile și viziunea ta pentru site.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-2xl mb-4 border-4 border-background">3</div>
                <h3 className="font-headline text-xl font-bold mb-2">Construim și Livrăm</h3>
                <p className="text-muted-foreground">Creăm site-ul tău modern și performant și ți-l livrăm într-o arhivă .zip.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-2xl mb-4 border-4 border-background">4</div>
                <h3 className="font-headline text-xl font-bold mb-2">Îl Deții și Publici</h3>
                <p className="text-muted-foreground">Site-ul este 100% al tău. Îl poți încărca pe orice găzduire și te ajutăm gratuit să-l conectezi la domeniu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
