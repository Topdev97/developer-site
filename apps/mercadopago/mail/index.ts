import nodemailer from 'nodemailer'
import { config } from '../config';

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail(data:unknown,subject:string) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: config.GMAIL.EMAIL, // generated ethereal user
      pass: config.GMAIL.APIKEY, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"web site 👻" <${config.GMAIL.EMAIL}>`, // sender address
    to: `${config.GMAIL.EMAIL}`, // list of receivers
    subject: subject, // Subject line
    text: `${JSON.stringify(data)}`, // plain text body
    html: `
    <h3>Notificacion desde tu servidor de pagos de mercadopago</h3>
    <span>${JSON.stringify(data)}</span>
    
    `, // html body
  });
  return info
}
