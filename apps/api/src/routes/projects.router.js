const express = require("express");
const { ProjectService } = require("../services/project.service.js");
const { checkAuth } = require("../middlewares/auth.jwt.js");



const router = express.Router()
const service = new ProjectService()
router.get('/', async (req, res, next) => {
  try {
    const {limit,offset,slug} = req.query
    const projects = await service.findAll(limit,offset,slug);
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

router.post('/add-label',checkAuth,
  async (req, res, next) => {
    try {
      const body = req.body;
      
      const newLabel = await service.addLabel(body);
      res.status(201).json(newLabel);
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
      const project = await service.update(id, body);
      res.json(project);
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

module.exports =  router