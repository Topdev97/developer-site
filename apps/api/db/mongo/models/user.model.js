import mongoose from "mongoose";
const {Schema} = mongoose


const mySchema = new Schema({
    email:String,
    password:String
})

const model = mongoose.model('User',mySchema)

export default model