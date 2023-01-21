import NotificationModel from "../db/mongo/schemas/Notification";

class NotificationsService {
  async create(notification: unknown) {
    const Model = new NotificationModel(notification);
    Model.save();

    return { message: "Notification received" };
  }
}

export { NotificationsService };
