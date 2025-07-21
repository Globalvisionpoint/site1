import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Metadata } from 'next';
import { aiPoweredSeoOptimization } from '@/ai/flows/seo-optimizer';

const faqItems = [
  {
    question: 'Ce înseamnă "fără costuri lunare"?',
    answer: "Înseamnă că plătești o singură dată pentru crearea site-ului. Nu există nicio taxă de mentenanță sau abonament de la noi. Singurele costuri externe, pe care le cumperi și deții tu, sunt domeniul (aprox. 10-15€/an).",
  },
  {
    question: "Pot să modific site-ul mai târziu?",
    answer: "Da! Primești codul sursă complet. Oricine cu cunoștințe de HTML, CSS, JavaScript, Next.js și React îl poate modifica. Alternativ, putem face noi modificări viitoare, contra-cost, la un tarif avantajos.",
  },
  {
    question: "Mă ajutați cu publicarea site-ului?",
    answer: "Absolut. Conectarea site-ului la domeniul tău și încărcarea pe serviciul de găzduire sunt incluse gratuit în prețul oricărui pachet de creare site. Ne ocupăm de tot procesul tehnic.",
  },
  {
    question: "De ce folosiți Next.js și nu WordPress?",
    answer: "Pentru viteză, securitate și zero mentenanță. Site-urile noastre statice sunt fundamental mai rapide și mai sigure decât platformele complexe precum WordPress. Asta elimină nevoia de update-uri constante, riscuri de securitate și costuri de mentenanță.",
  },
  {
    question: "Ce trebuie să vă ofer pentru a începe?",
    answer: "Avem nevoie de textele pentru fiecare secțiune/pagină, logo-ul tău (dacă ai unul), imagini și orice alte preferințe de design (culori, fonturi, site-uri care îți plac). Dacă nu ai text sau imagini, te putem ajuta și cu asta.",
  },
  {
    question: "Cât durează crearea unui site?",
    answer: "Un Pachet Standard este de obicei gata în 3-5 zile lucrătoare, în timp ce un Pachet Custom sau AI Ready poate dura între 5-10 zile lucrătoare, în funcție de complexitate.",
  },
];

const pageContent = faqItems.map(item => `Î: ${item.question} R: ${item.answer}`).join('\n');

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await aiPoweredSeoOptimization({ pageContent, pageTitle: 'Întrebări Frecvente (FAQ)' });
    return {
      title: seoData.title,
      description: seoData.description,
    };
  } catch (e) {
    console.error('Error generating metadata for FAQ page:', e);
    return {
      title: 'Întrebări Frecvente Creare Site | Web Design Fără Abonament',
      description: 'Află răspunsuri la cele mai frecvente întrebări despre serviciile noastre de creare site, web design și promovare online. Suport rapid și transparent!',
    };
  }
}

export default function FaqPage() {
  return (
    <div className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-white">
            Ai Întrebări? <span className="text-primary">Avem Răspunsuri.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Am adunat aici cele mai frecvente întrebări pentru a-ți oferi claritate.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
