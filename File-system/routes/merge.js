const express = require('express');
const router = express.Router();
const mergeController = require('../controllers/mergeController');

/**
* @swagger
* /merge:
* get:
* summary: Merge files
* responses:
* 200:
* description: Files merged successfully
* 500:
* description: Error merging files
*/


router.get('/', mergeController.merge);

module.exports = router;
