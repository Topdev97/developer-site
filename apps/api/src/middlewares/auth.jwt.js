
const { AuthService } = require('../services/auth.service.js') 

const authService = new AuthService()
async function checkAuth(req,res,next) {
    
    
    try {
        const result = await authService.verifyToken(req.headers.authorization.replace('Bearer ',''))
        req.payload = result.payload
        next()        
    } catch (error) {
        next(new Error('invalid token'))
    }
}


module.exports = {
    checkAuth
}
