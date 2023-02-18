import nodemailer from "nodemailer";
import { config } from "./config";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true,
  port: 465,
  auth: {
    user: config.gmailEmail,
    pass: config.gmailApiKey,
  },
});
