import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone } from "lucide-react";
import type { Metadata } from 'next';
import { aiPoweredSeoOptimization } from '@/ai/flows/seo-optimizer';
import { WhatsappIcon } from "@/components/WhatsappIcon";

const pageContent = `
Contactează echipa Digital-Online.ro. 
Titlu: Gata să Începi? Hai să Vorbim!
Sub-titlu: Completează formularul de mai jos și te vom contacta în cel mai scurt timp pentru a discuta despre proiectul tău.
Formular de contact cu câmpuri pentru nume, email, telefon, mesaj.
Date de contact: email contact@digital-online.ro și număr de telefon: +40758653550.
`;

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await aiPoweredSeoOptimization({ pageContent, pageTitle: 'Contact' });
    return {
      title: seoData.title,
      description: seoData.description,
    };
  } catch (e) {
    console.error('Error generating metadata for Contact page:', e);
    return {
      title: 'Contact Creare Site și Promovare | Digital-Online.ro',
      description: 'Gata să începi proiectul tău? Contactează-ne pentru servicii de creare site-uri pentru afacerea ta sau promovare online. Completează formularul și hai să vorbim!',
    };
  }
}


export default function ContactPage() {
  return (
    <div className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-white">
              Gata să Începi? <span className="text-primary">Hai să Vorbim!</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Completează formularul de mai jos sau <a href="https://wa.me/40758653550" target="_blank" rel="noopener noreferrer" className="font-bold" style={{ color: '#25D366' }}>WhatsApp</a> și te vom contacta în cel mai scurt timp pentru a discuta despre proiectul tău.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="bg-card p-8 rounded-lg border border-border/50">
                <ContactForm />
            </div>
            <div className="space-y-8">
                <h3 className="text-2xl font-bold font-headline">Detalii de Contact</h3>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary rounded-full">
                        <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <p className="text-muted-foreground">Email</p>
                        <a href="mailto:contact@digital-online.ro" className="text-lg font-medium hover:text-primary transition-colors">
                            contact@digital-online.ro
                        </a>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary rounded-full flex items-center justify-center">
                        <img src="/whatsappIco.webp" alt="WhatsApp" className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-muted-foreground">WhatsApp</p>
                        <a href="https://wa.me/40758653550" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-primary transition-colors">
                            Contactează-ne pe WhatsApp
                        </a>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary rounded-full">
                        <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <p className="text-muted-foreground">Telefon</p>
                        <span className="text-lg font-medium">+40758653550</span>
                    </div>
                </div>
                <p className="text-muted-foreground pt-4 border-t border-border">
                    Programul nostru este de Luni până Vineri, între orele 09:00 și 18:00. Răspundem la email-uri și mesaje în cel mai scurt timp posibil.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
