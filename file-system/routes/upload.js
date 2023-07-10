const express = require('express');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

router.post('/', upload.any(), (req, res) => {
  if (!req.files) {
    return res.status(400).send('No file uploaded.');
  }

  res.send('File uploaded!');
});

module.exports = router;
