import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from 'next';
import { Star } from "lucide-react";
import Head from 'next/head';

const projects = [
  {
    title: "Site de Prezentare Dealer Auto",
    description: "O platformă modernă pentru un dealer auto, cu listări detaliate, căutare avansată și formulare de contact pentru test drive.",
    imageUrl: "/autobias.webp",
    imageHint: "car dealership",
    liveLink: "https://www.autobias.ro/",
    tags: ["Automobile", "Next.js", "Vânzări"],
  },
  {
    title: "Site de Prezentare pentru Servicii Detailing Auto",
    description: "Website modern pentru prezentarea serviciilor profesionale de detailing auto, cu portofoliu, descriere servicii, galerie foto și formular de contact rapid.",
    imageUrl: "/detailing-auto.webp",
    imageHint: "detailing auto",
    liveLink: "https://cdddetailing.ro/",
    tags: ["Automobile", "Next.js", "Platformă"],
  },
  {
    title: "Site pentru Pensiune Turistică",
    description: "Soluție completă pentru rezervări online, gestionare camere, evenimente și facilități pentru o pensiune turistică modernă, cu integrare plăți și panou administrare.",
    imageUrl: "/pensiune-rezervare.webp",
    imageHint: "pensiune rezervare",
    liveLink: "https://www.valeasipotului.ro/",
    tags: ["Web App", "Integrare API", "Automatizare"],
  },
  {
    title: "Site pentru Servicii de Management Hotelier",
    description: "Pagină de prezentare pentru servicii complete de administrare și management al proprietăților în regim hotelier: rezervări online, raportare, asistență 24/7 și listare pe multiple platforme.",
    imageUrl: "/cityhome.webp",
    imageHint: "management hotelier",
    liveLink: "https://cityhome.ro/",
    tags: ["Site", "Management Hotelier", "Automatizare"],
  },
  {
    title: "Site pentru Agenție de Turism Online",
    description: "Platformă modernă pentru rezervări online, city break-uri, vacanțe charter, bilete de avion și oferte de cazare, cu consultanți dedicați și cele mai bune prețuri fără taxe ascunse.",
    imageUrl: "/veltravel.webp",
    imageHint: "agenție de turism",
    liveLink: "https://www.veltravel.ro/",
    tags: ["Turism", "Rezervări Online", "City Break", "Vacanțe"],
  },
  {
    title: "Site pentru Restaurant",
    description: "Un site apetisant pentru un restaurant, cu meniu online, sistem de rezervări și galerie foto a preparatelor.",
    imageUrl: "/restaurant.webp",
    imageHint: "restaurant website",
    liveLink: "https://elephantebucharest.com/",
    tags: ["Restaurant", "Rezervări Online", "Local SEO"],
  },
];

const testimonials = [
  {
    name: "Andrei Popescu",
    company: "CEO la Consultify",
    avatarUrl: "/andrei-popescu.webp",
    avatarFallback: "AP",
    review: "Colaborarea cu echipa digital-online.ro a fost excepțională. Ne-au livrat un site ultra-rapid, exact cum am cerut, și ne-au oferit suport tehnic gratuit pentru lansare. Recomand cu încredere!",
  },
  {
    name: "Elena Ionescu",
    company: "Fondator Artizanal",
    avatarUrl: "/elena-ionescu.webp",
    avatarFallback: "EI",
    review: "Sunt extrem de mulțumită de noul meu magazin online. Designul este curat, modern și, cel mai important, vinde! Faptul că nu plătesc un abonament lunar este un bonus imens pentru afacerea mea.",
  },
  {
      name: "Mihai Georgescu",
      company: "Manager Pensiunea Transilvania",
      avatarUrl: "/mihai-georgescu.webp",
      avatarFallback: "MG",
      review: "Profesionalism și eficiență. Ne-au înțeles perfect nevoile și au creat o aplicație de rezervări care ne-a simplificat enorm munca. Viteza de execuție a fost impresionantă.",
  },
  {
    name: "Laura Dinu",
    company: "Organizator MusicFest",
    avatarUrl: "/laura-dinu.webp",
    avatarFallback: "LD",
    review: "Site-ul creat de ei a fost un succes total. A arătat incredibil și a funcționat perfect, chiar și cu trafic intens. Rata de conversie a biletelor a fost peste așteptări.",
  },
  {
      name: "Cristian Olaru",
      company: "Blogger la 'Valiza Plină'",
      avatarUrl: "/cristian-olaru.webp",
      avatarFallback: "CO",
      review: "Au transformat viziunea mea într-un blog superb și foarte rapid. Acum fotografiile mele se încarcă instant, iar cititorii laudă constant experiența de navigare. Servicii de top!",
  },
  {
      name: "Familia Rusu",
      company: "Proprietari 'La Taifas'",
      avatarUrl: "/familia-rusu.webp",
      avatarFallback: "FR",
      review: "Noul nostru site a atras mult mai mulți clienți. Meniul online este ușor de folosit, iar sistemul de rezervări funcționează fără probleme. O investiție care s-a meritat din prima lună.",
  }
];

export const metadata: Metadata = {
  title: 'Portofoliu Web Design | Exemple Site-uri Realizate',
  description: 'Descoperă portofoliul nostru de site-uri web realizate pentru clienți din diverse domenii. Vezi exemple de web design modern, rapid și optimizat SEO!',
  alternates: {
    canonical: "/portofoliu",
  },
};

export default function PortofoliuPage() {
  const reviewStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": testimonials.map((t, i) => ({
      "@type": "Review",
      "position": i + 1,
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewBody": t.review,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5,
        "worstRating": 1
      },
      "itemReviewed": {
        "@type": "Organization",
        "name": "digital-online.ro"
      }
    }))
  };
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewStructuredData) }} />
      </Head>
      <div className="py-20 sm:py-24">
        <div className="container mx-auto px-4">
          
          {/* Project Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-white">
              Proiectele Noastre, <span className="text-primary">Inspirația Ta.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Iată câteva dintre soluțiile web pe care le-am construit pentru clienții noștri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col overflow-hidden border-border/50 hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="p-0">
                  <Image
                    src={project.imageUrl}
                    alt={`Imagine pentru proiectul ${project.title}`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    data-ai-hint={project.imageHint}
                  />
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full" variant="outline">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">Vezi Proiectul Live</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center my-8">
            <a href="/contact" className="inline-block text-lg font-bold text-primary hover:underline">Vrei și tu un site performant? Contactează-ne aici.</a>
          </div>

          {/* Testimonials Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-white">
              Ce Spun <span className="text-primary">Clienții Noștri.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Satisfacția clienților este cea mai bună carte de vizită pentru noi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-secondary/50 border-border/50 flex flex-col">
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={testimonial.avatarUrl} alt={`Avatar ${testimonial.name}`} />
                          <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                      </Avatar>
                      <div>
                          <p className="font-bold text-white">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <blockquote className="text-muted-foreground italic border-l-2 border-primary pl-4">
                    &ldquo;{testimonial.review}&rdquo;
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
