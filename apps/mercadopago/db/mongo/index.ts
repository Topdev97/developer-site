import mongoose from "mongoose";
import { config } from "../../config";

async function dbConnection() {
    try {
        await mongoose.connect(config.MONGODB_URI)
        console.log(`[db-connection]: connection succesfull`);
    } catch (error) {
        console.log(`[db-connection]: connection problems ${error}`);
    }
}


export {
    dbConnection
}