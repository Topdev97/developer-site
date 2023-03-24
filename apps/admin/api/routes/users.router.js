import express from 'express';
import { UserService } from '../services/user.service.js';
import { checkAuth } from '../middlewares/auth.handler.js';

const router = express.Router();
const service = new UserService()

router.get('/', checkAuth,async (req, res) => {
  
  const users = await service.find();
  res.json(users);
});
router.get('/:id',
  
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne(parseInt(id) );
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  
  async (req, res) => {
    const body = req.body;
    const newUser = await service.create(body);
    res.status(201).json(newUser);
  }
);

router.patch('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});


export default router