import * as z from 'zod';

export const contactFormSchema = z.object({
  fullName: z
    .string({
      required_error: 'Imię i nazwisko jest wymagane',
    })
    .min(5, 'Co najmniej 4 znaki')
    .max(80, 'Maksymalnie 80 znaków'),
  email: z
    .string({
      required_error: 'Adres e-mail jest wymagany',
    })
    .email('Nieprawidłowy adres e-mail'),
  phoneNumber: z.string().optional(),
  message: z
    .string({ required_error: 'Treść wiadomości jest wymagana' })
    .min(15, 'Co najmniej 15 znaków')
    .max(100, 'Maksymalnie 1000 znaków'),
});
