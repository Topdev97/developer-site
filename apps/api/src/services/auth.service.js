const bcrypt = require("bcrypt");
const jose = require("jose");
const nodemailer = require('nodemailer');


const { models } = require("../db/sequelize");
const { UserService } = require("./user.service.js");
const { config } = require("../config");
const secret = new TextEncoder().encode(config.jwtSecret);

const userService = new UserService();

class AuthService {
  async getUser(email, password) {
    const user = await userService.findByEmail(email);
    if (!user) {
      throw new Error("unauthorized");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("unauthorized");
    }
    delete user.dataValues.password;
    return user;
  }
  async signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = await new jose.SignJWT(payload).setProtectedHeader({alg:"HS256"}).sign(secret);

    return {
      user,
      token,
    };
  }
  async verifyToken(token) {
    const result = await jose.jwtVerify(token,secret)
    return result;
  }
  async sendRecovery(email) {
    const user = await userService.findByEmail(email);
    if (!user) {
      throw new Error("unauthorized");
    }
    const payload = { sub: user.id };
    const token = await new jose.SignJWT(payload).setExpirationTime("15min").sign(config.refreshSecret);
    const link = `http://console.davc93.dev/recovery?token=${token}`;
    await userService.update(user.id,{recoveryToken: token}) 
    const mail = {
      from: config.smtpEmail,
      to: `${user.email}`,
      subject: "Email para recuperar contraseña",
      html: `<b>Ingresa a este link => ${link}</b>`,
    }
    const rta = await this.sendMail(mail);
    return rta;
  }
  async sendMail(infoMail) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      port: 465,
      auth: {
        user: config.smtpEmail,
        pass: config.smtpPassword
      }
    });
    await transporter.sendMail(infoMail);
    return { message: 'mail sent' };
  }
}

module.exports = { AuthService };
