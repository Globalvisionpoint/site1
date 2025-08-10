'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // This code runs only on the client
    const consent = localStorage.getItem('cookie_consent');
    if (consent === null) {
      // If consent is not yet given, show the banner.
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('cookie_consent', 'accepted');
      window.dispatchEvent(new CustomEvent('cookie-consent-update', { detail: 'accepted' }));
    } catch {}
    setShowBanner(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('cookie_consent', 'declined');
      window.dispatchEvent(new CustomEvent('cookie-consent-update', { detail: 'declined' }));
    } catch {}
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full p-4 sm:max-w-md sm:p-6">
      <Card className="border-border/60 bg-secondary/80 backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="font-headline text-lg">Consimțământ privind modulele cookie</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Acest site utilizează module cookie pentru a vă asigura că beneficiați de cea mai bună experiență. Aflați mai multe citind{' '}
            <Link href="/politica-cookie" className="underline hover:text-primary">
              Politica noastră de cookies
            </Link>.
          </CardDescription>
        </CardHeader>
        <CardContent>
             <p className="text-xs text-muted-foreground">În acest moment, site-ul nostru folosește doar cookie-uri esențiale pentru funcționare.</p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2">
          <Button onClick={handleAccept} className="w-full">Acceptă</Button>
          <Button onClick={handleDecline} variant="secondary" className="w-full">Refuză</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
