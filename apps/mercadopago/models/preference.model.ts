import { PreferenceShipment } from "mercadopago/models/preferences/create-payload.model";
import { Currency } from "mercadopago/shared/currency";

export interface Preference {
  items: Item[];
  payer?: Payer;
  back_urls?: BackUrls;
  auto_return?: "approved" | "all" | undefined;
  payment_methods?: PaymentMethods;
  notification_url?: string;
  statement_descriptor?: string;
  external_reference?: string;
  expires?: boolean;
  expiration_date_from?: string | undefined ;
  expiration_date_to?: string | undefined ;
  shipments?: PreferenceShipment
}

export interface BackUrls {
  success: string;
  failure: string;
  pending: string;
}

export interface Item {
  id: string;
  title: string;
  currency_id: Currency;
  picture_url: string;
  description: string;
  category_id: string;
  quantity: number;
  unit_price: number;
}

export interface Payer {
  name?: string;
  surname?: string;
  email: string;
  phone?: Phone;
  identification?: Identification;
  address?: Address;
}

export interface Address {
  street_name: string;
  street_number: number;
  zip_code: string;
}

export interface Identification {
  type: string;
  number: string;
}

export interface Phone {
  area_code: string;
  number: string;
}

export interface PaymentMethods {
  excluded_payment_methods: ExcludedPayment[];
  excluded_payment_types: ExcludedPayment[];
  installments: number;
}

export interface ExcludedPayment {
  id: string;
}
