import nodemailer from 'nodemailer';

export async function getMailClient() {
  const account = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'sntp.ethereal.meail',
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass,
    }
  });

  return transporter;
}