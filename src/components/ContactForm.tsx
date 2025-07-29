'use client';

import { useActionState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import type { FormState } from '@/lib/definitions'; // Importăm tipul din fișierul separat
import { submitContactForm } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function ContactForm() {
  const { toast } = useToast();
  const initialState: FormState = { message: '', isSuccess: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.isSuccess ? 'Succes!' : 'Eroare',
        description: state.message,
        variant: state.isSuccess ? 'default' : 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nume</Label>
        <Input id="name" name="name" placeholder="Numele tău" required />
        {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name.join(', ')}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="adresa@email.com" required />
        {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email.join(', ')}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Telefon (Opțional)</Label>
        <Input id="phone" name="phone" type="tel" placeholder="Numărul tău de telefon" />
        {state.errors?.phone && <p className="text-sm text-destructive">{state.errors.phone.join(', ')}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Mesaj</Label>
        <Textarea id="message" name="message" placeholder="Spune-ne mai multe despre proiectul tău..." required rows={6} />
        {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message.join(', ')}</p>}
      </div>
      <Button type="submit" className="w-full" size="lg">Trimite Mesajul</Button>
    </form>
  );
}
