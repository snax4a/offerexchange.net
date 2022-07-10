import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export class MailService {
  private transporter;

  constructor() {
    if (!process.env.SMTP_HOST) throw new Error('SMTP_HOST is required');
    if (!process.env.SMTP_PORT) throw new Error('SMTP_PORT is required');
    if (!process.env.SMTP_USER) throw new Error('SMTP_USER is required');
    if (!process.env.SMTP_PASSWORD) throw new Error('SMTP_PASSWORD is required');

    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: process.env.NODE_ENV === 'production',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  public async sendMail(
    mailOptions: Mail.Options
  ): Promise<SMTPTransport.SentMessageInfo> {
    return await this.transporter.sendMail(mailOptions);
  }
}
