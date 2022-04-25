const express = require('express');
const router = express.Router();
const principalController = require('../controllers/mainControllers');

router.get('/', principalController.index);
router.get('/about',principalController.about);
//agregado por paco para probar
router.get('/contacto',principalController.contact);

module.exports = router;
