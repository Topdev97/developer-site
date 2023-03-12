const express = require("express");
const { ImageService } = require("../services/image.service.js");
const { checkAuth } = require("../middlewares/auth.jwt.js");



const router = express.Router()
const service = new ImageService()
router.get('/', async (req, res, next) => {
  try {
    const images = await service.findAll();
    res.json(images);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const image = await service.findOne(id);
      res.json(image);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newImage = await service.create(body);
      res.status(201).json(newImage);
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
      const image = await service.update(id, body);
      res.json(image);
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

module.exports =  router