import { connectToDatabase, Message } from "./lib/mongodb.js";
import { sendMail } from "./lib/nodemailer.js";
import { config } from "../server-config.js";
import { messageSchema } from "./dto.js";

export default async function handler(request, response) {
  try {
    const body = JSON.parse(request.body);
    await messageSchema.validateAsync(body)
    await connectToDatabase();
    const message = new Message(body);
    await message.save();
    console.log(config);
    const userMail = {
      from: config.smtpEmail,
      to: `${body.email}`,
      subject: "Developer Contact Diego Vergara",
      html: `<h2>Thanks for your message, i will speak you as seem as possible</h2>`,
    };
    const myMail = {
      from: config.smtpEmail,
      to: config.smtpEmail,
      subject: "Mensaje de sitio web",
      html: `<h2>${body.email}</h2><h2>${body.organization}</h2><p>${body.message}</p>`,
    };

    await Promise.all([sendMail(userMail), sendMail(myMail)]);

    return response.status(200).json(body);
  } catch (error) {
    console.error(error)
    response.status(400).json({
      message: error.message,
    });
  }
}
