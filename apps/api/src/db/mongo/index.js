import mongoose from 'mongoose'
import {config} from '../../config.js'
// mongoose.Promise = global.Promise
async function dbConnect() {
    try {
        const connection = await mongoose.connect(`${config.MONGODB_URI}`,{autoIndex:false})
        console.log(`[db-connection]:Connection successfull`);
        return connection
        
    } catch (error) {
        throw new Error(`[db-connection]: Problems in connection ${error}`)
    }

}

export {
    dbConnect
}