import 'dotenv/config'

export const config = {
    MONGODB_URI:process.env.MONGODB_URI ?? "mongodb://root:example@localhost:27017",
    PORT: process.env.PORT ?? 3000,
    HOST: process.env.HOST ?? "http://localhost",
    JWT_SECRET:process.env.JWT_SECRET
    
}
