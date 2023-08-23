import { config } from "../config";
import { Token } from "../models/auth.model";
import { User } from "../models/user.model";
class AuthService {
  async login(email: string, password: string): Promise<Token> {
    const response = await fetch(`${config.apiUri}/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.message);
    }
    return data;
  }
  async getProfile(token: string): Promise<User> {
    const response = await fetch(`${config.apiUri}/auth/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });

    const data = await response.json();
    if (data.error) {
      throw new Error(data.message);
    }
    return data;
  }
}

const authService = new AuthService();
export { authService };
