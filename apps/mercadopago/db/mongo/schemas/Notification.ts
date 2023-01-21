import mongoose from "mongoose";
const { Schema } = mongoose;

const mySchema = new Schema({},{strict:false})

const model = mongoose.model("Notification", mySchema);

export default model;
