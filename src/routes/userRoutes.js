const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/userControllers');

router.get('/register', usuariosController.register);
router.get('/login',usuariosController.login);


module.exports = router;