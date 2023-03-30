
const { AuthService } = require('../services/auth.service.js') 

const service = new AuthService()
async function checkAuth(req,res,next) {
    const token = req.headers.authorization 
    try {
        const user = await service.verifyToken(token)
        
        req.user = user
        next()        
    } catch (error) {
        next(new Error('invalid token'))
    }
}


module.exports = {
    checkAuth
}
