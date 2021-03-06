const express = require('express');
const router = express.Router();
const principalController = require('../controllers/mainControllers');

router.get('/', principalController.index);
router.get('/about',principalController.about);
router.get('/contacto',principalController.contact);

module.exports = router;
