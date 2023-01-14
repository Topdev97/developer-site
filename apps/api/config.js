import 'dotenv/config'

export const config = {
    MONGO_URL:process.env.MONGO_URL ?? "mongodb://root:example@localhost:27017",
    PORT: process.env.PORT ?? 3000,
    HOST: process.env.HOST ?? "http://localhost"
    
}
