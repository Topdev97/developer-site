const express  = require('express')
const multer = require('multer');

const { FileService } = require('../services/file.service.js') 
const upload = multer();


const router = express.Router()
const service = new FileService()
router.post('/',upload.single('file'),async (req,res,next)=>{
    try {
        const {secure_url,public_id} = await service.create(req.file.buffer)
        res.status(201).json({
            url:secure_url,
            public_id

        })
      } catch (err) {
        next(err);
      }

})


module.exports = router