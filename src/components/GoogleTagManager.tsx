'use client';

import { useEffect } from 'react';

interface GoogleTagManagerProps {
  gtmId: string;
}

export function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  useEffect(() => {
    let loaded = false;

    const loadGTM = () => {
      if (loaded) return;
      loaded = true;
      const script = document.createElement('script');
      script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`;
      document.head.appendChild(script);
    };

    const shouldLoad = () => {
      try {
        return localStorage.getItem('cookie_consent') === 'accepted';
      } catch {
        return false;
      }
    };

    if (shouldLoad()) {
      loadGTM();
    }

    const onConsentUpdate = (e: Event) => {
      try {
        const detail = (e as CustomEvent).detail;
        if (detail === 'accepted') {
          loadGTM();
        }
        if (detail === 'declined') {
          // Încercăm să curățăm GTM dacă a fost încărcat
          const scripts = Array.from(document.querySelectorAll('script[src*="googletagmanager.com/gtm.js"], script')).filter(s => s.innerHTML.includes('googletagmanager.com/gtm.js'));
          scripts.forEach(s => s.parentElement?.removeChild(s));
          const iframes = Array.from(document.querySelectorAll('iframe[src*="googletagmanager.com"]'));
          iframes.forEach(f => f.parentElement?.removeChild(f));
          // Reset dataLayer
          (window as any).dataLayer = [];
          loaded = false;
        }
      } catch {}
    };

    window.addEventListener('cookie-consent-update', onConsentUpdate as EventListener);

    return () => {
      window.removeEventListener('cookie-consent-update', onConsentUpdate as EventListener);
    };
  }, [gtmId]);

  return null;
}

export function GoogleTagManagerNoScript({ gtmId }: GoogleTagManagerProps) {
  // Evităm randarea noscript pentru a respecta consimțământul
  return null;
}
