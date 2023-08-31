import mongoose, { mongo } from "mongoose"
import { config } from "../../server-config.js";

if (!config.mongoDB) {
    throw new Error("Please add your Mongo URI to .env")
}
let isConnected = false

async function connectToDatabase() {
    if(!isConnected){

    try {
        await mongoose.connect(config.mongoDB)
        isConnected = true
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error("Error connecting to MongoDB: ",error);
    }
    } else {
        console.log("Still connected");
        return
    }
}

const messageSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,

    },
    organization:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:false
    }
})
const Message = mongoose.model("Message",messageSchema)
export {
    connectToDatabase,
    Message
}
