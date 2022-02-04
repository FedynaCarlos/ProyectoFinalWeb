const express = require('express');
const { productDetail } = require('../controllers/productControllers');
const router = express.Router();
const productoController = require('../controllers/productControllers');

router.get('/', productoController.productCart);
router.get('/',productoController.productoDetail);


module.exports = router;

