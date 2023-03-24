import express from 'express';

import { UserService } from '../services/user.service.js'
import {checkAuth} from '../middlewares/auth.handler.js'
import { signJWT } from '../jwt.js';
const router = express.Router();
const service = new UserService()
router.post('/login', async (req, res, next) => {
  try {

    const { email, password } = req.body;
    const users = await service.find()
    const user = users.find((user) => user.email == email)
    if (!user) {
      throw new Error('User Not found')
    }
    if (user.password == password) {
      const token = await signJWT(user.id)
      res.status(200).json({
        token
      })
    } else {
      throw new Error('your password is wrong')
    }
  } catch (error) {
    next(error)
  }

});

router.get('/profile',checkAuth, async (req, res, next) => {
  try {
    const {id} = req.user
    const user= await service.findOne(id)
  
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }

});


export default router