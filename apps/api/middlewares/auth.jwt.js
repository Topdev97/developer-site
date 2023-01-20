import {Request,Response} from 'express'
async function checkAuth(req,res,next) {
    if (req.authorization) {
        const user = verifyToken(req.authorization)
        next(user)
    } else {
        throw new Error('invalid token')
    }
}


export {
    checkAuth
}
