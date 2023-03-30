const express = require("express");
const multer = require("multer");

const { FileService } = require("../services/file.service.js");
const { bufferToStream } = require("../utils/index.js");

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();
const service = new FileService();

router.post("/", upload.single("image"), async (req, res, next) => {
  try {
    const buffer = req.file.buffer;
    const fileName = req.file.originalname
    const cloudinaryStream = service.create(fileName,(err, result) => {
      if (err) {
        next(err);
      } else {
        res.status(201).json({
          url: result.secure_url,
          public_id: result.public_id,
        });
      }
    });
    
    bufferToStream(buffer).pipe(cloudinaryStream);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
