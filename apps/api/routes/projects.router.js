import express,{ Router,request,response } from "express";
import service from '../services/project.service.js'
const router = Router()

router.get('/', async (req, res, next) => {
  try {
    const projects = await service.find();
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

router.post('/',
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

router.delete('/:id',
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