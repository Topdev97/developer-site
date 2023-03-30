const express  = require('express')
const { AuthService } = require('../services/auth.service.js') 
const { checkAuth } = require('../middlewares/auth.jwt.js')
const { UserService } = require('../services/user.service.js')


const router = express.Router()
const service = new AuthService()
const userService = new UserService()
router.post('/login',async (req,res,next)=>{
    try {
        const data = req.body
        
        const token = await service.sendToken(data)
        res.json({token})        
    } catch (error) {
        next(error)
    }

})

router.get('/profile',checkAuth, async (req, res, next) => {
    try {
      const {id} = req.user
      const user= await userService.findOne(id)
    
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  
  });


module.exports = router