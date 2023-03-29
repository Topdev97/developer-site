import express from 'express';

const router = express.Router();


router.post('/',
  
  async (req, res) => {
    const body = req.body;
    console.log("haciendo peticiones al backend",body);
    res.status(201).json({url:'https://www.google.com/'});
  }
);

export default router