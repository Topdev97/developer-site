import dotenv from 'dotenv'
dotenv.config()
export const config = {
    ACCESS_TOKEN:process.env.ACCESS_TOKEN ?? '',
    PORT:process.env.PORT ?? 3000,
    SERVER_DOMAIN: process.env.SERVER_DOMAIN ?? 'localhost',
    INTEGRATOR_ID: process.env.INTEGRATOR_ID,
    SITE_DOMAIN: process.env.SITE_DOMAIN ?? "localhost" ,
    GMAIL:{
        EMAIL: process.env.EMAIL,
        APIKEY:process.env.APIKEY
    },
    MONGODB_URI:process.env.MONGODB_URI ?? ""

}
