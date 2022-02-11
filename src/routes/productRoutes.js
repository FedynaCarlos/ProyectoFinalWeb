const express = require('express');
const router = express.Router();
const pController = require('../controllers/productControllers');


router.get('/',pController.productos);
router.get('/createProduct',pController.crear);

router.get('/productCart',pController.productCart);



module.exports = router;

