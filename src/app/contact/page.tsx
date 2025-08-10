import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone } from "lucide-react";
import type { Metadata } from 'next';
import { WhatsappIcon } from "@/components/WhatsappIcon";

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactează-ne pentru ofertă de creare site, web design sau promovare online. Răspundem rapid!',
  alternates: {
    canonical: "/contact",
  },
};


export default function ContactPage() {
  return (
    <div className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative text-center mb-16">
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
                <h2 className="text-2xl font-bold font-headline">Detalii de Contact</h2>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary rounded-full">
                        <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <p className="text-muted-foreground">Email</p>
                        <a href="mailto:contact@digital-online.ro" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                            contact@digital-online.ro
                        </a>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-green-500-60 to-green-600-60 p-4 rounded-lg shadow-lg transform transition-all hover:scale-[1.02] hover:shadow-xl">
                    <a 
                        href="https://wa.me/40758653550" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-4 group"
                    >
                        <div className="bg-white p-3 rounded-full flex-shrink-0 group-hover:bg-green-100 transition-colors">
                            <img 
                                src="/whatsappIco.webp" 
                                alt="Contact WhatsApp Digital-Online.ro" 
                                className="w-6 h-6" 
                            />
                        </div>
                        <div className="text-left">
                            <p className="text-white font-medium text-sm">Click pentru a deschide</p>
                            <p className="text-white font-bold text-xl">Chat WhatsApp</p>
                            <p className="text-white/90 text-sm mt-1">Răspundem imediat în aplicație</p>
                        </div>
                    </a>
                </div>

                <div className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
                    <div className="p-2 bg-secondary/50 rounded-full">
                        <Phone className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Sau sună-ne la</p>
                        <span className="text-base text-muted-foreground">+40 758 653 550</span>
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
