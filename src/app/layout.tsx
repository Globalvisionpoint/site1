import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { inter, spaceGrotesk } from '@/lib/fonts';

export const metadata: Metadata = {
  metadataBase: new URL('https://digital-online.ro'),
  title: {
    default: 'Creare Site Pentru Afacerea Ta Fără Abonament | Digital-Online.ro',
    template: '%s | Digital-Online.ro',
  },
  description: 'Oferim servicii de creare site-uri pentru afacerea ta, profesionale, ultra-rapide și moderne, cu plată unică. Fără costuri lunare, deții controlul total. Contactează-ne acum!',
  keywords: ['creare site', 'site pentru afacerea ta', 'fara abonament', 'plata unica', 'site rapid', 'next.js', 'marketing online', 'promovare google ads', 'promovare meta ads'],
  openGraph: {
    title: 'Creare Site Pentru Afacerea Ta Fără Abonament | Digital-Online.ro',
    description: 'Oferim servicii de creare site-uri pentru afacerea ta, profesionale, ultra-rapide și moderne, cu plată unică.',
    url: 'https://digital-online.ro',
    siteName: 'Digital-Online.ro',
    locale: 'ro_RO',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Elimin Google Fonts, folosim doar self-hosted */}
        <link rel="canonical" href="https://digital-online.ro" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "name": "digital-online.ro",
                "url": "https://digital-online.ro",
                "logo": "https://digital-online.ro/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+40-700-000-000",
                  "contactType": "Customer Service",
                  "email": "contact@digital-online.ro",
                  "areaServed": "RO",
                  "availableLanguage": "Romanian"
                },
                "sameAs": []
              },
              {
                "@type": "WebSite",
                "url": "https://digital-online.ro",
                "name": "Digital-Online.ro",
                "description": "Creare Site-uri Pentru Afacerea Ta Fără Abonament",
                "publisher": {
                  "@type": "Organization",
                  "name": "digital-online.ro",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://digital-online.ro/logo.png"
                  }
                },
                "inLanguage": "ro-RO"
              },
              {
                "@type": "Service",
                "serviceType": "Creare site web, web design, optimizare SEO, promovare online",
                "provider": {
                  "@type": "Organization",
                  "name": "digital-online.ro"
                },
                "areaServed": "RO",
                "availableChannel": {
                  "@type": "ServiceChannel",
                  "serviceUrl": "https://digital-online.ro/contact"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Acasă", "item": "https://digital-online.ro/" },
                  { "@type": "ListItem", "position": 2, "name": "Prețuri Site", "item": "https://digital-online.ro/preturi-site" },
                  { "@type": "ListItem", "position": 3, "name": "Portofoliu", "item": "https://digital-online.ro/portofoliu" },
                  { "@type": "ListItem", "position": 4, "name": "Promovare Online", "item": "https://digital-online.ro/promovare-online" },
                  { "@type": "ListItem", "position": 5, "name": "Contact", "item": "https://digital-online.ro/contact" }
                ]
              }
            ]
          })}}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-body antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <div className="h-8 sm:h-12"></div>
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
        <CookieConsent />
      </body>
    </html>
  );
}
