import { Shipment } from "./shipment.model"
import { Preference } from "./preference.model"
export interface Order{
    preference:Preference,
    shipment:Shipment
}
