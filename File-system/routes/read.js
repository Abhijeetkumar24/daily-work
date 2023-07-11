const express = require('express');
const router = express.Router();
const readController = require('../controllers/readController');

/**
* @swagger
* /read:
* get:
* summary: Read the latest merged file
* responses:
* 200:
* description: Merged file content
* 404:
* description: No merged files found
* 500:
* description: Error reading merged file
*/

router.get('/', readController.read);

module.exports = router;
