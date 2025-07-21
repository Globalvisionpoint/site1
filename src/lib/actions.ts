
'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend('re_i94JCYiY_KzbA2eauvvK2xDNoyXBpakPm');

const contactSchema = z.object({
  name: z.string().min(2, { message: "Numele trebuie să aibă cel puțin 2 caractere." }),
  email: z.string().email({ message: "Te rugăm să introduci o adresă de email validă." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Mesajul trebuie să aibă cel puțin 10 caractere." }),
});

export type FormState = {
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        phone?: string[];
        message?: string[];
    };
    isSuccess: boolean;
};


export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Formularul conține erori. Te rugăm să le corectezi.',
      isSuccess: false,
    };
  }

  // Trimitere email cu Resend
  try {
    const resendResponse = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'globalvisionpoint@gmail.com',
      subject: `Mesaj nou de la ${validatedFields.data.name}`,
      replyTo: validatedFields.data.email,
      text: `Nume: ${validatedFields.data.name}\nEmail: ${validatedFields.data.email}\nTelefon: ${validatedFields.data.phone || '-'}\n\nMesaj:\n${validatedFields.data.message}`,
    });
    console.log('Resend response:', resendResponse);
    if (!resendResponse || resendResponse.error) {
      return {
        message: 'A apărut o eroare la trimiterea mesajului: ' + (resendResponse?.error?.message || 'Eroare necunoscută'),
        isSuccess: false,
      };
    }
  } catch (error) {
    console.error('Resend error:', error);
    return {
      message: 'A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou sau să ne contactezi direct pe email.',
      isSuccess: false,
    };
  }

  return {
    message: 'Mesajul tău a fost trimis! Îți mulțumim și te vom contacta în cel mai scurt timp.',
    isSuccess: true,
  };
}
