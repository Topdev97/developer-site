import type { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "../../lib/nodemailer";
import { config } from "../../lib/config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data =  JSON.parse(req.body) ;
    
  
    const selfEmail = {
      from: config.gmailEmail,
      to: `${config.gmailEmail}`,
      subject: `Contacto de ${data.name}`,
      html: `<p>${JSON.stringify(data)}</p>`,
    };
    const userEmail = {
      from: config.gmailEmail,
      to: `${data.email}`,
      subject: "Contacto a Diego Vergara",
      html: `<p>Gracias por contactarme, pronto me estaré comunicando contigo, saludos!</p>`,
    };
    console.log(userEmail)
    console.log(selfEmail)
    await transporter.sendMail(selfEmail);
    await transporter.sendMail(userEmail);
    res.status(200).json({
      message: "Enviado con exito",
    });
  } catch (error) {
    res.status(500).json({
      error: "Hubo un error",
      message: "Hubo un error",
    });
    console.log(error);
  }
}
