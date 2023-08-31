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
      throw new Error(data.message);
    }
    return data
  }
}

export const messageService = new MessageService();
