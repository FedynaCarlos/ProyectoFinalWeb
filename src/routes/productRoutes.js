const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productControllers');

router.get('/', productoController.productCart);

module.exports = router;