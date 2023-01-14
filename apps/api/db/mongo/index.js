import mongoose from 'mongoose'
import {config} from '../config.js'
// mongoose.Promise = global.Promise
async function dbConnect() {
    try {
        mongoose.set('strictQuery',true)
        await mongoose.connect(`${config.MONGO_URL}`)
        console.log(`[db-connection]:connection successfull`);
        
    } catch (error) {
        throw new Error(`[db-connection]: Problems in connection ${error}`)
    }

}

dbConnect()
export {
    dbConnect
}