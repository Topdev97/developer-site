import mongoose from "mongoose";
const { Schema } = mongoose;

const mySchema = new Schema({
  
  preference: {
    items: [{
      id: String,
      title: String,
      currency_id: String,
      description: String,
      quantity: Number,
      unit_price: Number,
    }],
    payer: {
      name: String,
      surname: String,
      email: String,
      phone: {
        area_code: String,
        number: Number,
      },
      identification: {
        type: {type:String},
        number: String,
      },
      address: {
        street_name: String,
        street_number: Number,
        zip_code: String,
      },
    },
    shipments: {
      cost: Number,
    },
  },
  shipment :{
    
  }
});

const model = mongoose.model("Orders", mySchema);

export default model;
