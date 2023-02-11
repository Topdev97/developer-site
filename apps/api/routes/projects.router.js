import express,{ Router,request,response } from "express";
import {ProjectService} from '../services/project.service.js'
import { checkAuth } from "../middlewares/auth.jwt.js";


const router = Router()
const service = new ProjectService()
router.get('/', async (req, res, next) => {
  try {
    const projects = await service.findAll();
    res.json(projects);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const project = await service.findOne(id);
      res.json(project);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',checkAuth,
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProject = await service.create(body);
      res.status(201).json(newProject);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',checkAuth,
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

router.delete('/:id',checkAuth,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

export default router