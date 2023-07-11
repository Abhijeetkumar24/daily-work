const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');

/**
* @swagger
* /upload:
* post:
* summary: Upload a file
* consumes:
* - multipart/form-data
* parameters:
* - in: formData
* name: file
* type: file
* description: The file to upload
* responses:
* 200:
* description: File uploaded successfully
*/

router.post('/', uploadController.upload, (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send('No file uploaded.');
  }

  res.send('File uploaded!');
});

module.exports = router;
