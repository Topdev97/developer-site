const express = require("express");
const {LabelService} = require('../services/label.service')


const router = express.Router()
const service = new LabelService()
router.get('/', async (req, res, next) => {
  try {
    console.log('hello');

    const labels = await service.findAll();
    res.json(labels);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const label = await service.findOne(id);
      res.json(label);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newLabel = await service.create(body);
      res.status(201).json(newLabel);
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
      const label = await service.update(id, body);
      res.json(label);
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