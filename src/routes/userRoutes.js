const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/userControllers');

router.get('/', usuariosController.register);


module.exports = router;