import express  from 'express'
import { AuthService } from '../services/auth.service.js'



const router = express.Router()
const service = new AuthService()
router.post('/',async (req,res,next)=>{
    try {
        const data = req.body
        const token = await service.sendToken(data)
        res.json({token})        
    } catch (error) {
        next(error)
    }

})


export default router