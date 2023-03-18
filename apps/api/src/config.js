require('dotenv/config')


 const config = {
    dbUrl:process.env.DATABASE_URL,
    port: process.env.PORT ?? 3000,
    host: process.env.HOST ?? "http://localhost",
    jwtSecret:process.env.JWT_SECRET,
    cloudinaryUrl:process.env.CLOUDINARY_URL
    
}
module.exports = {
    config
}