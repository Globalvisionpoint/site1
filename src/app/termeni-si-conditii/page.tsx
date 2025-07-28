import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termeni și Condiții',
  description: 'Consultați termenii și condițiile pentru serviciile oferite de digital-online.ro.',
  robots: {
    index: false,
    follow: true,
  }
};

export default function TermeniSiConditiiPage() {
  return (
    <div className="py-20 sm:py-24">
      <div className="container mx-auto px-4 prose prose-invert max-w-3xl">
        <h1 className="font-headline text-4xl text-white">Termeni și Condiții</h1>
        <p>
          Bine ați venit la digital-online.ro. Prin utilizarea acestui site, sunteți de acord să respectați și să fiți legat de următorii termeni și condiții de utilizare, care, împreună cu politica noastră de confidențialitate, guvernează relația digital-online.ro cu dumneavoastră în legătură cu acest site web.
        </p>
        
        <h2 className="font-headline text-2xl text-white">1. Acceptarea Termenilor</h2>
        <p>
          Prin accesarea și utilizarea acestui site web, confirmați că ați citit, înțeles și sunteți de acord să respectați acești termeni și condiții. Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați site-ul nostru.
        </p>

        <h2 className="font-headline text-2xl text-white">2. Utilizarea Serviciilor</h2>
        <p>
          Conținutul paginilor acestui site este pentru informarea și utilizarea dumneavoastră generală. Acesta poate fi modificat fără notificare prealabilă. Vă obligați să utilizați site-ul doar în scopuri legale și să nu încercați să accesați zone restricționate ale site-ului.
        </p>

        <h2 className="font-headline text-2xl text-white">3. Plata și Livrarea</h2>
        <p>
          Plata pentru serviciile de creare a site-urilor web se face o singură dată, conform prețurilor afișate. Toate prețurile sunt exprimate în euro și nu includ TVA-ul. Livrarea produsului final (site-ul în format .zip) se va face după confirmarea plății și în termenul specificat în ofertă.
        </p>
        
        <h2 className="font-headline text-2xl text-white">4. Proprietate Intelectuală</h2>
        <p>
          După plată și livrare, clientul devine proprietarul de drept al codului sursă al site-ului. Digital-online.ro nu revendică niciun drept de proprietate asupra produsului final livrat. Conținutul site-ului nostru (text, imagini, design) este protejat de drepturile de autor și nu poate fi copiat fără permisiunea noastră scrisă.
        </p>

        <h2 className="font-headline text-2xl text-white">5. Limitarea Răspunderii</h2>
        <p>
          Digital-online.ro nu poate fi trasă la răspundere pentru daune indirecte, incidentale, speciale sau consecvente care pot rezulta din utilizarea serviciilor noastre. Răspunderea noastră este limitată la suma plătită pentru serviciul respectiv.
        </p>

        <h2 className="font-headline text-2xl text-white">6. Confidențialitate</h2>
        <p>
          Ne angajăm să protejăm confidențialitatea informațiilor dumneavoastră conform politicii noastre de confidențialitate, disponibilă pe acest site.
        </p>

        <h2 className="font-headline text-2xl text-white">7. Legea Aplicabilă</h2>
        <p>
          Acești termeni și condiții sunt guvernați de legislația românească. Orice dispută va fi rezolvată de instanțele competente din România.
        </p>

        <h2 className="font-headline text-2xl text-white">8. Modificări ale Termenilor</h2>
        <p>
          Ne rezervăm dreptul de a modifica acești termeni în orice moment. Modificările vor fi afișate pe această pagină și vor intra în vigoare imediat după publicare.
        </p>

        <h2 className="font-headline text-2xl text-white">9. Contact</h2>
        <p>
          Pentru întrebări despre acești termeni, ne puteți contacta la contact@digital-online.ro sau la numărul de telefon +40758653550.
        </p>
      </div>
    </div>
  );
}
