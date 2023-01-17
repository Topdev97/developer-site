import mongoose from 'mongoose'
import {config} from '../../config.js'
// mongoose.Promise = global.Promise
async function dbConnect() {
    try {
        await mongoose.connect(`${config.MONGO_URI}`,{autoIndex:false})
        console.log(`[db-connection]:Connection successfull`);
        
    } catch (error) {
        throw new Error(`[db-connection]: Problems in connection ${error}`)
    }

}

dbConnect()
export {
    dbConnect
}