import express,{ Router,request,response } from "express";
import { UserService } from "../services/user.service.js";
import { checkAuth } from "../middlewares/auth.jwt.js";


const router = Router()
const service = new UserService()
router.get('/', async (req, res, next) => {
  const {payload:{id}} = req.user
  console.log(id)
  try {
    const users = await service.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const {payload:{id}} = req.user
      const user = await service.findOne(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

export default router