import { Order } from "../models/order.model";
import { createPreference } from "../payments";
import OrderModel from "../db/mongo/schemas/Order";


class PreferenceService {
  
  async createPreference(order:Order) {
    const {shipment,preference} = order
    const Model = new OrderModel(order)
    Model.save()
    const preferenceId = await createPreference(preference);
    
    return preferenceId
  }
}

export { PreferenceService };
