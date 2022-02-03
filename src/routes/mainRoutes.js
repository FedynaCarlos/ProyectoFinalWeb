const express = require('express');
const router = express.Router();
const principalController = require('../controllers/mainControllers');

router.get('/', principalController.index);

module.exports = router;
