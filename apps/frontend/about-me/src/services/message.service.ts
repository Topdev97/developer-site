import { config } from "../config";
import { Message } from "../models/message.model";

class MessageService {
  async sendMessage(message: Message) {
    const response = await fetch(`${config.serverLessUrl}/message`, {
      method: "POST",
      body: JSON.stringify(message),
    });
    const data = await response.json();
    if (!response.ok) {
      const message = data.message ? data.message : "Something went wrong"
      throw new Error(message);
    }
    return data
  }
}

export const messageService = new MessageService();
