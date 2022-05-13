const express = require('express');
const router = express.Router();
const pController = require('../controllers/productControllers');
const validationCreate = require('../middlewares/validation');
const multer = require('multer');
const path = require('path');

//const controllerAdminSeqPrueba = require('../controllers/productControllers');

//multer para imagenes

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images/')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})


router.get('/',pController.productos);
router.get('/productCart',pController.productCart)


module.exports = router;


