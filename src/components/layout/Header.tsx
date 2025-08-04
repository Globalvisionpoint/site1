
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu, Home, Tag, Rocket, Briefcase, HelpCircle, Mail, X } from 'lucide-react';
import { Logo } from '@/components/Logo';
import React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';

const navLinks = [
  { href: '/', label: 'Acasă', icon: Home },
  { href: '/preturi-site', label: 'Preturi Site', icon: Tag },
  { href: '/promovare-online', label: 'Promovare Online', icon: Rocket },
  { href: '/portofoliu', label: 'Portofoliu', icon: Briefcase },
  { href: '/faq', label: 'FAQ', icon: HelpCircle },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500 shadow-[0_0_10px_theme(colors.purple.500)]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-whatsapp shadow-[0_0_10px_#25D366]"></div>
      <div className="relative z-10 flex h-16 items-center justify-between px-4 md:px-8 gap-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-b border-border/40">
        <div className="flex-1">
          <Logo />
        </div>

        <div className="hidden md:flex items-center justify-end flex-1 gap-6">
            <nav className="flex items-center gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'transition-colors hover:text-primary',
                    pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {link.label}
                </Link>
              ))}
               <Link href="/contact" className={cn(
                    'transition-colors hover:text-primary',
                    pathname === "/contact" ? 'text-primary' : 'text-muted-foreground'
                  )}>Contact</Link>
            </nav>

            <div className="flex items-center">
                 <Button asChild variant="ghost" size="icon" className="hover:bg-transparent">
                    <Link href="https://wa.me/40758653550" target="_blank" rel="noopener noreferrer">
                        <img src="/whatsappIco.webp" alt="WhatsApp" className="h-8 w-8" />
                        <span className="sr-only">Contact WhatsApp</span>
                    </Link>
                </Button>
            </div>
        </div>

        <div className="md:hidden flex items-center">
           <Button asChild variant="ghost" size="icon" className="mr-2 hover:bg-transparent">
                <Link href="https://wa.me/40758653550" target="_blank" rel="noopener noreferrer">
                    <img src="/whatsappIco.webp" alt="WhatsApp" className="h-8 w-8" />
                    <span className="sr-only">Contact WhatsApp</span>
                </Link>
            </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="default" size="icon" className="bg-primary text-primary-foreground h-10 w-10 min-w-0 p-0 flex items-center justify-center">
                <Menu className="h-8 w-8 text-primary-foreground" strokeWidth={3} />
                <span className="sr-only">Deschide meniul</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              aria-describedby={undefined}
              className="!p-0 !bg-white/80 dark:!bg-background/80 !backdrop-blur-xl !rounded-l-2xl !max-w-[320px] flex flex-col h-full animate-slide-in !border-whatsapp shadow-[0_0_10px_theme(colors.custom-green)]"
            >
              <div className="flex flex-col h-full">
                <div className="flex flex-col items-center pt-6 pb-2 px-6 border-b border-border/30 mt-[1cm]">
                  <Logo />
                  <SheetTitle className="sr-only">Meniu</SheetTitle>
                  <SheetDescription id="sheet-desc" className="mb-2 mt-2 text-base leading-relaxed text-muted-foreground text-center">Navigație principală și linkuri către paginile site-ului.</SheetDescription>
                </div>
                <nav className="flex flex-col gap-2 px-6 py-4 flex-1 mt-[1cm]">
                  {[...navLinks, { href: '/contact', label: 'Contact', icon: Mail }].map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          'flex items-center gap-3 rounded-lg px-4 py-3 text-lg font-medium transition-colors',
                          pathname === link.href
                            ? 'bg-primary/10 text-primary shadow-sm'
                            : 'text-foreground hover:bg-primary/5',
                          'active:scale-95'
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className={cn('w-5 h-5', pathname === link.href ? 'text-primary' : 'text-muted-foreground')} />
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="px-6 pb-6 mt-auto">
                  <a
                    href="https://wa.me/40758653550"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold py-3 text-lg shadow transition-colors"
                  >
                    <img src="/whatsappIco.webp" alt="WhatsApp" className="h-6 w-6" />
                    WhatsApp rapid
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
