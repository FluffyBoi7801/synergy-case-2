import { createTransport } from "nodemailer";
import { env } from "./envConfig";

type SendActivationParams = {
  to: string;
  activationLink: string;
  name: string;
};

export const sendActivation = async ({
  to,
  activationLink,
  name,
}: SendActivationParams) => {
  const transporter = createTransport({
    host: env.SMTP_HOST,
    port: Number(env.SMTP_PORT),
    secure: true,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
  });

  await transporter.sendMail({
    from: env.SMTP_USER,
    to,
    subject: 'Активация аккаунта в экосистеме "Я - блогер"',
    html: `<h1>Уважаемый ${name}, Ваша ссылка на активацию аккаунта: ${activationLink}</h1>`,
  });
};
