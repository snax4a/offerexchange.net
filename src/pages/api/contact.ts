import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

import { escapeHtml } from '@/lib/helper';

import { contactFormSchema } from '@/components/ContactForm/validation-schema';

import { MailService } from '@/server/services/MailService';

export default async function contact(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!process.env.CONTACT_MAIL_FROM) throw new Error('CONTACT_MAIL_FROM is required');
    if (!process.env.CONTACT_MAIL_TO) throw new Error('CONTACT_MAIL_TO is required');

    const data = contactFormSchema.parse(req.body);

    const fullName = escapeHtml(data.fullName);
    const email = escapeHtml(data.email);
    const phoneNumber = data.phoneNumber ? escapeHtml(data.phoneNumber) : '--';
    const message = escapeHtml(data.message);

    const mailService = new MailService();
    await mailService.sendMail({
      from: process.env.CONTACT_MAIL_FROM,
      to: process.env.CONTACT_MAIL_TO,
      replyTo: data.email,
      subject: 'Wiadomość z formularza kontaktowego Offer Exchange',
      html: `
        <p><strong>Imię i nazwisko: </strong> ${fullName}</p>
        <p><strong>Adres e-mail: </strong> ${email}</p>
        <p><strong>Numer telefonu: </strong> ${phoneNumber}</p>
        <p><strong>Treść wiadomości:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Messege sent successfully.',
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).send({
        success: false,
        message: `Bad payload.`,
        errors: err.errors,
      });
    } else {
      console.error('/api/contact unexpected error', err);
      return res.status(500).send({
        success: false,
        message: `Internal server error.`,
      });
    }
  }
}
