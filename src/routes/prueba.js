const express = require('express');
const router = express.Router();
const pruebaProductDetail = require('../controllers/pruebaControllers');



router.get('/',pruebaProductDetail.productoDetail);


module.exports = router;