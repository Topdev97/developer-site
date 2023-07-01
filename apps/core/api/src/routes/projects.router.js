const express = require("express");
const { ProjectService } = require("../services/project.service.js");
const { checkAuth } = require("../middlewares/auth.jwt.js");
const { LabelService } = require("../services/label.service.js");
const { ImageService } = require("../services/image.service.js");
const { validatorHandler } = require("../middlewares/validator.handler.js");
const { createProjectDto, updateProjectDto } = require("../dtos/project.dto.js");



const router = express.Router()
const projectService = new ProjectService()
const labelService = new LabelService()
const imageService = new ImageService()
router.get('/', async (req, res, next) => {
  try {
    const {limit,offset,slug,label} = req.query
    const projects = await projectService.findAll(limit,offset,slug,label);
    res.json(projects);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const project = await projectService.findOne(id);
      res.json(project);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',checkAuth,
  validatorHandler(createProjectDto,'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProject = await projectService.create(body);
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
      
      const newLabel = await projectService.addLabel(body);
      res.status(201).json(newLabel);
    } catch (error) {
      next(error);
    }
  }
);



router.patch('/:id',checkAuth,
  validatorHandler(updateProjectDto,'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const project = await projectService.update(id, body);
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
      await projectService.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);


router.delete('/:id/delete-images',checkAuth,
  async (req, res, next) => {
    try {
      const {id} = req.params
      await imageService.deleteByProject(parseInt(id))
      res.status(201).json({ projectId:id});
    } catch (error) {
      next(error);
    }
  }
);


router.delete('/:id/delete-labels',checkAuth,
  async (req, res, next) => {
    try {
      const {id} = req.params
      await labelService.deleteByProject(parseInt(id))
      res.status(201).json({projectId:id});
    } catch (error) {
      next(error);
    }
  }
);


module.exports =  router