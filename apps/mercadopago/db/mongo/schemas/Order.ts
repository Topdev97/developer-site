import mongoose from "mongoose";
const { Schema } = mongoose;

const mySchema = new Schema({
  shipment: {},
  preference: {
    items: {
      id: "item-ID-1234",
      title: "Mi producto",
      currency_id: "CLP",
      description: "Descripción del Item",
      quantity: 2,
      unit_price: 2500,
    },
    payer: {
      name: "Juan",
      surname: "Lopez",
      email: "user@email.com",
      phone: {
        area_code: "11",
        number: 44444444,
      },
      identification: {
        type: "DNI",
        number: "12345678",
      },
      address: {
        street_name: "Street",
        street_number: 123,
        zip_code: "5700",
      },
    },
    shipments: {
      cost: 5000,
    },
  },
});

const model = mongoose.model("Orders", mySchema);

export default model;
