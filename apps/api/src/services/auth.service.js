const { matchPassword } = require("../bcrypt.js");
const { signJWT, decodeToken } = require("../jwt.js");
const { models } = require('../db/sequelize');
class AuthService {
  async sendToken(data) {
    const { email, password } = data;
    const user = await models.findOne({ email });
    if (user) {
      const isAuth = matchPassword(password, user.password);
      if (isAuth) {
        const token = await signJWT(user.id);
        return token;
      } else {
        throw new Error("email or password invalid");
      }
    } else {
      throw new Error("email or password invalid");
    }
  }
  async verifyToken(token) {
    const user = await decodeToken(token)
    return user;
  }
}

module.exports =  { AuthService };
