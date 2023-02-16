import { matchPassword } from "../bcrypt.js";
import Model from "../db/mongo/models/user.model.js";
import { signJWT,decodeToken } from "../jwt.js";

class AuthService {
  async sendToken(data) {
    const { email, password } = data;
    const user = await Model.findOne({ email });
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

export { AuthService };
